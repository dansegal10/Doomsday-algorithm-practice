import React, { useEffect, useState } from 'react';
import { Box, Heading, Text } from 'grommet';
import ScoreRow from './ScoreRow';
import { useHighScoreState } from "../functions/useHighScoreState.js";
import AverageScore from "./AverageScore.js";

const averagesToShow = [5, 12];

function ScoreBoard(props) {
  let scores = props.scores;
  let [streak, setStreak] = useState(0);
  let [bestStreak, setBestStreak] = useHighScoreState("streak");

  useEffect(() => {
    if (scores.length > 0) {
      let lastScore = scores[scores.length - 1]
      if (lastScore[1] === false) {
        setStreak(0);
      }
      else {
        let currentStreak = streak + 1;
        if (bestStreak < currentStreak) {
          setBestStreak(currentStreak);
        }
        setStreak(currentStreak);
      }
    }
  }, [scores.length, scores]);

  return (
    <Box
      flex={'grow'}
      direction={"row"}
      align={'stretch'}
      wrap={true}
      style={{ padding: "15px" }}
    >
      <Box
        align={'start'}
        style={{ padding: "15px" }}
        justify={'center'}>
        <Heading level={3}>Scores:</Heading>
        <Box width={"300px"} height={"150px"}
          style={{ border: "2px solid white", padding: "10px", overflowY: "scroll" }}>
          {scores.length > 0 ? (scores.map(([score, success], index) =>
            <ScoreRow key={index} index={index} score={score} success={success} />).reverse()
          ) : <Text>No scores yet...</Text>}
        </Box>
      </Box>
      <Box
        align={'start'}
        style={{ padding: "15px" }}
        justify={'center'}>
        {averagesToShow.map((averageSize, i) =>
          <AverageScore key={i} scores={scores} averageSize={averageSize} />
        )}
        <Text>Current Streak: {streak}</Text>
        <Text>Best Streak: {bestStreak}</Text>
      </Box>
    </Box>
  );
};

export default ScoreBoard;