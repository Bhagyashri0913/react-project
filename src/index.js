import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);





// Tasks:
// 1. Create a React project using create-react-app
// 2. Create a front-end platform for students to submit quizes
// 3. Each screen has a quiz of possibly 3 types: single-choice, multiple-choice, single-input
// 4. Render the question and answers of the quic on each screen
// 5. When student selects an answer, render a NEXT button that will move the student to the next screen in the lesson.
// 6. Keep track of the students score on client side.
// 7. When student finishes the lesson, show an alert box that displays the score.