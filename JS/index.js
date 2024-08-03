// Function to display posts from localStorage
function displayPosts() {
  let posts = JSON.parse(localStorage.getItem("posts")) || []; // Retrieve posts from localStorage or initialize empty array

  let container = document.querySelector(".container"); // Get the container element where posts will be displayed

  // Clear previous content in the container
  container.innerHTML = "";
  // console.log(posts);

  // Loop through each post and create HTML elements
  posts.forEach((post) => {
    let postHTML = `
      <div class="container-child">
        <div class="time">Posted by u/trapmiet ${post.timestamp}</div>
        <div class="title">${post.title}</div>
        <div class="content">${post.content}</div>
        <div class="img-container">
          <img clas="hinhanh"src="${post.image}" alt="" />
        </div>
       <div class="below-bar">
    <div class="positionCameras">
        <ul>
            <li title="Move Up" class="cameraLeft" id="cameraUp">
                <span class="voteCount1">0</span> <!-- Số lượt thích ban đầu -->
            </li>

            <li title="Move Down" class="cameraRight" id="cameraDown">
                <span class="voteCount2">0</span> 
            </li>
        </ul>
    </div>
</div>

      </div>
    `;

    // Create a new div element
    let div = document.createElement("div");
    div.classList.add("post"); // Add a class to the div for styling if needed
    div.innerHTML = postHTML;

    // Append the div to the container
    container.appendChild(div);
  });
}

// Call the displayPosts function when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  displayPosts(); // Display posts when the page loads
});

// Event listener for form submission (assuming you have a form for creating posts)
document.addEventListener("submit", function (e) {
  e.preventDefault();
  var title = e.target.title.value;
  var content = e.target.content.value;
  var image = e.target.image.value;

  console.log(title, content, image);
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
        window.location.href = "/Bai Thuc Hanh/index.html";
      },
    });

    displayPosts(); // After adding new post, display all posts including the new one
  }
});

