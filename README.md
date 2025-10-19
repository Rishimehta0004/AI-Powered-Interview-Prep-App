# MERN Notes Application

This repository contains a MERN-stack notes/interview-prep application.

Structure
- backend/: Express API, MongoDB models, and AI controllers
- frontend/: React + Vite UI

Quick start (local)

1. Install dependencies

   # backend
   cd backend
   npm install

   # frontend
   cd ../frontend
   npm install

2. Start backend and frontend

   # backend (dev)
   cd backend
   npm run dev

   # frontend
   cd frontend
   npm run dev

Environment
- Create a `.env` in `backend/` with at least:
```
PORT=8000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
GOOGLE_API_KEY=your_google_api_key
```

CI
- GitHub Actions workflow builds the frontend and installs backend dependencies on push to `main`.

Deployment
- Frontend: Vercel, Netlify, or GitHub Pages (recommended: Vercel for React apps)
- Backend: Render, Heroku, or a VPS. Ensure environment variables are set.

License
MIT
