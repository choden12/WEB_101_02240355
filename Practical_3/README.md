# Next.js File Upload App

A modern file upload application built with **Next.js**, featuring drag-and-drop interface, file type & size validation, progress tracking, and API route handling using `formidable`.

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

1. **Create the Project**
   npx create-next-app file-upload
   cd file-upload
2. **Install Dependencies**
npm install react-hook-form formidable axios react-dropzone

## Usages
Run the development server
     npm run dev
Access the app
      Open http://localhost:3000 in your browser.

Try the file upload
    Drag & drop files or use the file input field.
    Check file validation and upload progress.
    Uploads are processed via API route (/api/upload).

## Features
Drag-and-drop interface with react-dropzone
File validation for type and size
Upload progress tracking with Axios
Server-side upload handling using formidable
React Hook Form integration for easy form handling

## Features
Drag-and-drop interface with react-dropzone
File validation for type and size
Upload progress tracking with Axios
Server-side upload handling using formidable
React Hook Form integration for easy form handling

## Technologies
Next.js – Full-stack React framework
React Hook Form – Form state & validation
Formidable – Server-side file parsing
React Dropzone – Drag-and-drop upload UI
Axios – HTTP client for progress tracking

## Conclusion
- This project demonstrates how to build a production-ready file upload system in Next.js. It combines client-side validation, interactive UI components, and backend integration using API routes — perfect for applications needing media or document uploads.

## Acknowledgments
 - I would like to thank my instructor for the clear guidance throughout this project. I’m also grateful to my classmates for their collaboration and support. Special thanks to the GitHub repository by our miss  for providing helpful reference code and project structure.