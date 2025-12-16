# webagencynaul

## LuxDigital - Premium Digital Marketing Agency Website

A full-stack web application for a premium digital marketing agency specializing in luxury brands across the UAE and Gulf region.

## ⚠️ Security Notice

**IMPORTANT:** The `.env` file contains database credentials and should NEVER be committed to version control. Please:
1. Rotate the database credentials immediately
2. Add `.env` to `.gitignore` (already done)
3. Use `.env.example` as a template for new setups

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
```bash
cp .env.example .env
# Edit .env with your actual credentials
```

3. Push database schema:
```bash
npm run db:push
```

4. Start development server:
```bash
npm run dev
```

## Features

- Modern React frontend with TypeScript
- Express.js backend API
- PostgreSQL database with Drizzle ORM
- Contact form with database storage
- Responsive luxury design
- SEO optimized

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Wouter
- **Backend**: Node.js, Express, TypeScript
- **Database**: PostgreSQL (Neon), Drizzle ORM
- **Build**: Vite, ESBuild