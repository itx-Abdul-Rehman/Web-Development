import { useState } from 'react'
import Component1 from './components/Component1'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Component2 from './components/Component2'
import Component3 from './components/Component3'
import { nameContext } from './Context/nameContext'
import Navbar from './components/Navbar'

function App() {
  const [name, setName] = useState("Abdul Rehman")

  const router = createBrowserRouter([
    {
      path: '/component1',
      element: <Component1 />
    },
    {
      path: '/component2',
      element: <Component2 />
    },
    {
      path: '/component3',
      element: <Component3 />
    },
    {
      path:'/',
      element: <Navbar />
    }
  ])


  return (
    <>
      <nameContext.Provider value={{ name, setName }}>
        <RouterProvider router={router} />
      </nameContext.Provider>
    </>
  )
}

export default App
