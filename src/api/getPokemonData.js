import fetchApi from "../utils/fetch.js";
import env from "../utils/environment.js";

export const getPokemonDataWithAbilities = async (page) => {
    try {
        const limit = 20
        const pokemonData = await fetchApi(`${env.pokeApi}/pokemon?limit=${limit}&offset=${(page - 1) * limit}}`);
        const pokemonWithAbilities = pokemonData.results.map(async (pokemon, idx) => {
            const data = {
                name: pokemon.name,
            }
            try {
                const pokemonData = await fetchApi(pokemon.url)
                Object.assign(data, {
                    img: pokemonData.sprites.front_default,
                    id: pokemonData.id
                })
                const abilities = pokemonData.abilities.map(pokemonAbilities => {
                    return pokemonAbilities.ability.name
                })
                Object.assign(data, {
                    abilities,
                })
                return data
            } catch (error) {
                throw new Error(`Error at ${idx}: ${error}`)
            }
        })
        return await Promise.all(pokemonWithAbilities)
    } catch (error) {
        throw new Error(error)
    }
}

export const getPokemonDetail = async (pokemonId) => {
    try {
        const pokemon = await fetchApi(`${env.pokeApi}/pokemon/${pokemonId}`)
        const data = {
            id: pokemon.id,
            name: pokemon.name,
            img: pokemon.sprites.front_default
        }
        const types = pokemon.types.map(async (pokemonType) => {
            try {
                const data = await fetchApi(pokemonType.type.url)
                return {
                    name: data.name,
                    img: data.sprites["generation-viii"]["sword-shield"].name_icon
                }
            } catch (error) {
                throw new Error(error)
            }
        })
        return {
            ...data,
            types: await Promise.all(types)
        }
    } catch (error) {
        throw new Error(error)
    }
}