import { useEffect, useState } from 'react'
import { PokemonBox } from '../../components/PokemonCard'
import { Container } from './styles';
import { api } from '../../service/api';
import { Button } from '../../components/Button';
import { FaSearch } from "react-icons/fa";


interface Pokemon {
    id: string;
    number: Number;
    name: string;
    type: string;
    img: string;
}

export function PokemonList() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        api.get("pokemons").then((response) => {
            setPokemons(response.data)
        })
    }, [])

    return (
        <>
            <Button><FaSearch /></Button>
            <Container>
                {pokemons && pokemons.map((pokemon: Pokemon) => <PokemonBox key={pokemon.id}>{pokemon}</PokemonBox>)}
            </Container>
        </>
    )
}