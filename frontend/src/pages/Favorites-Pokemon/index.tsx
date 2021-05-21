import { useEffect, useState } from 'react'
import { PokemonBox } from '../../components/Pokemon-card'
import { api } from '../../service/api';

interface PokemonProps {
    id: string;
    number: Number;
    name: string;
    type: string;
    img: string;
}

export const PokemonFavorites: React.FC = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        api.get("pokemons").then((response) => {
            setPokemons(response.data)
        })
    }, [])

    return (
        <>
            {pokemons && pokemons.map((pokemon: PokemonProps) => <PokemonBox key={pokemon.id}>{pokemon}</PokemonBox>)}
        </>
    )
}