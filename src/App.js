import './styles/App.css';
import About from './Pages/About';
import Home from './Pages/Home';
import * as React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='NavbarAbout'>
        <nav class="menu" id="navbar">
          <ul id="navbar">
            <li id="navbar">
              <h1>
                👨‍🍳 Food Explorer</h1>
            </li>
            <li id="navbar"><NavLink to="/" >Home</NavLink></li>
            <li id="navbar"><NavLink to="/about" >About</NavLink></li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
