const createFooter = () => {
  let nav = document.querySelector(".footer");
  nav.innerHTML = `

  <div class="footer-main container">
    <div class="footer-details">
    <div class="brand_logo">
    <a href="#"
      >Trading
      <p>Symphoney</p>
    </a>
    </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur, <br />
          adipisicing elitItaque animi nesciunt
        </p>
      </div>
      <div class="desktop_social"> 
        <p>Stay tund with us</p>
        <div class="footer-icon">
          <iconify-icon
            icon="akar-icons:facebook-fill"
            style="color: #e2af21"
          ></iconify-icon>
          <iconify-icon
            icon="entypo-social:instagram-with-circle"
            style="color: #e2af21"
          ></iconify-icon>
          <iconify-icon
            icon="ant-design:twitter-circle-filled"
            style="color: #e2af21"
          ></iconify-icon>
          <iconify-icon
            icon="entypo-social:linkedin-with-circle"
            style="color: #e2af21"
          ></iconify-icon>
        </div>
      </div>
    </div>
    <div class="footer-menu">
      <div>
        <ul class='footer_item'>
          <li>Stores</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
        </ul>
      </div>
      <div>
        <ul class='footer_item'>
          <li>About Us</li>
          <li>Careers</li>
          <li>Warranty policy</li>
          <li>Sekk with us</li>
          <li>Terms of Use</li>
        </ul>
      </div>
      <div>
        <ul class='footer_item'>
          <li>Payments</li>
          <li>Visa</li>
          <li>Master Card</li>
          <li>Cash</li>
        </ul>
      </div>
    </div>
    <div class="footer-details mobile_social">
      <p>Stay tund with us</p>
      <div class="footer-icon">
        <iconify-icon
          icon="akar-icons:facebook-fill"
          style="color: #e2af21"
        ></iconify-icon>
        <iconify-icon
          icon="entypo-social:instagram-with-circle"
          style="color: #e2af21"
        ></iconify-icon>
        <iconify-icon
          icon="ant-design:twitter-circle-filled"
          style="color: #e2af21"
        ></iconify-icon>
        <iconify-icon
          icon="entypo-social:linkedin-with-circle"
          style="color: #e2af21"
        ></iconify-icon>
      </div>
    </div>
    </div>
    <div class="copy-right">@ 2022 tading Symphoney. All Rights Reserved</div>
`;
};
createFooter();
