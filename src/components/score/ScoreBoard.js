import React, { useEffect, useState } from "react";
import { Box, Heading, Text } from "grommet";
import ScoreRow from "./ScoreRow";
import { useHighScoreState } from "../../functions/useHighScoreState.js";
import AverageScore from "./AverageScore.js";

export default function ScoreBoard({
  scores,
  type,
  trimmedAveragesToShow = [],
  averagesToShow = [],
  timeScores = true
}) {
  let [streak, setStreak] = useState(0);
  let [bestStreak, setBestStreak] = useHighScoreState(type + "streak");
  let [newHighScore, setNewHighScore] = useState(false);

  useEffect(() => {
    setNewHighScore(false);
    if (scores.length > 0) {
      let lastScore = scores[scores.length - 1];
      if (lastScore[1] === false) {
        setStreak(0);
      } else {
        let currentStreak = streak + 1;
        if (bestStreak < currentStreak) {
          setBestStreak(currentStreak);
          setNewHighScore(true);
        }
        setStreak(currentStreak);
      }
    }
  }, [scores.length, scores]);

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
          width={"300px"}
          height={"150px"}
          style={{
            border: "2px solid white",
            padding: "10px",
            overflowY: "scroll",
          }}
        >
          {scores.length > 0 ? (
            scores
              .map(([score, success], index) => (
                <ScoreRow
                  key={index}
                  index={index}
                  score={score}
                  success={success}
                />
              ))
              .reverse()
          ) : (
            <Text>No scores yet...</Text>
          )}
        </Box>
      </Box>
      <Box align={"start"} style={{ padding: "15px" }} justify={"center"}>
        <Text>Current Streak: {streak}</Text>
        <Text color={newHighScore ? "orange" : "white"}>
          Best Streak: {bestStreak}
        </Text>
        {averagesToShow.map((averageSize, i) => (
          <AverageScore
            key={i}
            scores={scores}
            averageSize={averageSize}
            type={type}
          />
        ))}
        {trimmedAveragesToShow.map((averageSize, i) => (
          <AverageScore
            key={i}
            scores={scores}
            averageSize={averageSize}
            type={type}
            isTrimmed={true}
          />
        ))}
      </Box>
    </Box>
  );
}

