import { Box, Button, Heading, TextInput, Text } from 'grommet';
import React, { useState } from 'react';
import ScoreBoard from "../score/ScoreBoard";
import Stopwatch from "../score/Stopwatch";



function MindPalaceGame(props) {
  let numberLength = props.numberLength;
  let choices = props.choices;
  let type = props.type;
  const [scores, setScores] = useState([]);
  const [running, setRunning] = useState(true);
  const [number, setNumber] = useState(generateTextWithLength());
  const [answer, setAnswer] = React.useState("");
  const [hidden, setHidden] = React.useState(false);
  const [time, setTime] = useState(0);


  function insertIntervaledDash(str) {
    let result = "";

    for (let i = 0; i < str.length; i += 5) {
      const chunk = str.slice(i, i + 5);
      result += chunk + "-";
    }

    // Remove the trailing "-" if present
    result = result.replace(/-$/, "");

    return result.toUpperCase();
  }

  function generateTextWithLength() {
    let randomText = "";
    for (let i = 0; i < numberLength; i++) {
      let chosenOption = choices[Math.floor(Math.random() * choices.length)];
      randomText += chosenOption;
    }

    return randomText;
  }

  const SubmitAnswer = () => {
    let success = false;
    if (number.toUpperCase() === answer.toUpperCase()) {
      success = true;
    }

    setRunning(false);
    setHidden(false);
    scores.push([time, success]);
    setScores(scores);
  }

  const resetGame = () => {
    setTime(0);
    setRunning(true);
    setNumber(generateTextWithLength());
    setAnswer("");
  }

  const handleInput = (input) => {
    setHidden(true);
    setAnswer(input.toUpperCase());
  }

  return (
    <Box direction={"column"} flex={"grow"} style={{ width: "100%" }} alignSelf={'center'}>
      <Box
        flex={{ grow: 1 }}
        align={'center'}
        justify={'center'}
        animation={{ "type": "fadeIn" }}
      >
        <Box flex={{ grow: 4 }}>
          <Heading size={"large"} level={'3'} style={{ userSelect: "none" }}>
            {!hidden ? insertIntervaledDash(number) : insertIntervaledDash("X".repeat(answer.length))}
          </Heading>
        </Box>

        {running ? <TextInput placeholder="Type your answer here"
          value={answer}
          onChange={event => handleInput(event.target.value)} />
          : <Heading level={'3'}>{insertIntervaledDash(answer)}</Heading>}
        <Button
          label="Submit"
          onClick={() => SubmitAnswer()}
          style={{ marginTop: "15px", visibility: (!running ? "hidden" : "visible") }}
        />
      </Box>

      <Box
        direction={"row"}
        justify={"center"}
        margin={{ bottom: "small", right: "large", left: "large" }}
      >
        <Button
          label="Continue"
          style={{ visibility: (running ? "hidden" : "visible") }}
          onClick={() => resetGame()}
        />
      </Box>

      <Box align={'center'}>
        <Stopwatch running={running} time={time} setTime={setTime} />
        <ScoreBoard scores={scores} type={type + numberLength} averagesToShow={[1, 3]}
          trimmedAveragesToShow={numberLength <= 10 ? [5, 10] : [5]} />
      </Box>
    </Box >
  );
}

export default MindPalaceGame;
