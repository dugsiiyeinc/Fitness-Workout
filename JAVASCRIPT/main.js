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

// DOM load
document.addEventListener("DOMContentLoaded", loadWorkout);

function loadWorkout() {
  const saved = localStorage.getItem("activeTab");

  if (saved === "planner") {
    workoutPlanner.classList.add("active");
    startWorkout.classList.remove("active");
    sectionWorkout.style.display = "flex";
    sectionStart.style.display = "none";
  } else if (saved === "start") {
    startWorkout.classList.add("active");
    workoutPlanner.classList.remove("active");
    sectionStart.style.display = "flex";
    sectionWorkout.style.display = "none";
  }
}
