let timerDisplay = document.getElementsByClassName("timerdisplay")[0];
let startTime, elapsedTime = 0, timerInterval;


let startBtn = document.getElementById("start-btn")
let stopBtn = document.getElementById("stop-btn")


let displayElapsedTime = () => {
  let minutes = Math.floor(elapsedTime / 60000);
  let seconds = Math.floor((elapsedTime % 60000) / 1000);
  let milliseconds = elapsedTime % 1000;
  timerDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${milliseconds.toString().slice(0, 2)}`;
};  

const startStopwatch = () => {
  stopBtn.disabled = false
  startBtn.disabled = true
  if (timerInterval) return;
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    displayElapsedTime();
  }, 10);

};

const stopStopwatch = () => {
  startBtn.disabled = false
  stopBtn.disabled = true
  clearInterval(timerInterval);
  timerInterval = null;
};

const resetStopwatch = () => {
    stopBtn.disabled = false
    startBtn.disabled = false
  clearInterval(timerInterval);
  timerInterval = null;
  elapsedTime = 0;
  displayElapsedTime();
  timerDisplay.innerHTML = "00:00:00"
  const lapList = document.getElementById('lap-list');
  lapList.innerHTML = "";
};


const lapStopwatch = () => {
  const lapTime = document.createElement('li');
  lapTime.textContent = timerDisplay.textContent;
  const lapList = document.getElementById('lap-list');
  lapList.appendChild(lapTime);
};

lapBtn.addEventListener('click', lapStopwatch);