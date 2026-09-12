---
title: 'Self-host everything'
description: 'The stack behind this site: GitHub Pages for static, Cloudflare Workers for APIs, a VPS fleet for the long-running processes.'
pubDate: 2026-09-11
tags: ['infrastructure', 'self-hosted']
---

Everything I ship runs on hardware or runtimes I control end to end:

## The split

- **GitHub Pages** — static sites and this terminal. Push, Actions bakes, CDN serves.
- **Cloudflare Workers** — dynamic APIs. Hono + D1, no cold starts.
- **VPS fleet** — the long-running gateways and farm bots. systemd, ufw, done.

## The rule

If a service can be a static file, it must be a static file. Deprecate every
door you do not need.
