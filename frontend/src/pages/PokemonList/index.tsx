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
        function loadPokemons() {
            api.get("pokemons").then((response) => {
                setPokemons(response.data);
                setPokemonsFilter(response.data);
            })
        }

        function loadTypes() {
            api.get("type").then((response) => {
                setOptionList(response.data)
            })
        }
        loadTypes()
        loadPokemons()
    }, [])

    function filterByTypes(type: string) {
        api.get("pokemons?type=" + type + "&name=" + inputValue).then(response => {
            setPokemonsFilter(response.data);
        })
    }
    function filterByNameOrNumber(nameOrNumber: string) {
        api.get("pokemons?type=" + selectTypeValue + "&name=" + nameOrNumber).then(response => {
            setPokemonsFilter(response.data);
        })
    }

    return (
        <>
            <Form >
                <Input
                    value={inputValue}
                    onChange={(e) => {
                        setInputValue(e.target.value);
                        filterByNameOrNumber(e.target.value)
                    }}
                />

                <Select onChangeCapture={event => {
                    setSelectTypeValue(event.currentTarget.value);
                    filterByTypes(event.currentTarget.value)
                }} options={optionList} />


            </Form>
            <Container>
                {pokemons && pokemonsFilter.map((pokemon: Pokemon) => <PokemonCard key={pokemon.id}>{pokemon}</PokemonCard>)}
            </Container>
        </>
    )
}