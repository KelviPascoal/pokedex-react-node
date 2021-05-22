import { Container, PokemonInfo } from "./styles";
import { FaStar } from "react-icons/fa";

export const PokemonBox = (props: any) => {
    const iconeprovisorio = "<3"
    const pokemon = props.children;
    console.log(pokemon);

    return (
        <Container>
            <header>
                <span>{pokemon.number}</span>
                <button><FaStar /></button>
            </header>
            <PokemonInfo>
                <div className="container-image">
                    <img src={pokemon.img} alt="pokemon" />
                </div>
                <strong>{pokemon.name}</strong>
                <span>{pokemon.type}</span>
            </PokemonInfo>
        </Container>
    )
}