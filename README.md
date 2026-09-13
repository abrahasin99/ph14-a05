# Explore Technologies 🚀

Explore Technologies is a React and TypeScript project where users can explore different technologies and build their own technology stack.

Users can add technologies to their stack, remove individual technologies, or clear the entire stack.

## 🛠️ Technologies Used

- React
- TypeScript
- Tailwind CSS
- JavaScript
- HTML
- Git & GitHub
- React Toastify

## ✨ Features

### 1. Explore Technologies

Users can browse different technologies and see information such as:

- Technology name
- Category
- Description
- Difficulty level
- Rating
- Badge

### 2. Build Your Stack

Users can add technologies to their personal stack. The selected technologies are displayed in the **Your Stack** section.

### 3. Manage Your Stack

Users can remove a specific technology using the `×` button or remove all selected technologies using the **Remove All** button.

## ⚛️ React Concepts Used

- Components
- Props
- State
- State Lifting
- `useState`
- `useEffect`
- Conditional Rendering
- `.map()`
- `key` props
- TypeScript interfaces
- `Suspense`
- React `use()`

## 📚 React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX lets us write HTML-like code inside JavaScript. It makes creating and understanding React UI much easier.

### 2. What is the difference between props and state?

Props are data passed from a parent component to a child. State is data managed by a component that can change over time.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` lets us store and update data inside a component. I used it to store the selected technologies and to control the selected state of each technology card.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` lets us run code when something changes. In this project, I used it to keep the card's selected state synced with the stack when a technology is removed.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list. It helps React know which item was added, removed, or changed.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition. I used it to show an empty message when there are no selected technologies.

```tsx
{stack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  // show selected technologies
)}

## 📸 Project Preview

### Empty Stack

<img src="./public/screenshots/empty.png" alt="Empty Stack" width="800"/>

### Technology Added

<img src="./public/screenshots/added.png" alt="Technology Added" width="800"/>

### Technology Removed

<img src="./public/screenshots/remove.png" alt="Technology Removed" width="800"/>
