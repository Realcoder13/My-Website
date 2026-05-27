# Harmanjeet Singh - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Deployed on GitHub Pages.

## Features

- 🎨 Modern, responsive design
- ⚡ Fast performance with Next.js
- 📱 Mobile-friendly interface
- 🎯 SEO optimized
- 💬 Contact form
- 🌐 Deployed on GitHub Pages

## Tech Stack

- **Framework:** Next.js 16+
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Deployment:** GitHub Pages
- **Package Manager:** npm

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio-nextjs.git
cd portfolio-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Navigation.tsx  # Navigation bar
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills section
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
public/                 # Static assets
```

## Customization

### Update Personal Information

Edit the following files to add your content:
- [src/components/Hero.tsx](src/components/Hero.tsx) - Hero section
- [src/components/About.tsx](src/components/About.tsx) - About section
- [src/components/Skills.tsx](src/components/Skills.tsx) - Skills section
- [src/components/Contact.tsx](src/components/Contact.tsx) - Contact information

### Update Social Links

In [src/components/Contact.tsx](src/components/Contact.tsx), update the social links section with your actual profiles.

## GitHub Setup

### Initial Setup

1. Create a new repository on GitHub named `portfolio-nextjs` (or your preferred name)

2. Add the remote and push your code:
```bash
git remote add origin https://github.com/yourusername/portfolio-nextjs.git
git branch -M main
git push -u origin main
```

### Connect to VS Code

The project is already set up to work with VS Code. To open it:
```bash
code .
```

Or if already open, you can use the Source Control panel to manage git operations.

## Build & Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized static build in the `.next` directory.

### Deploy to GitHub Pages

#### Option 1: Using GitHub Actions (Recommended)

1. In your repository, go to **Settings** → **Pages**
2. Under "Build and deployment", set:
   - Source: **GitHub Actions**
   - Leave other settings as default

3. Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './out'
  
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

4. Commit and push:
```bash
git add .
git commit -m "Add GitHub Pages deployment workflow"
git push
```

#### Option 2: Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Copy the `out` directory contents to the `gh-pages` branch and push

### Update Domain Configuration

To use a custom domain (e.g., harmanjeet.com):

1. Add `CNAME` file to `public/` directory with your domain:
```
harmanjeet.com
```

2. In GitHub repository settings, add your custom domain under **Pages** → **Custom domain**

3. Update your domain's DNS records to point to GitHub Pages

For more info: [GitHub Pages custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## Contact Form

The contact form is a client-side component. To enable email functionality:

### Option 1: Formspree (Simple)
```typescript
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })
  .then(() => setSubmitted(true))
  .catch(err => console.error(err));
};
```

### Option 2: EmailJS (Client-side)
```bash
npm install @emailjs/browser
```

Then update the `handleSubmit` function in [src/components/Contact.tsx](src/components/Contact.tsx)

## Development Workflow

1. **Create a feature branch:**
```bash
git checkout -b feature/your-feature
```

2. **Make changes and test locally:**
```bash
npm run dev
```

3. **Commit and push:**
```bash
git add .
git commit -m "Add feature description"
git push origin feature/your-feature
```

4. **Create a Pull Request** on GitHub

5. **Merge to main** once reviewed

## Troubleshooting

### Build fails with Tailwind errors
- Make sure `@tailwindcss/postcss` is installed: `npm install @tailwindcss/postcss`
- Clear `.next` cache: `rm -rf .next`
- Rebuild: `npm run build`

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### TypeScript errors
- Run `npm run build` to see full errors
- Check [src/app/layout.tsx](src/app/layout.tsx) and component imports

## Performance Tips

- Images: Optimize and use Next.js `Image` component
- Code splitting: Routes are automatically code-split
- Analytics: Consider adding Google Analytics for tracking

## License

MIT License - feel free to use this template for your portfolio.

## Author

Harmanjeet Singh - Senior Cloud Architect

---

**Next Steps:**
1. Update personal information in components
2. Test locally with `npm run dev`
3. Set up GitHub repository
4. Configure GitHub Pages deployment
5. Add custom domain if needed

For questions or issues, refer to [Next.js docs](https://nextjs.org/docs) or [Tailwind CSS docs](https://tailwindcss.com/docs).
