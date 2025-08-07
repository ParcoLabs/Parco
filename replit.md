# PARCO - Real Estate Token Investment Platform

## Overview

PARCO is a modern web application that enables investment in real estate tokens with minimal entry barriers. The platform tokenizes high-value properties, making real estate investment accessible to users with as little as $100. Built as a full-stack application with React frontend and Express backend, PARCO provides a comprehensive marketplace for property discovery, portfolio management, and token trading.

The application features a sophisticated design system based on shadcn/ui components, implements mobile-first responsive design principles, and integrates modern development practices including TypeScript, Tailwind CSS, and component-driven architecture.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern component patterns
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom design tokens and component variants
- **UI Components**: shadcn/ui component library providing consistent, accessible interface elements
- **State Management**: TanStack Query for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **Design System**: Custom design tokens extending Tailwind's configuration for consistent spacing, colors, typography, and shadows

### Backend Architecture
- **Runtime**: Node.js with Express framework for REST API endpoints
- **Language**: TypeScript with ES modules for modern JavaScript features
- **Database ORM**: Drizzle ORM configured for PostgreSQL with type-safe database operations
- **Storage**: In-memory storage implementation with interface for future database integration
- **Development**: Hot reload capabilities with Vite integration for seamless development experience

### Component Structure
- **Atomic Design**: Implements atomic design principles with reusable UI components
- **Layout Components**: Centralized layout management through MainLayout component
- **Section Components**: Modular page sections for maintainable content organization
- **Custom Components**: Specialized components like PhoneMock and Container for brand-specific functionality

### Data Management
- **Schema Definition**: Centralized schema definitions using Drizzle with Zod validation
- **Type Safety**: End-to-end TypeScript types from database to frontend components
- **Query Handling**: Optimized query patterns with React Query for efficient data fetching and caching

### Development Infrastructure
- **Build System**: Separate client and server build processes with optimized output
- **Asset Management**: Integrated asset handling with Vite's asset pipeline
- **Path Resolution**: Configured path aliases for clean import statements across the application

## External Dependencies

### Database & ORM
- **Neon Database**: Serverless PostgreSQL database for production deployment
- **Drizzle ORM**: Type-safe database operations with PostgreSQL dialect
- **Drizzle Kit**: Database migration and schema management tools

### UI & Design System
- **Radix UI**: Accessible primitive components for complex UI interactions
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Lucide React**: Icon library for consistent iconography
- **React Icons**: Additional icon sets for social media and brand icons

### Development Tools
- **Vite**: Build tool with plugin ecosystem for development and production
- **TypeScript**: Static type checking and enhanced developer experience
- **ESBuild**: Fast JavaScript bundler for server-side code compilation

### State & Data Management
- **TanStack React Query**: Server state management, caching, and synchronization
- **React Hook Form**: Form state management with validation
- **Hookform Resolvers**: Integration between React Hook Form and validation schemas

### Styling & Animation
- **Class Variance Authority**: Type-safe component variant management
- **Clsx**: Conditional className utility for dynamic styling
- **Tailwind Merge**: Conflict resolution for Tailwind CSS classes

### Deployment & Hosting
- **Replit**: Development and hosting platform with integrated tooling
- **PostCSS**: CSS processing with Tailwind and Autoprefixer plugins
- **Connect PG Simple**: PostgreSQL session store for Express applications