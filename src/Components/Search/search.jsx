import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';


const Search = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState('');

    const seek = () => {
        fetch('https://pokeapi.co/api/v2/pokemon/' + search.toLowerCase() )
        .then( (response) => response.json() )
        .then( (json) => {
            navigate(/pokemon/+search.toLowerCase())
        } ).catch(err => console.log(err))
    };

    return (
        <div className="search">
            <input className="searchInput" placeholder='Pesquisar'  type="text" name="search" id="search" onChange={(e) => setSearch(e.target.value)}/>
            <BiSearch className="BiSearch" onClick={() => seek() }/>
        </div>
    );
};

export default Search;