import { useLocation } from 'react-router-dom'
import { usePokemonesContext } from '../hook/usePokemonesContext'
import Card from './components/Card'
import Loaders from './components/Loaders.jsx'

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
        {filteredPokemons === null ? (
          'Cargando'
        ) : filteredPokemons.length === 0 ? (
          'El Pokémon que buscas no se ha encontrado.'
        ) : (
          <>
            Se encontraron <span>{filteredPokemons.length}</span> Pokémon:
          </>
        )}
      </p>
      {filteredPokemons === null ? (
        <Loaders />
      ) : filteredPokemons.length === 0 ? (
        <p>No se encontraron resultados.</p>
      ) : (
        <Card allPokemon={filteredPokemons} />
      )}
    </div>
  )
}
