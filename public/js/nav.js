const createNav = () => {

 let nav = document.querySelector(".navbar");

 nav.innerHTML = `
<nav class="responsive_menu">

<div class="nav_mobile">
  <div class="hamburger-icon" id="hamburger-icon">
    <iconify-icon icon="pajamas:hamburger" onclick="openNav()"></iconify-icon>
  </div>
  <div class="nav_item brand_logo">
    <a href="./home.html">Trading
      <p>Symphoney</p>
    </a>
  </div>
  <div class="toggle">
    <iconify-icon class="icon_search" icon="bi:search"></iconify-icon>
    <a href="./Cart.html">
      <iconify-icon icon="el:shopping-cart" class="shopping_icon"></iconify-icon>
    </a>
  </div>
</div>
<div id="nav-content" class="nav_content overlay">
  <div class="mobile_title"><span>Menu</span><a href="javascript:void(0)" class="closebtn"
      onclick="closeNav()">&times;</a></div>

  <ul class="nav_menu overlay-content ">
    <li>
      <div class="nav_item mobile_search_div">
        <input type="search" placeholder="What are you looking for?" />
        <button class="mobile_search_btn">search</button>
      </div>
    </li>
    <li class='item_nav'>
      <iconify-icon icon="fa:filter" style="color: #edc50c;" class='mobile_icon'></iconify-icon>Filter
    </li>

    <li class='item_nav category_search'>
      <div>Category <iconify-icon icon="ant-design:plus-square-filled" style="color: #edc50c;"
          class="show_category"></iconify-icon>
        </iconify-icon>
      </div>
    </li>
    <div class="show_category_input">
      <input>
    </div>
    <li class='item_nav category_search'>
      <div>Sub-category <iconify-icon icon="ant-design:plus-square-filled" style="color: #edc50c;"
          class="show_category"></iconify-icon>
      </div>
    </li>
    <div class="show_category_input">
      <input>
    </div>
    <li class='item_nav category_search'>
      <div>Color <iconify-icon icon="ant-design:plus-square-filled" style="color: #edc50c;" class="show_category">
        </iconify-icon>
      </div>
    </li>
    <div class="show_category_input">
      <input>
    </div>
    <li class='item_nav category_search'>
      <div>Size<iconify-icon icon="ant-design:plus-square-filled" style="color: #edc50c;" class="show_category">
        </iconify-icon>
      </div>
    </li>
    <div class="show_category_input">
      <input>
    </div>
    <li class='item_nav category_search'>
      <div>price <iconify-icon icon="ant-design:plus-square-filled" style="color: #edc50c;" class="show_category">
        </iconify-icon>
      </div>
    </li>
    <div class="show_category_input">
      <input>
    </div>
    <li class="btn_mobile">
      <button>search</button>
    </li>
    <hr />
    <li class='item_nav'>
      <iconify-icon icon="ic:sharp-attach-money" style="color: #edc50c;" class='mobile_icon'></iconify-icon>Sell
      with Us
    </li>
    <li class='item_nav'>
      <iconify-icon icon="bxs:user-circle" style="color: #edc50c;" class='mobile_icon'></iconify-icon>Sign in
    </li>
    <li class='item_nav'>
      <iconify-icon icon="material-symbols:exit-to-app" style="color: #edc50c;" class='mobile_icon'>
      </iconify-icon>Sign up
    </li>
  </ul>
</div>
</nav>
<nav class="navbar">
<div class="container nav">
  <div class="nav_item brand_logo">
    <a href="./home.html">Trading
      <p>Symphoney</p>
    </a>
  </div>
  <div class="nav_item delivery dropdown-list">
    <iconify-icon class="delivery_item location" icon="twemoji:flag-jordan"></iconify-icon>
    <div class="delivery_item">Delivery To <br /><span>Amman</span></div>
    <iconify-icon icon="ep:arrow-down-bold" class="dropdown_icon"></iconify-icon>
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
      <li id='arabic'><a>اللغة العربية</a></li>
      <li><a href='./Empty-cart.html' class="nav_menu_item cart" value='3'>Cart</a></li>
      <li><a href='../Sell-with-us.html' class="nav_menu_item">Sell with Us</a></li>
      <li>
        <a href="./login.html"><button type="button" class="btn_nav">Sign in</button></a>
      </li>
      <li class='dropdown-list'>
        <p class='welcome_name'>Hello Mohammad</p>
        <a class='account_item ' id='dropdown_container'> My Account <iconify-icon icon="ep:arrow-down-bold"
            class="dropdown_icon"></iconify-icon>
        </a>
        <ul class="dropdown-item" id='dropdown_item'>
          <a href='Orders.html'>
            <li>Orders</li>
          </a>
          <a href='Address.html'>
            <li>Address</li>
          </a>
          <a href='Profile.html'>
            <li>my profile</li><a>
              <a href='Settings.html'>
                <li>settings</li>
              </a>
        </ul>
      </li>

  </div>
  <div class="nav-overlay"></div>

</div>
<div class="bg_sub_nav">
  <div class='container'>
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
      <input class="sub_nav_item sub_nav_price" placeholder="Lowest" /><span>&mdash;</span>
      <input class="sub_nav_item sub_nav_price" placeholder="Highest" />
      <a href='./Search-result.html'> <button class="btn_search" type="button">Search</button></a>
    </form>
  </div>
</div>
</nav>
  `;
   };
 createNav();
function openNav() {
  document.getElementById("nav-content").style.width = "80%";
  document.getElementById("nav-content").style.display = "block";
}

function closeNav() {
  document.getElementById("nav-content").style.display = "none";
}
const dropdown = document.getElementById("dropdown_container");
const dropdownClass = document.getElementById("dropdown_item");
dropdown.addEventListener("click", function () {
  if (dropdownClass.style.display == "none") {
    dropdownClass.style.display = "block";
  } else {
    dropdownClass.style.display = "none";
  }
});
const showCategory = document.querySelectorAll(".show_category_input");
const show_category = document.querySelectorAll(".show_category");
show_category.forEach((item, i) => {
  show_category[i].addEventListener("click", function () {
  if (showCategory[i].style.display == "none") {
    showCategory[i].style.display = "flex";
  } else {
    showCategory[i].style.display = "none";
  }
});
})
// rtl arabic
var arabic=document.getElementById('arabic')
arabic.addEventListener("click", function(){
var children = document.children;
var i;
for (i = 0; i < children.length; i++) {
   children[i].setAttribute('dir','rtl');
}
})
