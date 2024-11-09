import React,{useCallback,useState} from 'react'
import { NavLink } from 'react-router-dom'
import Data  from './Data'

export const Navbar = () => {
    const [count, setCount] = useState(0)
  const [username,setUsername]=useState("Abdul Rehman")

  const myFunction=useCallback(()=>{  //useCallback cache the function definition and not call if dependencies are same
    return "Just like a wow"
  },[])

  return (
    <div>
     <ul className='flex justify-around text-[24px] gap-4'>
     <NavLink className={(e)=>{return e.isActive?"text-red-600":""}} to="/"><li>Home</li></NavLink>
     <NavLink  className={(e)=>{return e.isActive?"text-red-600":""}} to="/page1"><li>Page 1</li></NavLink>
     </ul>

     <Data username={username} myFunction={myFunction} /> {/* In this component I use memo() but I passed function as a prop
      when below counter run and re-render complete component myFunction again call or myFunction value same (in javascript 
      its considered different),its consider prop is changed or re render this component again thats why I use above useCallback Hook to solve this 
      problem*/ }
     <br /><br />
     <button className='bg-slate-700 border-2 p-2 rounded-lg' onClick={()=>{setCount(count+1)}}>Count: {count}</button>

    </div>
  )
}
