const characters = ["A","B","C","D","E","F","G","H",
"I","J","K","L","M","N","O","P","Q","R","S","T","U",
"V","W","X","Y","Z","a","b","c","d","e","f","g","h",
"i","j","k","l","m","n","o","p","q","r","s","t","u",
"v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6",
 "7", "8", "9","~","`","!","@","#","$","%","^","&","*",
 "(",")","_","-","+","=","{","[","}","]",",","|",":",";",
 "<",">",".","?","/"];

 passkey1 = document.getElementById("pass-1")
 passkey2 = document.getElementById("pass-2")
 copiedKey = document.getElementById("copied-msg")


function generatePasskey () {
    passkey1.textContent = ""
    for (i=0; i<15;i++){
        randChar = Math.floor(Math.random()*characters.length) //random number from 0 to 100
        passkey1.textContent += characters[randChar]
    }

}
