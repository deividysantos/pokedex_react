import React, {useState, useEffect} from "react";
import './search.css';
import { BiSearch } from 'react-icons/bi';
import { useNavigate  } from 'react-router-dom';


const Search = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const [pokemon, setPokemon] = useState({});

    const seek = () => {
        fetch('https://pokeapi.co/api/v2/pokemon/' + search)
        .then( (response) => response.json() )
        .then( (json) => {
            setPokemon({
                imageDreamWord: json.sprites.other.dream_world.front_default,
                imageDefault: json.sprites.front_default,
                type: json.types[0].type.name
            });
        } ).catch(err => console.log(err))

        navigate("/pokemon/" + search);
    };

    return (
        <div className="search">
            <input className="searchInput" placeholder='Pesquisar' type="text" name="search" id="search" onChange={(e) => setSearch(e.target.value.toLowerCase())}/>
            <BiSearch className="BiSearch" onClick={() => seek() }/>
        </div>
    );
};

export default Search;