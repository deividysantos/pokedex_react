import React, {useState, useEffect} from 'react';
import Card from '../Card/card';
import './painel.css'

const Painel = () => {

    const [pokemons, setPokemons] = useState([]);
    const [nextPage, setNextPage] = useState([]);
    const [previousPage , setPreviousPage] = useState([]);

    useEffect( () => {
        refresh('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0')
        
    } ,[]);

    function refresh(url){
        fetch(url)
        .then( (response) => response.json() )
        .then(  (response) => {
            setPokemons(response.results);
            setNextPage(response.next);
            setPreviousPage(response.previous)
        } ) 
    }

    return (
        <div>
            <div className='painel'>
                <div className='Container'>
                    <div className='grid'>
                        {pokemons.map( (value) => 
                            <Card key={value.name}  url={value.url} name={value.name}/>  
                        )}  
                    </div>
                </div>
            </div>

            <div className='butons'>
                {previousPage !== null &&
                    <button className='buttonEnabled' onClick={ () => refresh(previousPage)}>Página anterior</button>  
                }

                {previousPage == null &&
                    <button className='disabled'>Página anterior</button>  
                }
                <button className='buttonEnabled' onClick={ () => refresh(nextPage)}>Próxima Página</button>  
            </div>
        </div>
    );
}

export default Painel;