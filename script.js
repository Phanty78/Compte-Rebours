let zoneAffichage = document.getElementById("affichage")
let boutonCompter = document.getElementById("btncompter")
let baliseChifreDeDepart = document.getElementById("chiffredepart")
let chifreDeDepart = 0

function compteur(chifreDeDepart){
    zoneAffichage.innerHTML = "";
    for (let i = chifreDeDepart; i >= 0; i--) {
    let element = document.createElement("p")
    element.textContent = i
    zoneAffichage.appendChild(element)
    }
}

boutonCompter.addEventListener("click", () =>{
    chifreDeDepart = baliseChifreDeDepart.value
    if (chifreDeDepart> 0) {
        compteur(chifreDeDepart)
    } 
})

