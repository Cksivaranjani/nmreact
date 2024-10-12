import React, { useState } from 'react';
import './App.css';
import ChildComponent from './ChildComponent';

function App() {
  // Task 1: Render Dynamic Content
  const [message, setMessage] = useState('Hello! This is dynamic content.');

  // Task 2: Conditionally Render Components
  const [isVisible, setIsVisible] = useState(true);

  // Task 3: Implement Event Handling
  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="App">
      <h1>React Use Case 11: JSX Elements</h1>

      {/* Task 1: Render Dynamic Content */}
      <p>{message}</p>

      {/* Task 3: Implement Event Handling */}
      <button onClick={handleToggle}>
        {isVisible ? 'Hide Content' : 'Show Content'}
      </button>

      {/* Task 2: Conditionally Render Components */}
      {isVisible && (
        <div>
          <h2>This is conditionally rendered content!</h2>
        </div>
      )}

      {/* Task 4: Pass Props to Child Components */}
      <ChildComponent message={message} />
    </div>
  );
}

export default App;
