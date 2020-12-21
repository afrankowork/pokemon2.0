import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import {Progress, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import '../styleSheets/PokeInformation.css'
const PokeInformation = () => {
    
    const [pokeData, setPokeData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    let {pokemonName} = useParams();
    
    
    useEffect(()=> {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((response)=> {
            return response.json()
        }).then((data)=> {
            setPokeData(data);
            setIsLoading(false);
            console.log(pokeData)
        })
    }, [isLoading])
    

    const PokemonInfo = () => {
        return (
            <div id='indivPokeCont'>
                <div id='idTypesCont'>
                    <div>{pokeData.id}</div>
                    {pokeData.types.length >1 ? <div className='typesPoke'>{pokeData.types[0].type.name} {pokeData.types[1].type.name} </div> : <div className='typesPoke'>{pokeData.types[0].type.name}</div>}
                    
                </div>
                <hr/>
                <div id='imgStatsPoke'>
                    <div><img id='imgStyle' height="200px" width="200px" src={`https://pokeres.bastionbot.org/images/pokemon/${pokeData.id}.png`} alt=""/><p id='nameStyle'>{pokeData.name}</p></div>
                    <div id='statBars'>
                        {pokeData.stats[0].stat.name}<Progress className="progressStyle" value={pokeData.stats[0].base_stat} color="warning">{pokeData.stats[0].base_stat}</Progress>
                        <br/>
                        {pokeData.stats[1].stat.name}<Progress className="progressStyle" value={pokeData.stats[1].base_stat} color="warning">{pokeData.stats[1].base_stat}</Progress>
                        <br/>
                        {pokeData.stats[2].stat.name}<Progress className="progressStyle" value={pokeData.stats[2].base_stat} color="warning">{pokeData.stats[2].base_stat}</Progress>
                        <br/>
                        {pokeData.stats[3].stat.name}<Progress className="progressStyle" value={pokeData.stats[3].base_stat} color="warning">{pokeData.stats[3].base_stat}</Progress>
                        <br/>
                        {pokeData.stats[4].stat.name}<Progress className="progressStyle" value={pokeData.stats[4].base_stat} color="warning">{pokeData.stats[4].base_stat}</Progress>
                        <br/>
                        {pokeData.stats[5].stat.name}<Progress className="progressStyle" value={pokeData.stats[5].base_stat} color="warning">{pokeData.stats[5].base_stat}</Progress>
                    </div>
                </div>
                <div>
                    
                    <div id='movesStyle'>
                        Moves:
                        <div>{pokeData.moves[0].move.name}</div>                            
                        <div>{pokeData.moves[1].move.name}</div>
                        <div>{pokeData.moves[2].move.name}</div>
                        <div>{pokeData.moves[3].move.name}</div>
                    </div>
                </div>
            </div>
        )
    }


    return(
        <div id='backStyle'>
            <button id='btnHome'><Link className='buttonStyle' to={`/`}>Return Home</Link></button>
            {isLoading ? <h4>Loading Pokemon</h4> : PokemonInfo()}
        </div>
    )
}

export default PokeInformation;