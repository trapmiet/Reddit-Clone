var btnGoogle = document.querySelector("#google");

btnGoogle.addEventListener("click", function () {
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      console.log(result.user);
      window.location.href = "/HTML/home.html";
    })
    .catch(function (error) {
      Swal.fire({
        icon: "error",
        title: "Google login failed",
      });
    });
});
