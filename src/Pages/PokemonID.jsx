import { useEffect, useRef } from 'react'
import { useLoaderData } from 'react-router-dom'

export const getPokemonByName = async ({ params }) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokid}`)
  const data = await res.json()

  return { data }
}

export default function PokemonID() {
  const { data: onePokemon } = useLoaderData()

  const hp = useRef('')
  const attack = useRef('')
  const defensa = useRef('')
  const specialAttack = useRef('')
  const specialDefense = useRef('')
  const speed = useRef('')

  useEffect(() => {
    hp.current.style.width = `${onePokemon.stats[0].base_stat + 100}px`
    attack.current.style.width = `${onePokemon.stats[1].base_stat + 100}px`
    defensa.current.style.width = `${onePokemon.stats[2].base_stat + 100}px`
    specialAttack.current.style.width = `${
      onePokemon.stats[3].base_stat + 100
    }px`
    specialDefense.current.style.width = `${
      onePokemon.stats[4].base_stat + 100
    }px`
    speed.current.style.width = `${onePokemon.stats[5].base_stat + 100}px`
  }, [])

  return (
    <main className="container main-pokemon">
      <div className="header-main-pokemon">
        <div className="container-img-pokemon">
          <img
            src={onePokemon?.sprites.other['official-artwork'].front_default}
            alt={`Pokemon ${onePokemon?.name}`}
          />
        </div>

        <div className="container-info-pokemon">
          <span className="number-pokemon">#{onePokemon.id}</span>

          <h1>{onePokemon.name.toUpperCase()}</h1>
        </div>
      </div>

      <div className="container-stats">
        <h1>Estadísticas</h1>

        <div className="stats">
          <div className="info-pokemon">
            <div className="group-info">
              <p>Tipo</p>
              <div className="group-types">
                {onePokemon.types.map((type) => (
                  <span key={type.type.name} className={`${type?.type.name}`}>
                    {type.type.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="group-info">
              <p>Altura</p>
              <span>{onePokemon.height}</span>
            </div>

            <div className="group-info">
              <p>Peso</p>
              <span>{onePokemon.weight}KG</span>
            </div>
          </div>
          <div className="stat-group">
            <span>Hp</span>
            <div className="progress-bar">
              <span
                ref={hp}
                className={`pro-bar ${onePokemon.types[0].type.name}`}
              ></span>
            </div>
            <span className="counter-stat">
              {onePokemon.stats[0].base_stat}
            </span>
          </div>
          <div className="stat-group">
            <span>Atacar</span>
            <div className="progress-bar">
              <span
                ref={attack}
                className={`pro-bar ${onePokemon.types[0].type.name}`}
              ></span>
            </div>
            <span className="counter-stat">
              {onePokemon.stats[1].base_stat}
            </span>
          </div>
          <div className="stat-group">
            <span>Defensa</span>
            <div className="progress-bar">
              <span
                ref={defensa}
                className={`pro-bar ${onePokemon.types[0].type.name}`}
              ></span>
            </div>
            <span className="counter-stat">
              {onePokemon.stats[2].base_stat}
            </span>
          </div>
          <div className="stat-group">
            <span>Ataque Especial</span>
            <div className="progress-bar">
              <span
                ref={specialAttack}
                className={`pro-bar ${onePokemon.types[0].type.name}`}
              ></span>
            </div>
            <span className="counter-stat">
              {onePokemon.stats[3].base_stat}
            </span>
          </div>
          <div className="stat-group">
            <span>Defensa Especial</span>
            <div className="progress-bar">
              <span
                ref={specialDefense}
                className={`pro-bar ${onePokemon.types[0].type.name}`}
              ></span>
            </div>
            <span className="counter-stat">
              {onePokemon.stats[4].base_stat}
            </span>
          </div>
          <div className="stat-group">
            <span>Velocidad</span>
            <div className="progress-bar">
              <span
                ref={speed}
                className={`pro-bar ${onePokemon.types[0].type.name}`}
              ></span>
            </div>
            <span className="counter-stat">
              {onePokemon.stats[5].base_stat}
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}
