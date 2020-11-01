import React, { FunctionComponent, useState } from 'react';
import Pokemon from '../models/pokemon';
import formatType from '../helpers/format-type';
import { useHistory } from 'react-router-dom';
import PokemonService from '../services/pokemon-service';

type Props = {
  pokemon: Pokemon,
  isEditForm: boolean
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
    types: Field,
    picture: Field
}

// ToDo : comprendre comment l'objet pokemon est récupéré entierement ? -> recuperer dans pokemon-edit avec useState
const PokemonForm: FunctionComponent<Props> = ({pokemon, isEditForm}) => {
    const history:any = useHistory();

    let pokemonInfo = {
        name: { value: pokemon.name, isValid: true},
        hp: { value: pokemon.hp, isValid: true},
        cp: { value: pokemon.cp, isValid: true},
        types: { value: pokemon.types, isValid: true},
        picture: { value: pokemon.picture, isValid: true}
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
        const formIsValid: boolean|undefined = validateForm();
        
        if(formIsValid) {
            pokemon.picture = form.picture.value;
            pokemon.name = form.name.value;
            pokemon.cp = form.cp.value;
            pokemon.hp = form.hp.value;
            pokemon.types = form.types.value;
            
            isEditForm? PokemonService.updatePokemon(pokemon).then(()=> { history.push(`/pokemons/${pokemon.id}`) }) : addPokemon();
            // history.push(`/pokemons/${pokemon.id}`);
        }
    }

    const addPokemon = () => {
        PokemonService.addPokemons(pokemon).then( () => { history.push('/pokemons') })
    }

    const isAddForm = () => {
        return !isEditForm;
    }

    const validateForm = (): boolean|undefined => {
        let newForm: Form = form;
        
        // Validator url to check if is Add Or Edit for pokemon Picture in page
        if(isAddForm()) {
            const start = "https://assets.pokemon.com/assets/css2/img/pokedex/detail";
            const end = ".png";
            let newField: Field = {};
            if(!form.picture.value.startsWith(start) || !form.picture.value.endWith(end) ) {
                const errorMsg = "";
                newField = { value: form.picture.value, error: errorMsg, isValid: false };
            } else {
                newField = { value: form.picture.value, error: '', isValid: true };
            }
            newForm = { ...form, ...{picture: newField}};
        }

        // Validator name
        if(!/^[a-zA-Zàéè ]{3,25}$/.test(form.name.value)) {
          const errorMsg: string = 'Le nom du pokémon est requis (1-25).';
          const newField: Field = { value: form.name.value, error: errorMsg, isValid: false };
          newForm = { ...newForm, ...{ name: newField } };
        } else {
          const newField: Field = { value: form.name.value, error: '', isValid: true };
          newForm = { ...newForm, ...{ name: newField } };
        }
    
        // Validator hp
        if(!/^[0-9]{1,3}$/.test(form.hp.value)) {
          const errorMsg: string = 'Les points de vie du pokémon sont compris entre 0 et 999.';
          const newField: Field = {value: form.hp.value, error: errorMsg, isValid: false};
          newForm = { ...newForm, ...{ hp: newField } };
        } else {
          const newField: Field = { value: form.hp.value, error: '', isValid: true };
          newForm = { ...newForm, ...{ hp: newField } };
        }
    
        // Validator cp
        if(!/^[0-9]{1,2}$/.test(form.cp.value)) {
          const errorMsg: string = 'Les dégâts du pokémon sont compris entre 0 et 99';
          const newField: Field = {value: form.cp.value, error: errorMsg, isValid: false};
          newForm = { ...newForm, ...{ cp: newField } };
        } else {
          const newField: Field = { value: form.cp.value, error: '', isValid: true };
          newForm = { ...newForm, ...{ cp: newField } };
        }
    
        setForm(newForm);
        return newForm.name.isValid && newForm.hp.isValid && newForm.cp.isValid;
      }

    const isTypeValid = (type: string):boolean => {

        if(form.types.value.length === 1 && hasType(type)) {
            return false;
        } else if(form.types.value.length >= 3 && !hasType(type)) {
            return false;
        }

        return true;
    }

    const deletePokemon = () => {
        if (window.confirm("Voulez-vous vraiment supprimer le pokemon ?")) { 
            PokemonService.deletePokemon(pokemon.id).then(() => history.push(`/pokemons`) );
        }
    }

    return (
    <form onSubmit={(e) => handleSubmit(e)}>
        <div className="row">
        <div className="col s12 m8 offset-m2">
            <div className="card hoverable"> 
            {isEditForm && (
            <div className="card-image">
                <img src={pokemon.picture} alt={pokemon.name} style={{width: '250px', margin: '0 auto'}}/>
                <span className='btn-floating halfway-fab waves-effect waves-light'>
                    <i onClick={deletePokemon} className='material-icons'>delete</i>
                </span>
            </div>
            )}
            {/* Pokemon Image */}
            <div className="card-stacked">
                <div className="card-content">
                    <div className="form-group">
                        <label htmlFor="picture">Image</label>
                        <input id="picture" name="picture" type="text" className="form-control" value={form.picture.value} onChange={e => handleInputChange(e)} required></input>
                        {/* error */}
                        {form.picture.error && 
                        <div className="card-panel red accent-1">
                            {form.picture.error}
                        </div>}
                    </div>
                </div>
            </div>
            <div className="card-stacked">
                <div className="card-content">
                {/* Pokemon name */}
                <div className="form-group">
                    <label htmlFor="name">Nom</label>
                    <input id="name" name="name" type="text" className="form-control" placeholder={'Nom du pokémon'} value={form.name.value} onChange={e => handleInputChange(e)} required></input>
                {form.name.error && 
                <div className="card-panel red accent-1">
                    {form.name.error}
                </div>
                }
                </div>
                {/* Pokemon hp */}
                <div className="form-group">
                    <label htmlFor="hp">Point de vie</label>
                    <input id="hp" name="hp" type="number" className="form-control" min="0" max="999" value={form.hp.value} onChange={e => handleInputChange(e) } required/>
                </div>
                {/* Pokemon cp */}
                <div className="form-group">
                    <label htmlFor="cp">Dégâts</label>
                    <input id="cp" name="cp" type="number" className="form-control" min="0" max="999" value={form.cp.value} onChange={e => handleInputChange(e)} required/>
                </div>
                {/* Pokemon types */}
                <div className="form-group">
                    <label>Types</label>
                    {types.map(type => (
                    <div key={type} style={{marginBottom: '10px'}}>
                        <label>
                        <input id={type} type="checkbox" className="filled-in" value={form.types.value.toString()} checked={hasType(type)} onChange={e => selectType(type, e)} disabled={!isTypeValid(type)} ></input>
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