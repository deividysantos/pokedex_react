import React, {useState, useEffect} from "react";
import { BiSearch } from 'react-icons/bi';
import { useNavigate  } from 'react-router-dom';
import './search.css';


const Search = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState('');

    const seek = (e) => {
        e.preventDefault();
        fetch('https://pokeapi.co/api/v2/pokemon/' + search.toLowerCase() )
        .then( (response) => response.json() )
        .then( (json) => {
            navigate(/pokemon/+search.toLowerCase())
        } ).catch(err => console.log(err))
    };

    return (
        <form onSubmit={(e) => seek(e)}  className="search">
            <input className="searchInput" placeholder='Pesquisar' type="text" name="search" id="search" onChange={(e) => setSearch(e.target.value.toLowerCase())}/>
            <BiSearch className="BiSearch" onClick={(e) => seek(e) }/>
        </form>
    );
};

export default Search;