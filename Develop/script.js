// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercasechar = "abcdefghijklmnopqrstuvwxyz";
var uppercasechar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specialchar = "!#$%&'()*+,-./:;<=]>?@[^_`{|}~ ";
var stringChoice = "";

function generatePassword() {
  var chars = parseInt(
    prompt("How many characters do you wish for your password to be? (8-128)")
  );
  if (isNaN(chars) === true) {
    alert("Password must include number of characters.");
    return "Please try again...";
  }
  if (chars < 8 || chars > 128) {
    alert("Characters must be between 8-128 characters!");
    return "Please try again...";
  }

  var lows = confirm("Do you want your password to include lowercase letters?");
  {
    if (lows === true) {
      stringChoice = stringChoice + lowercasechar;
    } else {
      stringChoice = stringChoice;
    }
    console.log(lows);
  }

  var ups = confirm("Do you want your password to include uppercase letters?");
  {
    if (ups === true) {
      stringChoice = stringChoice + uppercasechar;
    } else {
      stringChoice = stringChoice;
    }
    console.log(ups);
  }

  var nums = confirm("Do you want your password to include numbers?");
  {
    if (nums === true) {
      stringChoice = stringChoice + numbers;
    } else {
      stringChoice = stringChoice;
    }
    console.log(nums);
  }

  var specials = confirm(
    "Do you want your password to include special characters?"
  );
  {
    if (specials === true) {
      stringChoice = stringChoice + specialchar;
    } else {
      stringChoice = stringChoice;
    }
    console.log(specials);
  }

  if (!lows && !ups && !nums && !specials) {
    alert("Password needs at least one character type.");
    return "Password needs at least one character type.";
  } else {
    var password = "";
    for (var i = 0; i < chars; i++) {
      password += stringChoice[Math.floor(Math.random() * stringChoice.length)];
    }
    console.log(password);
    return password;
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
