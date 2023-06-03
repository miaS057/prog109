function validateForm() {
  var errorMessage = "";
  var validFirstname = false;
  var firstname = document.getElementById("FirstName").value;

  var validEmail = false;
  var email = document.getElementById("Email").value;
  var atpos = email.indexOf("@");
  var dotpos = email.lastIndexOf(".");

  var validComment = false;
  var comment = document.getElementById("Comment").value;

  //Validate first name  
  if (firstname === "null" || firstname === "" || firstname.length > 20 || onlyLetters(firstname)) {
    errorMessage = "<p>The first name is required and cannot be greater than 20 characters</p>";
    errorMessage += "<p>Only alphbetical characters are accepted<p>";
  } else {
    validFirstname = true;
    errorMessage = "";
  }
  document.getElementById("firstNameErrorMsg").innerHTML = errorMessage;

  //Validate email
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length || email === "null" || email === "") {
    errorMessage = "<p>Invalid email</p>";
  } else {
    validEmail = true;
    errorMessage = "";
  }
  document.getElementById("emailErrorMsg").innerHTML = errorMessage;

  //Validate comment
  if (comment === "null" || comment === "") {
    errorMessage = "<p>The comment section is required</p>";
  } else {
    validFirstname = true;
    errorMessage = "";
  }
  document.getElementById("commentErrorMsg").innerHTML = errorMessage;
  
  return (validFirstname && validEmail && validComment);
}


function onlyLetters(inputString) {
  var letters = /^[A-Za-z]+$/;
  if (inputString.value.match(letters)) {
    return true;
  } else {
    return false;
  }
}
