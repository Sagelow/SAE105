let cles=Object.keys(SAE);
console.log(cles[0])
let affichage = ""

for (let i=0; i<cles.length; i++){
    affichage+='<a href="info/information_SAE.html?SAE='+cles[i]+'" class="plus">'+cles[i]+'</a>'
    console.log(cles[affichage])
}

document.querySelector(".result").innerHTML=affichage

let param = new URLSearchParams(location.search);
let boisson = param.get('boisson');
let plat = param.get('plat');
document.querySelector(".resultat").innerHTML+="<br>Votre repas : " + plat + " et " + boisson;
