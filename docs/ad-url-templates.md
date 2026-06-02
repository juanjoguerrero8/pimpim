# Paid Traffic URL Templates

Use these templates when creating ads. The site captures these parameters in the budget form and, when present, adds a short origin line to WhatsApp messages.

## Google Ads

```text
https://www.pimpimfotomatones.com/?utm_source=google&utm_medium=cpc&utm_campaign={campaignid}&utm_content={creative}&utm_term={keyword}
```

Google can also append `gclid`, `gbraid`, or `wbraid` automatically. Keep auto-tagging enabled.

## Meta Ads

```text
https://www.pimpimfotomatones.com/?utm_source=meta&utm_medium=paid_social&utm_campaign={{campaign.name}}&utm_content={{ad.name}}&utm_term={{adset.name}}
```

Meta may append `fbclid`.

## LinkedIn Ads

```text
https://www.pimpimfotomatones.com/?utm_source=linkedin&utm_medium=paid_social&utm_campaign={{CAMPAIGN_NAME}}&utm_content={{CREATIVE_NAME}}
```

LinkedIn may use `li_fat_id` for stronger matching when the Insight Tag or CAPI is added later.

## X Ads

```text
https://www.pimpimfotomatones.com/?utm_source=x&utm_medium=paid&utm_campaign=[campaign]&utm_content=[adgroup]&utm_term=[keyword]
```

X may append `twclid`.

## Reddit Ads

```text
https://www.pimpimfotomatones.com/?utm_source=reddit&utm_medium=paid_social&utm_campaign={{campaign_name}}&utm_content={{ad_name}}&utm_term={{adgroup_name}}
```

Reddit may append `rdt_cid`. Avoid redirects or URL shorteners that strip query parameters.

## Pre-launch Checks

- Final URL keeps all query parameters after GitHub Pages redirects.
- Form submission email includes `source_summary`, UTMs and click IDs.
- WhatsApp prefilled message includes `Origen web:` when UTMs or click IDs are present.
- No advertising pixels are loaded until privacy policy, cookie policy and consent flow are ready.
