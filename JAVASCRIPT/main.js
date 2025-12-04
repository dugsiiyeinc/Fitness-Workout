// nav
const links = document.querySelectorAll("nav a");
const current = window.location.pathname.split("/").pop();

links.forEach((link) => {
  if (link.getAttribute("href") === current) {
    link.classList.add("active");
  }
});

// active btn
const workoutPlanner = document.querySelector("#btn-workuot");
const startWorkout = document.querySelector("#btn-start");
const sectionWorkout = document.querySelector("#workout-planner");
const sectionStart = document.querySelector("#start-workout");
