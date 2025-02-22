import React, { useEffect, useState } from 'react';
import { Box, Heading } from 'grommet';
import FooterBar from "./FooterBar";
import DayButtonGrid from "./DayButtonGrid";
import Stopwatch from "../score/Stopwatch";
import ScoreBoard from "../score/ScoreBoard";
const moment = require('moment');
const momentRandom = require('moment-random');

function DoomdsdayGame(props) {
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
      // if (selectedDayOfWeek === 0) {
      if (selectedDayOfWeek === expectedDayOfWeek) {
        scores.push([time, true]);
      } else {
        scores.push([time, false]);
      }
      setScores(scores);
    }
  }, [selectedDayOfWeek]);

  const startNewRound = () => {
    let nextDay = generateRandomDay();
    setSelectedDayOfWeek(undefined);
    setCurrentDay(nextDay.format("Y-MM-DD"));
    setExpectedDayOfWeek(parseDateToWeekDayNumber(nextDay));
    setRunning(true);
    setTime(0);
  };

  return (
    <Box direction={"column"} flex={"grow"} style={{ width: "100%" }} alignSelf={'center'}>
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
        <ScoreBoard scores={scores} type="doomsday" averagesToShow={[1, 3]} trimmedAveragesToShow={[5]}/>
      </Box>
      <FooterBar onContinueClick={startNewRound} isVisible={selectedDayOfWeek !== undefined} currentDay={currentDay} />
    </Box>
  );
}

export default DoomdsdayGame;
