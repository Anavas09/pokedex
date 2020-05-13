import React, { Fragment } from "react";
import Pokecard from "./Pokecard";
import "../styles/Pokedex-cards.css"

function Pokedex({exp, isWinner, pokemons}) {

  const Title = isWinner ? <h1 className="Pokedex-winner">Winnig Hand</h1> :
  <h1 className="Pokedex-loser">Losing Hand</h1> 

  return (
    <div className="Pokedex">
      {Title}
      <h4>Total Expeirence: {exp}</h4>
      <div className="Pokedex-cards">
        {pokemons.map((pokemon) => {
          return (
            <Fragment key={pokemon.id}>
              <Pokecard
                    id={pokemon.id}
                    name={pokemon.name}
                    type={pokemon.type}
                    baseExp={pokemon.baseExp}
                  />
            </Fragment>
          )
        })}
      </div>
    </div>
  );
}

export default Pokedex;
