# Cloudflare Pages Deployment Guide

## Overview
This Next.js portfolio is configured for deployment to Cloudflare Pages. The static export setup allows for fast, reliable hosting on Cloudflare's global network.

## Prerequisites
- Cloudflare account (free tier is supported)
- GitHub repository connected to Cloudflare
- Node.js 18+ installed locally

## Setup Steps

### 1. Get Your Cloudflare Credentials

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Create or select your domain
3. Navigate to **Workers & Pages** → **Pages**
4. Get your Account ID from the URL or settings
5. Create an API token:
   - Go to **My Profile** → **API Tokens**
   - Click "Create Token"
   - Use template "Cloudflare Pages - Deploy"
   - Grant permissions for your domain

### 2. Add GitHub Secrets

In your GitHub repository settings:

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Create two secrets:
   - `CLOUDFLARE_API_TOKEN`: Your Cloudflare API token
   - `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare Account ID

### 3. Deploy via GitHub Actions

**Option A: Automatic Deployment (Recommended)**
- Push to `main` branch
- GitHub Actions workflow automatically builds and deploys

**Option B: Manual Deployment**
```bash
# Install Wrangler CLI
npm install -g wrangler

# Configure with your credentials
wrangler auth

# Deploy
wrangler pages deploy ./out
```

### 4. Connect Custom Domain

1. In Cloudflare Pages project settings
2. Add your custom domain
3. Update DNS records as shown in Cloudflare
4. Enable HTTPS (automatic)

## Environment Variables

If needed, add environment variables in Cloudflare Pages project settings:
- **Settings** → **Environment variables**
- Add secrets that your site might need

## Build Configuration

The site is configured with:
- **Output**: Static export (`export` command in next.config.js)
- **Build command**: `npm run build`
- **Output directory**: `./out`
- **Trailing slashes**: Enabled for better routing

## Troubleshooting

### Build Fails in CI/CD
- Ensure Node.js version 18+ in workflow
- Clear cache: `npm ci` instead of `npm install`
- Check environment variables are set correctly

### 404 Errors After Deployment
- Verify trailing slashes are set to `true` in next.config.js
- Clear Cloudflare cache (Page Rules or cache purge)

### Assets Not Loading
- Ensure images are unoptimized: `unoptimized: true` in next.config.js
- Check that `./out` directory contains all assets

## Local Testing

Test the production build locally:
```bash
npm run build
npx http-server ./out
```

Then visit `http://localhost:8080`

## Performance Optimization

Cloudflare provides:
- ✅ Global CDN distribution
- ✅ Automatic HTTPS/SSL
- ✅ Automatic image optimization (optional)
- ✅ Analytics and performance monitoring
- ✅ Security features (DDoS protection)

## Contact Form Handling

Currently, the contact form logs to console. For production:
- Use Formspree (free tier available)
- Use Netlify Forms alternative
- Set up serverless function on Workers

## Support

For issues:
- Check [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- Review [Next.js Export Docs](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- Check GitHub Actions logs in the repository
