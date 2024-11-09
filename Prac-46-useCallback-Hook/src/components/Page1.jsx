import React from 'react'
import { NavLink } from 'react-router-dom'

export const Page1 = () => {
  return (
   <div>
      <ul className='flex justify-around text-[24px] gap-4'>
     <NavLink className={(e)=>{return e.isActive?"text-red-600":""}} to="/"><li>Home</li></NavLink>
     <NavLink  className={(e)=>{return e.isActive?"text-red-600":""}} to="/page1"><li>Page 1</li></NavLink>
     </ul>


   </div>
  )
}
