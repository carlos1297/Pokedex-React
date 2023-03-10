import { useEffect, createContext, useState, useContext } from "react"

const Pokemones = createContext()

export function usePokemonesContext() {
  const pokemones = useContext(Pokemones)
  return pokemones
}

function PokemonContext({ children }) {
  const [globalPokemons, setGlobalPokemons] = useState([]);

  const [offset, setOffset] = useState(0)
  const [allPokemon, setAllPokemon] = useState([])

  // LLamar a los 20 pokemones
  const getPokemons40 = async (limit = 20) => {

    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`

    const res = await fetch(url)
    const data = await res.json()

    const promes = data.results.map(async (poke) => {
      const res = await fetch(poke.url)
      const data = await res.json()
      return data
    })

    const result = await Promise.all(promes)

    setAllPokemon([...allPokemon, ...result]);
  };

  useEffect(() => {
    getPokemons40()
  }, [offset])


  // Llamar todos los pokemones
  const getAllPokemons = async () => {
    const baseURL = 'https://pokeapi.co/api/v2/';


    const res = await fetch(`${baseURL}pokemon?limit=1000&offset=0`)
    const data = await res.json();

    const promises = data.results.map(async pokemon => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });
    const results = await Promise.all(promises);

    setGlobalPokemons(results)

  }

  useEffect(() => {
    getAllPokemons()
  }, [])

  // función que llama a 50 pokemones mas  
  const onClickLoadMore = () => {
    setOffset(offset + 50);
  };


  return (
    <Pokemones.Provider value={{
      // todos los poke

      globalPokemons,

      allPokemon,

      onClickLoadMore,

    }}>
      {children}
    </Pokemones.Provider>
  )
}

export default PokemonContext