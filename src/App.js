import { Box, Grommet } from "grommet";
import React, { useEffect, useState } from "react";
import GitHubButton from "react-github-btn";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
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
  const [selectedView, setSelectedView] = useState("");
  const views = [
    new View("Mind Games", "/mind_games", <MindGames />),
    new View(
      "Spy Fall",
      "/spy_fall",
      <Spyfall exit={() => setSelectedView("")} />
    ),
  ];

  return (
    <Grommet theme={theme} full>
      <Box
        background={"brand"}
        direction={"column"}
        style={{ minHeight: "100%" }}
      >
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={MainMenu(selectedView, views, setSelectedView)}
            />
            {views.map((view, i) => (
              <Route key={i} path={view.url} element={view.componment} />
            ))}
          </Routes>
        </BrowserRouter>
      </Box>
    </Grommet>
  );
}

export default App;
function MainMenu(selectedView, views, setSelectedView) {
  return (
    <Box
      background={"brand"}
      direction={"column"}
      style={{ minHeight: "100%" }}
    >
      {views.map((view, i) => (
        <Link
          key={i}
          align={"center"}
          // onClick={() => {
          // setSelectedView(view);
          // }}
          to={view.url}
        >
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
