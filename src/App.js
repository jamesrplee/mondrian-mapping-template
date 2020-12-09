import React from 'react';
import './App.css';


function App(svg) {
  return (
    <div className="App">
      {svg && svg.innerHTML}
    </div>
  );
}

export default App;
