# Personal Portfolio

A modern, fully responsive portfolio website built with React and TypeScript, showcasing IT engineering projects, skills, education, and professional experiences.

## ✨ Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Dark/Light Theme Toggle** - User-friendly theme switcher with persistent preference
- **Smooth Animations** - Framer Motion animations for engaging user experience
- **Multiple Sections**:
  - Hero Section - Eye-catching introduction
  - About - Professional background
  - Education - Academic qualifications
  - Skills - Technical expertise
  - Projects - Showcase of work
  - Experience - Professional history
  - Opportunities - Open to collaboration
  - Contact - Social links and email

## 🛠️ Tech Stack

- **Frontend Framework**: React 18+ with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Animations**: Framer Motion
- **Testing**: Vitest
- **Routing**: React Router
- **State Management**: React Query

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/ritikaoswal130-gif/ritika-s-digital-canvas.git

# Navigate to project directory
cd ritika-s-digital-canvas

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

## 📦 Available Scripts

```bash
# Development
npm run dev          # Start dev server with hot reload

# Production
npm run build        # Build for production
npm run preview      # Preview production build locally

# Testing & Linting
npm run test         # Run tests with Vitest
npm run lint         # Run ESLint

# Type checking
npm run type-check   # Check TypeScript types
```

## 📂 Project Structure

```
src/
├── components/
│   ├── sections/      # Page sections (Hero, About, Contact, etc.)
│   ├── ui/           # Reusable UI components
│   ├── Navbar.tsx    # Navigation component
│   ├── ThemeToggle.tsx # Theme switcher
│   └── ThemeProvider.tsx
├── pages/            # Page components
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
├── App.tsx           # Main app component
├── main.tsx          # Entry point
└── index.css         # Global styles
```

## 📝 License

This project is open source and available under the MIT License.
