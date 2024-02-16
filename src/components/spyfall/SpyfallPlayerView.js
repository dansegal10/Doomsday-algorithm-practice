import { Box, Button, Text } from "grommet";
import React, { useRef, useState } from "react";

export function SpyfallPlayerView({
  currentPlayer,
  chosenLocation,
  isSpy,
  nextPlayer,
}) {
  const [hidden, sethidden] = useState(true);
  const btnRef = useRef(null);

  return (
    <Box>
      <Text>Pass to {currentPlayer.name}</Text>
      <Button
        ref={btnRef}
        onClick={() => sethidden((current) => !current)}
      >
        Show Role
      </Button>
      <Text>
        {hidden
          ? "Press Button to show role"
          : isSpy
          ? "You are the spy!"
          : `The location is ${chosenLocation}`}
      </Text>

      <Button
        onClick={nextPlayer}
        label="Next Player"
      />
    </Box>
  );
}
