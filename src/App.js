import { Box, Grommet } from "grommet";
import React, { useState } from "react";
import GitHubButton from "react-github-btn";
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

const mindGames = "Mind Games";
const spyfall = "Spyfall";
const views = [mindGames, spyfall];

function App() {
  // const [selectedView, setSelectedView] = useState(spyfall);
  const [selectedView, setSelectedView] = useState("");
  return (
    <Grommet theme={theme} full>
      <Box
        background={"brand"}
        direction={"column"}
        style={{ minHeight: "100%" }}
      >
        {selectedView == "" ? (
          views.map((view, i) => (
            <Box
              key={view}
              align={"center"}
              onClick={() => {
                setSelectedView(view);
              }}
            >
              {i + 1} - {view}
            </Box>
          ))
        ) : selectedView === mindGames ? (
          <MindGames />
        ) : selectedView === spyfall ? (
          <Spyfall exit={() => setSelectedView("")} />
        ) : (
          <p>Error - No selected view</p>
        )}
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
    </Grommet>
  );
}

export default App;
