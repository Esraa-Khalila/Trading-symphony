// change image to another image when click on
// const productImages = document.querySelectorAll(".product-images img");
//     const productImageSlide = document.querySelector(".image-main");

//     let activeImageSlide = 0;

//     productImages.forEach((item, i) => {
//       item.addEventListener("click", () => {
//         productImages[activeImageSlide].classList.remove("active");
//         item.classList.add("active");
//         productImageSlide.src = item.src;
//         activeImageSlide = i;
//       });
//     });
// radio btn color and size button
const colorBtns = document.querySelectorAll(".color_btn");
const sizeBtns = document.querySelectorAll(".size_btn");
let checkedBtn = 0;
let checkedBtns = 0;
sizeBtns.forEach((item, i) => {
  item.addEventListener("click", () => {
    sizeBtns[checkedBtn].classList.remove("check");
    item.classList.add("check");
    checkedBtn = i;
  });
});
colorBtns.forEach((item, i) => {
  item.addEventListener("click", () => {
    colorBtns[checkedBtn].classList.remove("check_color");
    item.classList.add("check_color");
    checkedBtn = i;
  });
});

// quantity increase and decrease number

var input = document.getElementById("counter_input");
function increaseCount() {
  var value = parseInt(input.value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  input.value = value;
}
// calculate saved money

var discount = document.getElementById("discount_price").innerHTML;
var actual = document.getElementById("actual-price").innerHTML;
document.getElementById("saved_price").innerHTML = actual - discount;

// zoom image

const productImages = document.querySelectorAll(".product-images img");
const productImageSlide = document.querySelector(".image-main");

// change color
var color = document.querySelectorAll(".color_btn");
console.log(color);

color.forEach((item) => {
  const colorData = item.getAttribute("data-color");
  item.style.background = colorData;
});
// zoom image
var picture = document.querySelector("#pic");

// side pictures
var picture1 = document.querySelector("#pic1");
var picture2 = document.querySelector("#pic2");
var picture3 = document.querySelector("#pic3");
var picture4 = document.querySelector("#pic4");
var picture5 = document.querySelector("#pic5");
var picture6 = document.querySelector("#pic6");

var mainContainer = document.querySelector("#picture");

var rect = document.querySelector("#rect");

var zoom = document.querySelector("#zoom");
picList = [picture1, picture2, picture3, picture4, picture5, picture6];
let picActive = 1;

function changeColor(imgSrc, n) {
  picture.src = imgSrc;

  zoom.style.backgroundImage = "url(" + imgSrc + ")";
  console.log(zoom.style.backgroundImage);
  console.log(imgSrc);
  picList[picActive - 1].classList.remove("active");

  picList[n - 1].classList.add("active");

  picActive = n;
}
changeColor(picture1.src, 1);
let w1 = mainContainer.offsetWidth;
let h1 = mainContainer.offsetHeight;

let ratio = 2.7;

zoom.style.backgroundSize = w1 * ratio + "px " + h1 * ratio + "px";

let x, y, xx, yy;

let w2 = rect.offsetWidth;
let h2 = rect.offsetHeight;

w2 = w2 / 2;
h2 = h2 / 2;

function move(event) {
  x = event.offsetX;

  y = event.offsetY;

  xx = x - w2;
  yy = y - h2;

  if (x < w2) {
    x = w2;

    xx = 0;
  }

  if (x > w1 - w2) {
    x = w1 - w2;
    xx = x - w2;
  }

  if (y < h2) {
    y = h2;
    yy = 0;
  }

  if (y > h1 - h2) {
    y = h1 - h2;
  }

  xx = xx * ratio;
  yy = yy * ratio;

  rect.style.left = x + "px";
  rect.style.top = y + "px";

  zoom.style.backgroundPosition = "-" + xx + "px " + "-" + yy + "px";
}

mainContainer.addEventListener("mousemove", function () {
  move(event);
  addOpacity();
});

function addOpacity() {
  rect.classList.add("rect-active");
  zoom.classList.add("rect-active");
}

function removeOpacity() {
  zoom.classList.remove("rect-active");
}

mainContainer.addEventListener("mouseout", function () {
  removeOpacity();
});
