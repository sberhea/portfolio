<<<<<<< HEAD
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
=======
# portfolio

# Node + ESLint Set Up:
- Download [Node.js](https://nodejs.org/en/download)
- Check:
    - `node --version`
    - `npm --version`
    - `npx --version`
- Run the create app command 
    - `npx create-next-app@latest my-portfolio --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"`
- Check local host by running `npm run dev`
- Make ESLint more robust
    - `npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier`
- Check that lint is working
    - `npm run lint`
    - `npm run type-check`
- Install Prettier
    - `npm install --save-dev prettier eslint-config-prettier`
- Create prettier config file
    - `touch .prettierrc`
    - Add this to it: ```
        {
        "semi": true,
        "trailingComma": "es5",
        "singleQuote": true,
        "tabWidth": 2,
        "useTabs": false,
        "printWidth": 80
        }
    ```
- Add formatting script
    - ```
    {
    "scripts": {
        "dev": "next dev",
        "build": "next build",
        "start": "next start",
        "lint": "next lint",
        "lint:fix": "next lint --fix",
        "format": "prettier --write .",
        "type-check": "tsc --noEmit"
    }
    }
    ```
# Development Tips
- Run - `npm run lint`every few file changes or before commits.
- Run `npm run type-check`when adding new types and before builds.
- Run `npm run format`before every commit.

# Memory Management
- Check cache size
    - `npm cache verify`
- Clear when needed (safe to do)
    - `npm cache clean --force`
- Clear Next.js build cache
    - `rm -rf .next`
- Check your space
    - `df -h`
- Add to ~/.zshrc or ~/.bash_profile
    -`alias checkspace="df -h | head -2 && echo 'Top cache folders:' && du -sh ~/Library/Caches/* 2>/dev/null | sort -hr | head -5 && echo 'npm cache:' && npm cache verify"`
>>>>>>> 4aade11 (chore: node install, eslint setup, and readme notes)
