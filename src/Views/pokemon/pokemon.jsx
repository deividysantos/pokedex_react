import getColorByType from "../../Services/ColorTypeService.js"
import Theme from '../../Components/Theme/theme.jsx'
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
                type: json.types[0].type.name,
                name: json.name,
                color: getColorByType(json.types[0].type.name)
            })
        });
    }, []);

    return (
        <div>
            <Theme/>
            <div className="pokeProfileCard" style={{backgroundColor: poke.color}}>
                <p className="pokeProfileName">{poke.name}</p>
                <div className="pokeProfileImg">
                    <img className=""   src={poke.imageDreamWord ? poke.imageDreamWord : poke.imageDefault} alt={pokemonName}/>
                </div>
                
                <div className="pokeProfileStatistics">
                    Tipos: {poke.type}
                </div>

            </div>
            
        </div>
    );
}

export default Pokemon;