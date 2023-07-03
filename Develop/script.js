// Assignment Code

var generateBtn = document.querySelector("#generate");
function generatePassword() {
var length = 0; 
while (length < 8 || length > 128) {
  length = prompt("How many characters should your password be? Between 8-128 characters."); 
}





var uppercase = prompt("Would you like UPPERCASE letters?");
var lowercase = prompt("Would you like lowercase letters?");
var numbers = prompt("Would you like numbers?");
var specialchar = prompt("Would you like special characters?");
var upperset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerset = "abcdefghjiklmnopqrstuvwxyz";
var numbset = "0123456789";
var specialset = "!@#$%^&*()_-=+";
var retval = "";

while (retval.length < length){
  if ( lowercase.localeCompare('yes', undefined, { sensitivity: 'base' })===0 ) {
    retval += lowerset.charAt(Math.floor(Math.random() *lowerset.length ));
  }
  if (uppercase.localeCompare('yes', undefined, { sensitivity: 'base' })===0) {
    retval += upperset.charAt(Math.floor(Math.random() *upperset.length ));
  }
  if (numbers.localeCompare('yes', undefined, { sensitivity: 'base' })===0) {
    retval += numbset.charAt(Math.floor(Math.random() *numbset.length ));
  }
  if (specialchar.localeCompare('yes', undefined, { sensitivity: 'base' })===0) {
    retval += specialset.charAt(Math.floor(Math.random() *specialset.length));
  }
}
return retval;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

