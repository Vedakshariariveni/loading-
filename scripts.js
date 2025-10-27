let startTime = 0;
let updatedTime = 0;
let difference = 0;
let tInterval;
let running = false;

const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

// Start button
startBtn.onclick = function () {
  if (!running) {
    startTime = new Date().getTime() - difference;
    tInterval = setInterval(updateTime, 10);
    running = true;
  }
};

// Stop button
stopBtn.onclick = function () {
  if (running) {
    clearInterval(tInterval);
    difference = new Date().getTime() - startTime;
    running = false;
  }
};

// Reset button
resetBtn.onclick = function () {
  clearInterval(tInterval);
  running = false;
  difference = 0;
  display.textContent = "00 : 00 : 000";
};

// Function to update stopwatch display
function updateTime() {
  updatedTime = new Date().getTime() - startTime;

  let minutes = Math.floor((updatedTime / (1000 * 60)) % 60);
  let seconds = Math.floor((updatedTime / 1000) % 60)
  let milliseconds = updatedTime % 1000;

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  milliseconds =
    milliseconds < 100
      ? milliseconds < 10
        ? "00" + milliseconds
        : "0" + milliseconds
      : milliseconds;

  display.textContent = {minutes}:{seconds}:{milliseconds}⁠;
}