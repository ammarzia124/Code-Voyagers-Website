# Code Voyagers — IT Company Website

Full-stack website for Code Voyagers, an IT consulting and digital services company based in Pakistan.

## Tech Stack

| Layer    | Technology |
|----------|------------|
| Frontend | React 19, Vite, Tailwind CSS v4, Framer Motion, Recharts, Radix UI |
| Backend  | Express 5, Mongoose 9, Nodemailer, Helmet, Compression |
| Database | MongoDB 6+ |

## Prerequisites

- Node.js 18+
- MongoDB 6+ (local or Atlas)
- npm 9+

## Setup

```bash
# Clone the repository
git clone https://github.com/ammarzia124/Code-Voyagers-Website.git
cd Code-Voyagers-Website

# Install dependencies
cd frontend && npm install
cd ../backend && npm install

# Configure environment
cp backend/.env.example backend/.env
# Edit backend/.env with your MongoDB URI and mailer credentials

# Seed the service catalog
cd backend && npm run seed

# Start development servers
# Terminal 1 — Backend
cd backend && npm run dev

# Terminal 2 — Frontend
cd frontend && npm run dev
```

Frontend runs at `http://localhost:5173`. Backend runs at `http://localhost:5000`.

## Commands

| Command | Location | Description |
|---------|----------|-------------|
| `npm run dev` | `frontend/` | Start Vite dev server |
| `npm run build` | `frontend/` | Production build |
| `npm run dev` | `backend/` | Start Express with `--watch` |
| `npm start` | `backend/` | Start Express in production |
| `npm run seed` | `backend/` | Seed the services collection |

## Project Structure

```
Code Voyagers Website/
├── frontend/
│   ├── src/
│   │   ├── assets/          # Static assets (logo, images)
│   │   ├── components/
│   │   │   ├── layout/      # Navbar, Footer, PageHero
│   │   │   ├── sections/    # Homepage sections (Hero, Services, Process, etc.)
│   │   │   └── ui/          # Shared UI primitives (Button, Input, Tabs, etc.)
│   │   ├── config/          # Constants (SITE_CONFIG, SERVICES, TESTIMONIALS)
│   │   ├── context/         # ThemeContext, ToastContext
│   │   ├── data/            # Static data (blogPosts)
│   │   ├── hooks/           # useInView, useReducedMotion, useCountUp
│   │   ├── pages/           # Route pages (Home, About, Services, Contact, Blog)
│   │   ├── styles/          # Tailwind v4 globals.css with @theme tokens
│   │   └── utils/           # cn(), seo.js
│   └── vite.config.js
├── backend/
│   ├── src/
│   │   ├── config/          # env.js, cors.js, db.js
│   │   ├── controllers/     # contact.controller.js, newsletter.controller.js
│   │   ├── middleware/       # errorHandler.js, rateLimiter.js
│   │   ├── routes/          # contact.routes.js, newsletter.routes.js, service.routes.js
│   │   └── services/        # mailer.service.js
│   └── server.js
└── database/
    ├── models/              # ContactInquiry, NewsletterSubscriber, Service
    └── seeds/               # seedServices.js
```

## Environment Variables

### Backend (`backend/.env`)

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `PORT` | Yes | `5000` | Server port |
| `NODE_ENV` | Yes | `development` | `development` or `production` |
| `MONGODB_URI` | Yes | — | MongoDB connection string |
| `CORS_ORIGIN` | Yes | `http://localhost:5173` | Allowed origin for CORS |
| `MAILER_HOST` | Yes | — | SMTP host |
| `MAILER_PORT` | No | `587` | SMTP port |
| `MAILER_USER` | Yes | — | SMTP username / email |
| `MAILER_PASS` | Yes | — | SMTP password |

### Frontend (`frontend/.env`)

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `VITE_API_BASE_URL` | No | `/api` | Backend API base URL |

## License

ISC
