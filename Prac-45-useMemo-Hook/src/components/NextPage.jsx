import React, { useMemo, useState } from 'react'
import SearchBar from './SearchBar';
import ItemList from './ItemList';
import { NavLink } from 'react-router-dom';



const NextPage = () => {
  const [searchItem, setSearchItem] = useState("")
  const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'];

  const myFunction = () => {
    return items.filter(item => item.toLowerCase().includes(searchItem.toLowerCase()))

  }
  const filteredItems = useMemo(myFunction, [searchItem, items])

  return (
    <div>
      <NavLink to="/"><h3>Home Page</h3></NavLink>
      <NavLink to="/searchpage"><h3>Search Page</h3></NavLink>
      <NavLink to="/reportpage"><h3>Report Page</h3></NavLink>
      <hr />
      <h1>item Search</h1>
      <SearchBar searchItem={searchItem} setSearchItem={setSearchItem} />
      <ItemList items={filteredItems} />
    </div>
  )
}

export default NextPage
