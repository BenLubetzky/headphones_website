import React from 'react'
import "./searchBar.css";

function SearchBar() {

    const handleSubmit = (e) =>{
        e.preventDefault();
    }

    return (
        <div className='searchBarContainer'>
            <form onSubmit={handleSubmit} className='searchBarForm'>
                <input placeholder='Search For Your New Headphones'/>
            </form>
        </div>
    )
}

export default SearchBar