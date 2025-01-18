import { Anchor, Box, Grommet } from "grommet";
import React, { useEffect } from "react";
import GitHubButton from "react-github-btn";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { CountryGuesser } from "./country_guesser/countryGuesser";
import useRoutePrefix from "./functions/useRoutePrefix";
import { MindGames } from "./views/MindGames";
import { Spyfall } from "./views/Spyfall";
import CityAlphabet from './components/cityAlphabet/CityAlphabet';

const theme = {
  global: {
    font: {
      family: "Solway",
    },
  },
  anchor: {
    color: "light-2",
  },
  button: {
    pad: "small",
    border: {
      color: "focus",
      radius: "18px",
      width: "2px",
    },
    color: "white",
  },
};

class View {
  constructor(display, url, componment) {
    this.display = display;
    this.url = url;
    this.componment = componment;
  }
}

function App() {
  const navigate = useNavigate();
  const [routePrefix] = useRoutePrefix(true);
  const views = [
    new View("Mind Games", "mind_games", <MindGames />),
    new View(
      "Spy Fall",
      "spy_fall",
      <Spyfall exit={() => (window.location.pathname = routePrefix)} />
    ),
    new View("Country Guesser", "country_guesser", <CountryGuesser />),
    // new View("City Alphabet", "city_alphabet", <CityAlphabet />),
  ];

  useEffect(() => {
    console.info(`Route prefix: ${routePrefix}`);
  }, [routePrefix]);

  return (
    <Grommet theme={theme} full>
      <Header
        onClick={(v) => navigate(routePrefix + v)}
        items={{
          Home: "",
          ...Object.fromEntries(views.map((view) => [view.display, view.url])),
        }}
      />
      <Box
        background={"brand"}
        direction={"column"}
        style={{ height: "95%", topMargin: "5%" }}
      >
        <Routes>
          {views.map((view, i) => (
            <Route
              key={i}
              path={routePrefix + view.url}
              element={
                <Grommet theme={theme} full>
                  {view.componment}
                </Grommet>
              }
            />
          ))}
          <Route path={routePrefix} element={MainMenu(views)} />
        </Routes>
      </Box>
    </Grommet>
  );
}

export default App;
function MainMenu(views) {
  const [routePrefix] = useRoutePrefix(false);
  return (
    <Box
      background={"brand"}
      direction={"column"}
      style={{ minHeight: "100%" }}
    >
      {views.map((view, i) => (
        <Anchor key={i} alignSelf="center" href={routePrefix + "/" + view.url}>
          {i + 1} - {view.display}
        </Anchor>
      ))}

      <Box
        direction={"row"}
        justify={"end"}
        style={{ position: "fixed", bottom: 0, right: 0 }}
        margin={{ right: "large", left: "large" }}
      >
        <GitHubButton
          href="https://github.com/dansegal10/Doomsday-algorithm-practice"
          data-icon="octicon-star"
          data-show-count="true"
          aria-label="Star me on GitHub"
        >
          Star
        </GitHubButton>
      </Box>
    </Box>
  );
}
