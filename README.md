# SeniorSafe website

Static marketing site for **seniorsafeusa.org**. The page is plain HTML + CSS with
React components loaded in the browser via Babel standalone (no build step).

## Draft host (always on, free)

While GCP billing is paused, the current draft is served via **GitHub Pages**:

**https://aaron-gregory.github.io/SeniorSafe-frontend/**

Pushing to `main` syncs the root sources into `public/` and redeploys automatically
(see [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml)).
You can also trigger **Actions → Deploy to GitHub Pages → Run workflow**.

## Layout

| Path | Purpose |
|------|---------|
| `SeniorSafe.html` | Source of truth for the page markup |
| `app.jsx`, `sections.jsx`, `icons.jsx`, `tweaks-panel.jsx` | React components |
| `uploads/` | Image assets |
| `public/` | Deploy artifact (what GitHub Pages / Cloud Run serve) |
| `Dockerfile`, `nginx.conf` | Container for Cloud Run (when GCP credits are available) |

## Hosting (GCP — paused)

When Google Cloud billing/credits are available again, the site can also run on
**Cloud Run** (project `project-ce933f5d-5c35-461b-ba2`, region `us-central1`,
service `seniorsafe-website`) behind a Global External HTTPS Load Balancer for
`seniorsafeusa.org` / `www.seniorsafeusa.org`.

- Direct Cloud Run URL: https://seniorsafe-website-249888765908.us-central1.run.app
- Load balancer static IP: **136.68.146.103**

> gcloud on this machine needs Python 3.10+. If you hit a
> `gcloud crashed (CommandLoadFailure)` error, run commands with
> `export CLOUDSDK_PYTHON=/opt/homebrew/bin/python3.12` first.

### Redeploy to Cloud Run

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

### DNS (Namecheap) for seniorsafeusa.org

Point the domain at the load balancer IP under
**Domain List -> seniorsafeusa.org -> Advanced DNS**:

| Host | Type | Value | TTL |
|------|------|-------|-----|
| `@`   | A | `136.68.146.103` | Automatic |
| `www` | A | `136.68.146.103` | Automatic |

## Local preview

```bash
cd public && python3 -m http.server 8080
# open http://localhost:8080/index.html
```
