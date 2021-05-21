import { Router } from 'express';
import { create, findAll, deletePokemon } from './controllers/PokemonController';

const routes = Router();

routes.post("/pokemons", create);
routes.get("/pokemons", findAll);
routes.delete("/pokemons/:number", deletePokemon);


export { routes };