// to show what inside every item
var btn = document.querySelectorAll(".btn");
var items = document.getElementsByClassName("product");

var down_arrow = document.getElementsByClassName("down_arrow");
var up_arrow = document.getElementsByClassName("up_arrow");

btn.forEach((item, i) => {
  btn[i].addEventListener("click", () => {
    if (items[i].classList.contains("show")) {
      items[i].classList.remove("show");
      down_arrow[i].style.display = "block";
      up_arrow[i].style.display = "none";
    } else {
      items[i].classList.add("show");
      down_arrow[i].style.display = "none";
      up_arrow[i].style.display = "block";
    }
  });
});

// to add new location and show it
var newLocation = document.getElementById("show_new_location");
var dataNewLocation = document.getElementById("new_location");
var existLocation = document.getElementById("exist_location");

newLocation.addEventListener("click", () => {
  if (dataNewLocation.style.display == "grid") {
    dataNewLocation.style.display = "none";
  } else {
    dataNewLocation.style.display = "grid";
  }
});
existLocation.addEventListener("click", () => {
  if (dataNewLocation.style.display == "block") {
    dataNewLocation.style.display = "none";
  }
});
