
//https://github.com/Mohamed9122002/LoginSystem.git


var signInEmail = document.getElementById("signInEmail");

var signInPassword = document.getElementById("signInPassword");

var btnLogin = document.getElementById("btn-login");
// console.log(btnLogin);
var signUpName = document.getElementById("signUpName");

var signUpEmail = document.getElementById("signUpEmail");

var signUpPassword = document.getElementById("signUpPassword");

var btnSignUp = document.querySelector(".btn-signUp");
var username = localStorage.getItem("sessionUsername");
var signUpArray = [];
var getUsers = localStorage.getItem("users");


if (getUsers == null) {
  signUpArray = [];
} else {
  signUpArray = JSON.parse(getUsers);
}

function emailCheck() {
  for (var i = 0; i < signUpArray.length; i++) {
    if (signUpArray[i].email.toLowerCase() == signUpEmail.value.toLowerCase()) {
      return false;
    }
  }
}




function addLoginButton() {
  var email = signInEmail.value;
  var password = signInPassword.value;
  for (var i = 0; i < signUpArray.length; i++) {
    if (
      signUpArray[i].email.toLowerCase() == email.toLowerCase() &&
      signUpArray[i].password.toLowerCase() == password.toLowerCase()
    ) {
      localStorage.setItem("sessionUsername", signUpArray[i].name);
      document.getElementById("success").classList.add("d-none");
      window.location.assign("../hom.html");
    } else {
      document.getElementById("exist").classList.remove("d-none");
    }
  }
}
function signUpButtonClick() {
  if (
    signUpName.value == "" ||
    signUpEmail.value == "" ||
    signUpPassword == ""
  ) {
    document.getElementById("incorrect").classList.remove("d-none");
    document.getElementById("exist").classList.add("d-none");
  }
  var singUp = {
    name: signUpName.value,
    email: signUpEmail.value,
    password: signUpPassword.value
  };

  if (emailCheck() == false) {
    document.getElementById("exist").classList.remove("d-none");
    document.getElementById("success").classList.add("d-none");
  } else {
    signUpArray.push(singUp);
    localStorage.setItem("users", JSON.stringify(signUpArray));
    window.location.assign("/");
    document.getElementById("incorrect").classList.add("d-none");
    document.getElementById("success").classList.remove("d-none");
    document.getElementById("exist").classList.add("d-none");
  }
}
/*error  */
// // error in console url  post  window.location.assign("../hom.html");
// // error url post window.location.assign("../index.html")
// btnSignUp.addEventListener("click", function() {
//   signUpButtonClick();
//   // console.log("sing");
// });
// // error in console url  post  window.location.assign("../hom.html");
// // error url post window.location.assign("../signup.html")
// btnLogin.addEventListener("click", function() {
//   addLoginButton();
//   // console.log("login");
// });
/* error  */
//
if (username) {
  document.getElementById("username").innerHTML = "Welcome " + username;
}
document.addEventListener("keyup", function(e) {
  // console.log(e.code);
  if (e.code == "NumpadEnter") {
    addLoginButton();
  }
});
// function validationAllInputs(element) {
//   var regex = {
//     signUpName: /^[a-zA-Z ]{3,30}$/,
//     signUpEmail: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
// signUpPassword: /^[\w@#$%!^&*.-]{3,30}$/,
//   };
//   if (regex[element.id].test(element.value)) {
//     // console.log("true");
//     element.classList.add("is-valid");
//     element.classList.remove("is-invalid");
//     return true;
//   } else {
//     element.classList.add("is-invalid");
//     element.classList.remove("is-valid");
//     return false;
//   }
// }
// signUpName.addEventListener("input", function() {
//   validationAllInputs(this);
//   // console.log("name");
// });
// signUpEmail.addEventListener("input", function() {
//   validationAllInputs(this);
//   // console.log("email");
// });

// signUpPassword.addEventListener("input", function() {
//   validationAllInputs(this);
//   // console.log("password");
// });

/* error in console url  post =>  window.location.assign("../index.html"); */
function layOut() {
  localStorage.removeItem("sessionUsername");
}
document.querySelector(".nav-item").addEventListener("click", function() {
  layOut();
  location.assign("/");
});
