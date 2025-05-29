# TikTok Clone – Infinite Scroll with TanStack Query (Tiktok fronted)

This practical enhances the TikTok video feed with **infinite scroll functionality** using **TanStack Query** and **cursor-based pagination**, providing a seamless and efficient content browsing experience.

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

### 1. Backend Setup for Cursor-Based Pagination
Update the following files in your server repo:
- `src/controllers/videoController.js` → Modify `getAllVideos` and `getFollowingVideos` to support `cursor` and `limit` query params.
- Use Prisma's `cursor`, `skip`, and `take` for efficient database queries.

### 2. Frontend Setup with TanStack Query
Navigate to your frontend project and run:
npm install @tanstack/react-query @tanstack/react-query-devtools

### 3. Enable Query Client
Wrap your app with the QueryClientProvider in src/app/layout.js.

### 4. Update Services and Components
Modify videoService.js to use cursor-based API calls.
Create useIntersectionObserver.js in src/hooks/ to detect scroll position.
* Update VideoFeed.jsx to:
Use useInfiniteQuery
Manage cursors and loading state
Trigger data fetching via the Intersection Observer

## Usages
- Automatically load more videos as users scroll
- Use useInfiniteQuery to fetch paginated data
- Observe scroll position using IntersectionObserver
- Handle video lists dynamically with nextCursor and hasNextPage

## Features
- Infinite Scroll using cursor-based pagination
- Efficient Pagination with Prisma's cursor/skip/take
- Smart Caching with TanStack Query
- Scroll Detection via Intersection Observer API
- Dynamic Loading with "n+1" pagination pattern
- Graceful Handling of loading states and errors

## Technologies
Next.js – React framework for the frontend
Express.js – REST API for the backend
Prisma ORM – Database querying with cursor support
TanStack Query – React Query library for state & caching
Intersection Observer API – Viewport tracking for auto-loading
React Hook Form – Form handling for auth & uploads

## Conclusion
- This enhancement improves the user experience by implementing smooth and efficient infinite scrolling. Cursor-based pagination outperforms offset-based methods in terms of consistency, especially when handling dynamic data updates in large-scale applications.

## Acknowledgments


