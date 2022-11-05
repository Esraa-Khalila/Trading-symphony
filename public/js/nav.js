const createNav = () => {
  let nav = document.querySelector(".navbar");

  nav.innerHTML = `
  <nav class="responsive_menu">
  <div class="nav_mobile">
    <div class="nav_item brand_logo">
      <a href="./home.html"
        >Trading
        <p>Symphoney</p>
      </a>
    </div>
    <div class="toggle">
      <iconify-icon class="icon_search" icon="bi:search"></iconify-icon>

      <div class="hamburger-icon" id="hamburger-icon">
        <iconify-icon icon="pajamas:hamburger"></iconify-icon>
      </div>
    </div>
  </div>
  <div id="nav-content" class="nav_content js-close hidden">
    <ul class="nav_menu">
      <div class="delivery dropdown-list">
        <iconify-icon
          class="delivery_item location"
          icon="twemoji:flag-jordan"
        ></iconify-icon>
        <div class="delivery_item">
          Delivery To <br /><span>Amman</span>
        </div>
        <iconify-icon
          icon="ep:arrow-down-bold"
          class="dropdown_icon"
        ></iconify-icon>
        <!-- <ul class="dropdown-item">
          <li>- Zarqa</li>
          <li>- Irbid</li>
          <li>- Jersh</li>
        </ul> -->
      </div>
      <li class='item_nav'><a>اللغة العربية</a></li>
      <li class='item_nav'><a class="nav_menu_item">Cart</a></li>
      <li class='item_nav'><a class="nav_menu_item">Sell with Us</a></li>
      <li>
        <a href="./login.html"
          ><button type="button" class="btn_nav">Sign in</button></a
        >
      </li>
    </ul>
  </div>
</nav>
<nav class="navbar">
<div class="container nav">
  <div class="nav_item brand_logo">
    <a href="./home.html"
      >Trading
      <p>Symphoney</p>
    </a>
  </div>
  <div class="nav_item delivery dropdown-list">
    <iconify-icon
      class="delivery_item location"
      icon="twemoji:flag-jordan"
    ></iconify-icon>
    <div class="delivery_item">Delivery To <br /><span>Amman</span></div>
    <iconify-icon
      icon="ep:arrow-down-bold"
      class="dropdown_icon"
    ></iconify-icon>
    <!-- <ul class="dropdown-item">
      <li>- Zarqa</li>
      <li>- Irbid</li>
      <li>- Jersh</li>
    </ul> -->
  </div>
  <div class="nav_item search">
    <input type="search" placeholder="What are you looking for?" />
    <iconify-icon class="search-icon" icon="bi:search"></iconify-icon>
  </div>
  <div class="nav_item nav_content">
    <ul class="nav_menu">
      <li><a>اللغة العربية</a></li>
      <li><a href='./Empty-cart.html'class="nav_menu_item">Cart</a></li>
      <li><a href='../Sell-with-us.html' class="nav_menu_item">Sell with Us</a></li>
      <li>
        <a href="./login.html"
          ><button type="button" class="btn_nav">Sign in</button></a
        >
      </li>
    </ul>
  </div>
</div>
<div class="bg_sub_nav">
  <div >
  <form class=" sub_nav" method='post'>
    <div class="sub_nav_item">
      <select class="select1">
        <option>Search in Category</option>
        <option>mobiles</option>
        <option>Home Furniture</option>
        <option>Electronics</option>
      </select>
    </div>
    <div class="sub_nav_item">
      <select class="select1">
        <option>Search in all web-category</option>
        <option>mobiles</option>
        <option>Home Furniture</option>
        <option>Electronics</option>
      </select>
    </div>

    <div class="sub_nav_item">
      <select class="select1">
        <option>Color</option>
        <option>red</option>
        <option>yellow</option>
        <option>brown</option>
      </select>
    </div>
    <div class="sub_nav_item">
      <select class="select1">
        <option>Size</option>
        <option>m</option>
        <option>xl</option>
        <option>xxl</option>
      </select>
    </div>
    <input
      class="sub_nav_item sub_nav_price"
      placeholder="Lowest"
    /><span>&mdash;</span>
    <input
      class="sub_nav_item sub_nav_price"
      placeholder="Highest"
    />
    <button class="btn_search" type="button">Search</button>
    </form>
  </div>
</div>
</nav>
  `;
};
createNav();

const burgerIcon = document.getElementById("hamburger-icon");
const navItem = document.getElementById("nav-content");
burgerIcon.addEventListener("click", function () {
  console.log(navItem);
  if (navItem.classList.contains("js-open")) {
    navItem.classList.remove("js-open");
    navItem.classList.remove("hidden");
    navItem.classList.add("js-close");
  } else {
    navItem.classList.add("js-open");
    navItem.classList.remove("js-close");
  }
});
console.log(window.innerWidth);