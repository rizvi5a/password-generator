console.log("javascript loaded")
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var numberString = "1234567890"
var symbolString = "!@#$%^&*()_-"
 var savebtn=document.getElementById("password")
 savebtn.addEventListener("click", function() {
   getPasswordRequirements()
 }
 )


 function getPasswordRequirements(){
    var length= parseInt(prompt("enter length of password"))
    if(length <9 || length > 127){
        alert("Invalid Password length!")
    }
    else {
        do{
            //Confirm ok- true cancel-false
            alert("Choose at least one option")
        var yesUpper = confirm("Do you like to have uppercase letters in your password ?")
        var yesLower = confirm("Do you like to have lowercase letters in your password ?")
        var yesSymbols = confirm("Do you like to have symbols letters in your password ?")
        var yesNumbers = confirm("Do you like to have numbers letters in your password ?")
        } while(!yesLower && !yesUpper && !yesSymbols && !yesNumbers)

        var userChoiceList = []
        if(yesLower){
            userChoiceList += lowerCase
        }
        if(yesUpper){
            userChoiceList += upperCase
        }
        if(yesNumbers){
            userChoiceList += numberString
        }
        if(yesSymbols){
            userChoiceList += symbolString
        }
        console.log(userChoiceList)
        var password = ""
        for (i=0;i<length; i++) {
          var index = Math.floor(Math.random() * userChoiceList.length)
          password += userChoiceList[index]
        }
     console.log(password)
    
    }
 }