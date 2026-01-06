let cles=Object.keys(SAE);
console.log(cles[0])
let affichage = ""

for (let i=0; i<cles.length; i++){
    affichage+='<a href="info/information_SAE.html" class="plus" target="_blank">'+cles[i]+'</a>'
    console.log(cles[affichage])
}

document.querySelector(".result").innerHTML=affichage
