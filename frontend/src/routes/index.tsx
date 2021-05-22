import { Route, Switch } from 'react-router-dom';
import { PokemonList } from '../pages/PokemonList';
import { PokemonSearch } from '../pages/Search-Pokemon';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={PokemonList} />
        <Route path="/buscar" component={PokemonSearch} />

    </Switch>
)

export default Routes;