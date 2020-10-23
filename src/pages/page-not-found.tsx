import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

const PageNotfound: FunctionComponent = () => {

    return (
    <div className="center">
      <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png" alt="Page non trouvée"/>
      <h1>404 NOT FOUND</h1>
      <h2>Hey, cette page n'existe pas !</h2>
      <Link to="/" className="waves-effect waves-teal btn-flat">
        Retourner à l'accueil
      </Link>
    </div>
    );
}

export default PageNotfound;