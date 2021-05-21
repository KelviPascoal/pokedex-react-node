import mongoose from 'mongoose';

const PokemonSchema = new mongoose.Schema({
    number: Number,
    name: String,
    type: String,
    img: String,
})
export const PokemonModel = mongoose.model('Pokemon', PokemonSchema, 'pokemon');