// Data pengguna
var users = [
  { username: "", password: "$2b$10$7XV0p7aCk6ixLzjO.hoefuMfqo1pAWDCB.8xPfhCmCh0nqHwo4Haq" }, // Encrypted: tfcrdz1
  { username: "yhnujm", password: "$2b$10$YcNECJ9yj27Nv.KI0FjBZ.Jd6X./TbNRZ.xQQckCzD.ZXoT7VeIBO" }, // Encrypted: plmnko2
  { username: "xftyhn", password: "$2b$10$iW3CT6K1Xu7rDliqsuqfTuwFLCRoG3WsBX7vr06zxHa0LLnMCbw7S" }, // Encrypted: ijbvfr3
  { username: "edcvfr", password: "$2b$10$Mf9f3ZmAwTYrNnF.GRf4q.du81h3tt7hiXoC4KgYwqIKJ8LmP8U56" }, // Encrypted: oknwsx4
  { username: "ygvfr3", password: "$2b$10$UV.hgBgTTEsU6EE0tFJZOOI1Voj0fsuDBvRW/ww/XHnshQWFDd4mm" }, // Encrypted: yhbgu5
  { username: "maswin", password: "$2b$10$L5L.vi9oG6B6GS89yzT8ru07tNlE3RYICtpuQidIE.K7aXkRhqJN2" },  // Encrypted: admin123
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
