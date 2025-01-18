import { Box, Button, Text } from "grommet";
import React, { useState } from "react";
import { SpyFallConfirmButton } from "./SpyFallConfirmButton";

export function SpyfallPlayerView({
  currentPlayer,
  chosenLocation,
  isSpy,
  nextPlayer,
  prevPlayer
}) {
  const [hidden, sethidden] = useState(true);

  return (
    <Box>
      <Text>Pass to {currentPlayer.name}</Text>
      <SpyFallConfirmButton
        text="Press button to show role."
        confirmText="This is for your eyes only."
        noConfirmDisable={true}
        onTrigger={() => sethidden(false)}
        onDisable={() => sethidden(true)}
      >
        Show Role
      </SpyFallConfirmButton>
      {hidden ? (
        <></>
      ) : isSpy ? (
        <Text margin="auto">You are the spy</Text>
      ) : (
        <>
          <Text margin="auto">The location is:</Text>
          <Text margin="auto" style={{ fontSize: "larger" }}>
            {chosenLocation}
          </Text>
        </>
      )}

      <Button onClick={nextPlayer} label="Next Player" />
      <Button onClick={prevPlayer} label="Previous Player" />
    </Box>
  );
}
