# Manoj Portfolio

A modern personal portfolio built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion. The site highlights data engineering, AI analytics, backend systems, professional experience, featured projects, technical skills, resume access, and contact links.

## Overview

This portfolio is designed for presenting Manoj's work as a Data Engineer and AI builder. It includes a full-page animated hero, about section, project gallery, skills list, experience timeline, and contact section.

## Features

- Responsive single-page portfolio layout
- Animated sections powered by Framer Motion
- Project cards with screenshots, GitHub links, live demos, and tech stacks
- Skills and experience data managed from dedicated TypeScript files
- Resume download from the public assets folder
- GitHub, LinkedIn, and email contact links
- Vite development workflow with TypeScript and ESLint

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Icons
- Lucide React
- ESLint

## Project Structure

```text
.
|-- public/
|   |-- projects/          # Project screenshots
|   `-- resume/            # Resume PDF
|-- src/
|   |-- assets/            # Static source assets
|   |-- components/        # Shared UI components
|   |-- data/              # Portfolio content data
|   |-- sections/          # Page sections
|   |-- App.tsx            # Main app composition
|   |-- App.css            # App-level styles
|   |-- index.css          # Global styles
|   `-- main.tsx           # React entry point
|-- index.html
|-- package.json
`-- vite.config.ts
```

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm

### Installation

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

The app will be available at the local URL printed by Vite, usually:

```text
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Updating Portfolio Content

Most portfolio content is stored in `src/data`:

- `src/data/projects.ts` - featured projects, descriptions, images, GitHub links, live links, and tech stacks
- `src/data/skills.ts` - skills shown in the skills section
- `src/data/experience.ts` - professional experience entries
- `src/data/socials.ts` - GitHub, LinkedIn, and email links

Resume and project images live in `public`:

- `public/resume/resume.pdf`
- `public/projects/*.png`

## Featured Projects

- Real-Time Messaging App
- Members Only Platform
- File Upload Management System
- Interactive CV Generator
- Shopping Cart Application
- Weather Forecast Application

## Contact

- GitHub: [manoj13196](https://github.com/manoj13196)
- LinkedIn: [manoj13196](https://www.linkedin.com/in/manoj13196/)
- Email: [akaramsettimanojsai@gmail.com](mailto:akaramsettimanojsai@gmail.com)
