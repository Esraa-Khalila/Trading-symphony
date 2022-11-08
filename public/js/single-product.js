
// change image to another image when click on
const productImages = document.querySelectorAll(".product-images img");
    const productImageSlide = document.querySelector(".image-main");

    let activeImageSlide = 0;

    productImages.forEach((item, i) => {
      item.addEventListener("click", () => {
        productImages[activeImageSlide].classList.remove("active");
        item.classList.add("active");
        productImageSlide.src = item.src;
        activeImageSlide = i;
      });
    });
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
    function decreaseCount() {
      var value = parseInt(input.value, 10);
      if (value > 1) {
        value = isNaN(value) ? 0 : value;
        value--;
        input.value = value;
      }
    }

    // calculate saved money 
    
    var discount = document.getElementById('discount_price').innerHTML
    var actual = document.getElementById('actual-price').innerHTML
    document.getElementById('saved_price').innerHTML= actual-discount
   