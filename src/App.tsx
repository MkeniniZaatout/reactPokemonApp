import React, { FunctionComponent, useState, useEffect } from 'react';
import POKEMONS from './models/mock-pokemon';
import Pokemon from './models/pokemon';
// import { FruitsAPI, Fruit, currentUserd} from './quelque-part'
// J'ajoute ça peut être -> import POKEMONS from './models/mock-pokemons';


const App: FunctionComponent = () => {
    const [name, setName]  = useState<String>('React');
    // * Déclarer une variable d'etat "pokemons" 
    // * Initaliser cette etat avec la liste
    //  contenue dans la constante POKEMONS.
    // * Typer l'etat "pokemons" afin qu'il soit 
    // un tableau de pokemon.
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    
    // * Initialiser le state avec un tableau vide : []
    // * Charger la liste POKEMONS à L'initalisation du composant
    // * Veiller à ce que la liste des pokémons  ne soit pas chargé
    // dans le state qu'une seule fois.
    const [pokemonsHook] = useState<Pokemon[]>();
    useEffect(() => {
        setPokemons(POKEMONS)
    }, []);

    return (
    <div className="center">
        <h1>Pokédex</h1>
        <p> Il y a {pokemons.length} pokémons dans le Pokedex !</p>
        <table>
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Aperçu</th>
                    <th>Point de combat</th>
                    <th>Point de santé</th>
                    <th>Date de création</th>
                </tr>
            </thead>
            <tbody>
                {pokemons.map(({name, cp, hp, picture, created}) => (
                    <tr>
                        <td>{name}</td>
                        <img src={picture} alt={name}/>
                        <td>{cp}CP</td>
                        <td>{hp}HP</td>
                        <td>{String(created.getDate()).padStart(2, '0')}/{String(created.getMonth() + 1).padStart(2, '0')}/{created.getFullYear()}</td>
                    </tr>
                ))
                }
            </tbody>
        </table>
    </div>
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