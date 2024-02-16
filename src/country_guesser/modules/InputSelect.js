import { Box, Select, Text } from "grommet";
import React, { useEffect, useState } from "react";
import { TextHighlight } from "./TextHighlight";

export function InputSelect({
  onChange,
  options,
  value = "",
  optionNameOperand = (o) => o,
  maxDisplayValues = 25,
}) {
  const [searchValue, setsearchValue] = useState("");
  const [shownOptions, setshownOptions] = useState([]);

  const updateShownOptions = (search) => {
    let newOptions = [];
    for (let i = 0; i < options.length; i++) {
      let value = optionNameOperand(options[i]);
      if (value.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
        newOptions.push(value);
      }
    }
    newOptions = newOptions.sort();
    setshownOptions(newOptions.splice(0, maxDisplayValues));
    onChange(search);
    setsearchValue(search.toLowerCase());
  };

  useEffect(() => {
    setshownOptions(options.map(optionNameOperand));
  }, [options, optionNameOperand]);

  const chooseOption = (option) => {
    onChange(option);
    setsearchValue(option.value);
  };

  return (
    <Box>
      <Select
        onSearch={updateShownOptions}
        options={shownOptions}
        value={value}
        onChange={chooseOption}
        children={(option, index, options, { active, disabled, selected }) => (
          <Text key={index}>
            <TextHighlight
              key={searchValue.length}
              text={option}
              highlight={searchValue}
            />
          </Text>
        )}
      />
    </Box>
  );
}
