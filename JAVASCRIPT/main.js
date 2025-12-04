// nav
const links = document.querySelectorAll("nav a");
const current = window.location.pathname.split("/").pop();

links.forEach((link) => {
  if (link.getAttribute("href") === current) {
    link.classList.add("active");
  }
});
