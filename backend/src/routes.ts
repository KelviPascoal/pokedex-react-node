import { Router } from 'express';
import { create, findAll, deletePokemon } from './controllers/PokemonController';

import { findAllTypes } from './controllers/TypesController';

const routes = Router();

routes.post("/pokemons", create);
routes.get("/pokemons", findAll);
routes.delete("/pokemons/:number", deletePokemon);

routes.get("/type", findAllTypes);


export { routes };