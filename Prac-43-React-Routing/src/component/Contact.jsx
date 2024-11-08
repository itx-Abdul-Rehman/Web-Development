import { useEffect,React } from 'react'
import { NavLink } from 'react-router-dom'

const Contact = () => {

   useEffect(() => {
     
     document.title="React Routing-Contact Us"
    
   }, [])
   


  const activeRoute = (e) => {
    return e.isActive?"text-red-700 underline":""
  }
  return (
    <div>
      <nav className='text-white  w-[100vw] h-[15vh] bg-slate-900 flex justify-around items-center' >
        <div className='text-2xl'>Contact Us</div>
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

export default Contact
