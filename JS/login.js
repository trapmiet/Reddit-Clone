document.addEventListener("DOMContentLoaded", function () {
  var loginForm = document.querySelector(".login");
  var usernameInput = document.querySelector('.login__input[type="text"]');
  var passwordInput = document.querySelector('.login__input[type="password"]');

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    var username = usernameInput.value.trim();
    var password = passwordInput.value;

    // Lấy thông tin người dùng từ local storage
    var users = JSON.parse(localStorage.getItem("users")) || {};

    if (users[username] && users[username].password === password) {
      // Đăng nhập thành công
      console.log("Đăng nhập thành công");

      Swal.fire({
        icon: "success",
        title: "Login Successful",
        showConfirmButton: false,
        timer: 1500,
      });

      // Ví dụ: chuyển hướng đến trang chính của ứng dụng sau khi đăng nhập thành công
      setTimeout(function () {
        window.location.href = "/HTML/home.html";
      }, 1500);
    } else {
      // Sai tên đăng nhập hoặc mật khẩu
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Incorrect username or password",
        footer: '<a href="#">Forgot Password?</a>',
      });
    }
  });
});
