// calendar
document.addEventListener("DOMContentLoaded", function () {
  const monthYear = document.querySelector("#month-year");
  const daysContainer = document.querySelector("#days-weeks");

  const prevBtn = document.querySelector("#prev");
  const nextBtn = document.querySelector("#next");

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let currentDate = new Date();
  const today = new Date();

  function renderCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    monthYear.textContent = `${months[month]} ${year}`;
    daysContainer.innerHTML = "";

    // prev month
    const prevLast = new Date(year, month, 0).getDate();
    for (let i = firstDay; i > 0; i--) {
      let div = document.createElement("div");
      div.textContent = prevLast - i + 1;
      div.classList.add("fade");
      daysContainer.appendChild(div);
    }

    // actual month
    for (let i = 1; i <= daysInMonth; i++) {
      let div = document.createElement("div");
      div.textContent = i;

      if (
        i === today.getDate() &&
        month === today.getMonth() &&
        year === today.getFullYear()
      ) {
        div.classList.add("today");
      }

      daysContainer.appendChild(div);
    }

    // next month
    const nextDays = 7 - new Date(year, month + 1, 0).getDay() - 1;
    for (let i = 1; i <= nextDays; i++) {
      let div = document.createElement("div");
      div.textContent = i;
      div.classList.add("fade");
      daysContainer.appendChild(div);
    }
  }

  // --- Event Listeners OUTSIDE renderCalendar ---
  prevBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
  });

  nextBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
  });

  renderCalendar(currentDate);
});

// section of time exercise

const displayMinutes = document.querySelector("#display-minutes");
const startBtn = document.querySelector("#start-btn");
const stopBtn = document.querySelector("#stop-btn");
const resetBtn = document.querySelector("#reset-btn");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress-bar");

let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;
const totalDuration = 45 * 60 * 1000; // 45 minutes in milliseconds

function updateTime() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  let seconds = Math.floor((elapsedTime / 1000) % 60);

  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");

  displayMinutes.textContent = `${minutes}:${seconds}`;

  // Update progress bar
  const progressPercent = Math.min((elapsedTime / totalDuration) * 100, 100);
  progress.style.width = `${progressPercent}%`;

  if (elapsedTime >= totalDuration) {
    clearInterval(timer);
    isRunning = false;
  }
}

startBtn.addEventListener("click", () => {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(updateTime, 1000);
    isRunning = true;
  }
});

stopBtn.addEventListener("click", () => {
  if (isRunning) {
    clearInterval(timer);
    isRunning = false;
  }
});

resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  elapsedTime = 0;
  isRunning = false;
  displayMinutes.textContent = "0:00";
  progress.style.width = "0%";
});

// Click-to-seek progress bar
progressBar.addEventListener("click", (e) => {
  const width = progressBar.clientWidth;
  const clickX = e.offsetX;
  const newElapsed = (clickX / width) * totalDuration;

  elapsedTime = newElapsed;
  startTime = Date.now() - elapsedTime;

  updateTime();
});
