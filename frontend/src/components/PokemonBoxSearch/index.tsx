import { Container, PokemonInfo } from "./styles";
import { FaStar } from "react-icons/fa";
import { Button } from "../Button";

export const PokemonBoxSearch = (props: any) => {
    const pokemon = props.children;
    const pokemonBgc = pokemon.types[0]


    return (
        <Container bgColor={pokemonBgc}>

            <PokemonInfo>
                <div className="container-image">
                    <img src={pokemon.img} alt="pokemon" />
                </div>
                <div className="container-contant">
                    <p>
                        <span>Nome: </span>
                        <span>{pokemon.name}</span>
                    </p>
                    <p>
                        <span>Numero: </span>
                        <span>{pokemon.number}</span>
                    </p>
                    <p>
                        <span>Tipos: </span>
                        <span>{pokemon.types.join(" | ")}</span>
                    </p>
                    <p>
                        <span>Abilidades: </span>
                        <span>{pokemon.abilities.join(" | ")}</span>
                    </p>



                </div>
            </PokemonInfo>
        </Container>
    )
}