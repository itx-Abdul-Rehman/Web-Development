import { useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import NextPage from './components/NextPage'
import ReportDashboard from './components/ReportDashboard'

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element: <Navbar />
    },
    {
      path:"/searchpage",
      element:  <NextPage />
    },
    {
      path:"/reportpage",
      element:<ReportDashboard />
    }
  ])

  return (
    <>
     <RouterProvider router={router} >

     </RouterProvider>
    </>
  )
}

export default App
