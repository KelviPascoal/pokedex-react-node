import { useEffect, useState } from 'react'
import { PokemonBox } from '../../components/PokemonCard'
import { Container, Form } from './styles';
import { api } from '../../service/api';
import { Button } from '../../components/Button';
import { FaSearch } from "react-icons/fa";
import { Input } from '../../components/Input';
import { Footer } from '../../components/Footer'
import pikachu from '../../assets/pikachuSearch.png'

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
            <Form>
                <Input placeholder="Buscar" />
                <Button><FaSearch /></Button>
            </Form>

            <Container>
                {pokemons && pokemons.map((pokemon: Pokemon) => <PokemonBox key={pokemon.id}>{pokemon}</PokemonBox>)}
            </Container>
            <Footer imageFooter={pikachu} textFooter="" />
        </>
    )
}