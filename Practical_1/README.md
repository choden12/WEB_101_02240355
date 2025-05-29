# TikTok Web Clone with Next.js

A modern TikTok-style video platform built using Next.js, Tailwind CSS, and React Hook Form, featuring sidebar navigation, video feeds, and user authentication forms.

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
-

1. **Clone the repository**
   ```bash
   git clone https://github.com/choden12/web101_02240355.git
   cd tiktok-web-clone
2. **Create Next.js App**

Copy code
npx create-next-app@latest
Configure as follows:
TypeScript → No
ESLint → Yes
Tailwind CSS → Yes
Use src/ → Yes
App Router → Yes
Import alias → No

3. **Install dependencies**
npm install react-icons react-hook-form

## Usages
Run the app:
npm run dev
- Navigate to http://localhost:3000
Explore:
Sidebar links: Home, Following, Explore, Live, Upload, Profile
Auth pages: Login, Signup
Test form validations (empty fields, invalid emails, password checks)


## Features
- Responsive TikTok-style sidebar and layout
- Video feed with reusable card components
- Login & Signup with full validation
- Loading and error feedback in forms
- Organized structure: components, ui, app, lib

## Technologies
- Next.js 14+ – React framework
- Tailwind CSS – Styling
- React Hook Form – Form validation
- React Icons – UI icons

## Conclusion
This project provides a TikTok-inspired frontend interface, showcasing modern web dev concepts like routing, layout design, form handling, and responsive components — a great base for any video-based web app.

## Acknowledgments
