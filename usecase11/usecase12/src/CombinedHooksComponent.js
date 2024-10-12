import React, { useState, useEffect, useRef } from 'react';

// Custom Hook for Counter Logic
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return { count, increment, decrement };
}

function CombinedHooksComponent() {
  // State management using useState
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0);

  // useRef for Timer reference (to store interval ID)
  const timerRef = useRef(null);

  // Custom hook usage
  const { count: customHookCount, increment, decrement } = useCounter(5);

  // useEffect for lifecycle events (runs every time count changes)
  useEffect(() => {
    console.log(`Count changed: ${count}`);
  }, [count]); // Runs when count is updated

  // Start the timer using useRef to avoid re-rendering
  const startTimer = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }
  };

  // Stop the timer
  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  return (
    <div>
      {/* Managing State with useState */}
      <h2>useState Hook: Count</h2>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      {/* useEffect Hook for side effects */}
      <h2>useEffect Hook: Lifecycle Logging</h2>
      <p>Open the console to see the lifecycle logs when count changes.</p>

      {/* Custom Hook for reusable logic */}
      <h2>Custom Hook: Counter</h2>
      <h3>Custom Hook Count: {customHookCount}</h3>
      <button onClick={increment}>Increment Custom Hook Count</button>
      <button onClick={decrement}>Decrement Custom Hook Count</button>

      {/* useRef Hook for performance optimization */}
      <h2>useRef Hook: Timer</h2>
      <h3>Timer: {timer}s</h3>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
    </div>
  );
}

export default CombinedHooksComponent;
