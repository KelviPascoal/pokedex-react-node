import { Route, Switch } from 'react-router-dom';
import { PokemonFavorites } from '../pages/Favorites-Pokemon';
import { PokemonSearch } from '../pages/Search-Pokemon';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={PokemonFavorites} />
        <Route path="/buscar" component={PokemonSearch} />

    </Switch>
)

export default Routes;