import { Box, Grommet, Text } from 'grommet';
import React, { useEffect, useState } from 'react';
import './App.css';
import DoomdsdayGame from "./components/doomsday/DoomdsdayGame";
import MindPalaceGame from "./components/mindPalace/MindPalaceGame";
import Header from "./components/Header";
import GitHubButton from 'react-github-btn'


const theme = {
  global: {
    font: {
      family: 'Solway'
    }
  },
};

const doomsday = "Doomsday Algorithm";
const numberMemory = "Number Mind Palace";
const alphabetMemory = "Alphabet Mind Palace";
function App() {
  const [currentGame, setCurrentGame] = useState(doomsday);
  const [currentOption, setCurrentOption] = useState(0);

  const chooseNewGame = (game, options) => {
    setCurrentGame(game);
    setCurrentOption(options);
  }

  const games = {};
  games[numberMemory] = [10, 20, 30];
  games[doomsday] = "";
  games[alphabetMemory] = [10, 20, 30];

  return (
    <Grommet theme={theme} full>
      <Box background={'brand'} direction={'column'} style={{ minHeight: "100%" }}>
        <Header chooseGame={chooseNewGame} games={games} />
        {
          currentGame === doomsday ? <DoomdsdayGame startDate={'1800-01-01'} endDate={'2199-12-31'} />
            : currentGame === numberMemory ? <MindPalaceGame
              key={currentGame + currentOption}
              type={"numberMemory" + currentOption}
              numberLength={currentOption}
              choices={["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]} />
              : currentGame === alphabetMemory ?
                <MindPalaceGame
                  key={currentGame + currentOption}
                  type={"alphabetMemory" + currentOption}
                  numberLength={currentOption}
                  choices={["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X"]} />
                : <Text>Invalid Game Selected</Text>
        }
        <Box
          direction={"row"}
          justify={"end"}
          margin={{ right: "large", left: "large" }}
        >
          <GitHubButton href="https://github.com/dansegal10/Doomsday-algorithm-practice" data-icon="octicon-star" data-show-count="true" aria-label="Star me on GitHub">Star</GitHubButton>
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;
