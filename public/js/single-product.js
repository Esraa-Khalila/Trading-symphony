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

const image = document.querySelectorAll(".image")[0];
const zoom = document.querySelectorAll(".zoom")[0];
const zoomImage = document.querySelectorAll(".zoom-image")[0];

let clearSrc;
let zoomLevel = 1;

const images = [
  {
    thumb:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
    hires:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
  },
  {
    thumb: "../images/Announcements-/Announcements-four.png",
    hires: "../images/Announcements-/Announcements-four.png",
  },
];
function e(x) {
  // set to random image
  let img = images[x];

  image.getElementsByTagName("a")[0].setAttribute("href", img.hires);
  image.getElementsByTagName("img")[0].setAttribute("src", img.thumb);

  const preloadImage = (url) => {
    let img = new Image();
    img.src = url;
  };

  preloadImage(img.hires);

  const enterImage = function (e) {
    zoom.classList.add("show", "loading");
    clearTimeout(clearSrc);

    let posX,
      posY,
      touch = false;

    if (e.touches) {
      posX = e.touches[0].clientX;
      posY = e.touches[0].clientY;
      touch = true;
    } else {
      posX = e.clientX;
      posY = e.clientY;
    }

    touch
      ? (zoom.style.top = `${posY - zoom.offsetHeight / 1.25}px`)
      : (zoom.style.top = `${posY - zoom.offsetHeight / 2}px`);
    zoom.style.left = `${posX - zoom.offsetWidth / 2}px`;

    let originalImage = this.getElementsByTagName("a")[0].getAttribute("href");

    zoomImage.setAttribute("src", originalImage);

    // remove the loading class
    zoomImage.onload = function () {
      console.log("hires image loaded!");
      setTimeout(() => {
        zoom.classList.remove("loading");
      }, 500);
    };
  };

  const leaveImage = function () {
    // remove scaling to prevent non-transition
    zoom.style.transform = null;
    zoomLevel = 1;
    zoom.classList.remove("show");
    clearSrc = setTimeout(() => {
      zoomImage.setAttribute("src", "");
    }, 250);
  };

  const move = function (e) {
    e.preventDefault();

    let posX,
      posY,
      touch = false;

    if (e.touches) {
      posX = e.touches[0].clientX;
      posY = e.touches[0].clientY;
      touch = true;
    } else {
      posX = e.clientX;
      posY = e.clientY;
    }

    // move the zoom a little bit up on mobile (because of your fat fingers :<)
    touch
      ? (zoom.style.top = `${posY - zoom.offsetHeight / 1.25}px`)
      : (zoom.style.top = `${posY - zoom.offsetHeight / 2}px`);
    zoom.style.left = `${posX - zoom.offsetWidth / 2}px`;

    let percX = (posX - this.offsetLeft) / this.offsetWidth,
      percY = (posY - this.offsetTop) / this.offsetHeight;

    let zoomLeft = -percX * zoomImage.offsetWidth + zoom.offsetWidth / 2,
      zoomTop = -percY * zoomImage.offsetHeight + zoom.offsetHeight / 2;

    zoomImage.style.left = `${zoomLeft}px`;
    zoomImage.style.top = `${zoomTop}px`;
  };

  image.addEventListener("mouseover", enterImage);
  image.addEventListener("touchstart", enterImage);

  image.addEventListener("mouseout", leaveImage);
  image.addEventListener("touchend", leaveImage);

  image.addEventListener("mousemove", move);
  image.addEventListener("touchmove", move);

  image.addEventListener("mouseover", (e) => {
    e.preventDefault();
    e.deltaY > 0 ? zoomLevel-- : zoomLevel++;

    if (zoomLevel < 1) zoomLevel = 1;
    if (zoomLevel > 2) zoomLevel = 2;

    console.log(`zoom level: ${zoomLevel}`);
    zoom.style.transform = `scale(${zoomLevel})`;
  });
}
const productImages = document.querySelectorAll(".product-images img");
const productImageSlide = document.querySelector(".image-main");

let activeImageSlide = 0;

productImages.forEach((item, i) => {
  item.addEventListener("click", () => {
    productImages[activeImageSlide].classList.remove("active");
    item.classList.add("active");
    productImageSlide.src = item.src;
    activeImageSlide = i;
    e(item.getAttribute("data-image"));
  });
});
e(0);
