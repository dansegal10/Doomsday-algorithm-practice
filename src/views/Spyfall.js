import { Box, Button, Heading, Text, TextInput } from "grommet";
import React, { useState } from "react";
import { AddSpyfallPlayer } from "../components/spyfall/AddSpyfallPlayer";
import { SpyfallPlayerView } from "../components/spyfall/SpyfallPlayerView";
import { SpyfallPlayer } from "../components/spyfall/spyfallData";
import Stopwatch from "./../components/score/Stopwatch";

const GameStages = {
  initializing: 0,
  passing: 1,
  adminStart: 2,
  playing: 3,
  finished: 4,
};
class GameLocations {
  constructor(playerLocations) {
    this.playersWithLocation = playerLocations;
    this.defaultLocations = require("../components/spyfall/locations_hebrew.json");
    this.useDefaultLocations = false;
  }

  _locations() {
    if (this.useDefaultLocations) {
      return [...this.playersWithLocation, ...this.defaultLocations];
    }
    return this.playersWithLocation;
  }

  triggerDefaultLocations() {
    this.useDefaultLocations = !this.useDefaultLocations;
    console.log(`Use default locations: ${this.useDefaultLocations}`);
  }

  getPlayerLocationsLength() {
    return this.playersWithLocation.length;
  }

  getLength() {
    return this._locations().length;
  }

  getLocation() {
    let locations = this._locations();
    let chosenIndex = Math.floor(Math.random() * locations.length);
    console.log(`Chosen index: ${chosenIndex}`);
    console.log(this.defaultLocations);
    if (chosenIndex < this.playersWithLocation.length) {
      return [chosenIndex, locations[chosenIndex].location];
    }
    console.log(locations);
    console.log(locations[chosenIndex]);
    return [-1, locations[chosenIndex]];
  }
}
function InitializeSpyFall(props) {
  return (
    <Box>
      <Text>Current Player Count: {props.players.length}</Text>
      <AddSpyfallPlayer
        key={props.players.length}
        index={props.players.length}
        addNewPlayer={props.addPlayer}
        finishStage={() => props.setgameStage(GameStages.adminStart)}
      />
    </Box>
  );
}

function SpyfallAdminStart({
  playersCount,
  spyAmount,
  setspyAmount,
  gameLocations,
  startPassing,
}) {
  const [locationCount, setLocationCount] = useState(
    gameLocations.getPlayerLocationsLength()
  );

  return (
    <Box>
      <Text>Player Count: {playersCount}</Text>
      <Text>
        Player location Count: {gameLocations.getPlayerLocationsLength()}
      </Text>
      <Text>Game location Count: {locationCount}</Text>
      <Text>Spy Count:</Text>
      <TextInput
        placeholder="Spy Count"
        type={"number"}
        value={spyAmount}
        onChange={(event) => setspyAmount(event.target.value)}
      />
      <Button
        onClick={() => {
          gameLocations.triggerDefaultLocations();
          setLocationCount(gameLocations.getLength());
        }}
        label="Trigger default locations"
      ></Button>
      <Button
        onClick={() => startPassing(gameLocations)}
        label="Begin!"
      ></Button>
    </Box>
  );
}

function SpyfallPlaying(props) {
  return (
    <Box
      flex={{ grow: 1 }}
      align={"center"}
      justify={"center"}
      animation={{ type: "fadeIn" }}
    >
      <Stopwatch running={true} time={props.time} setTime={props.setTime} />
      <Text>Began Playing</Text>
      <Text>
        There{" "}
        {props.chosenSpiesIds.length === 1
          ? "is 1 spy"
          : `are ${props.chosenSpiesIds.length} spies`}
      </Text>
      <Button
        hidden={props.finishingRound < 2}
        onClick={props.finishRound}
        label={props.finishingRound === 0 ? "Finish Round" : "Are you sure?"}
      ></Button>
    </Box>
  );
}

export function Spyfall({ exit }) {
  //const [gameStage, setgameStage] = useState(GameStages.initializing);
  const [gameStage, setgameStage] = useState(GameStages.adminStart);
  // const [players, setplayers] = useState([]);
  const [players, setplayers] = useState([
    new SpyfallPlayer(0, "Player 1", ""),
    new SpyfallPlayer(1, "Player 2", "aaa"),
    new SpyfallPlayer(2, "Player 3", ""),
    new SpyfallPlayer(3, "Player 4", ""),
  ]);
  const [time, setTime] = useState(0);
  const [chosenLocation, setchosenLocation] = useState();
  const [chosenSpiesIds, setchosenSpiesIds] = useState([]);
  const [spyAmount, setspyAmount] = useState(1);
  const [currentPlayerIndex, setcurrentPlayerIndex] = useState(0);
  const [finishingRound, setfinishingRound] = useState(0);
  const finishRound = () => {
    setfinishingRound(finishingRound + 1);
    if (finishingRound >= 1) {
      setgameStage(GameStages.finished);
    }
  };

  const addPlayer = (name, location) => {
    console.info("Added Player");
    let newPlayer = new SpyfallPlayer(players.length, name, location);
    setplayers([...players, newPlayer]);
  };

  const getGameLocations = () => {
    return new GameLocations(
      players.filter((player) => player.location.length > 0)
    );
  };

  const initializeSpyfallGame = (locations) => {
    if (locations.length === 0) {
      alert("No valid locations!");
      exit();
      return;
    }
    let [chosenPlayerIndex, chosenLocation] = locations.getLocation();
    console.info(
      `Chosen location of player i. ${chosenPlayerIndex} - ${chosenLocation}`
    );
    setchosenLocation(chosenLocation);

    let invalidSpyIds = [];
    if (chosenPlayerIndex !== -1) {
      invalidSpyIds.push(chosenPlayerIndex);
    }
    let spies = [];

    if (players.length - invalidSpyIds.length < spyAmount) {
      alert("Too many spies!");
      exit();
      return;
    }

    for (let i = 0; i < spyAmount; i++) {
      let spyId = Math.floor(
        Math.random() * (players.length - invalidSpyIds.length)
      );
      invalidSpyIds.forEach((invalidId) => {
        if (spyId >= invalidId) {
          spyId += 1;
        }
      });
      console.info(`Chosen spy with index: ${spyId}`);
      spies.push(spyId);
      invalidSpyIds.push(spyId);
      invalidSpyIds = invalidSpyIds.sort();
    }
    setchosenSpiesIds(spies);
  };

  const passToPrevPlayer = () => {
    if (currentPlayerIndex > 0) {
      setcurrentPlayerIndex(currentPlayerIndex - 1);
    }
  };

  const passToNextPlayer = () => {
    if (currentPlayerIndex < players.length - 1) {
      setcurrentPlayerIndex(currentPlayerIndex + 1);
    } else {
      setgameStage(GameStages.playing);
    }
  };

  const startPassing = (locations) => {
    setgameStage(GameStages.passing);
    initializeSpyfallGame(locations);
  };

  return (
    <Box
      flex={{ grow: 1 }}
      align={"center"}
      justify={"center"}
      animation={{ type: "fadeIn" }}
    >
      <Box
        align="center"
        as="header"
        direction="row"
        flex={false}
        justify="center"
        height="50px"
      >
        <Heading level={2}>Spyfall</Heading>
      </Box>
      {gameStage === GameStages.initializing ? (
        <InitializeSpyFall
          setgameStage={setgameStage}
          players={players}
          addPlayer={addPlayer}
        ></InitializeSpyFall>
      ) : gameStage === GameStages.adminStart ? (
        <SpyfallAdminStart
          playersCount={players.length}
          spyAmount={spyAmount}
          setspyAmount={setspyAmount}
          gameLocations={getGameLocations()}
          startPassing={startPassing}
        ></SpyfallAdminStart>
      ) : gameStage === GameStages.passing ? (
        <SpyfallPlayerView
          key={currentPlayerIndex}
          chosenLocation={chosenLocation}
          currentPlayer={players[currentPlayerIndex]}
          isSpy={chosenSpiesIds.includes(currentPlayerIndex)}
          nextPlayer={() => passToNextPlayer()}
          prevPlayer={() => passToPrevPlayer()}
        />
      ) : gameStage === GameStages.playing ? (
        <SpyfallPlaying
          time={time}
          setTime={setTime}
          chosenSpiesIds={chosenSpiesIds}
          finishingRound={finishingRound}
          finishRound={finishRound}
        ></SpyfallPlaying>
      ) : (
        <Box>
          <Stopwatch running={false} time={time} setTime={setTime} />
          <Text>Finished Playing</Text>
          <Text>The spy/ies are:</Text>
          {chosenSpiesIds.map((spyId, i) => (
            <Text key={i}>{players[spyId].name}</Text>
          ))}
          <Button label="Next Round!" onClick={exit}></Button>
        </Box>
      )}
    </Box>
  );
}
