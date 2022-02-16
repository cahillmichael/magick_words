// Assignment code here

function generatePassword() {
  //define variables
  var pwLength;
  var pwLowerCase;
  var pwUpperCase;
  var pwNumerals;
  var pwSpecial;
  var charArray;
  var lcString = 'zyxwvutsrqponmlkjihgfedcba';
  var ucString = 'ZYXWVUTSRQPONMLKJIHGFEDCBA';
  var numString = '0987654321';
  var specCharString = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  console.log(specCharString);

  //obtain string length from user
  var getLength = function() {
    pwLength = window.prompt('How many characters must your password be? Provide an integer between 7 and 129.');

    pwLength = parseInt(pwLength);
    if(pwLength >= 8 && pwLength <= 128){
      //acceptable input
      console.log('pw length is set gtg');
    } else {
      //unacceptable input
      console.log('pw length invalid nope');
      window.alert('Provide an integer between 7 and 129, exclusive.');
      getLength();
    };
  };

  //obtain lowercase pref from user 
  var getLowercase = function() {
    pwLowerCase = window.prompt('Include lowercase letters? Respond with "Y" or "N"');

    switch (pwLowerCase) {
      case 'Y':
      case 'Yes':
      case 'y':
      case 'yes':
          console.log('include lowercase');
          pwLowerCase = 'Y';
          break;
      case 'N':
      case 'No':
      case 'n':
      case 'no':
          console.log('exclude lowercase');
          pwLowerCase = 'N';
          break;    
      //unacceptable input
      default:
      console.log('bad data lowercase');
      window.alert('Respond with "Y" or "N"');
      getLowercase();
    };
  };

  //obtain uppercase pref from user 
  var getUppercase = function() {
    pwUpperCase = window.prompt('Include uppercase letters? Respond with "Y" or "N"');

    switch (pwUpperCase) {
      case 'Y':
      case 'Yes':
      case 'y':
      case 'yes':
          console.log('include uppercase');
          pwUpperCase = 'Y';
          break;
      case 'N':
      case 'No':
      case 'n':
      case 'no':
          console.log('exclude uppercase');
          pwUpperCase = 'N';
          break;    
      //unacceptable input
      default:
      console.log('bad data uppercase');
      window.alert('Respond with "Y" or "N"');
      getUppercase();
    };
  };

  //obtain numeral pref from user 
  var getNumerals = function() {
    pwNumerals = window.prompt('Include numerals? Respond with "Y" or "N"');

    switch (pwNumerals) {
      case 'Y':
      case 'Yes':
      case 'y':
      case 'yes':
          console.log('include numerals');
          pwNumerals = 'Y';
          break;
      case 'N':
      case 'No':
      case 'n':
      case 'no':
          console.log('exclude numerals');
          pwNumerals = 'N';
          break;    
      //unacceptable input
      default:
      console.log('bad data numerals');
      window.alert('Respond with "Y" or "N"');
      getNumerals();
    };
  };

  //obtain special pref from user 
  var getSpecial = function() {
    pwSpecial = window.prompt('Include special characters? Respond with "Y" or "N"');

    switch (pwSpecial) {
      case 'Y':
      case 'Yes':
      case 'y':
      case 'yes':
          console.log('include special');
          pwSpecial = 'Y';
          break;
      case 'N':
      case 'No':
      case 'n':
      case 'no':
          console.log('exclude special');
          pwSpecial = 'N';
          break;    
      //unacceptable input
      default:
      console.log('bad data special');
      window.alert('Respond with "Y" or "N"');
      getSpecial();
    };
  };

getLength();
console.log('length output ' + pwLength);
getLowercase();
console.log('LC output ' + pwLowerCase);
getUppercase();
console.log('UC output ' + pwUpperCase);
getNumerals();
console.log('Num output ' + pwNumerals);
getSpecial();
console.log('Spec output ' + pwSpecial);


};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log("clicked");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
