
/*function changeLeMot (paragraphe){
var paragraphe = document.getElementById("poisson1");
paragraphe.innerHTML ="Je suis un poisson mort";

return;
}*/

function prendre(a){
let paragraphe = document.getElementById("poisson" + a).textContent;
return paragraphe;
//console.log(paragraphe);
}
console.log(prendre(1));
//console.log(paragraphe);

function remplace(a){
document.getElementById("poisson" + a).textContent = "Je suis un poisson mort"; 
}
console.log(remplace(1));
