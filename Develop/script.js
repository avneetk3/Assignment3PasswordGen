// Assignment code here

//writePassword();
//var passwordTest = document.getElementById("password");
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
//document.getElementById("generate");

var pasMaxLength = 0; 
var pasMinLength = 0;
var lowerCase;
var upperCase;
var numeric;
var spChar; 
var r;


//generateBtn.addEventListener("click", writePassword);  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password").value;

  passwordText.value = password;
  //console.log(password);
 // console.log(passwordText.value);

}
//Avneet writing  generatePassword();
function generatePassword()
{  
    pasMinLength = prompt("Plesae enter the password length minimm 8 characters:,",8);
    pasMaxLength = prompt("Please enter the password length maximum of 128 characters :", 128);
    if(pasMinLength <8)
    {
      alert("Cannot create password, password minimum length required is 8");
      exit();
    }
    if((pasMaxLength < 8 || pasMaxLength > 128) && (pasMinLength > pasMaxLength ))
    {
       alert("Cannot create password , maximum length >=8 and <= 128");
      exit();
    }
  
    r = confirm("Do you want to have lowercase character?");
    if (r == true)
    {
      lowerCase = true;
    } 
    else 
    {
      lowerCase = false;
    } 
    //alert("Lower Case"+ lowerCase);
    r = confirm("Do you want to have upper character(s)?");
    if (r == true) 
    {
      upperCase = true;
    } 
    else
    {
      upperCase = false;
    } 
    //alert("Upper Case"+ upperCase);
    r = confirm("Do you want to have numeric character?");
    if (r == true) 
    {
      numeric = true;
    }  
    else 
    {
      numeric = false;
    } 
    //alert("Numeric"+ numeric);


    r = confirm("Do you want to have special character (atleast one character type included)?");
    if (r == true)
    {
      spChar = true;
    } 
    else 
    {
      spChar = false;
      alert("No special character , therefore exit the function");
      exit(); 
    }
    //alert("SpChar"+ spChar);

    //Password variables and create it 
    var characters = "abcdefghijklmnopqrstuvwxyz"; 
    var numerics = "0123456789";
    var punctuation = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
    var password1="";
    for (var i = 0, n = punctuation.length; password1.length < pasMaxLength; ++i)
   {
     if(numeric == true)
     {
        password1 += numerics.charAt(Math.floor(Math.random() * (numerics.length-1)));
        ++i;
     }
    if(lowerCase == true)
    {
        password1 += characters.charAt(Math.floor(Math.random() * (characters.length-1)));
        ++i;
    }
    if(upperCase == true)
    {
         password1 += characters.charAt(Math.floor(Math.random() * (characters.length-1))).toUpperCase();
         ++i;
    }
      
    if(spChar == true)
    {
       password1 += punctuation.charAt(Math.floor(Math.random() * n));
       ++i;
    }
  }
    //password1=password1.split('').sort(function(){return 0.5-Math.random()}).join('');
    console.log(password1);
    alert("Your password is "+password1.substr(0,pasMaxLength));
    return password1.substr(0,pasMaxLength);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


