function validateForm() {
  //Create variables
  var errorMessage = "";
  
  var validFirstname = false;
  var firstname = document.getElementById("FirstName").value;
  
  var validLastname = false;
  var lastname = document.getElementById("LastName").value;
  
  var validEmail = false;
  var email = document.getElementById("Email").value;
  var atpos = email.indexOf("@");
  var dotpos = email.lastIndexOf(".");
  
  var validPhone = false;
  var phone = document.getElementById("Phone").value;
  
  var validUsername = false;
  var username = document.getElementById("Username").value;
  
  var validPassword = false;
  var password = document.getElementById("Password").value;
  
  var validAddress = false;
  var address = document.getElementById("Address").value;
  
  var validCity = false;
  var city = document.getElementById("City").value;
  
  var validState = false;
  var state = document.getElementById("State").value;
  
  var validCountry = false;
  var country = document.getElementById("Country").value;

  var validZip = false;
  var zip = document.getElementById("Zip").value;
  
  //Validate first name  
  if (firstname === "null" || firstname === "" || firstname.length > 20 || onlyLetters(firstname)) {
    errorMessage = "<p>The first name is required and cannot be greater than 20 characters</p>";
    errorMessage += "<p>Only alphbetical characters are accepted<p>";
  } else {
    validFirstname = true;
    errorMessage = "";
  }
  document.getElementById("firstNameErrorMsg").innerHTML = errorMessage;



  //Validate last name
  if (lastname === "null" || lastname === "" || lastname.length > 20 || onlyLetters(firstname)) {
    errorMessage = "<p>The last name is required and cannot be greater than 20 characters</p>";
    errorMessage += "<p>Only alphbetical characters are accepted<p>";
  } else {
    validLastname = true;
    errorMessage = "";
  }
  document.getElementById("lastNameErrorMsg").innerHTML = errorMessage;



  //Validate email
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length || email === "null" || email === "") 
  {
    errorMessage = "<p>Invalid email</p>";
  } 
  else 
  {
    validEmail = true;
    errorMessage = "";
  }
  document.getElementById("emailErrorMsg").innerHTML = errorMessage;




  //Validate phone
  if (isNaN(phone) || phone.length > 15 || phone === null || phone === "") 
  {
    errorMessage = "<p>Invalid phone number</p>";
  } 
  else 
  {
    validPhone = true;
    errorMessage = "";
  }
  document.getElementById("phoneErrorMsg").innerHTML = errorMessage;



  //Validate username 
  if (username === "null" || username === "" || username.length > 12) {
    errorMessage = "<p>The username is required and cannot be greater than 12 characters</p>";
  } 
  else {
    validUsername = true;
    errorMessage = "";
  }
  document.getElementById("usernameErrorMsg").innerHTML = errorMessage;


  
  
  //Validate password 
  if (password === "null" || password === "" || password.length > 7) {
    errorMessage = "<p>The password is required and cannot be greater than 7 characters</p>";
  } else {
    validPassword = true;
    errorMessage = "";
  }
  document.getElementById("passwordErrorMsg").innerHTML = errorMessage;


  
  //Validate address 
  if (address === "null" || address === "") {
    errorMessage = "<p>The address is required</p>";
  } else {
    validAddress = true;
    errorMessage = "";
  }
  document.getElementById("addressErrorMsg").innerHTML = errorMessage;


  
  //Validate city
  if (city === "null" || city === "") {
    errorMessage = "<p>The city is required</p>";
  } else {
    validCity = true;
    errorMessage = "";
  }
  document.getElementById("cityErrorMsg").innerHTML = errorMessage;


  
  //Validate state
  if(state === "select")
  {
    errorMessage = "<p>The state is required</p>";
  }
  else
  {
    validState = true;
    errorMessage = "";
  }
  document.getElementById("stateErrorMsg").innerHTML = errorMessage;

  
  
  //Validate country
  if(country === "select")
  {
    errorMessage = "<p>The country is required</p>";
  }
  else
  {
    validCountry = true;
    errorMessage = "";

  }
  document.getElementById("countryErrorMsg").innerHTML = errorMessage;

  
  
  //Validate zip code
  if(country === "USA")
  {
    if(isNaN(zip) || zip.length > 5 || zip === null || zip === "")
    {
      errorMessage = "<p>Invalid zip code</p>";
    }
  }
  else
  {
    validZip = true;
    errorMessage = "";
  }
  
  document.getElementById("zipErrorMsg").innerHTML = errorMessage;

  
  
  return (validFirstname && validEmail && validPhone && validUsername && validPassword && validAddress && validCity && validState && validCountry && validZip);
}

function onlyLetters(inputString) 
{
  var letters = /^[A-Za-z]+$/;
  if (inputString.value.match(letters)) 
  {
    return true;
  } 
  else 
  {
    return false;
  }
}
