import React, { useEffect, useState } from 'react';
import { Box, Text } from 'grommet';
import formatScoreTime from "../../functions/formatScoreTime.js";
import { useHighScoreState } from "../../functions/useHighScoreState.js";

const trimScores = (scores) => {
  let sortedScores = scores.sort()
  return sortedScores.slice(1, -1);
}

const calulateAverageOfLastScores = (scores, lastAmount, trimAvrage) => {
  let scoreCopy = scores.slice(0);
  let relevantScores = scoreCopy.reverse().slice(0, lastAmount);
  if (relevantScores.length < lastAmount) {
    return 0;
  }

  if (trimAvrage) {
    relevantScores = trimScores(relevantScores);
  }

  let sum = 0;
  for (let i = 0; i < relevantScores.length; i++) {
    if (relevantScores[i][1] === false) {
      return -1;
    }
    sum += relevantScores[i][0];
  }

  return sum / relevantScores.length;
}

const formatAverageTime = (averageTime) => {
  if (averageTime === -1) {
    return "DNF";
  } else if (averageTime === 0) {
    return "-";
  }
  return formatScoreTime(averageTime);
}


function AverageScore(props) {
  let scores = props.scores;
  let averageSize = props.averageSize;
  let isTrimmed = props.isTrimmed ?? false;
  let type = props.type + (isTrimmed ? "trimmed" : "");
  let [average, setAverage] = useState(0);
  let [bestAverage, setBestAverage] = useHighScoreState(type + averageSize.toString());
  let [newHighScore, setNewHighScore] = useState(false);

  useEffect(() => {
    setNewHighScore(false);
    let currentAverage = calulateAverageOfLastScores(scores, averageSize, isTrimmed);
    setAverage(currentAverage);

    if (currentAverage > 0 && bestAverage === 0 || (currentAverage > 0 && (bestAverage <= 0 || bestAverage > currentAverage))) {
      setBestAverage(Math.max(currentAverage, 0));
      setNewHighScore(true);
    }
  }, [scores.length]);

  return (
    <Box>
      {averageSize === 1
        ? <Text color={newHighScore ? "orange" : "white"}>Top Score: {formatAverageTime(bestAverage)}</Text>
        : <Box>
          <Text> {isTrimmed ? "Trimmed average" : "Average"}  of {averageSize}: {formatAverageTime(average)}</Text>
          <Text color={newHighScore ? "orange" : "white"}>Best {isTrimmed ? "trimmed " : ""} average of {averageSize}: {formatAverageTime(bestAverage)}</Text>
        </Box>
      }
    </Box>

  );
};

export default AverageScore;