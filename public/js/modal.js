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

var popup_action = document.getElementById("popup_action");
var popup_data_action = document.querySelectorAll(".popup-data_action");
var span = document.getElementsByClassName("close_action")[0]; 

popup_data_action.forEach((item, i) => {
  item.addEventListener("click", () => {
    popup_action.style.display = "block";
  });
});
span.onclick = function () {
  popup_action.style.display = "none";
};