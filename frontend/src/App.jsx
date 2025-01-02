import React from 'react'
import "./app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home.js'
import NotFound from './pages/NotFound.js'
import Success from './pages/Success.js'
const App = () => {
  return <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/success" element={<Success />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>

};

export default App