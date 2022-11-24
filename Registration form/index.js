function display() {
  let fname = document.getElementById("firstname").value;
  let lname = document.getElementById("lastname").value;
  let uname = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let tele = document.getElementById("phone").value;
  document.getElementById("user").innerHTML =
    "user   " + uname + "  is successfully registered";
  document.getElementById("fullname").innerText =
    "  Full name" + "  " + fname + lname;
  document.getElementById("email_1").innerText =
    "your registered email" + email;
  document.getElementById("phone_1").innerText = "Given phone number" + tele;
  document.getElementById("hide").style.display = "none";
}
