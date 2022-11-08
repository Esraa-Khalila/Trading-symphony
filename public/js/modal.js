// popup open data from myitem and close this popup
var popup = document.getElementById("popup");
var btnData = document.querySelectorAll(".popup-data");
var span = document.getElementsByClassName("close")[0]; 

btnData.forEach((item, i) => {
  item.addEventListener("click", () => {
    popup.style.display = "block";
  });
});
span.onclick = function () {
  popup.style.display = "none";
};