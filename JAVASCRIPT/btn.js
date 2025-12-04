// section browse form
const formBrowse = document.querySelector("#all-target");
const muscleSelect = document.querySelector("#muscle");
const daySelect = document.querySelector("#day");

// Load DOM for browse
document.addEventListener("DOMContentLoaded", () => {
  const saved = getBrowseData() || {}; // {} if null
  if (saved.muscle && muscleSelect) muscleSelect.value = saved.muscle;
  if (saved.day && daySelect) daySelect.value = saved.day;
});

// 2. Add event listener
formBrowse.addEventListener("change", async () => {
  const selectedMuscle = muscleSelect ? muscleSelect.value : "";
  const selectedDay = daySelect ? daySelect.value : "";

  // Save selected muscle
  saveBrowseData({ muscle: selectedMuscle, day: selectedDay });

  // Fetch API
  const url = `https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=${selectedMuscle}`;

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "6b58370b37msh583979df4caebe2p13c4b2jsn7c46235268fc",
      "x-rapidapi-host": "exercises-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
});

// Populate select options
const muscles = [
  "biceps",
  "chest",
  "back",
  "shoulders",
  "legs",
  "abs",
  "triceps",
];

muscles.forEach((muscle) => {
  const option = document.createElement("option");
  option.value = muscle;
  option.textContent = muscle.charAt(0).toUpperCase() + muscle.slice(1);
  muscleSelect.appendChild(option);
});

// Save to localStorage (store an object)
function saveBrowseData(obj) {
  localStorage.setItem("all-target", JSON.stringify(obj));
}

// Get from localStorage (returns object or null)
function getBrowseData() {
  try {
    return JSON.parse(localStorage.getItem("all-target"));
  } catch {
    return null;
  }
}
