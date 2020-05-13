import React from "react";
import '../styles/Pokecard.css'

const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

const padToZero = (number) => (number <= 999 ? `00${number}`.slice(-3) : number); 

function Pokecard({id, name, type, baseExp}) {

  const imgSrc = `${POKE_API}${padToZero(id)}.png`

  return (
    <div className="Pokecard">
      <h1 className="Pokecard-title">{name}</h1>
      <div className="Pokecard-image">
        <img src={imgSrc} alt={name}/>
      </div>
      <div className="Pokecard-data">Type: {type}</div>
      <div className="Pokecard-data">Exp: {baseExp}</div>
    </div>
  );
}

export default Pokecard;