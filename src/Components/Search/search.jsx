import React, {useState, useEffect} from "react";
import { BiSearch } from 'react-icons/bi';


const Search = () => {

    const [search, setSearch] = useState('');
    const [pokemon, setPokemon] = useState({});

    useEffect( () => {
        
    }, [search] );

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
    };

    useEffect( () => {
        
    }, [pokemon]);

    return (
        <div className="search">
            <input className="searchInput" placeholder='Pesquisar' type="text" name="search" id="search" onChange={(e) => setSearch(e.target.value)}/>
            <BiSearch className="BiSearch" onClick={() => seek() }/>
        </div>
    );
};

export default Search;