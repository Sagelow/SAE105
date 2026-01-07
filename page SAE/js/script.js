// Construire la liste des clés SAE en toute sécurité
let cles = [];
if (typeof SAE !== 'undefined' && SAE && typeof SAE === 'object') {
    cles = Object.keys(SAE);
}
console.log('SAE keys:', cles);

let affichage = '';
if (cles.length === 0) {
    affichage = '<p>Aucune SAE disponible.</p>';
} else {
    for (let i = 0; i < cles.length; i++) {
        // encoder la clé dans l'URL et ajouter un saut de ligne pour lisibilité
        affichage += '<a href="info/information_SAE.html?SAE=' + encodeURIComponent(cles[i]) + '" class="plus">' + cles[i] + '</a><br>';
        console.log(cles[i]);
    }
}

const resultEl = document.querySelector('.result');
if (resultEl) resultEl.innerHTML = affichage;

// Affichage optionnel du repas (si utilisé ailleurs)
const param = new URLSearchParams(location.search);
const boisson = param.get('boisson');
const plat = param.get('plat');
const resultatEl = document.querySelector('.resultat');
if (resultatEl) resultatEl.innerHTML += '<br>Votre repas : ' + (plat || '') + ' et ' + (boisson || '');
