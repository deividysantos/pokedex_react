import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';

const Pokemon = () => {
    const {pokemonName} = useParams();
    const [poke, setPoke] = useState({});

    useEffect( () => {
        fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonName)
        .then( (response) => response.json() )
        .then( (json) => {
            setPoke({
                imageDreamWord: json.sprites.other.dream_world.front_default,
                imageDefault: json.sprites.front_default,
                type: json.types[0].type.name
            })
        });
    }, []);

    return (
        <div style={{backgroundColor: poke.color}} className="card">
            <img className="pokemonImg" src={poke.imageDreamWord ? poke.imageDreamWord : poke.imageDefault} alt={pokemonName}/>
        </div>
    );
}

export default Pokemon;