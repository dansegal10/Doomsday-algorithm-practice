import { Box, Grommet } from "grommet";
import React, { useEffect } from "react";
import GitHubButton from "react-github-btn";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import useRoutePrefix from "./functions/useRoutePrefix";
import { MindGames } from "./views/MindGames";
import { Spyfall } from "./views/Spyfall";

const theme = {
  global: {
    font: {
      family: "Solway",
    },
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
  const [routePrefix] = useRoutePrefix(true);
  const views = [
    new View("Mind Games", "mind_games", <MindGames />),
    new View(
      "Spy Fall",
      "spy_fall",
      <Spyfall exit={() => window.location.pathname = routePrefix} />
    ),
  ];

  useEffect(() => {
    console.info(`Route prefix: ${routePrefix}`);
  }, [routePrefix]);

  return (
    <Grommet theme={theme} full>
      <Box
        background={"brand"}
        direction={"column"}
        style={{ minHeight: "100%" }}
      >
        <BrowserRouter>
          <Routes>
            {views.map((view, i) => (
              <Route
                key={i}
                path={routePrefix + view.url}
                element={view.componment}
              />
            ))}
            <Route
              path={routePrefix}
              element={MainMenu(views)}
            />
          </Routes>
        </BrowserRouter>
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
        <Link key={i} align={"center"} to={routePrefix + "/" + view.url}>
          {i + 1} - {view.display}
        </Link>
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
