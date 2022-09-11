// Random Password Generator
var generateBtn = document.querySelector("#generate");

var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var nums = [0,1,2,3,4,5,6,7,8,9];
var specialCharacters = ['!','@','#','$','%','^','&','*','_','-','+','='];

function generatePassword() {

var password = '';
var passwordLength = parseInt(prompt("Enter a password length between 8 and 128 characters."));
var useSpecialCharacters = confirm("Use special characters?"); 
var useUpperCase =  confirm("Use UPPERCASE?");  
var useLowerCase = confirm("Use lowercase?");  
var useNumbers = confirm("Use numbers?");
if (Number.isNaN(passwordLength)) {
  alert('Please enter a valid number')
  return;
}

if (passwordLength < 8 || passwordLength > 128) {
      alert("Please enter a password with more than 8 characters or less than 128 characters");
      return;
    }
    // } else if (useSpecialCharacters === true) {
if (useSpecialCharacters == false && useLowerCase == false && useUpperCase == false && useNumbers == false) {
  alert("You must choose at least one type of character.");
  return;
}

// create object to contain all of the users inputs

var userInputs = {pwLength:passwordLength, specialChar:useSpecialCharacters, lowerCase:useLowerCase, upperCase:useUpperCase, numbers:useNumbers}
var oneOfEach = [];
var allPossibleChars = [];

if (userInputs.specialChar) {
  var randomIndex = Math.floor(Math.random() * specialCharacters.length);
  oneOfEach.push(specialCharacters[randomIndex]);
  allPossibleChars = allPossibleChars.concat(specialCharacters);
}

if (userInputs.lowerCase) {
  var randomIndex = Math.floor(Math.random() * lowerCase.length);
  oneOfEach.push(lowerCase[randomIndex]);
  allPossibleChars = allPossibleChars.concat(lowerCase);
}

if (userInputs.upperCase) {
  var randomIndex = Math.floor(Math.random() * upperCase.length);
  oneOfEach.push(upperCase[randomIndex]);
  allPossibleChars = allPossibleChars.concat(upperCase);
}

if (userInputs.numbers) {
  var randomIndex = Math.floor(Math.random() * nums.length);
  oneOfEach.push(nums[randomIndex]);
  allPossibleChars = allPossibleChars.concat(nums);
}

console.log(oneOfEach);
console.log(allPossibleChars);

var result = []

for (var i = oneOfEach.length; i < userInputs.pwLength; i++) {
  var randomIndex = Math.floor(Math.random() * allPossibleChars.length);
  result.push(allPossibleChars[randomIndex]);
}


result = oneOfEach.concat(result);
console.log(result);

// 4. display generated password on page.
return result.join('');
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Event listener to generate button
generateBtn.addEventListener("click", writePassword);


