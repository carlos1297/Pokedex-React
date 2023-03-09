import '../App.css'
import { usePokemonesContext } from '../hook/usePokemonesContext'
import Card from './components/Card'

function Pokemon() {
  const { allPokemon, onClickLoadMore, isCargando } = usePokemonesContext()

  return (
    <>
      {
        isCargando
          ? <h2 style={{ textAlign: "center" }}>🌀 Loading...</h2>
          : <Card allPokemon={allPokemon} />
      }


      <div className="container-btn-load-more container">
        <button className='btn-load-more' onClick={onClickLoadMore}>
          Cargar más pokémones
        </button>
      </div>
    </>
  )
}

export default Pokemon
