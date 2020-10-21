import React, { FunctionComponent, useState, useEffect } from 'react';
import Pokemon from '../models/pokemon';
import POKEMONS from '../models/mock-pokemon';
import PokemonCard from '../components/pokemon-card';

const Pokemonlist: FunctionComponent = () => {

    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        setPokemons(POKEMONS);
    }, []);

    return (
        <div>
            <h1 className="center">Pokédex</h1>
            <div className="container">
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