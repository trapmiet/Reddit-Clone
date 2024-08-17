document.addEventListener("DOMContentLoaded", function () {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in
      document.getElementById("login-btn-container").style.display = "none";
      document.getElementById("profile-dropdown").style.display = "block";
      console.log(user);
    } else {
      // User is signed out
      document.getElementById("login-btn-container").style.display = "block";
      document.getElementById("profile-dropdown").style.display = "none";
    }
  });

  var logout = document.querySelector(".logout");
  logout?.addEventListener("click", function () {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.error(error);
      });
  });
});
