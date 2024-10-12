import React from 'react';

function ChildComponent({ message }) {
  return (
    <div>
      <h3>Message from Parent:</h3>
      <p>{message}</p>
    </div>
  );
}

export default ChildComponent;
