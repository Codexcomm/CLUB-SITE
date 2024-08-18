let username = prompt("What Is Your Name?")
let age = Number(prompt("What Is Your Age?"))
let money = Number(prompt("Input Your Money"))

if( (age >= 18) && (money >= 20000)){
    alert(username + ", Welcome To Our Club")
    alert("Enjoy Your Time With Us")
}

else{
     if((age < 18) && (money <= 20000)){
    alert(username + ", You Are Not Eligible From Entering The Club Because Your Underage And You Have Insufficient Money")
     }

     else if(age < 18){
        alert(username + ", Your Are Not Eligible To Enter Because You Are Not Of Age")
     }

     else{
        alert(username + ", You Are Not Eligible To Enter Because You Have Insufficient Money")
     }

}