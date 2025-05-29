# TikTok Clone – Frontend & Backend Integration (Tiktok fronted)

A full-stack social video sharing app built with Next.js and Express.js, featuring real-time video feeds, user authentication, and social interactions like following and liking videos.

---

## Table of Contents

- [Installation](#installation)
- [Usages](#usages)
- [Features](#features)
- [Technologies](#technologies)
- [Conclusion](#conclusion)
- [Acknowledgments](#acknowledgments)

---

## Installation

1. Clone the Repositories
git clone https://github.com/choden12/web101_02240355.git
git clone https://github.com/choden12/WEB_102_02240355.git

2. Set Up the Backend
cd TikTok_Server
npm install
npx prisma migrate dev
npm run dev

3. Set Up the Frontend
cd TikTok_Frontend
npm install

## Usages
- Register/login/logout users
- Upload videos with captions and thumbnails
- Like, comment, and follow users
- View personalized video feeds
- Explore and follow new users
- View dynamic user profiles with their videos

### Test the implementation:
- Create multiple users
- Upload and interact with videos
- Toggle between "For You" and "Following" feeds

## Features
- JWT Authentication with secure token handling
- Video feed display with real-time updates
- Like/Unlike & Comments on videos
- Video upload support (captions + thumbnails)
- Follow/Unfollow users with personalized feeds
- User Discovery & dynamic profile pages
- Reusable UI components with modals and forms
- Loading and error states handled gracefully

## Technologies
### Frontend
- Next.js – React Framework
- React Hook Form – Form validation
- Axios – API communication
- JWT Decode – Token decoding
- React Hot Toast – Notifications
- Tailwind CSS – Styling

### Backend
- Express.js – RESTful API server
- Prisma ORM – Database modeling
- JWT – Authentication
- Multer/Formidable – File uploads
- PostgreSQL (or your preferred DB)

## Conclusion
This project connects a modern TikTok-like UI with a full-featured backend using scalable architecture and clean code separation. It’s a great demonstration of building and integrating a video platform from scratch with user engagement features.

## Acknowledgments