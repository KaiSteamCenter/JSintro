let timerDisplay = document.getElementsByClassName("timerdisplay")[0];
let startTime, elapsedTime = 0, timerInterval;



let displayElapsedTime = () => {
  let minutes = Math.floor(elapsedTime / 60000);
  let seconds = Math.floor((elapsedTime % 60000) / 1000);
  let milliseconds = elapsedTime % 1000;
  timerDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${milliseconds.toString().slice(0, 2)}`;
};  

const startStopwatch = () => {
  if (timerInterval) return;
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    displayElapsedTime();
  }, 10);
};

const stopStopwatch = () => {
  clearInterval(timerInterval);
  timerInterval = null;
};

const resetStopwatch = () => {
  clearInterval(timerInterval);
  timerInterval = null;
  displayElapsedTime();
  timerDisplay.innerHTML = "00:00:00"

};


