# LuxDigital - Premium Digital Marketing Agency

## Overview

LuxDigital is a full-stack web application for a premium digital marketing agency specializing in luxury brands across the UAE and Gulf region. The application features a modern, responsive design with a focus on luxury aesthetics, comprehensive content management, and client acquisition capabilities.

## System Architecture

The application follows a modern full-stack architecture with clear separation between frontend and backend components:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom luxury theme
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **State Management**: TanStack Query for server state management
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Validation**: Zod schemas shared between frontend and backend
- **Session Management**: Express sessions with connect-pg-simple

## Key Components

### Database Schema
Located in `shared/schema.ts`, the application defines several core entities:
- **Users**: Admin user management with role-based access
- **Contacts**: Lead capture and management system
- **Blog Posts**: Content management for blog articles
- **Case Studies**: Portfolio showcase with industry categorization
- **Pricing Packages**: Dynamic pricing structure management

### API Layer
The backend provides RESTful endpoints for:
- Contact form submissions
- Content management (CRUD operations for blog posts, case studies, pricing)
- Admin authentication and user management
- File handling and asset management

### Authentication & Authorization
- Simple username/password authentication for admin users
- Session-based authentication using localStorage for client-side state
- Role-based access control for admin features

### Content Management System
- Admin dashboard for managing all content types
- Rich form handling with validation
- Image upload and management capabilities
- Publishing workflow for blog posts and case studies

## Data Flow

1. **Client Requests**: Frontend makes API calls using TanStack Query
2. **API Processing**: Express server handles requests with proper validation
3. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
4. **Response Handling**: Structured JSON responses with error handling
5. **State Management**: Client-side state updates through query cache invalidation

## External Dependencies

### Analytics & Tracking
- Google Analytics 4 integration with custom event tracking
- Page view tracking for single-page application navigation

### UI & Styling
- Font loading from Google Fonts (Playfair Display, Inter, Crimson Text)
- FontAwesome for iconography
- Responsive design with mobile-first approach

### Development Tools
- ESBuild for production server bundling
- Vite development server with HMR
- TypeScript for type safety across the stack

## Deployment Strategy

### Development Environment
- Replit-based development with PostgreSQL module
- Hot module replacement for rapid development
- Environment variable management for sensitive data

### Production Build
- Static asset optimization through Vite
- Server bundle creation with ESBuild
- Autoscale deployment target for production hosting

### Database Management
- Drizzle migrations for schema versioning
- Environment-based database URL configuration
- Connection pooling through Neon serverless

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

- June 16, 2025: Implemented premium sky/space theme with animated starfield background and shooting stars
- June 16, 2025: Added custom cursor with golden particle trail effects for luxury interaction
- June 16, 2025: Created loading screen with luxury branding and progress animation
- June 16, 2025: Enhanced ClientsSlider with hover metrics tooltips showing growth, leads, and ROAS
- June 16, 2025: Added AnimatedCounter component with intersection observer for viewport-triggered animations
- June 16, 2025: Created WhyChooseUs section with UAE market expertise and industry recognition badges
- June 16, 2025: Implemented QuickStartProcess timeline with 4-step luxury brand transformation journey
- June 16, 2025: Enhanced hero section with multi-layer backgrounds, geometric animations, and improved typography
- June 16, 2025: Fixed navigation HTML validation issues by replacing nested anchor tags
- June 16, 2025: Fixed excessive spacing issues below Meta Business Partner section for better layout balance
- June 17, 2025: Fixed Services section to show content permanently with scroll animations instead of hover-only visibility
- June 17, 2025: Fixed React import errors in About and WhyChooseUs sections causing missing text display
- June 17, 2025: Fixed CaseStudies component display issues with proper scroll animations and text visibility
- June 17, 2025: Updated Hero layout with left-aligned text and right-side image/video showcase
- June 17, 2025: Fixed all section display issues (Pricing, Footer) with proper React imports and animations
- June 17, 2025: Fixed Contact section visibility issues by implementing same approach as Testimonials section with permanent content display
- June 17, 2025: Removed Contact section from Home page due to persistent visibility issues, website now flows from Pricing to Footer
- June 17, 2025: Enhanced Footer with professional 2x3 grid layout, expanded content sections, and comprehensive navigation structure
- June 17, 2025: Added clickable functionality to case study cards to open individual case studies in new windows with specific URLs
- June 18, 2025: Redesigned hero section with clean minimal design inspired by modern UI patterns, featuring simplified gradient background, geometric shapes, and focused content layout
- June 18, 2025: Updated hero section with professional black background and proper left text alignment to match website consistency, implemented luxury gold theme throughout
- June 18, 2025: Replaced placeholder company logos with 11 real company logos including Cyberg, AX Capital, Emirates NBD, Lucky Ones, Alamin Marbles, FLC Marketing Group, Ava Five, Gulf News, Dubizzle Labs, HomePoint, and Provident
- June 18, 2025: Added official Google Partner and Meta Business Partner logos to Industry Recognition section
- June 18, 2025: Implemented comprehensive conversion optimization system with exit-intent popups, progressive forms, social proof notifications, mobile CTAs, downloadable resources, optimized mobile starfield animation, enhanced client slider with swipe gestures, structured data markup, heatmap tracking, conversion tracking, and location-specific landing pages for UAE cities
- June 18, 2025: Fixed footer navigation 404 errors by creating all missing pages: Resources, Support, Privacy Policy, Terms of Service, Cookie Policy, Compliance, and Sitemap with proper routing and accessibility attributes
- June 20, 2025: Implemented HIGH PRIORITY SEO optimizations: robots.txt, XML sitemap, canonical URLs, individual service pages (SEO, PPC), enhanced structured data with proper URLs, and comprehensive meta tag optimization
- June 20, 2025: Completed MEDIUM PRIORITY SEO features: developed blog functionality with actual content, added breadcrumb navigation component, implemented lazy loading image optimization, created dedicated FAQ page with structured data, and enhanced testimonials with review schema markup
- June 20, 2025: Implemented LOW PRIORITY SEO optimizations: completed all 6 individual service pages (SEO, PPC, Web Design, Branding, Social Media, Automation), added image sitemap for better image indexing, created website schema with search functionality, enhanced service navigation with direct links, and comprehensive structured data across all pages
- June 20, 2025: Enhanced pricing page with detailed category-specific packages: separate pricing for complete digital marketing packages, website design & development (one-time), and paid advertising management (monthly), including comprehensive features and clear value propositions for each service category
- June 20, 2025: Created comprehensive website development packages starting from AED 1,000 for single page sites up to AED 15,000 for enterprise solutions with CRM integration, including interactive add-on system for customizable features and pricing transparency
- June 20, 2025: Implemented advanced service pricing filter system with 10 categories (Websites, SEO, PPC, Social Media, Branding, Content, Email Marketing, Digital Marketing, Business Tools) showing individual service pricing from AED 800 to AED 25,000 with detailed features and delivery times
- June 20, 2025: Enhanced admin dashboard with comprehensive overview analytics, advanced analytics dashboard with charts and conversion funnels, and complete settings management for site configuration, SEO, email, and security settings
- June 20, 2025: Implemented comprehensive SEO optimization + Analytics integration system: Real-time SEO sidebar for blog editor with live scoring, keyword analysis, and content optimization suggestions. Universal analytics manager supporting Google Analytics, Search Console, Facebook Pixel, Microsoft Clarity, Google Ads, Hotjar, and custom scripts with automatic code injection. Database schema extended with analytics_settings and seo_data tables for persistent tracking configuration and SEO metadata storage.

## Changelog

Changelog:
- June 16, 2025. Initial setup and luxury website implementation