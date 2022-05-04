import './App.css'

import React from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'

import ReactSlickBanner from './components/ReactSlickBanner'

function App() {
  return (
    <Router>
      <div className="App">
        <h1>spike react-a11y-banner</h1>
        <div className="banners">
          <Routes>
            <Route path="/" element={<div>home</div>} />
            <Route path="/react-slick" element={<ReactSlickBanner />} />
          </Routes>
        </div>
        <footer>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/react-slick">react-slick</Link>
            </li>
          </ul>
        </footer>
      </div>
    </Router>
  )
}

export default App
