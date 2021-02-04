// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //setting variable strings to be pulled from for PW generation//
  var lowercasechar = "abcdefghijklmnopqrstuvwxyz";
  var uppercasechar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "1234567890";
  var specialchar = "!#$%&'()*+,-./:;<=]>?@[^_`{|}~ ";
  //This is where the string of potential characters will be stores after the user indicates their preferences//
  var stringChoice = "";

  //Prompts in window code begins here//
  var chars = parseInt(
    prompt("How many characters do you wish for your password to be? (8-128)")
  );
  if (chars < 8 || chars > 128) {
    alert("Characters must be between 8-128 characters!");
    return "";
  }

  var lows = confirm("Do you want your password to include lowercase letters?");
  {
    if (lows == true) {
      stringChoice = stringChoice + lowercasechar;
    } else {
      stringChoice = stringChoice;
    }
    console.log(lows);
  }

  var ups = confirm("Do you want your password to include uppercase letters?");
  {
    if (ups == true) {
      stringChoice = stringChoice + uppercasechar;
    } else {
      stringChoice = stringChoice;
    }
  }

  var nums = confirm("Do you want your password to include numbers?");
  {
    if (nums == true) {
      stringChoice = stringChoice + numbers;
    } else {
      stringChoice = stringChoice;
    }
  }

  var specials = confirm(
    "Do you want your password to include special characters?"
  );
  {
    if (specials == true) {
      stringChoice = stringChoice + specialchar;
    } else {
      stringChoice = stringChoice;
    }
  }

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

  if ((writePassword = "")) {
    alert(
      "The password must contain at least one type of character to be created."
    );
  }
}
// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

//k

//k
