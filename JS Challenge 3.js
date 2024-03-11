// Assignment code here
function generatePassword() {
  let length = parseInt(prompt('Enter the length of the password (between 8 and 128 characters)'));

  if (length < 8 || length > 128 || isNaN(length)) {
    alert('Please enter a valid number between 8 and 128.');
    return;
  }

  let includeLowercase = confirm('Include lowercase characters?');
  let includeUppercase = confirm('Include uppercase characters?');
  let includeNumeric = confirm('Include numeric characters?');
  let includeSpecial = confirm('Include special characters?');

  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert('Please select at least one character type.');
    return;
  }

  let password = generatePasswordBasedOnCriteria(length, includeLowercase, includeUppercase, includeNumeric, includeSpecial);

  alert('Your generated password is: ' + password);
}

document.getElementById('generatePasswordButton').addEventListener('click', generatePassword);

var generateBtn = document.querySelector("#generate");

