// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var specChar = window.confirm("Special Characters?")
  var capChar = window.confirm("Capital letters?")
  var numChar = window.confirm("Numbers?")
  var charLim = window.prompt("How many characters should the password be 8-128")
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
