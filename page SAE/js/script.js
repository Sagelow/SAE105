// Update the clock every minute
function Clock() {
    const time = document.getElementById('macClock');
    if (!time) return;
    const d = new Date();
    time.textContent = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
Clock();
setInterval(Clock, 60000);

// Taking key of SAE
const cles = SAE ? Object.keys(SAE) : [];
const result = document.querySelector('.result');
let affichage = '';

// Display SAE names 
if (cles.length === 0) {
    affichage = '<div>Aucune SAE disponible.</div>';
} else {
    for (let i = 0; i < cles.length; i++) {
        affichage += `<a href="informationSAE/information_SAE.html?SAE=${encodeURIComponent(cles[i])}" class="plus">${cles[i]}</a>`;
    }
}

// Show name SAE + Folder icon
result.innerHTML = affichage;


