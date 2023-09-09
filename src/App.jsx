import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header';
import Table from './components/Table';
import Input from './components/Input';

function App() {
  let [playerList, setPlayerList] = useState([]);

  
  return (
    <>
      <Header playerList={playerList}/>
      <Table playerList={playerList} setPlayerList={setPlayerList}/>
      <Input setPlayerList={setPlayerList} playerList={playerList}/>
    </>
  )
}

export default App
