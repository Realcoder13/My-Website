# Cloudflare Pages Deployment Guide (FREE TIER)

## Overview
This Next.js portfolio is configured for static deployment to Cloudflare Pages. The setup uses GitHub Actions with direct Pages deployment to keep costs at $0/month.

**Important**: This guide is for FREE TIER deployment only. No Workers, Durable Objects, or paid add-ons are used.

## Prerequisites
- Cloudflare account (free tier)
- GitHub repository
- Node.js 18+ installed locally

## Setup Steps

### 1. Get Your Cloudflare Credentials

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Create or select your domain
3. Navigate to **Workers & Pages** → **Pages**
4. Click **Create a project** → **Connect to Git**
5. Select your GitHub repository
6. Get your Account ID:
   - Go to **My Profile** → **Account Settings**
   - Copy your Account ID (shown near top)
7. Create an API token:
   - Go to **My Profile** → **API Tokens**
   - Click "Create Token"
   - Use template "Cloudflare Pages - Deploy"
   - Grant permissions for your domain
   - Copy the token

### 2. Add GitHub Secrets

In your GitHub repository:

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Create two secrets:
   - `CLOUDFLARE_API_TOKEN`: Paste your Cloudflare API token
   - `CLOUDFLARE_ACCOUNT_ID`: Paste your Cloudflare Account ID

### 3. Deployment Method (Choose ONE)

**Option A: GitHub Actions Automatic (RECOMMENDED)**
✅ Recommended for free tier
- Push to `main` branch
- GitHub Actions builds and deploys automatically
- Uses `cloudflare/pages-action` (direct Pages deployment)
- No additional setup needed

**Option B: Direct Cloudflare Pages GitHub Integration**
⚠️ May use wrong build settings
- Connect GitHub directly in Cloudflare Pages
- **IMPORTANT**: Do NOT set build command to use wrangler
- Set build output directory to: `./out`
- Build command: `npm run build`

**Option C: Manual Deployment**
⚠️ Manual process each time
```bash
# Install GitHub CLI if needed
brew install gh

# Clone and navigate
cd My-Website

# Build locally
npm run build

# Deploy using GitHub (requires setup)
gh deployment create --environment production --target-url https://your-domain.com
```

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

### Build Fails with "wrangler deploy" Error
**Problem**: Cloudflare Pages is trying to use `wrangler deploy`
**Solution**:
1. Go to Cloudflare Pages project settings
2. Go to **Settings** → **Build, Deployments and Environments**
3. Check **Build settings**:
   - Build command: `npm run build`
   - Build output directory: `out`
   - NO deploy command should be set
4. Save and redeploy

If you see "main property should point to functions/[[path]].ts":
- This means wrangler is still trying to run
- Go to Pages project settings and remove any deploy command
- Make sure build output is set to `out`

### Build Fails in CI/CD
- Ensure Node.js version 18+ in workflow
- Clear cache: `npm ci` instead of `npm install`
- Check environment variables are set correctly
- Verify API token is still valid (may expire)

### 404 Errors After Deployment
- Wait 5 minutes for cache to clear
- Clear Cloudflare cache: Pages project → **Deployments** → click on latest → **Redeploy**
- Verify trailing slashes are enabled in next.config.js

### Assets Not Loading
- Check that `./out` directory contains all files: `npm run build && ls -la out/`
- Verify images are unoptimized: `unoptimized: true` in next.config.js

### Pages Project Not Created
- Go to Cloudflare dashboard → Workers & Pages
- Click "Create Application" → "Pages"
- Select "Connect to Git" or "Upload directly"
- Project name: `harmanjeet-portfolio`

## Local Testing

Test the production build locally:
```bash
npm run build
npx http-server ./out
```

Then visit `http://localhost:8080`

## Cloudflare Pages Project Settings (IMPORTANT)

To avoid "wrangler deploy" errors, configure Pages correctly:

1. **Production Branch**: `main`
2. **Build Command**: `npm run build`
3. **Build Output Directory**: `out`
4. **Node.js Version**: 18
5. **Environment Variables**: None needed for static site
6. **Deploy Hooks**: None
7. **Custom Domains**: Add your domain here

**IMPORTANT - DO NOT SET:**
- ❌ Deploy command (leave empty)
- ❌ Custom build script with wrangler
- ❌ Main entry point (this is for Workers, not Pages)

## Correct Deployment Flow

```
1. Push to GitHub main branch
         ↓
2. GitHub Actions triggered
         ↓
3. Build Next.js static site: npm run build
         ↓
4. Output written to ./out/
         ↓
5. Pages-action deploys ./out/ to Cloudflare Pages
         ↓
6. Site live at: [project-name].pages.dev
         ↓
7. (Optional) Custom domain routes to Pages
```

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
