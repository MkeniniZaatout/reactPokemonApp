import React, { FunctionComponent } from 'react';
import Pokemonlist from './pages/pokemon-list';
import PokemonDetail from './pages/pokemon-detail';
import PokemonAjout from './pages/pokemon-ajout';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import { FruitsAPI, Fruit, currentUserd} from './quelque-part'
// J'ajoute ça peut être -> import POKEMONS from './models/mock-pokemons';
import PokemonEdit from './pages/pokemon-edit'
import PageNotfound from './pages/page-not-found';
import Login from './pages/login';
import { Icon, InlineIcon } from '@iconify/react';
import pokemonIcon from '@iconify/icons-simple-icons/pokemon';

const App: FunctionComponent = () => {
    return (
    <Router>
        <div>
        {/* La barre de navigation commun à toutes les pages */}
            <nav>
                <div className='nav-wrapper teal'>
                    <Link to="/" className="brand-logo center">Pokédex</Link>
                    <Icon icon={pokemonIcon} />
                </div>
            </nav>
            {/* Le systeme de gestion des routes de notre application */}
            <Switch>
                <Route exact path="/" component={Pokemonlist} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/pokemons" component={Pokemonlist} />
                <Route exact path="/pokemons/:id" component={PokemonDetail} />
                <Route exact path="/add" component={PokemonAjout} />
                {/** 404 Page not found : Toujours à mettre à la fin des route 
                 * sinon toute les routes seront intercepter par la route PageNotfound */}
                <Route path="/pokemons/edit/:id" component={PokemonEdit} />
                <Route component={PageNotfound} />
            </Switch>
        </div>
    </Router>
        // <h1>Bonjour, {pokemons[0].name}</h1>
    )
}

export default App;

/*
export const App: React.FC = () => {
 const name: String = 'React';
    
 return (
  <h1>Bonjour, {name} !</h1>
 )
}*/

/*  
import React from 'react';

export default class App extends React.Component {
    const name: string = "React";

    render(){
        <h1>Bonjour, {name} !</h1>;
    }
} 
*/