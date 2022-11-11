// show the avtive orange color on what the user choose

var add_product = document.getElementsByClassName("add_product");
var sell_item = document.getElementsByClassName("sell_item");
var added_item = document.getElementById("added_item");
var action_panel = document.getElementById("action_panel");
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
    action_panel.classList.remove("show");
  });

  var btn2 = document.getElementsByClassName("btn2");

  btn2[0].addEventListener("click", function () {
    sell_item[0].classList.remove("show");
    add_product[0].classList.add("show");
    added_item.classList.remove("show");
  });
  var btn3 = document.getElementsByClassName("btn3");

  btn3[0].addEventListener("click", function () {
    sell_item[0].classList.remove("show");
    add_product[0].classList.remove("show");
    add_product[0].classList.add("hide");
    added_item.classList.add("show");
  });
  var btn4 = document.getElementsByClassName("btn4");
  btn4[0].addEventListener("click", function () {
    sell_item[0].classList.remove("show");
    add_product[0].classList.remove("show");
    add_product[0].classList.add("hide");
    added_item.classList.remove("show");
    action_panel.classList.add("show");
  });
}
var actions = document.getElementsByClassName("actions");
for (var i = 0; i < actions.length; i++) {
  actions[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("choose");

    current[0].className = current[0].className.replace(" choose", "");
    this.className += " choose";
  });
}


var Executed_orders = document.getElementsByClassName("Executed_orders");
var Upcoming_orders = document.getElementsByClassName("Upcoming_orders");
var actions_one = document.getElementsByClassName("actions_one");
actions_one[0].addEventListener("click", function () {
  Executed_orders[0].classList.remove("show");
  Upcoming_orders[0].classList.add("show"); 
});
var actions_two = document.getElementsByClassName("actions_two");

actions_two[0].addEventListener("click", function () {
  Upcoming_orders[0].classList.remove("show");
  Executed_orders[0].classList.add("show");
  Upcoming_orders[0].classList.add("hide");
});

// upload  4 image for product
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
  if (allInput.length > maxItem) {
    return;
  } else {
    var x = document.createElement("input");
    x.setAttribute("type", "color");
    addColor.appendChild(x);
  }
});
// when user click on edit can click on icon edit
const editIcon = document.querySelectorAll(".edit_icon");
const editInput = document.getElementsByTagName("tr");
editIcon.forEach((item, i) => {
  editIcon[i].addEventListener("click", function () {
    if (editInput[i].hasAttribute("contenteditable")) {
      editInput[i].removeAttribute("contenteditable");
      editIcon[i].style.color = "gray";
    } else {
      editInput[i].setAttribute("contenteditable", "");
      editIcon[i].style.color = "black";
    }
  });
});
window.onload = function () {
  chooseBtn();
};
