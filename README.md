# 🚀 DevFlow — AI-Powered Developer Q&A Platform

<p align="center">
  <img src="./public/banner.png" alt="DevFlow Banner" />
</p>

<p align="center">
  <b>Ask. Learn. Share. Grow.</b><br/>
  A modern, AI-powered Q&A platform built for developers 🚀
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?logo=next.js" />
  <img src="https://img.shields.io/badge/TypeScript-5-blue?logo=typescript" />
  <img src="https://img.shields.io/badge/TailwindCSS-v4-38bdf8?logo=tailwindcss" />
  <img src="https://img.shields.io/badge/MongoDB-Atlas-green?logo=mongodb" />
  <img src="https://img.shields.io/badge/Auth-NextAuth-orange" />
  <img src="https://img.shields.io/badge/AI-GPT--4%20%7C%20Gemini-purple" />
  <img src="https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel" />
</p>

---

## 📋 Table of Contents

- Overview  
- Features  
- Tech Stack  
- Screenshots  
- Demo Video  
- Getting Started  
- Environment Variables  
- Project Structure  
- Key Features Explained  
- API Routes  
- Database Models  
- Contributing  
- License  
- Acknowledgments  
- Support  

---

## 🌟 Overview

**DevFlow** is a modern, community-driven Q&A platform designed specifically for developers.

Built with **Next.js 15** and powered by **AI capabilities**, it enables developers to:
- Ask technical questions  
- Share knowledge  
- Collaborate globally  

### 💡 Highlights

- 🤖 AI-powered answer generation  
- 🔍 Real-time global search  
- 📊 Reputation-based ecosystem  
- 🎯 Personalized recommendations  
- 🌓 Dark mode + modern UI  

---

## ✨ Features

### 🔧 Core Functionality

- 🔐 Authentication (GitHub & Google OAuth)
- ❓ Question CRUD with markdown support
- 💬 AI-assisted answer system
- 🏷️ Tagging & filtering
- 🔍 Advanced real-time search
- 👤 User profiles with reputation
- ⬆️⬇️ Voting system
- 🔖 Collections (bookmarking)
- 👁️ Smart view tracking
- 📊 Recommendation engine

---

### 🎨 User Experience

- 🌓 Dark / Light mode  
- 📱 Fully responsive  
- 🎨 Clean modern UI  
- ♿ Accessibility support  
- ⚡ High performance  
- 🔄 Real-time updates  

---

### 🤖 AI Integration

- OpenAI GPT-4 + Google Gemini  
- Context-aware responses  
- Markdown formatting  
- Provider fallback support  

---

### 🧑‍💻 Developer Features

- 🔄 Pagination  
- 🎯 Filters (new, popular, unanswered)  
- 📈 Reputation system  
- 🔗 Deep linking  
- 🛡️ Error handling  
- 🔍 Global search  

---

## 🚀 Tech Stack

### 🖥️ Frontend
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Shadcn UI
- React Hook Form + Zod

### ⚙️ Backend
- Node.js + API Routes
- MongoDB + Mongoose
- NextAuth v5
- Vercel AI SDK

### 🛠️ Dev Tools
- ESLint  
- TypeScript  
- Prettier  
- pnpm / npm  

### ☁️ Deployment
- Vercel  
- MongoDB Atlas  

---

## 📸 Screenshots

<p align="center">
  <img src="./public/screenshots/home-light.png" width="45%" />
  <img src="./public/screenshots/home-dark.png" width="45%" />
</p>

<p align="center">
  <img src="./public/screenshots/question.png" width="45%" />
  <img src="./public/screenshots/ask.png" width="45%" />
</p>

<p align="center">
  <img src="./public/screenshots/profile.png" width="45%" />
  <img src="./public/screenshots/community.png" width="45%" />
</p>

---

## 🎥 Demo Video

<p align="center">
  <a href="https://youtube.com/watch?v=YOUR_VIDEO_ID">
    <img src="https://img.youtube.com/vi/YOUR_VIDEO_ID/0.jpg" />
  </a>
</p>

---

## 🏁 Getting Started

### ✅ Prerequisites

- Node.js 18+  
- MongoDB Atlas or local instance  
- GitHub OAuth credentials  
- Google OAuth (optional)  
- OpenAI / Gemini API key  

---

### 📦 Installation

git clone https://github.com/your-username/devflow.git
cd devflow

# Install dependencies
pnpm install

### 🔐 Environment Variables

| Variable                     | Description               | Required |
| ---------------------------- | ------------------------- | -------- |
| MONGODB_URI                  | MongoDB connection string | ✅        |
| AUTH_SECRET                  | NextAuth secret           | ✅        |
| NEXTAUTH_URL                 | App base URL              | ✅        |
| GITHUB_ID                    | GitHub OAuth ID           | ✅        |
| GITHUB_SECRET                | GitHub secret             | ✅        |
| GOOGLE_ID                    | Google OAuth ID           | ❌        |
| GOOGLE_SECRET                | Google secret             | ❌        |
| OPENAI_API_KEY               | OpenAI key                | ❌*       |
| GOOGLE_GENERATIVE_AI_API_KEY | Gemini key                | ❌*       |


* At least one AI provider required

### Run app
pnpm dev

The app will start at - http://localhost:3000/

### 📁 Project Structure
devflow/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Authentication routes (sign-in, sign-up)
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── (root)/                   # Main application routes
│   │   ├── (home)/               # Home page
│   │   ├── ask-question/         # Create question page
│   │   ├── collection/           # Saved questions
│   │   ├── community/            # Users listing
│   │   ├── jobs/                 # Job listings
│   │   ├── profile/              # User profiles
│   │   ├── questions/            # Question details and edit
│   │   └── tags/                 # Tags listing and details
│   ├── api/                      # API routes
│   │   ├── ai/answers/           # AI answer generation
│   │   └── auth/[...nextauth]/   # NextAuth handler
│   ├── database.ts               # Database connection
│   ├── globals.css               # Global styles
│   └── layout.tsx                # Root layout
│
├── components/                   # React components
│   ├── answers/                  # Answer-related components
│   ├── cards/                    # Card components (Question, User, Tag)
│   ├── editor/                   # Markdown editor components
│   ├── filters/                  # Filter components
│   ├── forms/                    # Form components
│   ├── navigation/               # Navigation components (Navbar, Sidebar)
│   ├── questions/                # Question-related components
│   ├── search/                   # Search components
│   ├── ui/                       # Shadcn UI components
│   ├── user/                     # User-related components
│   └── votes/                    # Voting system components
│
├── constants/                    # Application constants
│   ├── filters.ts                # Filter configurations
│   ├── routes.ts                 # Route definitions
│   └── states.ts                 # Empty state configurations
│
├── context/                      # React Context providers
│   └── Theme.tsx                 # Theme context (dark/light mode)
│
├── database/                     # MongoDB models
│   ├── answer.model.ts
│   ├── collection.model.ts
│   ├── interaction.model.ts
│   ├── question.model.ts
│   ├── tag.model.ts
│   ├── user.model.ts
│   └── vote.model.ts
│
├── lib/                          # Utility libraries
│   ├── actions/                  # Server actions
│   │   ├── answer.action.ts
│   │   ├── collection.action.ts
│   │   ├── interaction.action.ts
│   │   ├── question.action.ts
│   │   ├── tag.action.ts
│   │   ├── user.action.ts
│   │   └── vote.action.ts
│   ├── handlers/                 # Error handlers
│   ├── validations/              # Zod schemas
│   ├── http-errors.ts            # Custom error classes
│   ├── mongoose.ts               # MongoDB connection
│   └── utils.ts                  # Utility functions
│
├── public/                       # Static assets
│   ├── icons/                    # SVG icons
│   └── images/                   # Images
│
├── types/                        # TypeScript type definitions
│   ├── action.d.ts
│   └── global.d.ts
│
├── auth.ts                       # NextAuth configuration
├── components.json               # Shadcn UI configuration
├── next.config.ts                # Next.js configuration
├── tailwind.config.js            # Tailwind CSS configuration
└── tsconfig.json                 # TypeScript configuration

### 🔑 Key Features Explained

## 🔐 Authentication
- OAuth (GitHub + Google)
- JWT sessions
- Protected routes
- Auto user creation

## ❓ Q&A System
- Markdown editor
- Tag system
- Edit history
- Author controls

## 📊 Voting & Reputation
- Upvote/downvote
- Reputation scoring
- Vote tracking

## 🤖 AI Answers
- Context-aware generation
- OpenAI + Gemini support
- Markdown formatting
- Fallback system

## 🔍 Search
- Global search
- Debounced input
- Real-time results
- URL persistence

## 🎯 Recommendation Engine
- Based on activity
- Tag relevance
- Smart ranking


### 🔌 API Routes
# Authentication
- POST /api/auth/signin/github
- POST /api/auth/signin/google
- GET  /api/auth/callback/github
- GET  /api/auth/callback/google

# AI
- POST /api/ai/answers

### 💾 Database Models
- User
- Question
- Answer
- Tag
- Vote
- Collection
- Interaction

### 🤝 Contributing
1. Fork repository
2. Create branch
3. Commit changes
4. Push
5. Open PR

## Guidelines
- Follow code standards
- Write clean commits
- Add tests
- Update docs

### 🙏 Acknowledgments
Next.js
Tailwind CSS
Shadcn UI
MongoDB
NextAuth
Vercel
OpenAI
Google AI

### 📞 Support
- Open a GitHub issue
- rohitksharmadev@gmail.com

<p align="center"> Built with ❤️ by developers, for developers </p>
