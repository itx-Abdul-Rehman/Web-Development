import React, { useEffect} from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {


  useEffect(() => {
     
    document.title="React Routing-About Us"
   
  }, [])


  const activeRoute = (e) => {
    return e.isActive?"text-red-700 underline ":""
  }


  return (
    <div>
      <nav className='text-white  w-[100vw]  h-[15vh] bg-slate-900 flex justify-around items-center' >
        <div className='text-2xl'>About Us</div>
        <div className=''>
          <div>
            <ul className='flex gap-10 text-[18px]'>
              <NavLink className={activeRoute} to="/"><li>Home</li></NavLink>
              <NavLink className={activeRoute} to="/contactus"><li>Contact Us</li> </NavLink>
              <NavLink className={activeRoute} to="/aboutus"><li>About us</li></NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default About
