let cles=Object.keys(SAE);
console.log(cles[0])
let affichage = ""

for (let i=0; i<cles.length; i++){
    affichage+='<a href="">'+cles[i]+'</a>'
    console.log(cles[affichage])
}

document.querySelector(".result").innerHTML=affichage
