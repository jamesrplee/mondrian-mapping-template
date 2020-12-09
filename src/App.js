import React from 'react';
import './App.css';


function App(svg) {
  return (
    <div className="App">
      <div
        id="svg"
      >
        <svg
          width={svg && svg.width.baseVal.value}
          height={svg && svg.height.baseVal.value}
          viewBox={svg && `${svg.viewBox.baseVal.x} ${svg.viewBox.baseVal.y} ${svg.viewBox.baseVal.width} ${svg.viewBox.baseVal.height}`}
          dangerouslySetInnerHTML={svg && { __html: svg.innerHTML }}
        />
      </div>
    </div>
  );
}

export default App;
