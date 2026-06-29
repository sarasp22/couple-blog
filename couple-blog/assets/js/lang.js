/* ══════════════════════════════════════════════
   LANG.JS — sistema bilingue IT/FR
   Modifica qui tutte le stringhe dell'interfaccia
   ══════════════════════════════════════════════ */

let lang = 'it';

/* Stringhe statiche della home (id elemento → testo IT/FR) */
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
  heroFooter: {
    it: "Creato da Sara per Jordan con tanto amore ©2026",
    fr: "Créé par Sara pour Jordan avec beaucoup d'amour ©2026"
  },
  tlHeading:  {
    it: "La nostra <span class='accent'>storia:</span>",
    fr: "Notre <span class='accent'>histoire :</span>"
  },
  tlFooter:   {
    it: "Creato da Sara per Jordan con tanto amore ©2026",
    fr: "Créé par Sara pour Jordan avec beaucoup d'amour ©2026"
  },
  saraOverlay:   { it: "SCOPRI", fr: "DÉCOUVRIR" },
  jordanOverlay: { it: "SCOPRI", fr: "DÉCOUVRIR" },
  viaggiHeading: { it: "I nostri viaggi insieme:", fr: "Nos voyages ensemble :" },
  viaggiSub:     {
    it: "Clicca sulla mappa per scoprire i nostri ricordi più belli",
    fr: "Clique sur la carte pour découvrir nos plus beaux souvenirs"
  },
};

function applyLang() {
  Object.entries(uiStrings).forEach(([id, vals]) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = vals[lang];
  });
}

function toggleLang() {
  lang = lang === 'it' ? 'fr' : 'it';
  document.getElementById('langBtn').textContent = lang === 'it' ? '🇫🇷 FR' : '🇮🇹 IT';
  applyLang();

  /* aggiorna sezioni dinamiche se presenti */
  if (typeof buildEvents  === 'function') { buildEvents(); if (activeIdx  !== null) document.getElementById(`ev-${activeIdx}`).classList.add('active'); }
  if (typeof buildViagggi === 'function') { buildViagggi(); if (activeDest) renderGallery(); }
}
