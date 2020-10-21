import React, { FunctionComponent } from 'react';
import Pokemonlist from './pages/pokemon-list';
// import { FruitsAPI, Fruit, currentUserd} from './quelque-part'
// J'ajoute ça peut être -> import POKEMONS from './models/mock-pokemons';

const App: FunctionComponent = () => {
    return (
    <Pokemonlist />
        // <h1>Bonjour, {pokemons[0].name}</h1>
    )
}

export default App;

/*
export const App: React.FC = () => {
 const name: String = 'React';
    
 return (
  <h1>Bonjour, {name} !</h1>
 )
}*/

/*  
import React from 'react';

export default class App extends React.Component {
    const name: string = "React";

    render(){
        <h1>Bonjour, {name} !</h1>;
    }
} 
*/