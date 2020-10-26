import React, { FunctionComponent, useState } from 'react';
import Pokemon from '../models/pokemon';
import './pokemon-card.css';
import formatDate from '../helpers/format-date';
import formatType from '../helpers/format-type';
import { useHistory } from 'react-router-dom';
type Props = {
  pokemon: Pokemon,
  borderColorCardPokemon? : string
};
  

const PokemonCard: FunctionComponent<Props> = ({pokemon, borderColorCardPokemon = '#009688'}) => {

  const [color, setColor] = useState<string>();
  // On recupere l'historique du navigateur via useHistory
  const history = useHistory();
    
  const showBorder = () => {
      setColor(borderColorCardPokemon);//On ajoute une nouvelle couleur à la bordure pour ajouter un effet navigation
  }

  const hideColorBorder = () => {
      setColor('#f5f5f5');//On remet la bordure en gris
  }

  const goToPokemon = (id: number) => {
    history.push(`/pokemons/${id}`);
  }

  return (
    <div className="col s6 m4" onClick={() => goToPokemon(pokemon.id)} onMouseEnter={showBorder} onMouseLeave={hideColorBorder}>
      <div className="card horizontal" style={{ borderColor: color}}>
        <div className="card-image"> 
          <img src={pokemon.picture} alt={pokemon.name}/>
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <p>{pokemon.name}</p>
            <p><small>{formatDate(pokemon.created)}</small></p>
            {pokemon.types.map(type => (<span className={formatType(type)} key={type}>{type} </span>))}
          </div>
        </div>
      </div> 
    </div>
  );
}
export default PokemonCard;