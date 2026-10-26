# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:


```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```


## Hostinger Deployment

Two supported options to auto-deploy this Vite app to Hostinger:

- **Hostinger hPanel (native Git):** connect your GitHub repo in hPanel, select branch, and set a post-deploy command. Example post-deploy command:

```
npm ci --prefer-offline && npm run build && rm -rf public_html/* && mkdir -p public_html && cp -a dist/. public_html/
```

- **GitHub Actions → Hostinger (recommended):** this repo includes `.github/workflows/deploy-to-hostinger.yml` which builds the app and deploys `dist` to `/public_html` via SFTP. Add these GitHub Secrets:
   - `HOSTINGER_HOST`
   - `HOSTINGER_USERNAME`
   - `HOSTINGER_SSH_KEY` (private key)
   - `HOSTINGER_PORT` (optional, default 22)

Local test commands:

```bash
npm ci
npm run build
# serve the built files for a quick check
npx serve dist
```

See `DEPLOY_HOSTINGER.md` for full details and troubleshooting notes.

## Hila support counter

The supporter total appears beside the homepage's "Love for Hila" button, including
for returning visitors who have already dismissed the support modal.
After a successful "I Support Hila" click, a heart flies from the modal button
to the counter as the modal fades out. The modal closes immediately instead
when reduced motion is enabled or the counter is hidden on smaller screens.

The homepage support total is shared by all visitors through a small Google Apps
Script web app. The count is stored in Script Properties, so this project does
not require a database.

1. Open [Google Apps Script](https://script.google.com/) and create a project.
2. Paste the contents of `scripts/hila-support-counter.gs` into `Code.gs`.
3. Select **Deploy > New deployment > Web app**.
4. Execute the app as yourself and allow access to **Anyone**.
5. Copy the `/exec` web app URL into `VITE_HILA_SUPPORT_API_URL` in `.env.local`
   for local builds.
6. Add the same URL as a GitHub Actions repository secret named
   `VITE_HILA_SUPPORT_API_URL` so production builds receive it.
7. Run `npm run build` after setting the variable.

Deploy a new Apps Script version after changing the script. The public endpoint
can only read or increment this one counter; it cannot edit the script or access
your Google account. Because support is anonymous and every press is counted, a
determined user can automate increments. `LockService` prevents legitimate
simultaneous requests from losing increments.
