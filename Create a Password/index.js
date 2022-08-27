const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


// let password = document.getElementById('choosePassword')
let passwordOneS = document.getElementById('passwordOne')
let passwordTwoS = document.getElementById('passwordTwo')
 
 function randompass(){
    let uno = passwordRandom()
    let dos = passwordRandom()
    passwordOneS.textContent = uno
    passwordTwoS.textContent = dos
 }
 
 function passwordRandom(){
     let password = Math.floor(Math.random() * characters.length)
     for (let i = 0; i<10; i++){
         let count = Math.floor(Math.random() * characters.length)
         password += characters[count]
     }
     return password
 }