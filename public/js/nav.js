const createNav = () => {
  let nav = document.querySelector(".navbar");
  // <button class="hamburger-icon" onclick="openClose()">
  //   <iconify-icon icon="cil:hamburger-menu"> </iconify-icon>
  // </button>
  nav.innerHTML = `    

    <div class="container nav ">

    <div class="brand_logo"class="nav-content">
      <a href="./home.html"
        >Trading
        <p>Symphoney</p>
      </a>
    </div>
    <div class="delivery">
      <iconify-icon
        class="delivery_item location"
        icon="twemoji:flag-jordan"
      ></iconify-icon>
      <div class="delivery_item">Delivery To <span>Amman</span></div>
      <iconify-icon
        class="delivery_item"
        icon="akar-icons:chevron-down"
      ></iconify-icon>
    </div>
    <div class="search">
      <input type="search" placeholder="What are you looking for?" />
      <iconify-icon class="search-icon" icon="bi:search"></iconify-icon>
    </div>
    <div>
      <ul class="nav_menu">
        <li><a>اللغة العربية</a></li>
        <li><a class="nav_item">Cart</a></li>
        <li><a class="nav_item">Sell with Us</a></li>
        <li><a href='./login.html'><button type="button" class="btn_nav">Sign in</button></a></li>
      </ul>
    </div>
  </div>
  <div class="bg_sub_nav">
  <div class='container sub_nav'>
    <div class="sub_nav_item">
      Search in Category
      <ul class="dropdown-item">
        <li></li>
      </ul>
      <iconify-icon icon="akar-icons:chevron-down"></iconify-icon>
    </div>
    <div class="sub_nav_item">
      Search in all web-category
      <ul class="dropdown-item">
        <li></li>
      </ul>
      <iconify-icon icon="akar-icons:chevron-down"></iconify-icon>
    </div>
    <div class="sub_nav_item">
      Color
      <ul class="dropdown-item">
        <li></li>
      </ul>
      <iconify-icon icon="akar-icons:chevron-down"></iconify-icon>
    </div>
    <div class="sub_nav_item">
      Size
      <ul class="dropdown-item">
        <li></li>
      </ul>
      <iconify-icon icon="akar-icons:chevron-down"></iconify-icon>
    </div>
    <input
      class="sub_nav_item"
      placeholder="Lowest Price"
    />
    <input class="sub_nav_item hight" placeholder="Highest Price"/>
    <button class="btn_search" type="button">Search</button>
  </div></div>
  `;
};
createNav();

// function openClose() {
//   var navItem = document.getElementById("nav-content");
//   if (navItem.style.display === "block") {
//     navItem.style.display = "none";
//   } else {
//     navItem.style.display = "block";
//   }
// }
