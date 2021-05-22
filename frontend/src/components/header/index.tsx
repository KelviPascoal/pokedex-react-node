import { Container } from './styles';

export function Header() {

    return (
        <Container>
            <a href="/"><button>Favoristos</button></a>
            <a href="/buscar"><button>Mais pokemons</button></a>
        </Container>
    )
}