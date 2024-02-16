import { Box, Heading, Text } from "grommet";
import React, { useEffect, useState } from "react";
import { useHighScoreState } from "../../functions/useHighScoreState.js";

export default function GuessScoreBoard({ scores, type, streak }) {
  let [bestStreak, setBestStreak] = useHighScoreState(type + "GeographyStreak2");
  let [newHighScore, setNewHighScore] = useState(false);

  useEffect(() => {
    if (streak > bestStreak) {
      setNewHighScore(true);
      setBestStreak(streak);
    } else {
      setNewHighScore(false);
    }
  }, [streak]);

  return (
    <Box
      flex={"grow"}
      direction={"row"}
      align={"stretch"}
      wrap={true}
      style={{ padding: "5px" }}
    >
      <Box align={"start"} style={{ padding: "5px 10px" }} justify={"center"}>
        <Heading level={3} style={{ margin: "0" }}>
          Scores:
        </Heading>
        <Box
          width={"150px"}
          style={{
            border: "2px solid white",
            padding: "5px",
          }}
        >
          {scores
            .map((count, index) => (
              <Box
                flex={"grow"}
                direction={"row"}
                align={"stretch"}
                height="25px"
                wrap={true}
                key={index}
              >
                <Text color="black" style={{ width: "50%"}}>
                  {index === 0 ? "DNF" : index}
                </Text>
                <Text color="white">{count}</Text>
              </Box>
            ))
            .reverse()}
        </Box>
      </Box>
      <Box align={"start"} style={{ padding: "15px" }} justify={"center"}>
        <Text>Current Streak: {streak}</Text>
        <Text color={newHighScore ? "orange" : "white"}>
          Best Streak: {bestStreak}
        </Text>
      </Box>
    </Box>
  );
}
