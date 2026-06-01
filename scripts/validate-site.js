const fs = require("fs");
const path = require("path");
const { XMLParser } = require("fast-xml-parser");

const root = process.cwd();
const htmlFiles = fs.readdirSync(root).filter((file) => file.endsWith(".html"));
const errors = [];
const warnings = [];

const existingFiles = new Set(fs.readdirSync(root));

function read(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function assert(condition, message) {
  if (!condition) {
    errors.push(message);
  }
}

for (const file of htmlFiles) {
  const text = read(file);

  assert(/<html\s+lang="es"/i.test(text), `${file}: missing lang="es"`);
  assert(/<title>[^<]+<\/title>/i.test(text), `${file}: missing title`);
  assert(/<meta\s+name="description"/i.test(text), `${file}: missing meta description`);
  assert(/<link\s+rel="canonical"/i.test(text), `${file}: missing canonical`);
  assert(/<h1\b/i.test(text), `${file}: missing h1`);

  if (/[�]|Ã.|Â.|â€/.test(text)) {
    warnings.push(`${file}: possible mojibake or suspicious replacement characters detected`);
  }

  for (const match of text.matchAll(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/gi)) {
    try {
      JSON.parse(match[1]);
    } catch (error) {
      errors.push(`${file}: invalid JSON-LD: ${error.message}`);
    }
  }

  for (const match of text.matchAll(/(?:href|src)="([^"]+)"/gi)) {
    const target = match[1];

    if (/^(https?:|mailto:|tel:|#)/.test(target)) {
      continue;
    }

    const clean = target.split("#")[0].split("?")[0];

    if (!clean) {
      continue;
    }

    const resolved = path.join(root, clean.replace(/\//g, path.sep));
    assert(fs.existsSync(resolved), `${file}: missing local target ${target}`);
  }
}

assert(fs.existsSync(path.join(root, "robots.txt")), "missing robots.txt");
assert(fs.existsSync(path.join(root, "sitemap.xml")), "missing sitemap.xml");

if (existingFiles.has("sitemap.xml")) {
  const sitemap = read("sitemap.xml");
  const parser = new XMLParser();
  try {
    const parsed = parser.parse(sitemap);
    const urls = parsed.urlset?.url || [];
    const urlList = Array.isArray(urls) ? urls : [urls];
    assert(urlList.length > 0, "sitemap.xml: no urls found");
  } catch (error) {
    errors.push(`sitemap.xml: invalid XML: ${error.message}`);
  }
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

if (warnings.length > 0) {
  console.warn(warnings.join("\n"));
}

console.log(`Validated ${htmlFiles.length} HTML files, local links/assets, JSON-LD, robots and sitemap.`);
