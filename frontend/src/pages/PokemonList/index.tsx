import { FormEvent, useEffect, useState } from 'react'
import { PokemonCard } from '../../components/PokemonCard'
import { Container, Form } from './styles';
import { api } from '../../service/api';
import { Button } from '../../components/Button';
import { FaSearch } from "react-icons/fa";
import { Input } from '../../components/Input';

interface Pokemon {
    id: string;
    number: Number;
    name: string;
    types: string[];
    img: string;
}

export function PokemonList() {
    const [pokemonsFilter, setPokemonsFilter] = useState<Pokemon[]>([])
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [inputValue, setInputValue] = useState('');



    useEffect(() => {
        api.get("pokemons").then((response) => {
            setPokemons(response.data)
            setPokemonsFilter(response.data)

        })
    }, [])

    function filterPokemons(value: string) {

        if (!inputValue) {
            setPokemonsFilter(pokemons);
            return;
        }

        const inputValueLowerCase = inputValue.toLowerCase();
        const response = pokemons.filter((p: Pokemon) => String(p.number) == inputValue ||
            p.name.match(inputValueLowerCase) ||
            !!p.types.find(type => type == inputValueLowerCase));


        setPokemonsFilter(response)
    }

    useEffect(() => {
        filterPokemons(inputValue)
    }, [inputValue])


    return (
        <>
            <Form >
                <Input
                    value={inputValue}
                    onChange={(e) => { setInputValue(e.target.value) }}
                />
                <Button type="submit"><FaSearch /></Button>
            </Form>
            <Container>
                {pokemons && pokemonsFilter.map((pokemon: Pokemon) => <PokemonCard key={pokemon.id}>{pokemon}</PokemonCard>)}
            </Container>
        </>
    )
}