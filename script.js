// Array of special characters to be included in password
const specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  // Ask the user for the length of password
  let length = parseInt(prompt('Enter the password length (between 8 and 128 characters):'));

  // Validate the length of the password
  while (length < 8 || length > 128 || isNaN(length)) {
    alert('Please enter a valid number between 8 and 128.');
    // If incorrect length provided ask again        
    length = parseInt(prompt('Enter the password length (between 8 and 128 characters):'));
  }

  // Ask the user for which character types
  const includeUppercase = confirm('Include uppercase letters?');
  const includeLowercase = confirm('Include lowercase letters?');
  const includeNumeric = confirm('Include numbers?');
  const includeSpecial = confirm('Include special characters?');

  // checking if at least one character type is selected
  if (!(includeUppercase || includeLowercase || includeNumeric || includeSpecial)) {
    alert('Please select at least one character type.');
    return getPasswordOptions(); // Call the function again if no character type is selected
  }

  // Return the user requirement as an object with selected options
  return {
    length,
    includeUppercase,
    includeLowercase,
    includeNumeric,
    includeSpecial,
  };
}

// Function for getting a random element from an array
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {

  // call the function to get password options and store it in options
  const passwordOptions = getPasswordOptions();

  // Combine selected characters using concat option
  const allCharacters = [].concat(
    passwordOptions.includeUppercase ? upperCasedCharacters : [],
    passwordOptions.includeLowercase ? lowerCasedCharacters : [],
    passwordOptions.includeNumeric ? numericCharacters : [],
    passwordOptions.includeSpecial ? specialCharacters : []
  );

  // Generate password using selected options and characters
  let password = '';

  for (let i = 0; i < passwordOptions.length; i++) {
    const randomChar = getRandom(allCharacters);
    password += randomChar;
  }

  return password;
}

// Get references to the #generate element
const generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector('#password');

  // displaying the password in the console also
  console.log('Your password is:\n' + password);

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);