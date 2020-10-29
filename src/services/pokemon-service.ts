import { isThisTypeNode } from 'typescript';
import Pokemon from '../models/pokemon';

export default class PokemonService {
    
    static getPokemons(): Promise<Pokemon[]> {
        return fetch('http://localhost:3001/pokemons')
        .then(response => response.json());
    }

    static getPokemon(id: number): Promise<Pokemon|null> {
        return fetch(`http://localhost:3001/pokemons/${id}`)
            .then(res => res.json())
            .then(data => this.isEmpty(data) ? null : data)
            .catch(error => this.handleError(error));
    }

    static updatePokemon(pokemon: Pokemon): Promise<Pokemon|null> {
        return fetch(`http://localhost:3001/pokemons/${pokemon.id}`, {
            method: 'PUT',
            body: JSON.stringify(pokemon),
            headers: { 'Content-Type': 'application/json' }
        }).then(res=> res.json()).catch(error => this.handleError(error));
    
    }

    static handleError(error: Error): void {
        console.error(error);
        throw new Error(error.toString());
    }


    static isEmpty(data: Object): boolean {
        return Object.keys(data).length === 0;
    }

}