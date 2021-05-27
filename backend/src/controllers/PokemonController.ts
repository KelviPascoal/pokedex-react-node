import express, { Request, Response } from 'express';
import { PokemonModel } from './../models/Pokemon';

export async function create(request: Request, response: Response) {
    const { number, name, types, img, abilities } = request.body;
    const pokemon = {
        number: number,
        name: name,
        types: types,
        img: img,
        abilities: abilities
    }
    const pokemonCreated = await PokemonModel.create(pokemon);
    response.status(201).json(pokemonCreated);
}

export async function findAll(request: Request, response: Response) {
    const pokemons = await PokemonModel.find().sort({ number: 'asc' });

    response.status(200).json(pokemons);
}

export async function deletePokemon(request: Request, response: Response) {
    const { number } = request.params;
    const pokemon: any = await PokemonModel.findOne({ number: number })

    await PokemonModel.findByIdAndDelete(pokemon.id)

    response.status(204).json({ message: "Pokemon discartado 😥" });
}

