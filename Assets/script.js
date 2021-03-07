// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var special = "!£$%&*@?~{}()[]";
var number = "0123456789";

// Generate Password
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  passwordText.value = password;
}

// Run writePassword function when Generate button is pressed
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var characters = "";
  // Choose number of characters
  var passwordLength = prompt("How many characters would you like? It must be between 8 and 128 characters.");
  // Validate number of characters
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be 8 - 128 characters");
    return generatePassword()
  }
  // Confirm which characters will be included in password
  var getLowerCase = confirm("Do you want lowercase in your password?");
  var getUpperCase = confirm("Do you want uppercase in your password?");
  var getSpecial = confirm("Do you want special characters in you password?");
  var getNumber = confirm("Do you want numbers in your password?");
  
  // Validate at least one character type selected
  if (getLowerCase === false && getUpperCase === false && getSpecial === false && getNumber === false) {
    alert('You must select at least one character type.');
    return generatePassword()
  }
  // Compile string of charaters, accoring to selected character types
  var result = "";
  if (getLowerCase) {
    characters += lowerCase;
    result += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
  }
  if (getUpperCase) {
    characters += upperCase;
    result += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
  }
  if (getSpecial) {
    characters += special;
    result += special.charAt(Math.floor(Math.random() * special.length));
  }
  if (getNumber) {
    characters += number;
    result += number.charAt(Math.floor(Math.random() * number.length));
  }
 
  // Loop through character string selecting values at random until chosen password length is met
  for (var i = result.length; i < passwordLength; i++) {
  result += characters.charAt(Math.floor(Math.random() * characters.length)); 
    
  }

  return result;
}


