import { PokemonModel } from "../models/Pokemon";


interface Pokemon {
    number: number;
    name: string;
    types: string[];
    img: string;
    abilities: string;
}


export const PokemonRepository = {
    async create(pokemon: Pokemon) {

        const pokemonCreated = await PokemonModel.create(pokemon);
        return pokemonCreated;
    },

    async findByNumber(number: number) {

        const pokemon = await PokemonModel.findOne({number: number});
        return pokemon;
    }
    

}