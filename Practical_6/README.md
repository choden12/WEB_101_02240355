# Todo List Application with Zustand

A simple and efficient Todo List app built with React and Zustand for lightweight state management. This project demonstrates how to manage and persist application state without complex boilerplate or prop drilling.

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

1. **Create Project with Vite**
npx create-vite@latest todo-zustand
cd todo-zustand

2. **Install Dependencies**
npm install zustand

## Usages
- Type a task in the input field to add it.
- Click on a task to toggle its completion.
- Click the delete icon to remove a task.
- Use a "Clear Completed" button to remove finished tasks.
- All tasks persist in localStorage, even after refresh.

## Features
- Global State managed with Zustand
- Persistent Storage with localStorage
- Clear Completed functionality
- No Boilerplate – Simple, clean, and reactive
- Scoped Component Subscriptions for performance

## Technologies
- React – Frontend framework
- Vite – Fast build tool
- Zustand – State management library
- localStorage – Persistence for todos

## Conclusion
- Zustand makes state management intuitive and minimal compared to more complex solutions like Redux or heavy use of React Context. This Todo app is a great starting point to understand centralized state, actions, and persistence in React applications.

## Acknowledgments
- I would like to express my gratitude to my instructor for guiding me through this practical. I also extend my appreciation to the creators and maintainers of Zustand for providing a lightweight and intuitive state management library. The official documentation and open-source community resources were incredibly helpful in understanding how to implement persistent global state in React applications.


