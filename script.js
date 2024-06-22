let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];

const timerBox = document.querySelector('.timer-box');

const playButton = document.getElementById('Play');
const stopButton = document.getElementById('Stop');
const resetButton = document.getElementById('Reset');
const lapsButton = document.getElementById('Laps');

// Apply function when we click on 'Buttons'

let int = null;

playButton.addEventListener('click', () => {
  if (int !== null) {
    clearInterval(int)
  };
  int = setInterval(displayTimer, 10);
  lapsButton.classList.remove('hide');
});

stopButton.addEventListener("click", () => {
  clearInterval(int);
});

resetButton.addEventListener("click", () => {
  clearInterval(int);
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0]
  timerBox.innerHTML = '00 : 00 : 00 : 000';
  lapsButton.classList.add('hide')
  lapRecords.innerHTML = ''
});

lapsButton.addEventListener("click", () => console.log(timerBox.innerHTML));

const displayTimer = () => {
  milliseconds += 10;
  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes == 1000) {
      minutes = 0
      hours++;
    }

  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

  timerBox.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
};

// LAPS RECORD SYSTEM

const lapRecords = document.querySelector('.lapbox');

lapsButton.addEventListener("click", () => {
  const newLine = timerBox.innerHTML;
  lapRecords.classList.remove('hide');
  lapRecords.innerHTML += `<li>${newLine}</li>`;
});