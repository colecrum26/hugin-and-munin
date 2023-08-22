const btn1 = document.getElementById("chef1-btn");
btn1.addEventListener("click", showHideChef1);

function showHideChef1() {
  const chef1 = document.getElementById("chef1");
  if (chef1.style.display == "block") {
    chef1.style.display = "none";
  } else {
    chef1.style.display = "block";
  }
}
