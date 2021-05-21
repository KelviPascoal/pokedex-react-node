
export const PokemonBox = (props: any) => {
    const pokemon = props.children;
    console.log(pokemon);

    return (
        <div>
            <img src={pokemon.img} alt="pokemon" />
            <strong>{pokemon.name}</strong>
            <span>{pokemon.type}</span>
            <span>{pokemon.number}</span>
        </div>
    )
}