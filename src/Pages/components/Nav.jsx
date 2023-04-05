import { Link, Outlet, useNavigate } from 'react-router-dom'
import useForm from '../../hook/useForm'
import logo from '/src/assets/Pokédex_logo.png'

function Layaut() {
  const { valueSearch, onInputChange, onResetForm } = useForm({
    valueSearch: '',
  })

  const navigate = useNavigate()

  const onSearchSubmit = (e) => {
    e.preventDefault()
    navigate('/search', {
      state: valueSearch,
    })

    onResetForm()
  }

  return (
    <main className="App">
      <div className="menu">
        <div>
          <Link to="/">
            <img className="logo-img" src={logo} alt="Logo Pokedex" />
          </Link>
        </div>

        <form onSubmit={onSearchSubmit} className="form-group">
          <input
            type="search"
            name="valueSearch"
            value={valueSearch}
            onChange={onInputChange}
            placeholder="Ej: Pikachu"
          />
          <button className="btn-search">Buscar</button>
        </form>
      </div>
      <Outlet />
    </main>
  )
}

export default Layaut
