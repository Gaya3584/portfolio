import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './nav'
import Body from './body'
import Mid from './mid'
import Foot from './foot'
import About from './about'
import Experience from './exp'
import Projects from './proj'
import Contact from './contact'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Body />
      <Mid />
      <Foot />
    </BrowserRouter>
  )
}

export default App
