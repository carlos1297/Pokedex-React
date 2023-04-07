import { createContext, useContext, useEffect, useState } from 'react'

const Pokemones = createContext()

export function usePokemonesContext() {
  const pokemones = useContext(Pokemones)
  return pokemones
}

export default function PokemonContext({ children }) {
  const [globalPokemons, setGlobalPokemons] = useState([])

  const getAllPokemons = async () => {
    const baseURL = 'https://pokeapi.co/api/v2/'
    const batchSize = 500

    const res = await fetch(`${baseURL}pokemon?limit=1279&offset=0`)
    const data = await res.json()

    const pokedata = []

    for (let i = 0; i < data.results.length; i += batchSize) {
      const batch = data.results.slice(i, i + batchSize)
      const promises = batch.map(async (pokemon) => {
        const res = await fetch(pokemon.url)
        const data = await res.json()
        return data
      })
      const results = await Promise.all(promises)
      pokedata.push(
        ...results.map((Pokemon) => ({
          img: Pokemon.sprites.other['official-artwork'].front_default,
          imgSvg: Pokemon.sprites.other.dream_world.front_default,
          name: Pokemon.name,
          id: Pokemon.id,
          types: Pokemon.types,
          hp: Pokemon.stats[0].base_stat,
          Attack: Pokemon.stats[1].base_stat,
          defensa: Pokemon.stats[2].base_stat,
          specialAttack: Pokemon.stats[3].base_stat,
          specialDefense: Pokemon.stats[4].base_stat,
          speed: Pokemon.stats[5].base_stat
        }))
      )
    }

    setGlobalPokemons(pokedata)
  }

  useEffect(() => {
    getAllPokemons()
  }, [])

  return (
    <Pokemones.Provider value={{ globalPokemons }}>
      {children}
    </Pokemones.Provider>
  )
}
