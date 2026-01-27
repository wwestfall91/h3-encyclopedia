Hostinger Deployment Guide
=========================

This file explains two ways to automatically deploy this Vite app to Hostinger: (A) Hostinger hPanel Git integration, and (B) GitHub Actions -> Hostinger via SFTP. Use whichever fits your account and preferences.

1) Hostinger hPanel (native Git) — quick setup
- Open Hostinger hPanel and navigate to your website's Management page → Advanced → Git (or "Git / Auto Deploy").
- Connect your GitHub account or enter the repository URL: https://github.com/<owner>/<repo>.git
- Select the branch you want to auto-deploy (e.g. `main`).
- If Hostinger exposes a "Build command" or "Post-deploy command" field, set the command to:

```
npm ci --prefer-offline && npm run build && rm -rf public_html/* && mkdir -p public_html && cp -a dist/. public_html/
```

- If Hostinger asks for a "Publish folder" or "Publish directory", set it to `dist` (Vite's default output). If that option isn't available, the post-deploy command above copies `dist` into `public_html`.
- If your repository already contains a `public_html` folder and you prefer the build to write directly there, change the build output or copy commands accordingly.

Notes:
- The project's `package.json` already includes a build script: `npm run build` runs `tsc && vite build`.
- `npm ci` will install devDependencies required for the TypeScript compile step; ensure Hostinger's deploy environment allows installing devDependencies (most do for Git-deploy builds).

2) GitHub Actions → Hostinger (recommended for reproducible CI)
- I already added `.github/workflows/deploy-to-hostinger.yml` to this repo. It builds the app with Node, then uses an SSH key to clean and copy `dist` to `/public_html` on the Hostinger server.
- Required GitHub repository Secrets (Repository → Settings → Secrets → Actions):
  - `HOSTINGER_HOST` — Hostinger SFTP/SSH hostname (e.g., `ssh123.hostinger.com` or your domain)
  - `HOSTINGER_USERNAME` — SFTP/SSH username
  - `HOSTINGER_SSH_KEY` — private SSH key (PEM format)
  - `HOSTINGER_PORT` — optional (default `22`)

Generating an SSH key (if needed):

```bash
# on your machine (do NOT add a passphrase unless you plan to store it in Secrets too)
ssh-keygen -t ed25519 -C "github-actions@your-repo" -f hostinger_deploy_key
# then copy the public key (hostinger_deploy_key.pub) into Hostinger's SSH keys or SFTP access panel
# and add the private key (hostinger_deploy_key) into GitHub secret `HOSTINGER_SSH_KEY`
```

3) Verification checklist
- Confirm `build` script exists in `package.json` (this repo uses: `tsc && vite build`).
- Add the GitHub secrets listed above.
- If using Hostinger hPanel native Git, add the repository and set branch and post-deploy command.
- Push a change to the target branch and watch either Hostinger deploy logs (hPanel) or GitHub Actions run.
- Verify the site by visiting your domain and/or listing files under `public_html` via SFTP/SSH.

4) Troubleshooting
- If builds fail on Hostinger: check Node version and ensure devDependencies can be installed. You can pin Node via `engines` in `package.json` or build in CI and use Actions deployment instead.
- If stale assets appear after deploy: ensure the cleanup command (`rm -rf /public_html/*`) ran successfully before copying new files.
- If TypeScript compilation fails due to missing global tools, ensure `typescript` is present in `devDependencies` (it is in this repo).

Local test commands

```bash
npm ci
npm run build
# view the built site locally (optional)
npx serve dist
```

If you'd like, I can paste this into the project README or a docs folder, or further tailor the post-deploy command to match an alternate Hostinger setup (e.g., if the Hostinger deploy environment uses `yarn` or has a different publish directory).
