import React from 'react'
import "./homepage.css";
import SearchBar from '../searchBar/SearchBar';
import Products from '../products/Products';

function Homepage() {

  return (
    <div className='homepageContainer'>
      <SearchBar/>
      <Products/>
    </div>
  )
}

export default Homepage;