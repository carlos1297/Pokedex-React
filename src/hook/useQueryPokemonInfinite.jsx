export const queryPokemonInfintio = async ({ pageParam = 0 }) => {
  const limit = 20
  const offset = pageParam

  let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`

  const res = await fetch(url)
  const data = await res.json()

  const promes = data.results.map(async (poke) => {
    const res = await fetch(poke.url)
    const data = await res.json()
    return data
  })

  // 	imgGif: "",
  const result = await Promise.all(promes)

  const pokedata = result.map((Pokemon) => ({
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
    speed: Pokemon.stats[5].base_stat,
  }))
  return { data: pokedata, nextOffset: offset + limit }
}
