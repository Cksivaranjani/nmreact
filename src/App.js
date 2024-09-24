import React from 'react';
import Button from './components/Button';

const App = () => {
  const handleClick = () => {
    alert('Button Clicked');
  };

  return (
    <div className="container">
      <h1 className="text-center my-5">Welcome to My React App</h1>
      <div className="text-center">
        <Button label="Click Me" onClick={handleClick} style={{ padding: '10px', backgroundColor: 'blue', color: 'white' }} />
      </div>
    </div>
  );
};

export default App;
