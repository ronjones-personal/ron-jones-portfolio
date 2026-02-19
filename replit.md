# Ron Jones Professional Portfolio

## Overview

A professional portfolio website for Ron Jones, a Solutions Engineering and Customer Success Leader with 15+ years of enterprise experience. The site showcases professional experience, skills, hobbies, and contact information with a modern, responsive design inspired by Linear, Stripe, and Notion aesthetics.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with custom CSS variables for theming (light/dark mode support)
- **UI Components**: Shadcn/ui component library (New York style) built on Radix UI primitives
- **State Management**: TanStack React Query for server state
- **Build Tool**: Vite with React plugin

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (compiled with tsx for development, esbuild for production)
- **API Pattern**: RESTful endpoints prefixed with `/api`
- **Static Serving**: Express serves built client assets from `dist/public`

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` contains database table definitions
- **Validation**: Zod schemas generated via drizzle-zod
- **Current Storage**: In-memory storage implementation (`MemStorage` class) with interface for future database migration

### Project Structure
```
client/           # Frontend React application
  src/
    components/   # React components (sections, UI primitives)
    pages/        # Route page components
    hooks/        # Custom React hooks
    lib/          # Utilities and query client
server/           # Express backend
  index.ts        # Server entry point
  routes.ts       # API route definitions
  storage.ts      # Data storage interface/implementation
  static.ts       # Static file serving
  vite.ts         # Vite dev server integration
shared/           # Shared code between client/server
  schema.ts       # Drizzle database schema
```

### Design System
- **Typography**: Inter (body), Space Grotesk (headings) from Google Fonts
- **Color System**: HSL-based CSS variables with light/dark mode
- **Component Style**: Shadcn/ui New York variant with custom elevation effects
- **Responsive**: Mobile-first approach with Tailwind breakpoints

### Build Process
- **Development**: Vite dev server with HMR, Express backend with tsx
- **Production**: Vite builds client to `dist/public`, esbuild bundles server to `dist/index.cjs`
- **Database Migrations**: Drizzle Kit with `db:push` command

## External Dependencies

### Database
- **PostgreSQL**: Primary database (requires `DATABASE_URL` environment variable)
- **Drizzle Kit**: Database migration and schema push tooling

### UI Libraries
- **Radix UI**: Accessible component primitives (dialogs, tooltips, dropdowns, etc.)
- **Lucide React**: Icon library
- **Embla Carousel**: Carousel component
- **Recharts**: Chart components (via shadcn/ui chart)

### Development Tools
- **Replit Plugins**: Runtime error overlay, cartographer, dev banner (development only)
- **PostCSS/Autoprefixer**: CSS processing

### Fonts (CDN)
- Google Fonts: Inter, Space Grotesk, DM Sans, Fira Code, Geist Mono, Architects Daughter, JetBrains Mono