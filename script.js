var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var special = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  
  var passwordLength = prompt("How long do you want your password to be? (Between 8 and 128 characters)");
  
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return;
  }

  var lowercasePref = confirm("Include lowercase letters in your password?");
  var uppercasePref = confirm("Include uppercase letters in your password?");
  var numbersPref = confirm("Include numbers in your password?");
  var specialPref = confirm("Include special characters in your password?");
  
  if (!lowercasePref && !uppercasePref && !numbersPref && !specialPref) {
    alert("You must select at least one character type for your password.");
    return;
  }

  var passwordCharacters = "";
  
  if (lowercasePref) {
    passwordCharacters += lowercase;
  }
  
  if (uppercasePref) {
    passwordCharacters += uppercase;
  }
  
  if (numbersPref) {
    passwordCharacters +=  numbers;
  }
  
  if (specialPref) {
    passwordCharacters += special;
  }

  var password = "";
  
  for (var i = 0; i < passwordLength; i++) {
    password += passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length));
  }
  
  return password;
}

generateBtn.addEventListener("click", writePassword);
