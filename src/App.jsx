import { useState } from 'react'
import './css/app.css'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Resume from './pages/Resumes'
import Contact from './pages/Contacts'


const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  )
}

export default App
