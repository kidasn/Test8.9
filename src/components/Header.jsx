import React from 'react'

export default function Header({playerList}) {
  return (
    <div>
        <div className='header'>
        <div className='info'>
          <span>Player: {playerList.length}</span> <br />
          <span>Total Points: {playerList.reduce((total, player) => {
            return total + player.point;
          }, 0)}</span>
        </div>

        <div className='title'>
          Bảng điểm
        </div>

      </div>
      <div className='body'></div>
    </div>
  )
}
