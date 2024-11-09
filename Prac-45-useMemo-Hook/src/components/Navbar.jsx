import React, { useMemo, useState } from 'react'
import { NavLink } from 'react-router-dom'


const num = new Array(3000000).fill(0).map((_, i) => {
    return {
        index: i,
        isMatched: i === 2000000,
    }
})



const Navbar = () => {
    const [count, setCount] = useState(0)
    const [number, setNumber] = useState(num)

    //const myValue=number.find(i=>i.isMatched===true);// without useMemo this function run every render thats cause our app slow response
    const cacheValue = useMemo(() => number.find(i => i.isMatched === true), [number])//function run initial render, store result and
    // used next render if number not changed other run again and new result store

    return (
        <div>
            <NavLink to="/"><h3>Home Page</h3></NavLink>
            <NavLink to="/searchpage"><h3>Search Page</h3></NavLink>
            <NavLink to="/reportpage"><h3>Report Page</h3></NavLink>
            <hr />
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>

        </div>
    )
}

export default Navbar
