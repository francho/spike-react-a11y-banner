import './App.css'

import React from 'react'
import { BrowserRouter, Link, RouteObject, useRoutes } from 'react-router-dom'

import AwesomeSliderBanner from './components/AwesomeSliderBanner'
import ReactSlickBanner from './components/ReactSlickBanner'

function MyRoutes() {
  const element = useRoutes([
    { path: '/react-slick', element: <ReactSlickBanner /> },
    { path: '/awesome-slider', element: <AwesomeSliderBanner /> },
  ])
  return element
}

function App() {
  const routes: RouteObject[] = [
    { path: '/react-slick', element: <ReactSlickBanner /> },
    { path: '/awesome-slider', element: <AwesomeSliderBanner /> },
  ]

  return (
    <BrowserRouter>
      <div className="App">
        <h1>spike react-a11y-banner</h1>
        <div className="banners">
          <MyRoutes />
        </div>
        <footer>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            {routes.map(({ path }) => (
              <li key={`li-${path}`}>
                <Link to={`${path}`}>{path?.replace('/', '')}</Link>
              </li>
            ))}
          </ul>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
