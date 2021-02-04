console.log("javascript loaded")
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
        
        var yesUpper = confirm("Do you like to have uppercase letters in your password ?")
        var yesLower = confirm("Do you like to have lowercase letters in your password ?")
        var yesSymbols = confirm("Do you like to have symbols letters in your password ?")
        var yesNumbers = confirm("Do you like to have numbers letters in your password ?")
    }
 }