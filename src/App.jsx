import logo from './logo.svg';
import './App.css';
import PokemonDisplay from './components/PokemonDisplay';
import PokeInformation from './components/PokeInformation'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() { 
  
  

  return (
    <div id='bigContainer'>
     <Router>
        <Switch>
        <Route exact path ='/:pokemonName'>
          <PokeInformation/>
        </Route>
         <Route exact path='/'>
           <PokemonDisplay />
         </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
