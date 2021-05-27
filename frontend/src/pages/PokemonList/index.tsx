import { useEffect, useState } from 'react'
import { PokemonCard } from '../../components/PokemonCard'
import { Container, Form } from './styles';
import { api } from '../../service/api';
import { Input } from '../../components/Input';
import Select from '../../components/Select';
import { Pokemon } from '../../types/Pokemon'

interface OptionProps {
    label: string;
    value: string;
}

export function PokemonList() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [pokemonsFilter, setPokemonsFilter] = useState<Pokemon[]>([])

    const [inputValue, setInputValue] = useState('');
    const [optionList, setOptionList] = useState<OptionProps[]>([]);
    const [selectTypeValue, setSelectTypeValue] = useState('')

    useEffect(() => {
        api.get("pokemons").then((response) => {
            setPokemons(response.data);
            setPokemonsFilter(response.data);
        })
        api.get("type").then((response) => {
            setOptionList(response.data)
        })
    }, [])


    function filterPokemonType(typeValue: string) {
        let pokemonsFiltred = pokemons;

        if(typeValue) {
         pokemonsFiltred = pokemons.filter((p: Pokemon) => p.types.find(type => type == typeValue))
        }

        if (inputValue) {
            pokemonsFiltred = pokemonsFiltred.filter((p: Pokemon) => String(p.number) == inputValue ||
                p.name.match(inputValue));
        }

        setPokemonsFilter(pokemonsFiltred);
    }

    function filterPokemonsSearch(value: string) {
        let pokemonsFitred = pokemons;

        const inputValueLowerCase = value.toLowerCase();

        if(inputValueLowerCase) {
         pokemonsFitred = pokemonsFilter.filter((p: Pokemon) => String(p.number) == inputValueLowerCase ||
            p.name.match(inputValueLowerCase));
        }


        if (selectTypeValue) {
            pokemonsFitred = pokemonsFitred.filter((p: Pokemon) => p.types.find(type => type == selectTypeValue));
        }

        setPokemonsFilter(pokemonsFitred);
    }

    return (
        <>
            <Form >
                <Input
                    value={inputValue}
                    onChange={(e) => {
                        setInputValue(e.target.value);
                        filterPokemonsSearch(e.target.value)
                    }}
                />

                <Select onChangeCapture={event => {
                    setSelectTypeValue(event.currentTarget.value);
                    filterPokemonType(event.currentTarget.value);
                }} options={optionList} />


            </Form>
            <Container>
                {pokemons && pokemonsFilter.map((pokemon: Pokemon) => <PokemonCard key={pokemon.id}>{pokemon}</PokemonCard>)}
            </Container>
        </>
    )
}