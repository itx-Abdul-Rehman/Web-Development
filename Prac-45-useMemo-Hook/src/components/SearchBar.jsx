import React from 'react'

const SearchBar = ({searchItem,setSearchItem}) => {
  return (
    <div>
       <input type="text" value={searchItem} onChange={(e)=>setSearchItem(e.target.value)} />
    </div>
  )
}

export default SearchBar
