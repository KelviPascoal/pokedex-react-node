import { PokemonModel } from "../models/Pokemon";
import {PokemonRepository} from '../repositories/PokemonRepository'

interface Pokemon {
    number: number;
    name: string;
    types: string[];
    img: string;
    abilities: string;
}
 export const PokemonService = {
  async create(pokemon: Pokemon) {
    console.log(pokemon);

    const pokemonCheck = await PokemonRepository.findByNumber(pokemon.number)

    if (pokemonCheck){
        console.log("pokemonCheck", pokemonCheck);
        
        throw new Error("pokemon ja adicionado animal")
    }
    const pokemonCreated =  await PokemonRepository.create(pokemon);
    
    console.log("1111111111111111111111111111" + pokemonCreated);
    
    return pokemonCreated;

}
}