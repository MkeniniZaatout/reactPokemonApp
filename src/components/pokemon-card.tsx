import React, { FunctionComponent, useState } from 'react';
import Pokemon from '../models/pokemon';
import './pokemon-card.css';

type Props = {
  pokemon: Pokemon,
  borderColorCardPokemon? : string
};
  

const PokemonCard: FunctionComponent<Props> = ({pokemon, borderColorCardPokemon = '#009688'}) => {

  const [color, setColor] = useState<string>();
    
  const showBorder = () => {
      setColor(borderColorCardPokemon);//On ajoute une nouvelle couleur à la bordure pour ajouter un effet navigation
  }

  const hideColorBorder = () => {
      setColor('#f5f5f5');//On remet la bordure en gris
  }

  return (
    <div className="col s6 m4" onMouseEnter={showBorder} onMouseLeave={hideColorBorder}>
      <div className="card horizontal" style={{ borderColor: color}}>
        <div className="card-image"> 
          <img src={pokemon.picture} alt={pokemon.name}/>
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <p>{pokemon.name}</p>
            <p><small>{pokemon.created.toString()}</small></p>
          </div>
        </div>
      </div> 
    </div>
  );
}
  
export default PokemonCard;