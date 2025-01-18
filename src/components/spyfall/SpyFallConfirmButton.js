import { Button } from "grommet";
import React, { useState } from "react";

export function SpyFallConfirmButton({
  text,
  confirmText,
  onTrigger = () => null,
  onDisable = () => null,
  onClick = () => null,
  noConfirmDisable = false,
}) {
  const [confirm, setConfirm] = useState(false);
  const [triggered, setTriggered] = useState(false);

  const toggleTriggerState = () => {
    setConfirm(false);
    setTriggered(!triggered);
  };

  const buttonPress = () => {
    onClick();
    if (triggered && noConfirmDisable) {
      toggleTriggerState();
      onDisable();
      return;
    }

    if (confirm) {
      toggleTriggerState();
      if (triggered) {
        onDisable();
      } else {
        onTrigger();
      }
      return;
    }
    setConfirm(true);
  };

  return (
    <Button
      margin={{ vertical: "10px" }}
      onClick={buttonPress}
      label={confirm ? confirmText : text}
    ></Button>
  );
}
