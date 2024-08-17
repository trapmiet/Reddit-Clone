document.addEventListener("DOMContentLoaded", function () {
  displayPosts(); // Display posts when the page loads

  // Function to format time difference
  function formatTimeAgo(postTime) {
    let currentTime = new Date();
    let timeDiff = currentTime - postTime;
    let seconds = Math.floor(timeDiff / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    let weeks = Math.floor(days / 7);
    let months = Math.floor(days / 30);
    let years = Math.floor(days / 365);

    if (seconds < 60) {
      return `${seconds} seconds ago`;
    } else if (minutes < 60) {
      return `${minutes} minutes ago`;
    } else if (hours < 24) {
      return `${hours} hours ago`;
    } else if (days < 7) {
      return `${days} days ago`;
    } else if (weeks < 4) {
      return `${weeks} weeks ago`;
    } else if (months < 12) {
      return `${months} months ago`;
    } else {
      return `${years} years ago`;
    }
  }

  // Function to display posts
  function displayPosts() {
    let posts = JSON.parse(localStorage.getItem("posts")) || []; // Retrieve posts from localStorage or initialize empty array
    let container = document.querySelector(".containerabc"); // Get the container element where posts will be displayed

    // Clear previous content in the container
    container.innerHTML = "";
    var showPost = posts.sort(
      (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
    );

    // Loop through each post and create HTML elements
    showPost.forEach((post) => {
      let postTime = new Date(post.timestamp);
      let timeAgo = formatTimeAgo(postTime);

      // Generate random net-likes count
      let netLikes = Math.floor(Math.random() * 100); // Random number between 0 and 99 for net-likes

      // HTML structure for each post
      let postHTML = `
        <div class="container-child">
          <div class="time">r/trapmiet <img src="/Body Img/image-removebg-preview (40).png"> <span>${timeAgo}</span> </div>
          <div class="title">${post.title}</div>
          <div class="content">${post.content}</div>
          <div class="img-container"><img class="hinhanh" src="${post.image}" alt=""></div>
          <div class="container123">
            <div class="buttons">
              <button class="like-btn"><img src="/Body Img/image-removebg-preview (42).png" alt="" class="haha"></button>
              <div class="counts">
                <p class="ezz">Likes: <span class="like-count">0</span></p>
                <p class="ezz">Dislikes: <span class="dislike-count">0</span></p>
                <p><span class="net-likes">${netLikes}</span></p>
              </div>
              <button class="dislike-btn"><img src="/Body Img/image-removebg-preview (42).png" alt="" class="ez haha"></button>
            </div>
            <div class="huhuhu">
              <span class="comment-count">0</span>
              <img src="/Body Img/image-removebg-preview (43).png" alt="" class="lululu">
            </div>
          </div>
        </div>
        <div class="wall"></div>
      `;

      // Create a new div element
      let div = document.createElement("div");
      div.classList.add("post"); // Add a class to the div for styling if needed
      div.innerHTML = postHTML;

      // Append the div to the container
      container.appendChild(div);

      // Event listeners for like and dislike buttons within the current post
      div.querySelector(".like-btn").addEventListener("click", function () {
        let likeCount = parseInt(div.querySelector(".like-count").innerText);
        let randomIncrement = Math.floor(Math.random() * 5) + 1; // Random increment between 1 to 5
        likeCount += randomIncrement;
        div.querySelector(".like-count").innerText = likeCount;
        updateCounts();
      });

      div.querySelector(".dislike-btn").addEventListener("click", function () {
        let dislikeCount = parseInt(
          div.querySelector(".dislike-count").innerText
        );
        let randomIncrement = Math.floor(Math.random() * 3) + 1; // Random increment between 1 to 3
        dislikeCount += randomIncrement;
        div.querySelector(".dislike-count").innerText = dislikeCount;
        updateCounts();
      });

      // Update counts function inside the current post
      function updateCounts() {
        let likeCount = parseInt(div.querySelector(".like-count").innerText);
        let dislikeCount = parseInt(
          div.querySelector(".dislike-count").innerText
        );

        let netLikes = likeCount - dislikeCount;
        netLikes = Math.max(netLikes, 0); // Ensure netLikes is not negative
        div.querySelector(".net-likes").innerText = netLikes;
      }
    });
  }
});
