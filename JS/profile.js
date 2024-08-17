var nameProfile = document.querySelector("#name");
var email = document.querySelector("#email");
var avatar = document.querySelector("#avatar-profile") || "";
var timing = document.querySelector("#Time") || "";
// var img = document.querySelector("#img");
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user);
    var uid = user.uid;
    nameProfile.innerHTML = user.displayName;
    email.innerHTML = user.email;
    // avatar.src = user.photoURL;
    timing.innerHTML = new Date(user.metadata.creationTime).toLocaleDateString(
      "vi-VN"
    );

    nameProfile.value = user.displayName;
    email.value = user.email;
    avatar.src = user.photoURL;
  } else {
    // User is signed out
    // ...
  }
});

document.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(e.target);
  console.log(e.target.img.value);
  console.log(e.target.name.value);
  console.log(e.target.email.value);
  const user = firebase.auth().currentUser;

  user
    .updateProfile({
      displayName: e.target.name.value,
      photoURL: e.target.img.value,
      email: e.target.email.value,
    })
    .then(() => {
      // Update successful
      // ...
      window.location.href = "/HTML/profile.html";
    })
    .catch((error) => {
      // An error occurred
      // ...
    });
});
