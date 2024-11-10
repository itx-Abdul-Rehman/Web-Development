import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import { Dashboard } from './components/Dashboard.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Register />
  },
  {
    path:'/login',
    element: <Login />
  },
  {
    path:'/dashboard',
    element: <Dashboard />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}>

   </RouterProvider>
  </StrictMode>,
)
