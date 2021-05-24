import { Button } from '../Button';
import { Container } from './styles';
import pokebolaA from '../../assets/pokebolaA.png'
import { Link } from 'react-router-dom';
import { PokemonList } from '../../pages/PokemonList';

export function Header() {

    return (
        <Container>
            <div>
                <img src={pokebolaA} alt="" />
                <h1>Pokedex</h1>
            </div>

            <div>
                <Link to="/"><button>Minha coleção</button></Link>
                <Link to="/buscar"><button>Mais pokemons</button></Link>
            </div>

        </Container>
    )
}