# Capstone Project - Full Stack Application

A complete full-stack application built with Next.js frontend and Express.js backend to meet capstone project requirements.

## Project Requirements ✅

- ✅ **Next.js** - Modern React framework for the frontend
- ✅ **Express.js** - Node.js backend framework
- ✅ **Git & GitHub** - Version control and project submission

## Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **React Hook Form** - Form management

### Backend
- **Express.js** - Node.js web framework
- **TypeScript** - Type safety
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables

## Project Structure

```
capstone-project/
├── frontend/          # Next.js application
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   └── lib/
│   ├── package.json
│   └── next.config.js
├── backend/           # Express.js API
│   ├── src/
│   │   ├── routes/
│   │   └── middleware/
│   ├── package.json
│   └── server.js
├── .gitignore
└── README.md
```

## Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/dinoc0der/capstone-projectDU
cd capstone-project
```

### 2. Install dependencies

#### Backend
```bash
cd backend
npm install
npm run dev
```

#### Frontend
```bash
cd frontend
npm install
npm run dev
```

### 3. Access the application
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## Features

- 🏠 Modern landing page
- 📝 Contact form with validation
- 🔄 Real-time API integration
- 📱 Responsive design
- 🎨 Professional UI/UX

## API Endpoints

- `GET /api/health` - Health check
- `POST /api/contact` - Submit contact form
- `GET /api/projects` - Get project list

## Deployment

Ready for deployment on platforms like Vercel (frontend) and Railway/Render (backend).


---

**Author:** muhammed ahmed , usama abdulla
**Date:** 6 sep 2025
**Status:** Ready for submission
