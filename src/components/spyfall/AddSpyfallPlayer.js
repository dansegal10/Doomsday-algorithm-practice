import { Box, Button, TextInput } from "grommet";
import React, { useState } from "react";

export function AddSpyfallPlayer({ index, addNewPlayer, finishStage }) {
  const [playerName, setplayerName] = useState("Player " + (index + 1));
  const [location, setlocation] = useState("");
  const [finishing, setfinishing] = useState(0);

  const finish = () => {
    setfinishing(finishing + 1);
    if (finishing >= 1) {
      finishStage();
    }
  }

  return (
    <Box>
      <h3>Name:</h3>
      <TextInput
        onChange={(event) => setplayerName(event.target.value)}
        value={playerName}
      />
      <h3>Location:</h3>
      <TextInput
        onChange={(event) => setlocation(event.target.value)}
        value={location}
      />

      <Button
        style={{ border: "2px solid #6FFFB0", borderRadius: "18px" }}
        onClick={() => addNewPlayer(playerName, location)}
        label="Next Player"
      ></Button>
      <Button
        style={{ border: "2px solid #6FFFB0", borderRadius: "18px" }}
        onClick={finish}
        label={finishing === 0 ? "Finish Stage" : "Are you sure?"}
      ></Button>
    </Box>
  );
}
