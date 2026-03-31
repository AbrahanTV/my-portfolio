# Abrahan Tolentino — Personal Portfolio

A personal portfolio website built with React and Vite, showcasing projects, skills, and contact information.

## Tech Stack

- **React 19** + **Vite 7** (SWC)
- **React Router v7** for client-side routing
- **GSAP** + **Motion** for animations
- **CSS3** with a custom design system
- **Flask API** (separate repo) for contact form handling

## Features

- Animated hero section with shiny text and rotating role display
- Projects showcase with hover overlays, live previews, and GitHub links
- Skills section organized by category (Frontend, Backend, Tools)
- Contact form connected to a deployed Flask API
- Responsive, dark-mode design with glass-morphism styling
- Parallax scrolling and smooth transitions throughout

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Environment Variables

Create a `.env` file at the root:

```env
VITE_API_BASE_URL=http://127.0.0.1:5000
```

For production, point this to your deployed API URL.

## Project Structure

```
src/
├── components/     # Header, Footer, Projects, Skills, animation components
├── pages/          # Home.jsx (main landing page)
├── styles/         # Per-component CSS + global design system
├── App.jsx         # Root component with routing
└── main.jsx        # React entry point
public/
├── files/          # Resume PDF
└── images/         # Project screenshots
```

## Deployment

The site is deployed on **Network Solutions**. Pushes to `main` trigger automatic deployments via GitHub Actions.
