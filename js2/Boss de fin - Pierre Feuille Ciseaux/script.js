const btonPierre = document.querySelector("#pierre");
const btonFeuille = document.querySelector("#feuille");
const btonCiseaux = document.querySelector("#ciseaux");


const partie = document.querySelector("#partie");
const result = document.querySelector("#result");


function pfc(){
let monChoix = this.name;
console.log(monChoix);
let choixOrdi = [btonPierre, btonFeuille, btonCiseaux];
let choixOrdi1 = choixOrdi[choixC(3)].id;

function choixC(max) {
    return Math.floor(Math.random()*Math.floor(max));
    }
    console.log(choixOrdi1);

    if (choixOrdi1 == monChoix) {
        result.innerHTML = "match nul";
    } else if ((choixOrdi1 == "ciseaux" && monChoix == "feuille") || 
              (choixOrdi1 == "feuille" && monChoix == "pierre") ||
              (choixOrdi1 == "pierre" && monChoix == "ciseaux")) {
            result.innerHTML = "Ordi a gagner";
              }
        else {
            result.innerHTML = "Vous avez gagné";
        }
    }

btonPierre.addEventListener("click", pfc);
btonFeuille.addEventListener("click", pfc);
btonCiseaux.addEventListener("click", pfc);


