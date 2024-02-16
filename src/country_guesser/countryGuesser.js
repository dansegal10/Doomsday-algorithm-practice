import { Box, Button, Heading } from "grommet";
import React, { useEffect, useState } from "react";
import { calcCrow, calcDirection } from "./country_utils";
import "./emoji.css";
import { CountryGuessRow } from "./modules/CountryGuessRow";
import { DynamicSvg } from "./modules/DynamicSvg";
import { GuessTable } from "./modules/GuessTable";
import { InputSelect } from "./modules/InputSelect";
import getCountries from "./useCountries";

class Guess {
  constructor(guessedCountry, actualCountry) {
    this.country = guessedCountry;
    console.info(guessedCountry);
    this.distanceKm = calcCrow(guessedCountry, actualCountry);
    console.info(this.distanceKm);
    this.direction = calcDirection(guessedCountry, actualCountry);
  }
}

const maxGuesses = 6;
export const CountryGuesser = () => {
  const [countries, setcountries] = useState([]);
  const [countriesDict, setcountriesDict] = useState([]);
  // const [countryComp, setCountryComp] = useState(<Box />);
  const [round, setRound] = useState(0);
  const [roundOver, setRoundOver] = useState(false);
  const [chosenCountry, setChosenCountry] = useState();
  const [guessedCountry, setguessedCountry] = React.useState("");
  const [currentGuesses, setCurrentGuesses] = React.useState([]);

  useEffect(() => {
    console.info(`Starting round ${round}`);
    const [newCountries, newCountriesDict] = getCountries();
    setcountries(newCountries);
    setcountriesDict(newCountriesDict);
    let newChosenCountry =
      newCountries[Math.floor(Math.random() * newCountries.length)];
    setChosenCountry(newChosenCountry);
  }, [round]);

  function nextRound() {
    setRound((r) => r + 1);
    setRoundOver(false);
    setCurrentGuesses([]);
    setguessedCountry("");
  }

  const attemptGuess = () => {
    if (!guessedCountry in countriesDict) {
      return;
    }
    let chosen = countriesDict[guessedCountry];
    let guess = new Guess(chosen, chosenCountry);
    currentGuesses.push(guess);
    setCurrentGuesses(currentGuesses);
    if (chosen.name === chosenCountry.name) {
      setRoundOver(true);
      return;
    }
    setguessedCountry("");
    if (currentGuesses.length >= maxGuesses) {
      setRoundOver(true);
    }
  };

  if (chosenCountry === undefined) {
    return <Box>Loading...</Box>;
  } else {
    return (
      <Box
        direction={"column"}
        flex={{ grow: 1 }}
        align={"center"}
        justify={"center"}
        animation={{ type: "fadeIn" }}
      >
        <Box
          align="center"
          background={{ color: "light-4" }}
          style={{
            padding: "40px",
            borderRadius: "50px",
            marginBottom: "15px",
          }}
        >
          <DynamicSvg
            svgName={chosenCountry.code_2}
            style={{ height: "250px" }}
            failed={() => nextRound()}
          />
        </Box>

        {roundOver ? (
          <Box direction="row">
            <Heading size={"large"} level={"4"}>
              The country is {chosenCountry.name}
            </Heading>
            <Heading
              style={{
                fontFamily: "NotoColorEmojiLimited",
                textAlign: "center",
                marginLeft: "5px",
              }}
            >
              {chosenCountry.flag}
            </Heading>
          </Box>
        ) : (
          <Box />
        )}

        {!roundOver ? (
          <Box hidden={roundOver}>
            <InputSelect
              options={countries}
              key={round}
              value={guessedCountry}
              optionNameOperand={(o) => o.name}
              onChange={(option) => setguessedCountry(option.value)}
            />
            <Button
              label="Submit"
              onClick={attemptGuess}
              style={{
                marginTop: "15px",
              }}
            />
          </Box>
        ) : (
          <Button onClick={() => nextRound()}>Next!</Button>
        )}

        <GuessTable max={maxGuesses}>
          {currentGuesses.map((guess, i) => (
            <CountryGuessRow
              country={guess.country}
              distance={guess.distanceKm}
              direction={guess.direction}
              key={i}
            />
          ))}
        </GuessTable>
      </Box>
    );
  }
};
