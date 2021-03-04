// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var special = "!£$%&*@?~{}()[]";
var number = "0123456789";
var characters = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passwordLength = prompt("How many characters would you like? It must be between 8 and 128 characters.");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be 8 - 128 characters");
    return generatePassword()
  }
  
  var getLowerCase = confirm("Do you want lowercase in your password?");
  var getUpperCase = confirm("Do you want uppercase in your password?");
  var getSpecial = confirm("Do you want special characters in you password?");
  var getNumber = confirm("Do you want numbers in your password?");

  
}

