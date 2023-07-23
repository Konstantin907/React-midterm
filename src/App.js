import './App.css';
import React, { useState, useEffect } from 'react';
import Players from './components/Players';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'

function App() {
  const [players, setPlayers] = useState([]);


  const getApiData = async () => {
    const url = 'https://nba-stats-db.herokuapp.com/api/playerdata/season/2023/?page=2';
    const options = {
      method: 'GET',
    };

    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setPlayers(data.results);
      console.log(data.results);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getApiData();
  }, [])

  return (
    <>
    <Header />
    {players.slice(0,5).map(player => (
        <Players player={player}/>
      ))}
    <Footer />
    </>
  );
}

export default App;