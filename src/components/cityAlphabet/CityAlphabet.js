import { Box, Button, Heading, Text, TextInput } from "grommet";
import React, { useEffect, useState } from "react";

function getWeightedRandom(items, weights, power = 1) {
  const adjustedWeights = weights.map((weight) => Math.pow(weight, power));
  const totalWeight = adjustedWeights.reduce((sum, weight) => sum + weight, 0);
  let randomValue = Math.random() * totalWeight;
  for (let i = 0; i < items.length; i++) {
    randomValue -= adjustedWeights[i];
    if (randomValue <= 0) {
      return items[i]; // Return the selected item
    }
  }
}

class CityAlphabetBot {
  constructor(
    cities,
    prioritize_population_factor = 0.5,
    difficulty_population_size = 5000
  ) {
    this.cities = cities;
    this.prioritize_population_factor = prioritize_population_factor;
    this.difficulty_population_size = difficulty_population_size;
  }

  guessLetter(currentString) {
    // Return (Did i win (true) or lost (false) or nothing (null),
    //         Next letter)
    let possibleCities = this.cities.filter(([city, weights]) =>
      city.toLowerCase().startsWith(currentString)
    );
    console.info(`Possible Cities length: ${possibleCities.length}`);
    if (possibleCities.length === 0) {
      return [false, ""];
    }
    let [cityNames, cityPopulation] = possibleCities.reduce(
      ([firstArr, secondArr], [firstValue, secondValue]) => {
        firstArr.push(firstValue);
        secondArr.push(secondValue);
        return [firstArr, secondArr];
      },
      [[], []]
    );

    let chosenCity = getWeightedRandom(
      cityNames,
      cityPopulation,
      this.prioritize_population_factor
    );
    console.info(`chosenCity: ${chosenCity}`);

    if (chosenCity === currentString) {
      // Player finished the city
      this.cities = this.cities.filter(
        ([city, weights]) => city !== chosenCity
      );
      return [true, ""];
    }

    if (chosenCity.slice(0, -1) === currentString) {
      // bot finished the city
      this.cities = this.cities.filter(
        ([city, weights]) => city !== chosenCity
      );
      return [true, chosenCity.slice(-1)];
    }

    return [
      null,
      chosenCity.slice(currentString.length, currentString.length + 1),
    ];
  }
}

function CityAlphabet(props) {
  const [allCites] = useState(
    require("./israel_cities.json").map(([cityName, population]) => [
      cityName
        .replace(/[-'" ]/g, "")
        .replace("ך", "כ")
        .replace("ף", "פ")
        .replace("ץ", "צ"),
      population,
    ])
  );
  const [currentCharacters, setCurrentCharacters] = useState("");
  const [currentInput, setCurrentInput] = useState("");
  const [finishedCities] = useState([]);
  const [cityAlphabetBot] = useState(new CityAlphabetBot(allCites));

  useEffect(() => {
    if (currentCharacters !== "") {
      return;
    }
    // console.log(allCites);
    console.info("starting game...");
    let guessedLetter = cityAlphabetBot.guessLetter("")[1];
    setCurrentCharacters(guessedLetter);
    setCurrentInput(guessedLetter);
  }, [cityAlphabetBot, currentCharacters, setCurrentInput]);

  const handleInput = (inputValue) => {
    if (inputValue.slice(0, -1) !== currentCharacters) {
      // invalid response
      if (inputValue && inputValue.length > 0) {
        setCurrentInput(currentCharacters + inputValue.slice(-1));
        return;
      } else {
        setCurrentInput(currentCharacters);
        return;
      }
    }
    setCurrentInput(inputValue);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      SubmitAnswer();
    }
  };

  const SubmitAnswer = () => {
    if (currentCharacters === currentInput) {
      return;
    }
    // Bot's turn
    let [botGameResult, botNextLetter] =
      cityAlphabetBot.guessLetter(currentInput);
    let valueToPush = currentInput;
    if (botNextLetter.length > 0) {
      valueToPush += botNextLetter;
    }
    if (botGameResult === true || botGameResult === false) {
      finishedCities.push([botGameResult, valueToPush]);
      setCurrentCharacters("");
      setCurrentInput("");
      return;
    }
    setCurrentInput(valueToPush);
    setCurrentCharacters(valueToPush);
  };

  return (
    <Box
      direction={"column"}
      flex={"grow"}
      style={{ width: "100%" }}
      alignSelf={"center"}
    >
      <Box
        flex={{ grow: 1 }}
        align={"center"}
        justify={"center"}
        animation={{ type: "fadeIn" }}
      >
        <Heading>{currentCharacters}</Heading>

        <TextInput
          placeholder="Type your answer here"
          value={currentInput}
          onKeyDown={handleKeyPress}
          onChange={(event) => handleInput(event.target.value)}
        />
        <Button
          label="Submit"
          onClick={() => SubmitAnswer(currentInput)}
          style={{
            marginTop: "15px",
          }}
        />
        <Box>
          {finishedCities.length > 0 ? (
            finishedCities
              .map(([status, cityName], index) => (
                <Box
                  key={index}
                  flex={"grow"}
                  direction={"row"}
                  align={"stretch"}
                  height="25px"
                  wrap={true}
                >
                  <Text color="darkslategrey" style={{ marginRight: "10px" }}>
                    {index + 1}
                  </Text>
                  <Text color={status ? "white" : "red"}>{cityName}</Text>
                </Box>
              ))
              .reverse()
          ) : (
            <Text>No finished games yet...</Text>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default CityAlphabet;
