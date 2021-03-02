// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passwordLength = prompt("How many characters would you like? It must be between 8 and 128 characters.");
  var lowerCase = confirm("Do you want lowercase in your password?");
  var upperCase = confirm("Do you want upper case in your password?");
  var special = confirm("Do you want special characters in you password?");
  var minimumCount = 0;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
