import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { FaSearch } from "react-icons/fa";
import { Form, Container } from './styles'
import { FormEvent, useEffect, useState } from "react";
import { api } from "../../service/api";
import { pokeApi } from "../../service/pokeApi";
import { Footer } from '../../components/Footer'
import pikachu from '../../assets/pikachuSearch.png'

export function PokemonSearch() {

    const [img, setImg] = useState('https://data.whicdn.com/images/282958081/original.gif')
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [types, setTypes] = useState([]);
    const [inputValue, setInputvalue] = useState('')

    async function HandleSearch(event: FormEvent) {
        event.preventDefault();
        await pokeApi.get('pokemon/' + inputValue).then(response => {
            const pokemon = response.data;

            setName(pokemon.name)
            setNumber(pokemon.id)
            const numberPokemon = ("000" + pokemon.id).slice(-3);
            const typesName = pokemon.types.map((typeInfo: any) => typeInfo.type.name);
            setTypes(typesName)
            setImg('https://assets.pokemon.com/assets/cms2/img/pokedex/full/' + numberPokemon + '.png')
        })
    }

    console.log(types);



    async function handleClickSave() {
        if (!number || !name || !types || !img) {
            throw new Error('busque o um pokemon antes de salvar')
        }
        const pokemon = {
            number: number,
            name: name,
            types: types,
            img: img
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
                <div className="imgContainer">
                    <img src={img} alt="pokemon" />
                </div>

                <div className="PokemonInfo">
                    <strong>{name}</strong>
                    <span >{types.join(" | ")}</span>
                    <span>{number}</span>
                </div>
            </Container>
            <Button onClick={handleClickSave}>Salvar</Button>
            <Footer imageFooter={pikachu} textFooter="" />

        </>
    )
}