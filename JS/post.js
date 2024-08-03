document.addEventListener("DOMContentLoaded", function () {
  // Event listener for form submission (assuming you have a form for creating posts)
  document.addEventListener("submit", function (e) {
    e.preventDefault();
    var title = e.target.title.value;
    var content = e.target.content.value;
    var image = e.target.image.value;

    if (title == "" || content == "" || image == "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Vui lòng nhập đầy đủ thông tin",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    } else {
      let posts = JSON.parse(localStorage.getItem("posts")) || [];

      let newPost = {
        title: title,
        content: content,
        image: image,
        timestamp: new Date(),
      };

      posts.push(newPost);

      localStorage.setItem("posts", JSON.stringify(posts));

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Đăng bài thành công",
        showConfirmButton: false,
        timer: 1500,
        didClose: function () {
          window.location.href = "/HTML/home.html";
        },
      });
    }
  });
});
