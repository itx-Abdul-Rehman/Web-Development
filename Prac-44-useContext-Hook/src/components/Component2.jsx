import React from 'react'
import { NavLink } from 'react-router-dom'
import Name from './Name'

const Component2 = () => {
    return (
        <div>
            <ul className='flex text-[26x] gap-2 font-semibold'>
                <NavLink className={(e) => {return e.isActive ? "bg-red-800" : ""}} to="/component1"><li>Component 1</li></NavLink>
                <NavLink className={(e) => {return e.isActive ? "bg-red-800" : ""}} to="/component2"><li>Component 2</li></NavLink>
                <NavLink className={(e) => {return e.isActive ? "bg-red-800" : ""}} to="/component3"><li>Component 3</li></NavLink>
            </ul>

            <Name />
        </div>
    )
}

export default Component2
