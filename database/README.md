# Database

This directory contains Mongoose models, schemas, and seed scripts for the Code Voyagers backend.

## Models

| Model | Description |
|-------|-------------|
| `Admin.js` | Admin users with bcrypt-hashed passwords and JWT auth |
| `Contact.js` | Contact form submissions from the website |
| `BlogPost.js` | Blog articles with markdown content, categories, and tags |
| `Portfolio.js` | Portfolio/case study items with images and service tags |
| `Newsletter.js` | Email newsletter subscribers |

## Connection

The MongoDB connection is configured in `backend/config/database.js` and uses the `MONGODB_URI` environment variable from `backend/.env`.

## Seeding

Run seed scripts from the `database/seeders/` directory to populate initial data:

```bash
node database/seeders/seedServices.js
node database/seeders/seedPortfolio.js
node database/seeders/seedBlog.js
```

## Environment Variables

```
MONGODB_URI=mongodb://localhost:27017/code-voyagers
```
