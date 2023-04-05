import { Link } from 'react-router-dom'

export function Card2({ poke20, lastPokemonElementRef }) {
  return (
    <div className="pok-cont">
      {poke20.map((page, pageIndex) =>
        page.data.map((pok, index) => (
          <div
            key={pok.id}
            className="pok-item"
            ref={
              pageIndex === poke20.length - 1 && index === page.data.length - 1
                ? lastPokemonElementRef
                : null
            }
          >
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
        ))
      )}
    </div>
  )
}
