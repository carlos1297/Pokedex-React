import { Link } from 'react-router-dom'

function Card({ allPokemon }) {
  return (
    <div className="pok-cont">
      {allPokemon.map((pok) => (
        <div key={pok.id} className="pok-item">
          <Link to={`/pokemon/${pok.name}`} className="card-pokemon">
            <div className="card-img">
              <img src={pok.img} alt={`pokemon ${pok.name}`} />
            </div>
            <div className="card-info">
              <span className="pokemon-id">N° {pok.id}</span>
              <h3>{pok.name}</h3>
              <div className="card-types">
                {pok.types.map((type) => (
                  <span key={type.type.name} className={type.type.name}>
                    {type.type.name}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Card
