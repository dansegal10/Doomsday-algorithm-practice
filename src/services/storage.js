const getHighScore = (type) => parseInt(localStorage.getItem('highScore' + type)) || 0;
const setHighScore = (type, score) => {
  localStorage.setItem('highScore' + type, score)
};

export const storage = {
  getHighScore,
  setHighScore
};