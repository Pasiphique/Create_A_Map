
import Map from './Map/Map.jsx'
import FunFacts from './Pages/FunFacts.jsx'
import Home from './Pages/Home.jsx'
import PittsburghTimeline from './Pages/PittsburghTimeline.jsx'
import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import './styles/App.css'
const App = () => {

  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

    return(
     <div>
        <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">Pittsburgh</Link>
          <ul className={`navbar-menu ${menuActive ? 'active' : ''}`}>
            <li>
              <Link to="/" className="navbar-link">Home</Link>
            </li>
            <li>
              <Link to="/map" className="navbar-link">Pittsburgh Map</Link>
            </li>
            <li>
              <Link to="/timeline" className="navbar-link">Pittsburgh Timeline</Link>
            </li>
          </ul>
          <div className="navbar-toggle"  onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
          <Route path="/timeline" element={<PittsburghTimeline />} />
        </Routes>
     </div>
    )
}
export default App;