// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var nums = [0,1,2,3,4,5,6,7,8,9];
var specialCharacters = ['!','@','#','$','%','^','&','*','_','-','+','='];

var passwordLength = prompt("Enter a password length between 8 and 128 characters.");
var useSpecialCharacters = confirm("Use special characters?"); // true?
var useUpperCase =  confirm("Use UPPERCASE?");  // true?
var useLowerCase = confirm("Use lowercase?");  // true?
// console.log(useSpecialCharacters);
// console.log(useUpperCase);
// console.log(useLowerCase);
console.log(passwordLength);

function generatePassword() {
  // console.log ("button clicked!");
  var password = '';
  
  if (passwordLength < 8 || passwordLength == '') {
        return alert("Please enter a password with more than 8 characters");
    } else if (passwordLength > 128) {
        return alert("Please enter a password with less than 128 characters")
    } else if (useSpecialCharacters === true) {
        return Math.floor(Math.random() * useSpecialCharacters.length);
    } else if (useUpperCase === true) {
      return Math.floor(Math.random(upperCase) * useUpperCase.length);
    } else if (useLowerCase === true) {
      return Math.floor(Math.random(useLowerCase) * useLowerCase.length);
    }

// 1. prompt the user for the password criteria
//    a. password length 8 < 128
//        1. 
//    b. lowercase, uppercase, special characters
// 2. validate the input.
// 3. generate password based on criteria. 


// 4. display generated password on page.
return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
