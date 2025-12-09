# Project Structure

## Directory Organization

```
portfolio/
├── src/
│   └── app/                    # Next.js App Router directory
│       ├── components/         # React components
│       │   ├── About.tsx
│       │   ├── Experience.tsx
│       │   ├── Projects.tsx
│       │   └── Sidebar.tsx
│       ├── favicon.ico
│       ├── globals.css         # Global styles (Tailwind imports)
│       ├── layout.tsx          # Root layout with sidebar
│       └── page.tsx            # Home page (renders main sections)
├── public/                     # Static assets (SVGs)
├── .kiro/                      # Kiro AI assistant configuration
└── [config files]              # Root-level configs
```

## Architecture Patterns

### Component Structure
- **Functional components** with default exports
- **No props drilling** - components are self-contained sections
- **Fragment wrappers** (`<>...</>`) used consistently
- Components use semantic HTML (`<section>`, `<aside>`, `<nav>`)

### Styling Conventions
- **Tailwind utility classes** for all styling
- **No custom CSS** except Tailwind imports in globals.css
- Responsive design with Tailwind breakpoints
- Color palette: gray-50 (background), white (sidebar), neutral-400 (muted text)

### Layout Pattern
- **Sticky sidebar** (left, 50% width) with navigation and social links
- **Main content area** (right, scrollable) with sections
- **Centered container** (75% viewport width)
- **Smooth scroll** behavior enabled

### Navigation
- Hash-based anchor links (`#about`, `#experience`, `#projects`)
- Section IDs match navigation hrefs for smooth scrolling

## File Naming
- **Components**: PascalCase (e.g., `About.tsx`, `Sidebar.tsx`)
- **Config files**: lowercase with extensions (e.g., `next.config.ts`)
- **CSS**: lowercase (e.g., `globals.css`)

## Import Conventions
- Relative imports for local components (`./components/About`)
- Named imports for utilities and types (`import type { Metadata }`)
- Google Fonts loaded in layout with CSS variables
