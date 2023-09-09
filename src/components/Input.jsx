import React, { useState } from 'react'

export default function Input({playerList, setPlayerList}) {
    function addPlayer(e) {
        let newList = [{
          id: Math.random() * Date.now(),
          name: e.target.playerName.value,
          point: 0,
          status: false,
        },
        ...playerList,]
        setPlayerList(newList);
        e.target.playerName.value = "";
      }
  return (
    <div className='footer'>
        <form onSubmit={(e) => {
          e.preventDefault();
          addPlayer(e);
        }} action="">
          <input placeholder="Enter a player's name" name='playerName' type="text" />
          <button className='add_player'>ADD PLAYER</button>
        </form>
    </div>
  )
}
