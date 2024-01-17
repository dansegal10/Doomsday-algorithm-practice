import { Box, Button, Text } from "grommet";
import React, { useEffect, useState, useRef } from "react";

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
        style={{ "border": "2px solid #6FFFB0", "borderRadius": "18px" }}
      
      ref={btnRef} onClick={() => sethidden((current) => !current)}>
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
        style={{ "border": "2px solid #6FFFB0", "borderRadius": "18px" }}
        onClick={nextPlayer}
        label="Next Player"
      />
    </Box>
  );
}
