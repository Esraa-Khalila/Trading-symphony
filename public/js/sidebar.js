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
          style="color:  #000000"
          class="account_icon"
        ></iconify-icon>
        <span>Orders</span>
        </a>
      </li>
      <li class="sidebar_item"><a href='../Address.html'>
        <iconify-icon
          icon="fa-solid:route"
          style="color: #000000"
          class="account_icon"
        ></iconify-icon
        ><span>Address</span>
      </a></li>
      <li class="sidebar_item">
      <a href='../Profile.html'>
        <iconify-icon
          icon="mdi:account"
          style="color:#000000"
          class="account_icon"
        ></iconify-icon>
       <span> My profile</span>
        </a>
      </li>
      <li class="sidebar_item">
      <a href='../settings.html'>
        <iconify-icon
          icon="ant-design:setting-outlined"
          style="color: #000000"
          class="account_icon"
        ></iconify-icon
        ><span>Settings</span>
        </a>
      </li>
    </div>
    <li class=" sidebar_item sidebar_out">
    <a>
      <iconify-icon
        icon="entypo:log-out"
        style="color: #000000"
        class="account_icon"
      ></iconify-icon
      ><span>Sign out</span>
      </a>
    </li>
  </ul>
    `;
  };
  createSidebar();