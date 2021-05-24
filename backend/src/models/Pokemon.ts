import mongoose from 'mongoose';

const PokemonSchema = new mongoose.Schema({
    number: Number,
    name: String,
    types: Array,
    img: String,
})
export const PokemonModel = mongoose.model('Pokemon', PokemonSchema, 'pokemon');