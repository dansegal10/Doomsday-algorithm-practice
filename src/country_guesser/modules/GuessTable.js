import { Box } from "grommet";
import React from "react";

export function GuessTable({ children, max = -1 }) {
  function generateChild(child, i) {
    return (
      <Box
        width="100%"
        direction="row"
        style={{ position: "relative", border: "1px solid gray", minHeight:"40px", alignItems: "center", alignContent: "center" }}
        key={i}
      >
        {child}
      </Box>
    );
  }
  return (
    <Box
      width="90%"
      align="center"
      background="light-2"
      height={{ min: "150px", border:"2px solid white" }}
    >
      {children.map((child, i) => generateChild(child, i))}
      {max === -1 || max - children.length <= 0 ? (
        <span></span>
      ) : (
        Array.from(Array(max - children.length).keys()).map((i) => generateChild(
            <span></span>, i
        ))
      )}
    </Box>
  );
}
