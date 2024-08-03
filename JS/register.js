document.addEventListener("submit", function (e) {
  e.preventDefault();

  let username = document.querySelector("#username").value.trim();
  let email = document.querySelector("#email").value.trim();
  let password = document.querySelector("#password").value;
  let confirmPassword = document.querySelector("#confirmpassword").value;

  console.log(username, email, password, confirmPassword);

  let lowerCaseLetter = /[a-z]/g;
  let upperCaseLetter = /[A-Z]/g;
  let numbers = /[0-9]/g;

  if (username.length < 6) {
    alert("Username must be at least 6 characters");
  } else if (password.length < 8) {
    alert("Password must be at least 8 characters");
  } else if (!password.match(lowerCaseLetter)) {
    alert("Password must contain lowercase letter");
  } else if (!password.match(upperCaseLetter)) {
    alert("Password must contain uppercase letter");
  } else if (!password.match(numbers)) {
    alert("Password must contain a number or special character");
  } else if (password !== confirmPassword) {
    alert("Password is not confirmed correctly");
  } else {
    // Lấy danh sách người dùng từ local storage
    let users = JSON.parse(localStorage.getItem("users")) || {};

    if (users[username]) {
      alert("Username already exists");
    } else {
      // Thêm người dùng mới vào danh sách users
      users[username] = {
        email: email,
        password: password
      };

      // Lưu lại danh sách người dùng đã cập nhật vào local storage
      localStorage.setItem("users", JSON.stringify(users));

      // Đăng ký người dùng bằng Firebase Authentication
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log(userCredential);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          // Sau khi hiển thị Swal thành công và đóng, chuyển hướng người dùng đến trang đăng nhập
          window.location.href = "/HTML/login.html"; // Thay đổi URL tới trang đăng nhập của bạn
        });
      })
        .catch((error) => {
          console.error("Error creating user:", error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>',
          });
        });
    }
  }
});
