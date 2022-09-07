import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import getColorByType from "../../Services/ColorTypeService.js"

const Card = ({name, url}) => {

    const [pokemon, setPokemon] = useState({});

    useEffect( () => {
        fetch('https://pokeapi.co/api/v2/pokemon/' + name)
        .then( (response) => response.json() )
        .then( (json) => {
            setPokemon({
                imageDreamWord: json.sprites.other.dream_world.front_default,
                imageDefault: json.sprites.front_default,
                type: json.types[0].type.name,
                color: getColorByType(json.types[0].type.name)
            });
        } )
    }, []);

    return (
        <Link className="cardLink" to={"/pokemon/" + name} target="_blank">
            <div style={{backgroundColor: pokemon.color}} className="card">
                <img className="pokemonImg" src={pokemon.imageDreamWord ? pokemon.imageDreamWord : pokemon.imageDefault} alt={name}/>
                <p className="pokemonName">{name}</p>
            </div>
        </Link> 
    );
}

export default Card;