import express, { Request, Response } from 'express';
import { PokemonService } from '../services/PokemonServices';
import { PokemonModel } from './../models/Pokemon';

interface Pokemon {
    number: number;
    name: string;
    types: Types[];
    img: string;
    abilities: string[];
    id: string;
}

interface Types {
    type: string;
}

export async function create(request: Request, response: Response) {
    const { number, name, types, img, abilities } = request.body;

    const pokemon = {
        number: number,
        name: name,
        types: types,
        img: img,
        abilities: abilities
    }
    const pokemonCreated = await PokemonService.create(pokemon)
    response.status(201).json(pokemonCreated);
}

export async function findAll(request: Request, response: Response) {
    const { name, type } = request.query;

    if (name && !type) {
    const pokemons = await PokemonModel.find({name: { $regex: '.*' + name + '.*' }  })
    
    response.status(200).json(pokemons);
    return;
}

    if (!name && type) {
    const pokemons = await PokemonModel.find({types: type})
    
    response.status(200).json(pokemons);
    return;
}

    if(name && type){
    const pokemons = await PokemonModel.find({ types: type, name: { $regex: '.*' + name + '.*' }  })
    
    response.status(200).json(pokemons);
    return;
}

    const pokemons = await PokemonModel.find().sort({ number: 'asc' });

    response.status(200).json(pokemons);
}

export async function deletePokemon(request: Request, response: Response) {
    const { number } = request.params;
    const pokemon: any = await PokemonModel.findOne({ number: number })

    await PokemonModel.findByIdAndDelete(pokemon.id)

    response.status(204).json({ message: "Pokemon descartado 😥" });
}

