
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from "./components/navbar/Nabar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
      </Router>

    </div>
  );
}

export default App;
