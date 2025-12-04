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
