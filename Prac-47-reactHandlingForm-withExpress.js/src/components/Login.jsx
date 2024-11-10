import { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { NavLink,useNavigate } from 'react-router-dom'

function Login() {
  const { register, handleSubmit, reset, setError, watch, formState: { errors, isSubmitting } } = useForm()
  const navigate=useNavigate()

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d * 1000);
    })
  }

  const onSubmit = async (data) => {
  
    try {
      let userData = await fetch("http://localhost:3000/login",
        { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
      let res = await userData.text()
      console.log(data, res)
 
      if(userData.ok){
        reset()
        navigate("/dashboard");
      }else{
        console.log("Failed to login")
      }
      

    } catch (error) {
      console.error("An error occured during login: ",error);
    }

  }

  return (
    <>
      <div className='flex flex-col gap-8 justify-center items-center h-[100vh] bg-zinc-800 '>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col shadow-2xl  gap-4  p-8 '>
          <input  {...register('email', { required: { value: true, message: "Email is required*" } })} className='px-1 w-[22vw] h-8 border-1 rounded-[8px] ' placeholder='Email Address' type="email" />
          {errors.email && <div className='text-red-500 text-[12px]'>{errors.email.message}</div>}
          <input  {...register('password', { required: { value: true, message: 'Password is required*' }, minLength: { value: 8, message: "minimum password length 8 required*" } })} className='px-1 w-[22vw] h-8 border-1 rounded-[8px] ' placeholder='Password' type="password" />
          {errors.password && <div className='text-red-500 text-[12px]'>{errors.password.message}</div>}
          <input disabled={isSubmitting} type="submit" value={isSubmitting ? 'Loginn...' : 'Login'} className='px-1 w-[22vw] h-8 border-1 cursor-pointer bg-gray-950 hover:border-2 text-white rounded-sm ' />
        </form>

        <div className='shadow-2xl  flex justify-center items-center flex-col gap-3 bg-zinc-800 p-4'>
          <div className='text-white'>Do not have account?</div>
          <NavLink to="/"> <div><button className='px-1 w-[22vw] h-8 border-1 cursor-pointer bg-gray-950 hover:border-2 text-white rounded-sm ' >Register</button></div></NavLink>
        </div>
      </div>
    </>
  )
}

export default Login
