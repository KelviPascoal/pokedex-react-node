import mongoose from 'mongoose';

const PokemonSchema = new mongoose.Schema({
    number: Number,
    name: String,
    types: Array,
    img: String,
    abilities: Array
})
export const PokemonModel = mongoose.model('Pokemon', PokemonSchema, 'pokemon');