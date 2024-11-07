import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Section1 from './components/Section1'
import Section2 from './components/Section2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <Section1 />
     <Section2 />
    </>
  )
}

export default App
