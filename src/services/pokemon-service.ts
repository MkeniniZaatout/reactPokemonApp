
/*
import { isThisTypeNode } from 'typescript';
import Pokemon from '../models/pokemon';

export default class PokemonService {
    
    static addPokemons(pokemon: Pokemon): Promise<Pokemon|null> {
        // Date de creation ajouté automatiquement.
        delete pokemon.created;
        
        return fetch(`http://localhost:3001/pokemons`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(pokemon),
        }).then(res=> res.json()).catch(error => this.handleError(error));
    }

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

    static deletePokemon(pokemonId: Number) {
        return fetch(`http://localhost:3001/pokemons/${pokemonId}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json' }
        })
        .then(res => res.json()).catch(err => this.handleError(err));
    }

    static handleError(error: Error): void {
        console.error(error);
        console.log(error.toString());
        throw new Error(error.toString());
    }

    static isEmpty(data: Object): boolean {
        return Object.keys(data).length === 0;
    }

    static searchPokemon(term: string): Promise<Pokemon[]> {
        return fetch(`http://localhost:3001/pokemons?q=${term}`)
        .then(res => res.json())
        .catch(error => this.handleError(error));
    }

}
*/

import Pokemon from "../models/pokemon";
import POKEMONS from "../models/mock-pokemon";
  
export default class PokemonService {
  
  static pokemons:Pokemon[] = POKEMONS;
  
  static isDev = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development');
  
  static getPokemons(): Promise<Pokemon[]> {
    if(this.isDev) {
      return fetch('http://localhost:3001/pokemons')
      .then(response => response.json())
      .catch(error => this.handleError(error));
    }
  
    return new Promise(resolve => {
      resolve(this.pokemons);
    });
  }
  
  static getPokemon(id: number): Promise<Pokemon|null> {
    if(this.isDev) {
      return fetch(`http://localhost:3001/pokemons/${id}`)
      .then(response => response.json())
      .then(data => this.isEmpty(data) ? null : data)
      .catch(error => this.handleError(error));
    }
  
    return new Promise(resolve => {    
      resolve(this.pokemons.find(pokemon => id === pokemon.id));
    }); 
  }
  
  static updatePokemon(pokemon: Pokemon): Promise<Pokemon> {
    if(this.isDev) {
      return fetch(`http://localhost:3001/pokemons/${pokemon.id}`, {
        method: 'PUT',
        body: JSON.stringify(pokemon),
        headers: { 'Content-Type': 'application/json'}
      })
      .then(response => response.json())
      .catch(error => this.handleError(error));
    }
  
    return new Promise(resolve => {
      const { id } = pokemon;
      const index = this.pokemons.findIndex(pokemon => pokemon.id === id);
      this.pokemons[index] = pokemon;
      resolve(pokemon);
    }); 
  }
  
  static deletePokemon(pokemon: Pokemon): Promise<{}> {
    if(this.isDev) {
      return fetch(`http://localhost:3001/pokemons/${pokemon.id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json'}
      })
      .then(response => response.json())
      .catch(error => this.handleError(error));
    }
  
    return new Promise(resolve => {    
      const { id } = pokemon;
      this.pokemons = this.pokemons.filter(pokemon => pokemon.id !== id);
      resolve({});
    }); 
  }
  
  static addPokemon(pokemon: Pokemon): Promise<Pokemon> {
    pokemon.created = new Date(pokemon.created);
  
    if(this.isDev) {
      return fetch(`http://localhost:3001/pokemons`, {
        method: 'POST',
        body: JSON.stringify(pokemon),
        headers: { 'Content-Type': 'application/json'}
      })
      .then(response => response.json())
      .catch(error => this.handleError(error));
    }
  
    return new Promise(resolve => {    
      this.pokemons.push(pokemon);
      resolve(pokemon);
    }); 
  }
  
  static searchPokemon(term: string): Promise<Pokemon[]> {
    if(this.isDev) {
      return fetch(`http://localhost:3001/pokemons?q=${term}`)
      .then(response => response.json())
      .catch(error => this.handleError(error));
    }
  
    return new Promise(resolve => {    
      const results = this.pokemons.filter(pokemon => pokemon.name.includes(term));
      resolve(results);
    });
  
  }
  
  static isEmpty(data: Object): boolean {
    return Object.keys(data).length === 0;
  }
  
  static handleError(error: Error): void {
    console.error(error);
  }
}