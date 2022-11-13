// slider to categories by arrow
const productContainers = [...document.querySelectorAll(".category_container")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];
const preIcon = [...document.querySelectorAll(".pre_icon")];

productContainers.forEach((item, i) => {
  let containerDimenstions = item.getBoundingClientRect();
  let containerWidth = containerDimenstions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});

//change design from grid to list
var choose_style = document.getElementById("choose_style");

var btns = choose_style.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
var grid = document.getElementsByClassName("grid");
var list = document.getElementsByClassName("list");
var h = document.getElementsByClassName("m");
function choose_btn() {
  var btn = choose_style.getElementsByClassName("btn1");

  btn[0].addEventListener("click", function () {
    list[0].classList.remove("show");
    grid[0].classList.add("show");
    grid[0].classList.remove("hide");
    h[0].style.display='grid'
  });

  var btn2 = choose_style.getElementsByClassName("btn2");

  btn2[0].addEventListener("click", function () {
    list[0].classList.add("show");
    grid[0].classList.remove("show");
    grid[0].classList.add("hide");
    h[0].style.display='none'
  });
}

// change page number every 12 items

const productItems = document.querySelector(".sub_product").children;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const page = document.querySelector(".page-num");
const maxItem = 12;
let index = 1;
let item = 28;
let count = 0;
const pagination = Math.ceil(productItems.length / maxItem);
function Numpage() {
  count = Math.ceil(item / maxItem);

  let pageNumbers = "";
  for (let i = 1; i <= count; i++) {
    pageNumbers = pageNumbers + `<span>${i}</span>`;
  }
}

prev.addEventListener("click", function () {
  index--;

  check();
  showItems();
});
next.addEventListener("click", function () {
  index++;
  check();
  showItems();
});

function check() {
  if (index == pagination) {
    next.classList.add("disabled");
  } else {
    next.classList.remove("disabled");
  }

  if (index == 1) {
    prev.classList.add("disabled");
  } else {
    prev.classList.remove("disabled");
  }
}

function showItems() {
  for (let i = 0; i < productItems.length; i++) {
    productItems[i].classList.remove("show");
    productItems[i].classList.add("hide");

    if (i >= index * maxItem - maxItem && i < index * maxItem) {
      productItems[i].classList.remove("hide");
      productItems[i].classList.add("show");
    }
    page.innerHTML = index;
  }
}

window.onload = function () {
  showItems();
  check();
  Numpage();
  choose_btn();
};
