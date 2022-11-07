// show the avtive orange color on what the user choose

var add_product = document.getElementsByClassName("add_product");
var sell_item = document.getElementsByClassName("sell_item");
var btns = document.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");

    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
function chooseBtn() {
  var btn = document.getElementsByClassName("btn1");

  btn[0].addEventListener("click", function () {
    sell_item[0].classList.add("show");
    add_product[0].classList.remove("show");
    add_product[0].classList.add("hide");
  });

  var btn2 = document.getElementsByClassName("btn2");

  btn2[0].addEventListener("click", function () {
    sell_item[0].classList.remove("show");
    add_product[0].classList.add("show");
  });
}

var loadFileOne = function (event) {
  var image_one = document.getElementById("image_one");
  var input = document.querySelector(".input_file_one");
  var icon = document.querySelector(".upload_icon_one");
  image_one.src = URL.createObjectURL(event.target.files[0]);
  input.classList.add("hide");
  icon.classList.add("hide");
};
var loadFileTwo = function (event) {
  var image_two = document.getElementById("image_two");
  var input = document.querySelector(".input_file_two");
  var icon = document.querySelector(".upload_icon_two");
  image_two.src = URL.createObjectURL(event.target.files[0]);
  input.classList.add("hide");
  icon.classList.add("hide");
};
var loadFileThree = function (event) {
  var image_three = document.getElementById("image_three");
  var input = document.querySelector(".input_file");
  var icon = document.querySelector(".upload_icon_three");
  image_three.src = URL.createObjectURL(event.target.files[0]);
  input.classList.add("hide");
  icon.classList.add("hide");
};
var loadFileFour = function (event) {
  var image_four = document.getElementById("image_four");
  var input = document.querySelector(".input_file");
  var icon = document.querySelector(".upload_icon_four");
  image_four.src = URL.createObjectURL(event.target.files[0]);
  input.classList.add("hide");
  icon.classList.add("hide");
};
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

// change size btn choose
const sizeBtns = document.querySelectorAll(".size_btn");

sizeBtns.forEach((item, i) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("check")) {
      item.classList.remove("check");
    } else {
      item.classList.add("check");
    }
  });
});

// add a new input color
const allInput = document.querySelector(".add_color_input").children;
const maxItem = 9;
var plusInput = document.getElementById("add_color_input");
var addColor = document.querySelector(".add_color_input");

plusInput.addEventListener("click", () => {
  if ( allInput.length>maxItem) {
    return;
  } else {
    var x = document.createElement("input");
    x.setAttribute("type", "color");
    addColor.appendChild(x);
  }
});
window.onload = function () {
  chooseBtn();
};
