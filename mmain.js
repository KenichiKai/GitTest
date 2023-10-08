let signinform = document.getElementById("signin")
let signupform = document.getElementById("signup")
let signin = document.getElementById("signin-alert")

signin.addEventListener("click", () => {
    signupform.classList.remove("hidden")
    signinform.classList.add("hidden")
})
let signup = document.getElementById("signup-alert")

signup.addEventListener("click", () => {
    signinform.classList.remove("hidden")
    signupform.classList.add("hidden")
})

var data = new Array();
 data[0] = document.getElementById("name").value;
 data[1] = document.getElementById("email").value;
 data[2] = document.getElementById("passwor").value;
 data[3] = document.getElementById("cpassword").value;