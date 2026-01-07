// Récupère la clé SAE depuis l'URL
const params = new URLSearchParams(location.search);
const key = params.get('SAE');
const container = document.getElementById('sae-details');

function renderListObject(obj) {
    // obj peut être un tableau, un objet clef->valeur, ou autre
    if (!obj) return '';
    if (Array.isArray(obj)) {
        return '<ul>' + obj.map(i => '<li>' + escapeHtml(i) + '</li>').join('') + '</ul>'
    }
    if (typeof obj === 'object') {
        return '<ul>' + Object.keys(obj).map(k => '<li><strong>' + escapeHtml(k) + ':</strong> ' + escapeHtml(obj[k]) + '</li>').join('') + '</ul>'
    }
    return '<p>' + escapeHtml(String(obj)) + '</p>'
}

function escapeHtml(s) {
    return String(s)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

if (!key) {
    container.innerHTML = '<p>Aucune SAE sélectionnée. Revenez à la <a href="../sae.html">liste des SAE</a>.</p>';
} else if (typeof SAE === 'undefined' || !SAE[key]) {
    container.innerHTML = '<p>SAE non trouvée : <strong>' + escapeHtml(key) + '</strong></p>';
} else {
    const s = SAE[key];
    let html = '';
    html += '<h1>' + escapeHtml(s.titre || key) + '</h1>';
    html += '<div class="meta">Clé : <strong>' + escapeHtml(key) + '</strong>' + (s.semestre ? (' — Semestre ' + escapeHtml(s.semestre)) : '') + '</div>';
    if (s.competences) { html += '<div class="section"><strong>Compétences :</strong>' + renderListObject(s.competences) + '</div>' }
    if (s.description) { html += '<div class="section"><strong>Description :</strong><div>' + s.description + '</div></div>' }
    if (s.AC) { html += '<div class="section"><strong>Activités/Compétences (AC) :</strong>' + renderListObject(s.AC) + '</div>' }
    if (s.ressources) { html += '<div class="section"><strong>Ressources :</strong>' + renderListObject(s.ressources) + '</div>' }

    container.innerHTML = html;
}