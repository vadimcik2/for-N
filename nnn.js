var myButton = document.getElementById("myButton");
function changeText(){
var myHeader= document.getElementById("myHeader");
myHeader.innerText = "Text have been changed"
}
myButton.addEventListener("click",changeText);



var myButton1 = document.getElementById("idButton1");
idButton1.addEventListener("click",change);
function change(){
    var H1Elements= document.querySelectorAll("h1");
    for(var i=0; i<H1Elements.length;i++){
        H1Elements[i].style.backgroundColor = "green";
    }
}


var idButton2 = document.getElementById("idButton2"); 
idButton2.addEventListener("click",hideElements);
function hideElements(){
    var h2Elements = document.querySelectorAll("h2");
    for(var i=0; i<h2Elements.length;i++){
        h2Elements[i].style.display="none";
    }
}

var myButton3 = document.getElementById("idButton3");
idButton3.addEventListener("click",changer);
function changer(){
    var h3Elements= document.querySelectorAll("h3");
    for(var i=0; i<h3Elements.length;i++){
        h3Elements[i].style.backgroundColor = "blue";
    }
}