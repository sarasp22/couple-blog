let lang = localStorage.getItem('siteLang') || 'it';

const uiStrings = {
  heroTitle:  {
    it: "Benvenuti nel Blog di<br>Sara <span class='amp'>&</span> Jordan",
    fr: "Bienvenue sur le Blog de<br>Sara <span class='amp'>&</span> Jordan"
  },
  heroSub:    {
    it: "Clicca su Sara o Jordan per conoscerci meglio",
    fr: "Clique sur Sara ou Jordan pour mieux nous connaître"
  },
  ctaText:    {
    it: "Clicca qui per più dettagli",
    fr: "Cliquez ici pour plus de détails"
  },
  tlHeading:  {
    it: "La nostra <span class='accent'>storia:</span>",
    fr: "Notre <span class='accent'>histoire :</span>"
  },
  tlSub: {
    it: "Clicca sulle date per scoprire ogni momento",
    fr: "Clique sur les dates pour découvrir chaque moment"
  },
  viaggiHeading: { it: "I nostri viaggi insieme:", fr: "Nos voyages ensemble :" },
  viaggiSub:     {
    it: "Clicca sulla mappa per scoprire i nostri ricordi più belli",
    fr: "Clique sur la carte pour découvrir nos plus beaux souvenirs"
  },
  siteFooter: {
    it: "Creato da Sara per Jordan con tanto amore ©2026",
    fr: "Créé par Sara pour Jordan avec beaucoup d'amour ©2026"
  },
};

function applyLang() {
  Object.entries(uiStrings).forEach(([id, vals]) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = vals[lang];
  });
  const btn = document.getElementById('langBtn');
  if (btn) btn.textContent = lang === 'it' ? '🇫🇷 FR' : '🇮🇹 IT';
}

function toggleLang() {
  lang = lang === 'it' ? 'fr' : 'it';
  localStorage.setItem('siteLang', lang); /* salva la scelta per le altre pagine */
  applyLang();

  if (typeof buildEvents  === 'function') { buildEvents(); if (activeIdx  !== null) document.getElementById(`ev-${activeIdx}`).classList.add('active'); }
  if (typeof buildViagggi === 'function') { buildViagggi(); if (activeDest) renderGallery(); }
}

document.addEventListener('DOMContentLoaded', applyLang);
