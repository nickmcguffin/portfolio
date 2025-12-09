# Tech Stack

## Core Technologies
- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript 5** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework

## Additional Libraries
- **react-icons** - Icon library (FaGithub, FaLinkedin, FaEnvelope)
- **Geist & Geist Mono** - Google Fonts for typography

## Development Tools
- **ESLint** - Code linting with Next.js config
- **PostCSS** - CSS processing for Tailwind

## Common Commands

### Development
```bash
npm install          # Install dependencies
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
```

## TypeScript Configuration
- Strict mode enabled
- Path alias: `@/*` maps to `./src/*`
- Target: ES2017
- JSX: react-jsx (automatic runtime)

## Deployment
Optimized for Vercel, but compatible with Netlify, GitHub Pages (static export), or custom servers.
