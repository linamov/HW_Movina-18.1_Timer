let totalSeconds = 85;

const formatTime = (seconds) => {
  const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  return `${mins}:${secs}`;
};

const timerDisplay = document.getElementById('timer');
timerDisplay.textContent = formatTime(totalSeconds);

const interval = setInterval(() => {
  totalSeconds--;
  timerDisplay.textContent = formatTime(totalSeconds);

  if (totalSeconds <= 0) {
    clearInterval(interval);
    alert("Time is up!");
  }
}, 1000);
