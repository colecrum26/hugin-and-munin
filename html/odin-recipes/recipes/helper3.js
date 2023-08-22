const btn3 = document.getElementById("chef3-btn");
btn3.addEventListener("click", showHideChef3);

function showHideChef3() {
  const chef3 = document.getElementById("chef3");
  if (chef3.style.display == "block") {
    chef3.style.display = "none";
  } else {
    chef3.style.display = "block";
  }
}