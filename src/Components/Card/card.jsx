import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import './card.css';

const Card = ({name, url}) => {
    const colors = {
        'fire':     'rgba(248, 165, 79, 0.7)',
        'grass':    'rgba(93, 190, 98, 0.7)',
        'water':    'rgba(85, 158, 223, 0.7)',
        'ground':   'rgba(215, 133, 85, 0.7)',
        'electric': 'rgba(237, 213, 63, 0.7)',
        'ghost':    'rgba(105, 112, 197, 0.7)',
        'ice':      'rgba(126, 212, 201, 0.7)',
        'dark':     'rgba(95, 96, 109, 0.7)',
        'bug':      'rgba(157, 193, 48, 0.7)',
        'dragon':   'rgba(7, 115, 199, 0.7)',
        'fairy':    'rgba(239, 151, 230, 0.7) ',
        'fighting': 'rgba(217, 66, 86, 0.7)',
        'flying':   'rgba(155, 180, 232, 0.7)',
        'normal':   'rgba(154, 157, 161, 0.7)',
        'poison':   'rgba(181, 99, 206, 0.7)',
        'psychic':  'rgba(248, 124, 122, 0.7)',
        'rock':     'rgba(206, 193, 140, 0.7)',
        'Steel':    'rgba(85, 150, 164, 0.7)'
    };

    const [pokemon, setPokemon] = useState({});

    useEffect( () => {
        fetch('https://pokeapi.co/api/v2/pokemon/' + name)
        .then( (response) => response.json() )
        .then( (json) => {
            setPokemon({
                imageDreamWord: json.sprites.other.dream_world.front_default,
                imageDefault: json.sprites.front_default,
                type: json.types[0].type.name,
                color: colors[json.types[0].type.name]
            });
        } )
    }, []);

    return (
        <Link className="cardLink" to={"/pokemon/" + name}>
            <div style={{backgroundColor: pokemon.color}} className="card">
                <img className="pokemonImg" src={pokemon.imageDreamWord ? pokemon.imageDreamWord : pokemon.imageDefault} alt={name}/>
                <p className="pokemonName">{name}</p>
            </div>
        </Link> 
    );
}

export default Card;