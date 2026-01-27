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
