import { Box, Text } from "grommet";
import React from "react";

export function CountryGuessRow({ country, distance, direction }) {
  return (
    <Box style={{display: "contents"}}>
      <Text>{country.name}</Text>
      <Text
        style={{
          fontFamily: "NotoColorEmojiLimited",
          //   fontSize: "50px",
          //   textAlign: "center",
        }}
      >
        {country.flag}
      </Text>
      <Text>{distance.toFixed(2)} km</Text>
      <Text
        style={{
          position: "absolute",
          right: 0,
          translateX: "-50%",
          translateY: "50%",
          rotate: direction + "deg",
          fontSize: "25px"
        }}
      >
        ⬆
      </Text>
    </Box>
  );
}
