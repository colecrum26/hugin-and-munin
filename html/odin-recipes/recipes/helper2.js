const btn2 = document.getElementById("chef2-btn");
btn2.addEventListener("click", showHideChef2);

function showHideChef2() {
  const chef2 = document.getElementById("chef2");
  if (chef2.style.display == "block") {
    chef2.style.display = "none";
  } else {
    chef2.style.display = "block";
  }
}