import React, { useEffect, useState } from 'react';
import { Box, Text } from 'grommet';
import formatScoreTime from "../functions/formatScoreTime.js";
import { useHighScoreState } from "../functions/useHighScoreState.js";

const calulateAverageOfLastScores = (scores, lastAmount) => {
  let scoreCopy = scores.slice(0);
  let relevantScores = scoreCopy.reverse().slice(0, lastAmount);
  if (relevantScores.length < lastAmount) {
    return 0;
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
  let [average, setAverage] = useState(0);
  let [bestAverage, setBestAverage] = useHighScoreState(averageSize.toString());

  useEffect(() => {
    let currentAverage = calulateAverageOfLastScores(scores, averageSize);
    setAverage(currentAverage);

    if (bestAverage === 0 || (currentAverage > 0 && (bestAverage <= 0 || bestAverage > currentAverage))) {
      setBestAverage(Math.max(currentAverage, 0));
    }
  }, [scores.length]);

  return (
    <Box>
      <Text>Average of {averageSize}: {formatAverageTime(average)}</Text>
      <Text>Best Average of {averageSize}: {formatAverageTime(bestAverage)}</Text>
    </Box>

  );
};

export default AverageScore;