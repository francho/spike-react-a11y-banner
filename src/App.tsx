import './App.css'

import React from 'react'
import { BrowserRouter, Link, RouteObject, useLocation, useRoutes } from 'react-router-dom'

import AwesomeSliderBanner from './components/AwesomeSliderBanner'
import ReactImageGalleryBanner from './components/ReactImageGalleryBanner'
import ReactSlickBanner from './components/ReactSlickBanner'

const routes: RouteObject[] = [
  { path: '/react-image-gallery', element: <ReactImageGalleryBanner /> },
  { path: '/react-slick', element: <ReactSlickBanner /> },
  { path: '/awesome-slider', element: <AwesomeSliderBanner /> },
]

function SpikeRoutes() {
  const element = useRoutes(routes)
  return element
}

function Header() {
  const { pathname } = useLocation()
  return (
    <header>
      <h1>{pathname?.replace('/', '')}</h1>
      <small>spike react-a11y-banner</small>
    </header>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <div className="banners">
          <SpikeRoutes />
        </div>
        <footer>
          <ul>
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
