import React from 'react'

function SlotMachine({a, b, c}) {

  const winner = (a === b) && (b === c);
  const winlose = winner ? 'Win' : 'Lose';

  return (
      <div className='Machine'>
          <p>{a} {b} {c}</p>
          <p className={winlose}>
            {winner ? 'You Win' : 'You Lose'}
          </p>
      </div>
  )
}

export default SlotMachine;