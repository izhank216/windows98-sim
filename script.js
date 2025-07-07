function toggleStartMenu() {
  const menu = document.getElementById("startMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function openWindow(id) {
  document.getElementById(id).style.display = "block";
  document.getElementById("startMenu").style.display = "none";
}

function closeWindow(id) {
  document.getElementById(id).style.display = "none";
}

function updateClock() {
  const clock = document.getElementById("clock");
  const now = new Date();
  clock.innerText = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();
