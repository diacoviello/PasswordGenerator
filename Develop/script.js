// Assignment Code
var generateBtn = document.querySelector("#generate");

//k

function generatePassword() {
  var lowercasechar = "abcdefghijklmnopqrstuvwxyz";
  var uppercasechar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "1234567890";
  var specialchar = "!#$%&'()*+,-./:;<=]>?@[^_`{|}~ ";
  var stringChoice = "";
  var chars = parseInt(
    prompt("How many characters do you wish for your password to be? (8-128)")
  );
  if (chars < 8 || chars > 128) {
    alert("Characters must be between 8-128 characters!");
    return "";
  }

  var lows = confirm("Do you want your password to include lowercase letters?");
  {
    if ((lows = true)) {
      stringChoice = lowercasechar;
    } else {
      stringChoice = "";
    }
    return stringChoice;
  }

  var ups = confirm("Do you want your password to include uppercase letters?");
  {
    if ((ups = true)) {
      stringChoice = stringChoice + uppercasechar;
    } else {
      stringChoice = stringChoice;
    }
    return stringChoice;
  }

  var nums = confirm("Do you want your password to include numbers?");

  var specials = confirm(
    "DO you want your password to include special characters?"
  );

  var password = "";
  for (var i = 0; i < chars; i++) {
    password += stringChoice[Math.floor(Math.random() * stringChoice.length)];
  }
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

//k

//k