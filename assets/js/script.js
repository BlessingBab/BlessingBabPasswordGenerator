// Assignment Code
var generateBtn = document.querySelector("#generate");

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = [
  "!",
  "%",
  "&",
  ",",
  "*",
  "+",
  "-",
  ".",
  "/",
  "<",
  ">",
  "?",
  "~",
];
var alphaLower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var alphaUpper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var passwordLength;
var passwordSpecialCharacter;
var passwordNumericCharacter;
var passwordUpperCase;
var passwordLowerCase;

//length
function confirmLength() {
  passwordLength = prompt(
    "Choose the password characters to be between 8-128 "
  );
  if (passwordLength < 8) {
    alert("The password is too short, it must be at be between 8-128");
    confirmLength();
  } else if (passwordLength > 128) {
    alert("The password is too long, it must be at be between 8-128");
    confirmLength();
  }
  return passwordLength;
}

function confirmUppercase() {
  passwordUpperCase = prompt(
    "Do you want to include uppercase letters in your password? \n(Yes or No)"
  );
  passwordUpperCase = passwordUpperCase.toLowerCase();

  if (passwordUpperCase === null || passwordUpperCase === "") {
    alert("Please answer Yes or No");
    confirmUppercase();
  } else if (passwordUpperCase === "yes" || passwordUpperCase === "y") {
    passwordUpperCase = true;
    return passwordUpperCase;
  } else if (passwordUpperCase === "no" || passwordUpperCase === "n") {
    passwordUpperCase = false;
    return passwordUpperCase;
  } else {
    alert("Please answer Yes or No");
    confirmUppercase();
  }
  return passwordUpperCase;
}

function confirmSpecialCharacter() {
  passwordSpecialCharacter = prompt(
    "Do you want to include special characters in your passwords? \n(Yes or No)"
  );
  passwordSpecialCharacter = passwordSpecialCharacter.toLowerCase();

  if (passwordSpecialCharacter === null || passwordSpecialCharacter === "") {
    alert("Please answer Yes or No");
    confirmSpecialCharacter();
  } else if (
    passwordSpecialCharacter === "yes" ||
    passwordSpecialCharacter === "y"
  ) {
    passwordSpecialCharacter = true;

    return passwordSpecialCharacter;
  } else if (
    passwordSpecialCharacter === "no" ||
    spasswordSpecialCharacter === "n"
  ) {
    passwordSpecialCharacter = false;
    return passwordSpecialCharacter;
  } else {
    alert("Please answer Yes or No");
    confirmSpecialCharacter();
  }
  return passwordSpecialCharacter;
}

function confirmNumbers() {
  passwordNumericCharacter = prompt(
    "Do you want to include numbers in your password? \n(Yes or No)"
  );
  passwordNumericCharacter = passwordNumericCharacter.toLowerCase();

  if (passwordNumericCharacter === null || passwordNumericCharacter === "") {
    alert("Please answer Yes or No");
    confirmNumbers();
  } else if (
    passwordNumericCharacter === "yes" ||
    passwordNumericCharacter === "y"
  ) {
    passwordNumericCharacter = true;
    return passwordNumericCharacter;
  } else if (
    passwordNumericCharacter === "no" ||
    passwordNumericCharacter === "n"
  ) {
    passwordNumericCharacter = false;
    return passwordNumericCharacter;
  } else {
    alert("Please answer Yes or No");
    confirmNumbers();
  }
  return passwordNumericCharacter;
}

// Write generate password function
function generatePassword() {
  console.log("Button clicked");

  confirmLength();
  console.log(passwordLength);
  confirmSpecialCharacter();
  console.log(passwordSpecialCharacter);
  confirmUppercase();
  console.log(passwordUpperCase);
  confirmNumbers();
  console.log(passwordNumericCharacter);

  var characters = alphaLower;
  var password = "";
  if (
    passwordUpperCase &&
    passwordSpecialCharacter &&
    passwordNumericCharacter
  ) {
    characters += alphaUpper + number + specialChar;
  } else if (passwordUpperCase && passwordNumericCharacter) {
    characters += alphaUpper + number;
  } else if (passwordNumericCharacter && passwordSpecialCharacter) {
    characters += number + specialChar;
  } else if (passwordUpperCase && passwordSpecialCharacter) {
    characters += alphaUpper + specialChar;
  } else if (passwordUpperCase) {
    characters += alphaUpper;
  } else if (passwordNumericCharacter) {
    characters += number;
  } else if (passwordSpecialCharacter) {
    characters += passwordSpecialCharacter;
  } else {
    characters === alphaLower;
  }

  for (var i = 0; i < passwordLength; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var passwordnum = "";
  var passwordnum = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = passwordnum;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
