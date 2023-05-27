import React, { useEffect } from 'react';
import formatScoreTime from "../functions/formatScoreTime.js";
import { Box, Heading } from 'grommet';

function Stopwatch(props) {
  let running = props.running;
  let time = props.time;
  let setTime = props.setTime;

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running, setTime]);

  return (
    <Box>
      <Heading level={3}>{formatScoreTime(time)}</Heading>
    </Box>
  );
};

export default Stopwatch;