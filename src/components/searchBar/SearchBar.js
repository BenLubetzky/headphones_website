import React, { useEffect, useState } from 'react'
import "./searchBar.css";
import { useDispatch } from 'react-redux';
import { productsActions } from '../../store/productsSlice';

function SearchBar() {

    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) =>{
        e.preventDefault();
        setSearchTerm(e.target.value);
    };

    useEffect(()=>{
        dispatch(productsActions.findProductsByName(searchTerm));
    },[searchTerm])

    return (
        <div className='searchBarContainer'>
            <form onSubmit={handleSubmit} className='searchBarForm'>
                <input placeholder='Search For Your New Headphones' value={searchTerm} onChange={e=>setSearchTerm(e.target.value.toLowerCase())}/>
            </form>
        </div>
    )
}

export default SearchBar