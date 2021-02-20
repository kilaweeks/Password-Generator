// Password Generator

//Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
 
// Generate random uppercase letters
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
 }

// Generate random lowercase letters
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
 }
 
// Generate random numbers
function getRandomNumber() {
   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }
 
// Generate random symbols
function getRandomSymbol() {
   var symbols = '!@#$%&*()<>{}=+.,';
   return symbols [Math.floor(Math.random() * symbols.length)];
  }

// Generate password
function generatePassword() {

// Get user input for password length
function getLength() {
  var validLength = false; 
  while(!validLength) {

  var inputLength = prompt('Choose a length for your password (8 - 128 characters)');
  inputLength = +inputLength; 

  // Check for valid input 
  if(!isNaN(inputLength) && inputLength >= 8 && inputLength <= 128) { 
    validLength = true
    return inputLength; 
  }
}
}
var length = getLength();
console.log('length', length); 

// Prompt user for characters to include in password 
var uppercase = confirm('Include uppercase letters? (OK for Yes / Cancel for No)');

var lowercase = confirm('Include lowercase letters? (OK for Yes / Cancel for No)');
 
var numbers = confirm('Include numbers? (OK for Yes / Cancel for No)');

var symbols = confirm('Include special characters? (OK for Yes / Cancel for No)');

// If user selects no character criteria, show alert and do not generate password
if(!uppercase && !lowercase && !numbers && !symbols) {
  alert('Please try again. You must select at least one character type.')
  length = null; 
}

// Build password based on selected criteria 
var password = '';
for (var i = 0; i < length; i++) {
  var options = []; 
  if (uppercase) {
    options.push(getRandomUpper()); 
  }
  if (lowercase) {
    options.push(getRandomLower()); 
  }
  if (numbers) {
    options.push(getRandomNumber()); 
  }
  if (symbols) {
    options.push(getRandomSymbol()); 
  }

  // Randomize characters selected by user 
  console.log(i, options);
    password = password + options[Math.floor(Math.random() * options.length)];
  }
    return password; 
}


