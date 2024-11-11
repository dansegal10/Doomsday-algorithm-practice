import { Text } from "grommet";
import React, { useState } from "react";
import Header from "../components/Header";
import DoomdsdayGame from "../components/doomsday/DoomdsdayGame";
import MindPalaceGame from "../components/mindPalace/MindPalaceGame";

export const doomsday = "Doomsday Algorithm";
export const numberMemory = "Numbers";
export const alphabetMemory = "Alphabet";

export function MindGames(props) {
  const [currentGame, setCurrentGame] = useState(doomsday);
  const [currentOption, setCurrentOption] = useState(0);

  const chooseNewGame = (game, options) => {
    setCurrentGame(game);
    setCurrentOption(options);
  };

  const games = {};
  games[doomsday] = "";
  games[numberMemory] = [10, 15, 20, 30];
  games[alphabetMemory] = [10, 15, 20, 30];

  return (
    <div>
      <Header onClick={chooseNewGame} items={games} />
      {currentGame === doomsday ? (
        <DoomdsdayGame startDate={"1800-01-01"} endDate={"2199-12-31"} />
      ) : currentGame === numberMemory ? (
        <MindPalaceGame
          key={currentGame + currentOption}
          type={"numberMemory" + currentOption}
          numberLength={currentOption}
          choices={["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]}
        />
      ) : currentGame === alphabetMemory ? (
        <MindPalaceGame
          key={currentGame + currentOption}
          type={"alphabetMemory" + currentOption}
          numberLength={currentOption}
          choices={[
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z",
          ]}
        />
      ) : (
        <Text>Invalid Game Selected</Text>
      )}
    </div>
  );
}
