const showPassword = document.querySelector("#showPassword");
const password = document.querySelector("#password");
// showPassword.forEach((item, i) => {
showPassword.addEventListener("click", function (e) {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
});
// })