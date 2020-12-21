import React, {useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import PokeInformation from './PokeInformation';
import {Button, Form, FormGroup, Input} from 'reactstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import '../styleSheets/PokeDisplay.css'


const PokemonDisplay = () => {
    
    const [pokeState, setPokeState] = useState('');
    const [pokeName, setPokeName] = useState([]);
    const [isLoading, setLoading] = useState(true);
    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/`)
        .then((response)=>{
            return response.json()
        }).then((data)=>{
            setPokeName(data.results)
            setLoading(false)
            console.log(pokeName)
        })
    }, [isLoading])

const PokeMapper = () => {
    return pokeName.map((poke, num) => {
        return (
            <div className="indivPoke">
                <p className='pokeID'>{num+1}. {poke.name}</p>
                <img height="200px" width="200px" src={`https://pokeres.bastionbot.org/images/pokemon/${num+1}.png`} alt=""/>
                <br/>
                <button className='buttonSpacing' ><Link className='buttonStyle' to={`/${poke.name}`}>More Details</Link></button>
               
                
            </div>
        )
    })
}    

    

    
   

    return(
        <>
       
        <h4 id='headerLand'>Search For A Pokemon or Checkout One Below</h4>
            <input id='searchStyle' type="text" value={pokeState} placeholder="Enter a Pokemons Name Here.....eg Pikachu" onChange={e => setPokeState(e.target.value)}/>
            
            <button className='buttonSpacing'><Link className='buttonStyle' to={`/${pokeState.toLowerCase()}`}>Click to Search!</Link></button>
        <div id="pokeContainer">
             {isLoading ? <p>Loading Pokemon</p> : PokeMapper()}
        </div>
       
        </>
    )
}

export default PokemonDisplay

