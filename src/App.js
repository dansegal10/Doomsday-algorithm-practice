import { Box, Grommet } from 'grommet';
import React, { useEffect, useState } from 'react';
import './App.css';
import DoomdsdayGame from "./components/doomsday/DoomdsdayGame";
import Header from "./components/Header";


const theme = {
  global: {
    font: {
      family: 'Solway'
    }
  },
};

const doomsday = "Doomsday Algorithm";
const numbers = "Number Mind Palace";
function App() {
  const [currentGame, setCurrentGame] = useState({name: doomsday, extra: null});
  const games = {};
  games[numbers] = ["10", "20", "30"];
  games[doomsday] = "";

  return (
    <Grommet theme={theme} full>
      <Box background={'brand'} direction={'column'}>
        <Header chooseGame={setCurrentGame} games={games} />
        {
          currentGame["name"] === doomsday ? <DoomdsdayGame startDate={'1800-01-01'} endDate={'2199-12-31'} />
            : <Box />
        }
      </Box>
    </Grommet>
  );
}

export default App;
