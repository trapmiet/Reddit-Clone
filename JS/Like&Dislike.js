// likeComment.js

document.addEventListener("DOMContentLoaded", function () {
  // Example: Get all post elements
  let posts = document.querySelectorAll('.post');

  posts.forEach(function(post) {
    let likeCount = 0;
    let dislikeCount = 0;
    let commentCount = Math.floor(Math.random() * 100); // Generate a random number between 0 and 99 for comments

    // Display initial counts inside the current post
    post.querySelector('.like-count').innerText = likeCount;
    post.querySelector('.dislike-count').innerText = dislikeCount;
    post.querySelector('.comment-count').innerText = commentCount;

    // Event listeners for like and dislike buttons within the current post
    post.querySelector('.like-btn').addEventListener('click', function() {
      let randomIncrement = Math.floor(Math.random() * 5) + 1; // Random increment between 1 to 5
      likeCount += randomIncrement;
      updateCounts();
    });

    post.querySelector('.dislike-btn').addEventListener('click', function() {
      let randomIncrement = Math.floor(Math.random() * 3) + 1; // Random increment between 1 to 3
      dislikeCount += randomIncrement;
      updateCounts();
    });

    // Update counts function inside the current post
    function updateCounts() {
      likeCount = Math.max(likeCount, 0); // Ensure likeCount is not negative
      dislikeCount = Math.max(dislikeCount, 0); // Ensure dislikeCount is not negative

      post.querySelector('.like-count').innerText = likeCount;
      post.querySelector('.dislike-count').innerText = dislikeCount;

      let netLikes = likeCount - dislikeCount;
      netLikes = Math.max(netLikes, 0); // Ensure netLikes is not negative
      post.querySelector('.net-likes').innerText = netLikes;
    }
  });
});
