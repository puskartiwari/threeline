// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//      hello
//     </div>
//   );
// }

// export default App;

// src/App.js
import React, { useState } from "react";
import Draw2DLine from "./Draw2DLine";
import Render3DLine from "./Render3DLine";

const App = () => {
  const [points, setPoints] = useState([]);

  const handleDraw = (drawnPoints) => {
    setPoints(drawnPoints);
  };

  return (
    <div>
      <Draw2DLine onDraw={handleDraw} />
      <Render3DLine points={points} />
    </div>
  );
};

export default App;
