import { Box, Button, Heading, Select, Text } from "grommet";
import React, { useEffect, useState } from "react";
import "./emoji.css";
import useCountries from "./useCountries";
import { calcCrow } from "./country_utils";

class Guess {
  constructor(guessedCountry, actualCountry) {
    this.guessedCountry = guessedCountry;
    console.info(guessedCountry);
    let distanceKm = calcCrow(guessedCountry, actualCountry);
    console.info(distanceKm);
  }
}

const maxDisplayedCountries = 40;
export const CountryGuesser = () => {
  const [countries, countriesDict] = useCountries();
  const [selectCountries, setSelectCountries] = useState([]);
  const [round, setRound] = useState(0);
  const [roundOver, setRoundOver] = useState(false);
  const [chosenCountry, setChosenCountry] = useState("");
  const [currentCountry, setCurrentCountry] = React.useState("");
  const [currentGuesses, setCurrentGuesses] = React.useState([]);

  useEffect(() => {
    if (countries.length === 0) {
      return;
    }
    setSelectCountries(countries.map((country) => country.name));
    console.info(`Starting round ${round}`);
    setChosenCountry(countries[Math.floor(Math.random() * countries.length)]);
  }, [round, countries]);

  const updateSelectCountries = (value) => {
    let selectedCountries = [];
    for (let i = 0; i < countries.length; i++) {
      let country = countries[i];
      if (country.name.toLowerCase().indexOf(value.toLowerCase()) !== -1) {
        selectedCountries.push(country.name);
      }
    }

    setSelectCountries(selectedCountries);
  };

  const attemptGuess = () => {
    if (!currentCountry in countriesDict) {
      return;
    }
    let chosen = countriesDict[currentCountry];
    currentGuesses.push(new Guess(chosen, chosenCountry));
    setCurrentCountry("");
  };

  return (
    <Box
      background={"brand"}
      direction={"column"}
      style={{ minHeight: "100%" }}
    >
      <Box
        flex={{ grow: 1 }}
        align={"center"}
        justify={"center"}
        animation={{ type: "fadeIn" }}
      >
        <Box flex={{ grow: 4 }}>
          <Heading
            size={"large"}
            level={"3"}
            style={{
              userSelect: "none",
              margin: "10px 5px",
              textAlign: "center",
            }}
          >
            The country is {chosenCountry.name}{" "}
            
          </Heading>
          <Heading style={{ fontFamily: "NotoColorEmojiLimited", fontSize: "50px", textAlign: "center" }}>
              {chosenCountry.flag}
            </Heading>
        </Box>

        {roundOver ? (
          <Heading level={"3"}>The country is {chosenCountry.name}</Heading>
        ) : (
          <Select
            onSearch={updateSelectCountries}
            options={selectCountries.splice(0, maxDisplayedCountries)}
            value={currentCountry}
            onChange={(option) => setCurrentCountry(option.value)}
          />
        )}

        <Button
          label="Submit"
          onClick={attemptGuess}
          style={{
            marginTop: "15px",
          }}
        />
      </Box>

      <Box
        direction={"row"}
        justify={"center"}
        margin={{ bottom: "small", right: "large", left: "large" }}
      >
        {/* <Button
          label="Continue"
          style={{ visibility: running ? "hidden" : "visible" }}
          onClick={() => console.info("Next!")}
        /> */}
      </Box>

      {/* <Box align={"center"}>
        <Stopwatch running={running} time={time} setTime={setTime} />
        <ScoreBoard
          scores={scores}
          type={"countryGuessing"}
          averagesToShow={[1, 3]}
          trimmedAveragesToShow={[]}
        />
      </Box> */}
    </Box>
  );
};
