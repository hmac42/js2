//const div1 = document.getElementsByTagName("div");
let soupe1 = document.querySelectorAll(".soupe p");
    
let fauteuil1 = document.querySelectorAll(".fauteuil p");

let lit1 = document.querySelectorAll(".lit p");


let btonBoire = document.querySelector("#boire");
let btonReposer = document.querySelector("#reposer");
let btonDormir = document.querySelector("#dormir");
//console.log(btonBoire);

btonBoire.addEventListener('click', fBoire);
btonReposer.addEventListener('click', fReposer);
btonDormir.addEventListener('click', fDormir);

function fBoire() {
    for (i=0; i<soupe1.length; i++) {
    soupe1[i].innerHTML = "Bol de soupe vide"    
}};
//soupe1[i].innerHTML.replace("plein","vide");a essayer. construction pas correct


function fReposer() {
  for (i=0; i<fauteuil1.length; i++) {
  fauteuil1[i].innerHTML = "fauteuil usé"    
}};

function fDormir() {
  for (i=0; i<lit1.length; i++) {
  lit1[i].innerHTML = "lit défait"    
}};