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
      <Text>{distance.toFixed(2).toLocaleString()} km</Text>
      <Text
        style={{
          position: "absolute",
          right: "20px",
          translateX: "-50%",
          translateY: "50%",
          rotate: direction + "deg",
          fontSize: "25px"
        }}
      >
        {distance > 0 ? "⬆" : ""}
      </Text>
    </Box>
  );
}
