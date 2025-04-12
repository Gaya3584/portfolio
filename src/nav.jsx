// Nav.jsx
import { Link } from 'react-router-dom'
import './nav.css' // optional if you're styling it separately

function Nav() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
