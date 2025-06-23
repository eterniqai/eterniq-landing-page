# EternIQ - AI-Powered Code Assistant

## Overview

EternIQ is a full-stack web application that serves as an AI-powered code assistant platform. The application features a modern landing page showcasing the product's capabilities in screen sharing, real-time code analysis, and intelligent coding assistance. It's built with a React frontend and Express backend, designed to demonstrate EternIQ's value proposition as an "eternal coding partner" for developers.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Animations**: Framer Motion for smooth interactions and page transitions
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints
- **Database Integration**: Drizzle ORM with PostgreSQL support
- **Session Management**: Express sessions (configured for future use)
- **Development**: Hot reload with Vite integration

### Build System
- **Bundler**: Vite for frontend assets
- **TypeScript**: Strict compilation with path mapping
- **CSS Processing**: PostCSS with Tailwind CSS
- **Production Build**: ESBuild for server bundling

## Key Components

### Database Schema (Drizzle ORM)
- **Users Table**: Authentication system foundation with username/password
- **Contact Submissions Table**: Stores form submissions with timestamp tracking
- **Type Safety**: Zod schemas for runtime validation and TypeScript integration

### API Endpoints
- `POST /api/contact`: Contact form submission with validation
- `GET /api/contact`: Retrieve contact submissions (admin functionality)

### Frontend Pages
- **Home**: Hero section, features showcase, demo call-to-action
- **About**: Detailed product information and capabilities
- **Contact**: Contact form with real-time validation
- **404**: Error handling page

### UI Components
- **Navigation**: Responsive header with glass morphism effects
- **Hero Section**: Animated landing with floating elements
- **Features Section**: Product capabilities with gradient accents
- **Contact Form**: Validated form with toast notifications
- **Footer**: Links and social media integration

## Data Flow

1. **Client Request**: User interacts with React components
2. **Form Validation**: Zod schemas validate input on client and server
3. **API Communication**: TanStack Query manages HTTP requests
4. **Database Operations**: Drizzle ORM handles PostgreSQL interactions
5. **Response Handling**: Toast notifications provide user feedback
6. **State Updates**: Query client invalidates and refetches data

## External Dependencies

### Database
- **PostgreSQL**: Primary database (configured via DATABASE_URL)
- **Neon Database**: Serverless PostgreSQL provider integration

### UI Libraries
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first styling framework
- **Framer Motion**: Animation library for smooth interactions
- **Lucide React**: Icon library

### Development Tools
- **Drizzle Kit**: Database migrations and schema management
- **Replit Integration**: Development environment optimizations

## Deployment Strategy

### Development Environment
- **Port**: 5000 (configurable via environment)
- **Hot Reload**: Vite middleware integration
- **Database**: PostgreSQL with automatic provisioning

### Production Build
- **Frontend**: Static assets built to `dist/public`
- **Backend**: Server bundle built to `dist/index.js`
- **Start Command**: `npm run start`

### Deployment Configuration
- **Platform**: Replit autoscale deployment
- **Build Process**: Automated via npm scripts
- **Environment Variables**: DATABASE_URL required for database connection

## Changelog

```
Changelog:
- June 23, 2025. Initial setup
- June 23, 2025. Updated hero section text from "Your Eternal Coding Partner" to "EternIQ EternIQ"
- June 23, 2025. Added vibrant color scheme with neon pink, electric cyan, lime green, and other bright colors
- June 23, 2025. Implemented rainbow borders, neon glow effects, and colorful gradient backgrounds
- June 23, 2025. Enhanced feature cards with unique gradient backgrounds and improved animations
- June 23, 2025. Improved text visibility by using white text for demo section and adjusting hero layout
- June 23, 2025. Reduced hero section spacing for more compact design
- June 23, 2025. Applied negative margins to bring hero image and feature cards closer together
- June 23, 2025. Removed resources section from footer as requested
- June 23, 2025. Replaced hero image with custom 3D animated graphic featuring rotating cubes, floating elements, and brand-colored animations
- June 23, 2025. Reverted back to original hero image as requested
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```