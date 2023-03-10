import { Link } from "react-router-dom"

function Card({ allPokemon }) {

  // const pokedata = {
  // 	img: allPokemon.sprites.other['official-artwork'].front_default,
  // 	imgSvg: .sprites.other.dream_world.front_default,
  // 	imgGaf: "",
  // 	name:allPokemon.name,
  // 	id: allPokemon.id,
  //  type: allPokemon.types,
  // 	hp: stats[0].base_stat,
  //  Attack: stats[1].base_stat,
  //  defensa: stats[2].base_stat,
  // 	specialAttack: stats[3].base_stat,
  //  specialDefense:stats[4].base_stat,
  //  speed:stats[5].base_stat,
  // }

  return (
    <div className='pok-cont'>
      {allPokemon.map(pok =>

        <div key={pok.id} className='pok-item'>

          <Link to={`/pokemon/${pok.name}`} className='card-pokemon'>
            <div className='card-img'>
              <img
                src={pok.sprites.other['official-artwork'].front_default}
                alt={`pokemon ${pok.name}`}
              />
            </div>
            <div className='card-info'>

              <span className='pokemon-id'>N° {pok.id}</span>

              <h3>{pok.name}</h3>

              <div className='card-types'>

                {pok.types.map(type => (
                  <span key={type.type.name} className={type.type.name}>
                    {type.type.name}
                  </span>
                ))}

              </div>
            </div>
          </Link>
        </div>)
      }
    </div>)
}


export default Card 
