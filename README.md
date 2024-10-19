
# Linear Algebra Trainer

This project is a **Linear Algebra Trainer**, designed to help students practice linear algebra concepts through a series of true/false questions. The application is built using React for the frontend, and the questions are pre-defined in a JSON file, allowing for easy modification and expansion.

## Features

- **Quiz Functionality**: The app presents shuffled true/false questions with explanations for each answer, reinforcing the user’s understanding of linear algebra concepts.
- **Score Tracking**: Users are provided with feedback on their correct answers and overall score at the end of the quiz.
- **User-Friendly Design**: Simple, clean design with easy navigation, making it perfect for students.
- **Responsive Layout**: Designed to work on both mobile and desktop devices.

## Technology Stack

- **React.js**: Core frontend framework for building the user interface.
- **CSS**: Used to style the components and ensure a responsive design.
- **JavaScript (ES6)**: Logic to handle quiz functionality, shuffling questions, tracking user answers, and managing quiz state.
- **JSON**: Questions and explanations are stored in a separate JSON file for easy management.

## Installation Guide

### Prerequisites

Ensure that you have the following installed:

- **Node.js**: Download it from [here](https://nodejs.org/).
- **npm** or **yarn**: Node's package managers.

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/linear-algebra-trainer.git
   cd linear-algebra-trainer
   ```

2. **Install Dependencies**:
   Install the required dependencies by running the following command:
   ```bash
   npm install
   ```
   or for Yarn:
   ```bash
   yarn install
   ```

3. **Run the Application**:
   Start the development server:
   ```bash
   npm start
   ```
   or for Yarn:
   ```bash
   yarn start
   ```

The application will be available at `http://localhost:3000`.

## File Structure

```plaintext
linear-algebra-trainer/
├── public/                 # Public assets like index.html, favicon, etc.
├── src/                    # Main source files for the application
│   ├── components/         # React components used for the quiz
│   ├── App.js              # Main application logic
│   ├── Quiz.js             # Core quiz logic and component
│   ├── questions.json      # Questions and explanations for the quiz
│   ├── Quiz.css            # Styling for the quiz component
│   ├── index.js            # Application entry point
│   ├── index.css           # Global CSS for the app
├── package.json            # Dependencies and project scripts
└── README.md               # Project documentation
```

## Explanation of Key Files

1. **App.js**: The `App.js` file is the main component that renders the `Quiz` component and wraps it in a header.
   ```javascript
   import Quiz from './Quiz';

   function App() {
     return (
       <div className="App">
         <header className="App-header">
           <Quiz />
         </header>
       </div>
     );
   }

   export default App;
   ```

2. **Quiz.js**: This file contains the core quiz logic, including shuffling questions, handling user answers, and tracking the score. The questions are imported from the `questions.json` file.
   ```javascript
   import React, { useState } from 'react';
   import './Quiz.css'; 
   import questionsData from './questions.json';

   // Function to shuffle the questions
   function shuffleArray(array) {
     // Shuffling logic here...
   }

   // Main Quiz Component
   function Quiz() {
     // Quiz state and functionality here...
   }

   export default Quiz;
   ```

3. **questions.json**: This file contains the questions and explanations used in the quiz. Each question is an object with a `question`, `answer`, and `explanation` field.
   ```json
   [
     {
       "question": "If A is an m × n matrix and A has n pivot positions then the columns of A span Rm.",
       "answer": false,
       "explanation": "The columns of an m × n matrix A with n pivot positions will span R^m only if A is square (m = n)..."
     },
     // More questions...
   ]
   ```

4. **Quiz.css**: Contains the styles for the quiz component, including button styling, layout, and responsive design.
   ```css
   .quiz-container {
     /* CSS for the quiz container */
   }

   .quiz-container button {
     /* Styling for buttons */
   }
   ```

5. **index.js**: The entry point of the React application, responsible for rendering the `App` component inside the root DOM element.
   ```javascript
   import React from 'react';
   import ReactDOM from 'react-dom/client';
   import './index.css';
   import App from './App';

   const root = ReactDOM.createRoot(document.getElementById('root'));
   root.render(
     <React.StrictMode>
       <App />
     </React.StrictMode>
   );
   ```

## Customization

### Adding New Questions

You can easily add or modify the questions by editing the `questions.json` file. Each question should follow the structure:
```json
{
  "question": "Your question here?",
  "answer": true or false,
  "explanation": "Detailed explanation here."
}
```

### Styling

If you wish to customize the look and feel of the app, you can modify the `Quiz.css` and `index.css` files to adjust styles like button colors, layout, fonts, etc.

## License

This project is licensed under the MIT License.