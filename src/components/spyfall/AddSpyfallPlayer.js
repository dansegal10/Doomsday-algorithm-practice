import { Box, Button, TextInput } from "grommet";
import React, { useState } from "react";
import { SpyFallConfirmButton } from "./SpyFallConfirmButton";

export function AddSpyfallPlayer({ index, addNewPlayer, finishStage }) {
  const [playerName, setplayerName] = useState("Player " + (index + 1));
  const [location, setlocation] = useState("");

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
        margin={{ vertical: "10px" }}
        onClick={() => addNewPlayer(playerName, location)}
        label="Next Player"
      ></Button>

      <SpyFallConfirmButton
        onTrigger={finishStage}
        text="Finish Stage"
        confirmText="Are you sure?"
      ></SpyFallConfirmButton>
    </Box>
  );
}
