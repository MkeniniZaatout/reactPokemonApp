import React, { FunctionComponent, useState, useEffect } from 'react';
import PokemonCard from '../components/pokemon-card';
import Pokemon from '../models/pokemon';
import { useHistory } from 'react-router-dom';
import PokemonSearch from '../components/pokemon-search';
import Button from 'react-bootstrap/Button';

const Pokemonlist: FunctionComponent = () => {

    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const history = useHistory();

    useEffect(() => {
        fetch('http://localhost:3001/pokemons')
        .then(response => response.json())
        .then((pokemons) => {
            setPokemons(pokemons)
        });
    }, []);
    return (
        <div>
            <h1 className="center">Pokédex</h1>
            <div className="container">
                <div className="center">
                    <Button onClick={() => {history.push(`/add`);}}>Ajouter un pokemon</Button>
                </div>
                <PokemonSearch/>
                <div className="row">                
                {pokemons.map(pokemon => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} /*{borderColorCardPokemon='red'}*/ />
                ))}
                </div>
            </div>
        </div>
    );
}

export default Pokemonlist;