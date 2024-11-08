import React from 'react'
 import { useContext } from 'react'
import { nameContext } from '../Context/nameContext'

const Name = () => {
     const value=useContext(nameContext)
  return (
    <div>
       <h1 className='font-semibold'>{value.name}</h1>
    </div>
  )
}

export default Name
