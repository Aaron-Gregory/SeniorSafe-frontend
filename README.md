# SeniorSafe website

Static marketing site for **seniorsafeusa.org**. The page is plain HTML + CSS with
React components loaded in the browser via Babel standalone (no build step).

## Layout

| Path | Purpose |
|------|---------|
| `SeniorSafe.html` | Source of truth for the page markup |
| `app.jsx`, `sections.jsx`, `icons.jsx`, `tweaks-panel.jsx` | React components |
| `uploads/` | Image assets |
| `public/` | Deploy artifact (what actually ships) |
| `Dockerfile`, `nginx.conf` | Container that serves `public/` on port 8080 |

## Hosting

The site runs on **Google Cloud Run** (project `project-ce933f5d-5c35-461b-ba2`,
region `us-central1`, service `seniorsafe-website`), fronted by a **Global External
HTTPS Load Balancer** with a Google-managed SSL certificate for `seniorsafeusa.org`
and `www.seniorsafeusa.org`.

- Direct Cloud Run URL: https://seniorsafe-website-249888765908.us-central1.run.app
- Load balancer static IP: **136.68.146.103**
- `www` redirects to the apex domain (handled in `nginx.conf`).

> gcloud on this machine needs Python 3.10+. If you hit a
> `gcloud crashed (CommandLoadFailure)` error, run commands with
> `export CLOUDSDK_PYTHON=/opt/homebrew/bin/python3.12` first.

## Deploy an update

After editing the source files at the repo root:

```bash
# 1. Sync sources into the deploy directory
cp SeniorSafe.html public/index.html
cp *.jsx public/
rsync -a uploads/ public/uploads/

# 2. Redeploy the container
export CLOUDSDK_PYTHON=/opt/homebrew/bin/python3.12
gcloud run deploy seniorsafe-website \
  --source . \
  --region us-central1 \
  --allow-unauthenticated \
  --port 8080 \
  --project project-ce933f5d-5c35-461b-ba2
```

The load balancer keeps pointing at the service, so no DNS or cert changes are
needed for content updates.

## DNS (Namecheap)

Point the domain at the load balancer IP under
**Domain List -> seniorsafeusa.org -> Advanced DNS**:

| Host | Type | Value | TTL |
|------|------|-------|-----|
| `@`   | A | `136.68.146.103` | Automatic |
| `www` | A | `136.68.146.103` | Automatic |

Remove any existing parking-page A records or URL-redirect rules for `@`/`www`
first. The Google-managed certificate finishes provisioning automatically within
~15-60 minutes after DNS resolves to the IP.

## Local preview

```bash
cd public && python3 -m http.server 8080
# open http://localhost:8080/index.html
```
