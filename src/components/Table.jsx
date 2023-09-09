import React from 'react'

export default function Table({playerList, setPlayerList}) {
    function changeColor() {
        let pointArr = []
        for (let i = 0; i < playerList.length; i++) {
          pointArr.push(playerList[i].point)
        }
        pointArr.sort((a, b) => b - a)
        for (let i = 0; i < playerList.length; i++) {
          if (playerList[i].point == 0) {
            playerList[i].status = false;
          } else {
            if (playerList[i].point == pointArr[0]) {
              playerList[i].status = true;
            } else {
              playerList[i].status = false;
            }
          }
        }
      }
  return (
    <div className='body'>
        <table className='table_content'>
          <tbody>
            {
              playerList.map((player, index) => {
                return (
                  <tr key={player.id}>
                    <td><button className='delete' onClick={
                      () => {
                        let newRemainList = playerList.filter((playerFilter) => {
                          return playerFilter.id != player.id;
                        })
                        setPlayerList(newRemainList)
                        if(newRemainList.length==0) {
                          setTimeout(()=>
                          window.alert("không còn người chơi nào!"),300
                          )
                        }
                    }
                    }>X</button></td>
                    <td style={{ color: player.status ? "yellow" : "blanchedalmond" }}><span className="material-symbols-outlined"> trophy </span></td>
                    <td>{player.name}</td>
                    <td> <button className='minus' onClick={() => {
                      setPlayerList(playerList.map((playerMinus) => {
                        if (player.id == playerMinus.id) {
                          playerMinus.point -= 1
                          if (playerMinus.point < 0) {
                            playerMinus.point = 0
                          };
                          changeColor();

                        }
                        return playerMinus
                      }))
                    }}>-</button> 

                    {player.point} 
                    
                    <button className='plus' onClick={() => {
                      setPlayerList(playerList.map((playerPlus) => {
                        if (player.id == playerPlus.id) {
                          playerPlus.point += 1;
                        }
                        changeColor();

                        return playerPlus
                      }))
                    }}>+</button></td>

                  </tr>
                )
              })
            }

          </tbody>
        </table>
    </div>
  )
}
