import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { FaSearch } from "react-icons/fa";
import { Container, Form } from './styles';
import { FormEvent, useState } from "react";
import { pokeApi } from "../../service/pokeApi";
import { PokemonBoxSearch } from '../../components/PokemonBoxSearch'
import { api } from "../../service/api";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";


export function PokemonSearch() {
    const [inputValue, setInputvalue] = useState('')
    const [pokemon, setPokemon] = useState<any>()

    async function HandleSearch(event: FormEvent) {
        event.preventDefault();
        await pokeApi.get('pokemon/' + inputValue).then(response => {
            console.log(response.data);

            const pokemonInfo = {
                name: response.data.name,
                number: response.data.id,
                types: response.data.types.map((typeInfo: any) => typeInfo.type.name),
                img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/' + ("000" + response.data.id).slice(-3) + '.png',
                abilities: response.data.abilities.map((abilityInfo: any) => abilityInfo.ability.name)
            }

            setPokemon(pokemonInfo)

        })
    }

    async function handleSubmit() {
        if (!pokemon) {
            return alert("Busquer um pokemon antes de salvar");
        }

        await api.post('pokemons/', pokemon).then((reposonse) => {
            console.log(reposonse.data);
        })
    }

    return (
        <>
            <Form onSubmit={HandleSearch}>
                <Input
                    value={inputValue}
                    onChange={e => setInputvalue(e.target.value)} />
                <Button type="submit"><FaSearch /></Button>
            </Form>
            <Container>
                <Link to="/">
                    <button className="button-back"><IoIosArrowBack />Voltar</button>
                </Link>
                {!pokemon && <img className="pokebola" src="https://data.whicdn.com/images/282958081/original.gif" alt="" />}
                {pokemon && <> <button className="button-save" onClick={handleSubmit}>Salvar</button>
                    <PokemonBoxSearch >{pokemon}</PokemonBoxSearch>
                </>}

            </Container>
        </>
    )
}