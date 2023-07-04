// Data pengguna
var users = [
  { username: "qazxsw", password: "tfcrdz1" },
  { username: "yhnujm", password: "plmnko2" },
  { username: "xftyhn", password: "ijbvfr3" },
   { username: "edcvfr", password: "oknwsx4" },
  { username: "ygvfr3", password: "yhbgu5" },
  { username: "maswin", password: "admin123" },
];

document.addEventListener("DOMContentLoaded", function() {
  var loginButton = document.getElementById("loginButton");
  loginButton.addEventListener("click", redirect);
});

function redirect() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  var authenticatedUser = users.find(function(user) {
    return user.username === username && user.password === password;
  });

  if (authenticatedUser) {
    // Ganti "URL_TUJUAN" dengan URL yang ingin Anda arahkan setelah login berhasil
    window.location.href = "qrcode.html";
  } else {
    var errorMessage = document.getElementById("error-message");
    errorMessage.style.display = "block";
  }

}
