import { useLocation } from 'react-router-dom'
// import  useGlobalPokemons from '../hook/useGlobalPokemons.jsx';
import { usePokemonesContext } from '../hook/usePokemonesContext'
import Card from './components/Card'

export default function SearchPage() {
  const { globalPokemons } = usePokemonesContext()

  const location = useLocation()

  const filteredPokemons = globalPokemons?.filter((pokemon) =>
    pokemon.name
      .toLowerCase()
      .includes(location.state.toLowerCase().replace(/\s+/g, ''))
  )
  return (
    <div className="container">
      <p className="p-search">
        Se encontraron <span>{filteredPokemons.length}</span> Pokémon:
      </p>

      <Card allPokemon={filteredPokemons} />
    </div>
  )
}
