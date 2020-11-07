import React, { FunctionComponent, useState } from 'react';
import Pokemon from '../models/pokemon';
import PokemonForm from '../components/pokemon-form';

const PokemonAjout: FunctionComponent = () => {

    // Generer l'id pour le pokemon
    const [id] = useState<number>(new Date().getTime());
    const [pokemon] = useState<Pokemon|any>(new Pokemon(id, undefined, undefined, undefined, undefined, undefined, new Date()));

    return (
        <div>
            <h1 className="header center">Ajouter un pokemon</h1>
                <PokemonForm pokemon={pokemon} isEditForm={false}></PokemonForm>
        </div>

    )
}

export default PokemonAjout;