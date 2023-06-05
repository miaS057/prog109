function validateForm() {
  //Create variables
  var errorMessage = "";

  var validName = false;
  var name = document.getElementById("Name").value;


  var validEmail = false;
  var email = document.getElementById("Email").value;
  var atpos = email.indexOf("@");
  var dotpos = email.lastIndexOf(".");

  var validComment = false;
  var comment = document.getElementById("Comments").value;



  //Validate name  
  if (name === "null" || name === "") {
    errorMessage = "<p>*Invalid name*<p>";
  } else {
    validFirstname = true;
    errorMessage = "";
  }
  document.getElementById("nameErrorMsg").innerHTML = errorMessage;


  //Validate email
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length || email === "null" || email === "") {
    errorMessage = "<p>*Invalid email*</p>";
  } else {
    validEmail = true;
    errorMessage = "";
  }
  document.getElementById("emailErrorMsg").innerHTML = errorMessage;
  
  //Validate comments  
  if (comment === "null" || comment === "") {
    errorMessage = "<p>*This field is required*<p>";
  } else {
    validComment = true;
    errorMessage = "";
  }
  document.getElementById("commentErrorMsg").innerHTML = errorMessage;


  return (validName && validEmail && validComment);
}
