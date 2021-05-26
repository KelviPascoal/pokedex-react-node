import { Container, PokemonInfo } from "./styles";
import { FaStar } from "react-icons/fa";

export const PokemonCard = (props: any) => {
    const pokemon = props.children;
    const pokemonBgc = pokemon.types[0]


    return (
        <Container bgColor={pokemonBgc}>
            <header>
                <span>{pokemon.number}</span>
                <button><FaStar /></button>
            </header>
            <PokemonInfo>
                <div className="container-image">
                    <img src={pokemon.img} alt="pokemon" />
                </div>
                <div className="container-contant">
                    <strong>{pokemon.name}</strong>
                    <span>{pokemon.types.join(" | ")}</span>
                </div>
            </PokemonInfo>
        </Container>
    )
}