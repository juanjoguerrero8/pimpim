const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const root = process.cwd();
const reportsDir = path.join(root, "reports");
const outputPath = path.join(reportsDir, "lighthouse-home.json");
const lighthouseCli = path.join(root, "node_modules", "lighthouse", "cli", "index.js");

fs.mkdirSync(reportsDir, { recursive: true });

const result = spawnSync(
  process.execPath,
  [
    lighthouseCli,
    "http://127.0.0.1:4173/index.html",
    "--chrome-flags=--headless=new",
    "--output=json",
    `--output-path=${outputPath}`
  ],
  { cwd: root, encoding: "utf8", stdio: "pipe" }
);

if (result.stdout) {
  process.stdout.write(result.stdout);
}

if (result.stderr) {
  process.stderr.write(result.stderr);
}

if (!fs.existsSync(outputPath)) {
  process.exit(result.status || 1);
}

const report = JSON.parse(fs.readFileSync(outputPath, "utf8"));
const categories = report.categories || {};

const score = (key) => {
  const value = categories[key]?.score;
  return typeof value === "number" ? Math.round(value * 100) : "n/a";
};

console.log("\nLighthouse summary:");
console.log(`Performance: ${score("performance")}`);
console.log(`Accessibility: ${score("accessibility")}`);
console.log(`Best Practices: ${score("best-practices")}`);
console.log(`SEO: ${score("seo")}`);

if (result.status !== 0) {
  console.warn("\nLighthouse exited non-zero after writing the report. Keeping the generated report and treating this run as usable.");
}
