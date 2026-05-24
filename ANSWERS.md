# Technical Assessment Answers

### 1. How to run
This project requires Node.js installed on your machine. No API keys are required as it uses the public Fake Store API.

To run the project on a fresh machine:
1. Clone the repository and navigate to the root directory.
2. Run `npm install` to install dependencies (React, Vite, Tailwind CSS).
3. Run `npm run dev` to start the development server.
4. Open the `localhost` URL provided in your terminal (usually `http://localhost:5173`).

### 2. Stack choice
I chose React (via Vite) and Tailwind CSS primarily because I am currently learning React. I know JavaScript and have some basic experience with backend frameworks like Django, but I wanted to use this assessment to push my frontend skills and practice core React fundamentals like `useState` and `useEffect`.

A worse choice would have been trying to use plain Vanilla JavaScript. Manually writing JavaScript to update the DOM every time a user types in a search bar or changes a sorting dropdown gets incredibly messy and fragile. React's state management handles those UI updates automatically, which makes the code much easier to read and maintain.

### 3. One real edge case
**Edge Case: Invalid user search input.**
In `App.jsx`, I handle the edge case where a user types numbers or special characters into the category search.

```javascript
if (value && !/^[a-zA-Z\s\-]+$/.test(value)) {
  setInputError("Please use only letters for category search.")
}
```

Without this regex validation handling, the app would silently accept the bad input and attempt to filter the array with it. The UI would confusingly show an empty screen with 0 products, leaving the user wondering if the app broke or if the API crashed. By catching the bad input immediately, the UI renders a clear red error message under the search bar guiding the user.

### 4. AI usage
Because I know JavaScript logic but don't have a lot of experience actually writing React code yet, I used Gemini as a coding assistant to help with React specific syntax. I understand what needs to happen logically, but I used the AI to help me format things like the async/await fetch request inside the useEffect hook.

What I changed: The AI initially wrote the search filter code to strictly check the product.category string. Using my JavaScript knowledge, I realized this was flawed—searching for "shirts" returned 0 results because that word is in the title, not the category. I overrode the AI's code and rewrote the .filter() logic using the OR (||) operator to check both: product.category.toLowerCase().includes(...) || product.title.toLowerCase().includes(...). This proved to me that AI is great for syntax, but you still need to verify the actual logic.

### 5. Honest gap
Since I am a student just learning the basics of frontend development, my biggest gap right now is frontend scalability. To keep this project within my current skill level, my code downloads all 20 products at once and uses client-side JavaScript to sort and filter them on the screen.

Because I have some background in backend development, I know this architecture is flawed for a real-world application. If this store had 10,000 products, downloading them all at once would freeze the user's browser. With another day, I would want to learn how to properly implement server-side pagination so the React frontend only has to request and render small chunks of data at a time using API query parameters.

