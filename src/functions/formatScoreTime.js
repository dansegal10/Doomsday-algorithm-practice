export default function formatScoreTime (time) {
    let minutes = ("0" + Math.floor(time / 60000) % 60).slice(-2);
    let seconds = ("0" + Math.floor(time / 1000) % 60).slice(-2);
    let milliSeconds = ("0" + Math.floor(time / 10) % 100).slice(-2);
    return minutes + ":" + seconds + "." + milliSeconds;
  }