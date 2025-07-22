# Interactive Resume Website - Endo Kersandona

## Overview

This is a gamified interactive resume website built as a side-scrolling RPG-style experience featuring real career data and achievements from Endo Kersandona's 9+ year career in product and project management. The website showcases authentic experience across 7 companies, 11 professional certifications, and 12+ industry sectors including fintech, banking, cybersecurity, and digital identity. The project combines modern web technologies with game-like elements to create an engaging digital portfolio that presents measurable career achievements through interactive RPG-style levels.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom game-themed color variables
- **UI Components**: Radix UI primitives with shadcn/ui components
- **Animations**: Framer Motion for smooth transitions and game-like interactions
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-based sessions using connect-pg-simple

### Key Components

#### Game Interface Components
- **ExperienceCard**: Displays work experience as RPG-style character cards with achievements and skill badges
- **SkillNode**: Interactive skill trees with progress bars and tooltips
- **PortfolioCard**: Project showcases designed as collectible game items with rarity levels
- **ContactForm**: Integrated contact system with EmailJS for direct communication

#### Core Features
- **Side-scrolling Navigation**: Horizontal game world navigation on desktop, vertical on mobile
- **Achievement System**: Career milestones displayed as game achievements with metrics
- **Responsive Design**: Adaptive layout that transforms from side-scrolling to vertical on mobile devices
- **Interactive Elements**: Hover effects, animations, and game-like feedback

### Data Flow

1. **Static Content**: Career data, skills, and achievements are currently hardcoded in React components
2. **Contact Form**: Uses EmailJS API for form submissions without backend processing
3. **Navigation**: Custom hook manages scroll-based navigation between experience levels
4. **Responsive Handling**: useIsMobile hook determines layout and navigation behavior

### External Dependencies

#### UI and Styling
- **Radix UI**: Comprehensive set of accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom game theme
- **FontAwesome**: Icon library for consistent visual elements
- **Framer Motion**: Animation library for smooth transitions

#### Development Tools
- **TypeScript**: Type safety across frontend and backend
- **ESBuild**: Fast bundling for production builds
- **PostCSS**: CSS processing with Tailwind

#### Database and Backend
- **Drizzle ORM**: Type-safe database operations
- **Neon Database**: Serverless PostgreSQL hosting
- **Zod**: Schema validation for database operations

### Deployment Strategy

The application is structured for deployment on platforms like Replit:

1. **Development**: 
   - Frontend served by Vite dev server
   - Backend runs on Express with TypeScript compilation via tsx
   - Hot module replacement for rapid development

2. **Production Build**:
   - Frontend builds to static files via Vite
   - Backend compiles to single bundle via ESBuild
   - Database migrations handled via Drizzle Kit

3. **Environment Configuration**:
   - Database URL required for PostgreSQL connection
   - EmailJS credentials for contact form functionality
   - Replit-specific plugins for development environment integration

### Recent Changes (January 2025)

#### Database Integration Completed
- **Date**: January 22, 2025
- **Changes**: 
  - Added PostgreSQL database with comprehensive schema for contact submissions, visitor analytics, experiences, skills, and portfolio projects
  - Implemented database-backed contact form that saves all messages while maintaining EmailJS integration
  - Built comprehensive analytics system tracking page views, user interactions, and session data
  - Created admin dashboard at /admin showing real-time contact submissions and visitor statistics
- **Benefits**: Full data persistence, visitor analytics, and admin capabilities for monitoring engagement

#### UI/UX Improvements
- **Date**: January 22, 2025
- **Changes**:
  - Updated professional title from "Product Management Legend" to "Product and Project Management"
  - Changed "Digital Identity" to "Digital Signature" throughout the application
  - Improved photo positioning with larger size (48x48 on desktop) and better spacing below header
  - Removed percentage values from description text for cleaner presentation
  - Enhanced photo styling with better shadows and object-cover for proper aspect ratio

### Architecture Decisions

#### Gamification Approach
- **Problem**: Traditional resumes lack engagement and memorability
- **Solution**: RPG-style interface with achievements, levels, and interactive elements
- **Benefits**: Memorable user experience, showcases creativity and technical skills
- **Trade-offs**: May not appeal to all professional audiences

#### Technology Stack
- **Problem**: Need for modern, performant web application with rich interactions
- **Solution**: React + TypeScript + Tailwind CSS + Framer Motion
- **Benefits**: Type safety, component reusability, smooth animations, responsive design
- **Considerations**: Bundle size vs. feature richness balance

#### Database Integration
- **Problem**: Need for data persistence, contact management, and visitor analytics
- **Solution**: PostgreSQL with Drizzle ORM for full database functionality
- **Benefits**: Contact form submissions, visitor analytics, admin dashboard capabilities
- **Current State**: Fully operational with real-time data collection and admin monitoring

#### Responsive Design Strategy
- **Problem**: Side-scrolling doesn't work well on mobile devices
- **Solution**: Adaptive layout that switches to vertical scrolling on mobile
- **Implementation**: CSS breakpoints and JavaScript-based navigation switching
- **Benefits**: Optimal experience across all device types