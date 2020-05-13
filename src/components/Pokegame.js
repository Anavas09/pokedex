import React from 'react'
import Pokedex from './Pokedex';

function Pokegame() {

  const pokemons = [
    {id: 4, name: 'Charmander', type: 'fire', baseExp: 62},
    {id: 7, name: 'Squirtle', type: 'water', baseExp: 63},
    {id: 11, name: 'Metapod', type: 'bug', baseExp: 72},
    {id: 12, name: 'Butterfree', type: 'flying', baseExp: 178},
    {id: 25, name: 'Pikachu', type: 'electric', baseExp: 112},
    {id: 39, name: 'Jigglypuff', type: 'normal', baseExp: 95},
    {id: 94, name: 'Gengar', type: 'poison', baseExp: 225},
    {id: 133, name: 'Eevee', type: 'normal', baseExp: 65}
  ]

  const hand1 = [];
  const hand2 = [...pokemons];

  while(hand1.length < hand2.length){
    const randInx = Math.floor(Math.random() * hand2.length);
    const randPokemon = hand2.splice(randInx, 1)[0];
    hand1.push(randPokemon);
  }

  const exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.baseExp, 0);
  const exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.baseExp, 0);

  return (
    <div>
      <Pokedex pokemons={hand1} exp={exp1} isWinner={exp1 > exp2}/>
      <Pokedex pokemons={hand2} exp={exp2} isWinner={exp2 > exp1}/>
    </div>
  )
}

export default Pokegame;