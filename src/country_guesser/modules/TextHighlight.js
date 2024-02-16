import React, { useEffect, useState } from "react";

export function TextHighlight({ text, highlight }) {
  const [parts, setparts] = useState([text]);
  useEffect(() => {
    let newParts = [text];
    if (highlight !== "") {
      newParts = text.split(new RegExp(`(${highlight})`, "gi"));
    }
    setparts(newParts);
  }, [text, highlight]);

  return (
    <span>
      {parts.map((part, i) => (
        <span key={i}>
          {part.toLowerCase() === highlight.toLowerCase() ? (
            <b>{part}</b>
          ) : (
            part
          )}
        </span>
      ))}
    </span>
  );
}
