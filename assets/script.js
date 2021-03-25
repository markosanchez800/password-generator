// Assignment Code
var generateBtn = document.querySelector("#generate");
uppers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
numz = ["0","1","2","3","4","5","6","7","8","9"];
downers = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"];
specials = ["!","@","#","$","%","^","&","*","(",")","-","_","+","=","`","~","[","{","]","}","|",";",":","'",",","<",".",">","?","/"];

function generatePassword(){ 
  var charLim = window.prompt("How many characters should the password be 8-128")
  if (charLim < 8 || charLim > 128){
   alert("Start over and select a number within correct bounds");
   return;
  }
  var specChar = window.confirm("Special Characters?")
  var lilChar = window.confirm("Lowercase letters?")
  var capChar = window.confirm("Capital letters?")
  var numChar = window.confirm("Numbers?")
  getPassword();
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
