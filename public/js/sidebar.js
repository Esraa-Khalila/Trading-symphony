const createSidebar = () => {
    let nav = document.querySelector(".sidebar_nav");
  
    nav.innerHTML = `
  
    <ul class="sidebar_menu">
    <li>Hello Mohammad<span>mmm@gmail.com</span></li>
    <div class="account_menu">
      <li class="sidebar_item">
      <a href='../Orders.html'>
        <iconify-icon
          icon="lucide:package"
          style="color: #707070"
          class="account_icon"
        ></iconify-icon>
        Orders
        </a>
      </li>
      <li class="sidebar_item"><a href='../Address.html'>
        <iconify-icon
          icon="fa-solid:route"
          style="color: #707070"
          class="account_icon"
        ></iconify-icon
        >Address
      </a></li>
      <li class="sidebar_item">
      <a href='../Profile.html'>
        <iconify-icon
          icon="mdi:account"
          style="color: #707070"
          class="account_icon"
        ></iconify-icon>
        My profile
        </a>
      </li>
      <li class="sidebar_item">
      <a href='../settings.html'>
        <iconify-icon
          icon="ant-design:setting-outlined"
          style="color: #707070"
          class="account_icon"
        ></iconify-icon
        >Settings
        </a>
      </li>
    </div>
    <li class="sidebar_out">
      <iconify-icon
        icon="entypo:log-out"
        style="color: #707070"
        class="account_icon"
      ></iconify-icon
      >Sign out
    </li>
  </ul>
    `;
  };
  createSidebar();