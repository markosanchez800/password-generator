// Assignment Code
var generateBtn = document.querySelector("#generate");
var specChar;
var lilChar;
var capChar;
var numChar;
var myChoice;

uppers= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
numz = ["0","1","2","3","4","5","6","7","8","9"];
downers = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"];
specials = ["!","@","#","$","%","^","&","*","(",")","-","_","+","=","`","~","[","{","]","}","|",";",":","'",",","<",".",">","?","/"];


function generatePassword(){ 
  var charLim = window.prompt("How many characters should the password be 8-128")
  //restarts function if input is incorrect
  if (charLim < 8 || charLim > 128){
   alert("Start over and select a number within correct bounds");
   return;
  }
   specChar = window.confirm("Special Characters?")
   lilChar = window.confirm("Lowercase letters?")
   capChar = window.confirm("Capital letters?")
   numChar = window.confirm("Numbers?")
  
// Checks my input and concatenates arrays accordingly
if (specChar && numChar && lilChar && capChar){
  myChoice = specials.concat(numz,downers,uppers);
} else if (capChar && lilChar && numChar){
  myChoice = uppers.concat(downers,numz);
} else if (capChar && numChar && specChar){
  myChoice = uppers.concat(numz,specials);
} else if (capChar && lilChar && specChar){
  myChoice = uppers.concat(downers,specials);
} else if (lilChar && numChar && specChar){
  myChoice = downers.concat(numz,specials);
} else if (capChar && lilChar){
  myChoice = uppers.concat(downers);
} else if (capChar && specChar){
  myChoice = uppers.concat(specials);
} else if (capChar && numChar){
  myChoice = uppers.concat(numz);
} else if (lilChar && numChar){
  myChoice = downers.concat(numz);
} else if (lilChar && specChar){
  myChoice = downers.concat(specials);
} else if (numChar && specChar){
  myChoice = numz.concat(specials);
} else if (capChar){
  myChoice = uppers;
} else if (lilChar){
  myChoice = downers;
} else if (numChar){
  myChoice = numz;
} else if (specChar){
  myChoice = specials;
}
return myChoice;
}


function getPassword(){
  if (specChar && lilChar && capChar && numChar){
    for ( i=0; i < charLim + 1; i++){
      tempChar = Math.floor(Math.random*(charLim));
      tempChar=allVals[tempChar];
      passwordText.append(tempChar);
    }
    return passwordText;
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
