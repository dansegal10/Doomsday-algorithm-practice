import { useState, useEffect } from 'react';
import {storage} from "../services/storage";

export function useHighScoreState(type) {
  const [highScore, setHighScore] = useState(storage.getHighScore(type));

  useEffect(() => {
    storage.setHighScore(type, highScore)
  }, [highScore]);

  return [highScore, setHighScore];
}