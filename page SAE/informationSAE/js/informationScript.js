// Setting SAE in the URL
const params = new URLSearchParams(location.search);
const key = params.get('SAE');

// Displaying SAE information
const container = document.getElementById('sae-details');
const s = SAE[key];
let html = '';

html += '<h1>' + (s.titre) + '</h1>';

// Display Semestre
if (s.semestre) {
    html += '<p><span>Semestre :</span> ' + s.semestre + '</p>';
}
// Display Description
if (s.description) {
    html += '<p><span>Description :</span> ' + s.description + '</p>';
}

// Display AC
if (s.AC) {
    html += '<p><span>Apprentissages critiques :</span></p><ul>';
    for (let i in s.AC) {
        html += '<li><span>' + i + '</span> : ' + s.AC[i] + '</li>';
    }
    html += '</ul>';
}

// Display Ressources
if (s.ressources) {
    html += '<p><span>Ressources :</span></p><ul>';
    for (let i in s.ressources) {
        html += '<li><span>' + i + '</span> : ' + s.ressources[i] + '</li>';
    }
    html += '</ul>';
}
document.querySelector('.pdf').href = 'pdf/' + key + '.pdf';
console.log(document.querySelector('.pdf').href);
container.innerHTML = html;