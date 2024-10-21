import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  //case 1 run once time when component mounted
  useEffect(()=>{
   alert('Hey Welcome')
   setTimeout(() => {
     setCount(count+1)
   }, 1000);
  },[])

  //case 2 run when state changed
  useEffect(()=>{
   alert('count state updated')
  },[count])

  //case 3 run every render
  useEffect(()=>{
    alert('Hey! Run every render')
  })

  //case 4 cleanup function mean when component unmounted
  useEffect(()=>{
    alert('Hey')
    return()=>{ // this function run when this component unmounted/deleted
      alert('Component was unmounted')
    }
  },[])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
