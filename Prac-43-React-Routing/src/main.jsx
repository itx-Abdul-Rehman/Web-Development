import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './component/Navbar'
import Contact from './component/Contact'
import About from './component/About'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    // errorElement: <h1>Error</h1>,
  },
  {
    path: '/contactus',
    element: <Contact />,
    // errorElement: <h1>Error</h1>,
  },
  {
    path: '/aboutus',
    element: <About />,
    // errorElement: <h1>Error</h1>,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
