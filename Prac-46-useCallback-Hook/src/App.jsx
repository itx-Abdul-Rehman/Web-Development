import { Navbar } from './components/Navbar'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { Page1 } from './components/Page1'

function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element: <Navbar />
    },
    {
      path:"/page1",
      element:<Page1 />
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
