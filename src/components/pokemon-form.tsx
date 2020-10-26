import React, { FunctionComponent, useState } from 'react';
import Pokemon from '../models/pokemon';
import formatType from '../helpers/format-type';
import { useHistory } from 'react-router-dom';
type Props = {
  pokemon: Pokemon
};

type Field = {
    value?:any,
    error?: string,
    isValid?:boolean
};
  
type Form = {
    name: Field,
    hp: Field,
    cp: Field,
    types: Field
}

// ToDo : comprendre comment l'objet pokemon est récupéré entierement ? -> recuperer dans pokemon-edit avec useState
const PokemonForm: FunctionComponent<Props> = ({pokemon}) => {
    const history:any = useHistory();

    let pokemonInfo = {
        name: { value: pokemon.name, isValid: true},
        hp: { value: pokemon.hp, isValid: true},
        cp: { value: pokemon.cp, isValid: true},
        types: { value: pokemon.types, isValid: true},
    };
    // get pokemonInfo with useState type form FROM pokemon-detail 
    const [form, setForm] = useState<Form>(pokemonInfo);

    const types: string[] = [
    'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
    'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
    ];

    const hasType = (type: string): boolean => {
        return form.types.value.includes(type);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
        const fieldName: string = e.target.name;
        const fieldValue: string = e.target.value;
        const newField: Field = { [fieldName]: { value: fieldValue} };
    
        setForm({...form, ...newField});
    }

    const selectType = (type: string, e: React.ChangeEvent<HTMLInputElement>): void => {

        const checked:boolean = e.target.checked;
        let newField: Field;
        let newTypes: string[] = [];
        if(checked) {
            // Si l'utilisateur coche un nouveau type, on l'ajoute à la liste des types du pokemon 
            newTypes = form.types.value.concat([type]);
        } else {
            // Si l'utilisateur decoche un type, on le retire decla liste des types du pokemon. 
            newTypes = form.types.value.filter((currentTypes: string) => currentTypes !== type);
        }
        newField = {value: newTypes };
        // Comprendre
        setForm({...form,...{types: newField} });
    }
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(form);
        history.push(`/pokemons/${pokemon.id}`);
    }

    return (
    <form onSubmit={(e) => handleSubmit(e)}>
        <div className="row">
        <div className="col s12 m8 offset-m2">
            <div className="card hoverable"> 
            <div className="card-image">
                <img src={pokemon.picture} alt={pokemon.name} style={{width: '250px', margin: '0 auto'}}/>
            </div>
            <div className="card-stacked">
                <div className="card-content">
                {/* Pokemon name */}
                <div className="form-group">
                    <label htmlFor="name">Nom</label>
                    <input id="name" name="name" type="text" className="form-control" placeholder={'Nom du pokémon'} value={form.name.value} onChange={e => handleInputChange(e)}></input>
                </div>
                {/* Pokemon hp */}
                <div className="form-group">
                    <label htmlFor="hp">Point de vie</label>
                    <input id="hp" name="hp" type="number" className="form-control" min="0" max="999" value={form.hp.value} onChange={e => handleInputChange(e)} />
                </div>
                {/* Pokemon cp */}
                <div className="form-group">
                    <label htmlFor="cp">Dégâts</label>
                    <input id="cp" name="cp" type="number" className="form-control" min="0" max="999" value={form.cp.value} onChange={e => handleInputChange(e)} />
                </div>
                {/* Pokemon types */}
                <div className="form-group">
                    <label>Types</label>
                    {types.map(type => (
                    <div key={type} style={{marginBottom: '10px'}}>
                        <label>
                        <input id={type} type="checkbox" className="filled-in" value={form.types.value.toString()} checked={hasType(type)} onChange={e => selectType(type, e)}></input>
                        <span>
                            <p className={formatType(type)}>{ type }</p>
                        </span>
                        </label>
                    </div>
                    ))}
                </div>
                </div>
                <div className="card-action center">
                {/* Submit button */}
                <button type="submit" className="btn">Valider</button>
                </div>
            </div>
            </div>
        </div>
        </div>
    </form>
  );
};
   
export default PokemonForm;