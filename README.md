# MERN Notes Application

This repository contains a MERN-stack notes/interview-prep application.

Structure

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
```
PORT=8000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
GOOGLE_API_KEY=your_google_api_key
```

CI

Deployment

License
MIT
# AI-Powered-Interview-Prep-App
<!-- Improved README for AI-Powered Interview Prep App -->

# AI-Powered Interview Prep — MERN

![Build](https://img.shields.io/github/actions/workflow/status/Rishimehta0004/AI-Powered-Interview-Prep-App/ci.yml?branch=main)
![License](https://img.shields.io/badge/license-MIT-green)
![Node](https://img.shields.io/badge/node-%3E%3D16-blue)

A polished MERN application to prepare for interviews faster using generative AI. Create role-based sessions, auto-generate tailored interview questions and concept explanations, take notes, and pin important questions — all in one lightweight app.

Key highlights
- AI-assisted question generation and concept explanations
- Create and manage interview sessions (role, experience, topics)
- Pin important questions and add notes for revision
- Clean React + Vite frontend and a minimal Express + MongoDB backend

Tech stack
- Frontend: React, Vite, Tailwind CSS
- Backend: Node.js, Express, MongoDB, Mongoose
- AI: Google Generative API (or pluggable provider)

Demo / Screenshots
Add screenshots or a demo GIF here to showcase the main flows (sessions list, session details, AI generation result).

Quick start (local)

1. Clone the repo

```bash
git clone https://github.com/Rishimehta0004/AI-Powered-Interview-Prep-App.git
cd AI-Powered-Interview-Prep-App
```

2. Install dependencies

```bash
# backend
cd backend
npm install

# frontend (in a new terminal)
cd ../frontend
npm install
```

3. Environment

Create a `.env` file in the `backend/` folder with at least the following values:

```
PORT=8000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
GOOGLE_API_KEY=your_google_api_key
```

4. Run locally

```bash
# start backend (dev)
cd backend
npm run dev

# start frontend (dev)
cd ../frontend
npm run dev
```

Open the frontend in the URL Vite prints (usually http://localhost:5173) and try registering and creating a session.

CI

This repository includes a GitHub Actions workflow that installs backend dependencies and builds the frontend on push to `main`. Check `.github/workflows/ci.yml` for details.

Deployment suggestions

- Frontend: Deploy to Vercel or Netlify (recommended: Vercel for automatic detection of Vite/React). Set the build command to `npm run build` and publish folder to `frontend/dist`.
- Backend: Deploy to Render, Heroku, or another provider. Point service to the `backend` folder and set the start command to `npm start`. Don't forget to add environment variables in the host provider's dashboard.

Environment variables to set on production hosts:
- MONGO_URI
- JWT_SECRET
- GOOGLE_API_KEY (if using the AI features)

Roadmap / Ideas
- Add user profile and progress tracking
- Add CSV / JSON import/export for sessions and questions
- Add CI/CD deployments to Vercel (frontend) and Render (backend)

Contributing
PRs welcome. Please include a short description of the change and any setup steps.

License
MIT — see LICENSE file.

Contact
Rishi Mehta — rishimehta1501@example.com
