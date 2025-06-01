# Understanding Asynchronous Behavior in React UI (Fundamental Example)

## 💡 Overview

This repository contains a foundational React application demonstrating how to handle **asynchronous behavior** in User Interfaces. Asynchronous operations, like fetching data from an API, are common in modern web applications. The key challenge is to ensure the UI remains responsive and provides clear feedback to the user while these long-running tasks are in progress.

This example specifically illustrates:

* **Loading States:** Showing visual cues when data is being fetched.
* **Basic Error Handling:** Informing the user when an API call fails.
* **State Management:** Using React's built-in hooks (`useState`, `useEffect`) to manage the different stages of an asynchronous operation.
* **Component Isolation:** Encapsulating data fetching logic within a reusable custom hook.
* **`async`/`await` Patterns:** Utilizing modern JavaScript syntax for cleaner asynchronous code.

## 🧩 Key Principles Demonstrated in This Code

1. **Loading States & Feedback**
2. **Error Handling**
3. **State Management**
4. **Component Isolation & Abstract API Calls**
5. **`async`/`await` Patterns**

## Component-by-Component Breakdown

### 1. `useFetchData` (Custom Hook)

- **Purpose:** Encapsulates reusable fetch logic.
- **State Variables:** `data`, `loading`, `error`
- **Effect Hook:** Triggers on `url` change.
- **Error Handling:** Manual check for HTTP errors.
- **Return Value:** `{ data, loading, error }`

### 2. `UserProfile` (Component)

- **Responsibilities:** Displays data from the hook.
- **States Rendered:** Loading, error, success
- **Component Isolation:** Delegates data fetching

### 3. `App` (Main Application Container)

- **State:** `currentUserId`
- **Button:** Loads next user in the range of 1–10
- **CSS:** Provides styling for visual feedback

## How to Run This Example

### 1. Prerequisites

Ensure Node.js and npm/yarn are installed.

### 2. Create a React Project

**Using CRA:**
```bash
npx create-react-app react-async-fetch-demo
cd react-async-fetch-demo
```

**Using Vite:**
```bash
npm create vite@latest react-async-fetch-demo -- --template react
cd react-async-fetch-demo
npm install
```

### 3. Replace App Component

Paste the provided React code into `src/App.jsx`.

### 4. Run the App

**CRA:**
```bash
npm start
```

**Vite:**
```bash
npm run dev
```

### 5. View the Result

- CRA: `http://localhost:3000`
- Vite: Usually `http://localhost:5173`

## Experiment and Observe

- Simulate loading
- Trigger errors
- Test on slow network

---

MIT © 2025 Sergio Montecinos
