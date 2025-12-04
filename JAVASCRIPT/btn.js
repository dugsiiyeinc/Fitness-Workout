// section browse form
const formBrowse = document.querySelector("#all-target");
const muscleSelect = document.querySelector("#muscle");
const daySelect = document.querySelector("#day");

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
});
