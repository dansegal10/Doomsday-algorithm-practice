import React, { useEffect, useState } from 'react';
import { Box, Heading } from 'grommet';
import FooterBar from "./components/FooterBar";
import DayButtonGrid from "./components/DayButtonGrid";
import Stopwatch from "./components/Stopwatch";
import ScoreBoard from "./components/ScoreBoard";
import GitHubButton from 'react-github-btn'
const moment = require('moment');
const momentRandom = require('moment-random');

function Game(props) {

  const generateRandomDay = () => momentRandom(
    moment(props.endDate),
    moment(props.startDate)
  );

  const parseDateToWeekDayNumber = (date) => Number(date.format('d'));

  let initialDay = generateRandomDay();
  const [currentDay, setCurrentDay] = useState(initialDay.format("Y-MM-DD"));
  const [scores, setScores] = useState([]);
  const [selectedDayOfWeek, setSelectedDayOfWeek] = useState();
  const [running, setRunning] = useState(true);
  const [time, setTime] = useState(0);
  const [expectedDayOfWeek, setExpectedDayOfWeek] = useState(parseDateToWeekDayNumber(initialDay));

  useEffect(() => {
    if (selectedDayOfWeek !== undefined) {
      setRunning(false);
    }
  }, [selectedDayOfWeek]);

  const startNewRound = () => {
    let nextDay = generateRandomDay();
    setCurrentDay(nextDay.format("Y-MM-DD"));
    if (selectedDayOfWeek === expectedDayOfWeek) {
      scores.push([time, true]);
    } else {
      scores.push([time, false]);
    }
    setSelectedDayOfWeek(undefined);
    setExpectedDayOfWeek(parseDateToWeekDayNumber(nextDay));
    setRunning(true);
    setTime(0);
    setScores(scores);
  };

  return (
    <Box fill background={'brand'} direction={'column'} overflow={'hidden'}>
      <Box direction={"column"} flex={"grow"} style={{ maxWidth: 800, width: "100%" }} alignSelf={'center'}>
        <Box
          key={currentDay}
          flex={{ grow: 1 }}
          align={'center'}
          justify={'center'}
          animation={{ "type": "fadeIn" }}
        >
          <Box flex={{ grow: 4 }}>
            <Heading size={"large"} level={'1'}>
              {currentDay}
            </Heading>
          </Box>
        </Box>
        <DayButtonGrid selectedDayOfWeek={selectedDayOfWeek} setSelectedDayOfWeek={setSelectedDayOfWeek} expectedDayOfWeek={expectedDayOfWeek} />
        <Box align={'center'}>
          <Stopwatch running={running} time={time} setTime={setTime} />
          <ScoreBoard scores={scores} />
        </Box>
        <FooterBar onContinueClick={startNewRound} isVisible={selectedDayOfWeek !== undefined} currentDay={currentDay} />
        <Box
          direction={"row"}
          justify={"end"}
          margin={{ right: "large", left: "large" }}
        >
          <GitHubButton href="https://github.com/dansegal10/Doomsday-algorithm-practice" data-icon="octicon-star" data-show-count="true" aria-label="Star me on GitHub">Star</GitHubButton>
        </Box>
      </Box>
    </Box>
  );
}

export default Game;
