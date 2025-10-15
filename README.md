# Portfolio

A portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **Additional Libraries:** 
  - Swiper (carousel/slider)
  - React PDF (PDF viewing)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/download) installed on your machine
- Verify installation:
  ```bash
  node --version
  npm --version
  npx --version
  ```

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run format       # Format code with Prettier
npm run type-check   # Check TypeScript types
```

## Development Workflow

1. **Before commits:**
   - Run `npm run lint` every few file changes
   - Run `npm run format` to ensure consistent formatting
   - Run `npm run type-check` when adding new types

2. **Testing changes:**
   - Test locally: `npm run dev`
   - Quick Vercel preview: `vercel`
   - Production deployment: Push to GitHub (auto-deploys via Vercel)

## Vercel Deployment

### Quick Commands

```bash
vercel                    # Deploy current directory instantly
vercel --prod=false       # Deploy to preview (non-production)
vercel ls                 # Check deployment status
vercel logs               # View deployment logs
vercel dev                # Run with Vercel environment locally
vercel env pull .env.local # Pull environment variables from Vercel
```

### Deployment Workflow

1. Make changes locally
2. Test with `npm run dev`
3. Quick test on Vercel with `vercel` command
4. If satisfied, push to GitHub for production deployment

## Maintenance

### Cache Management

```bash
# Check cache size
npm cache verify

# Clear npm cache (safe)
npm cache clean --force

# Clear Next.js build cache
rm -rf .next

# Check disk space
df -h
```

### Optional: Add to `~/.zshrc` or `~/.bash_profile`

```bash
alias checkspace="df -h | head -2 && echo 'Top cache folders:' && du -sh ~/Library/Caches/* 2>/dev/null | sort -hr | head -5 && echo 'npm cache:' && npm cache verify"
```

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn) - Interactive tutorial
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Swiper Documentation](https://swiperjs.com/react)
- [Tailwind UI Components](https://tailwindcss.com/plus/ui-blocks/marketing/sections/bento-grids)