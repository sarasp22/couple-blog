const EVENTS = [
  {
    date: "11/07/2024",
    title_it: "Primo incontro",
    title_fr: "Première rencontre",
    body_it: "È stato un pomeriggio qualunque quando i nostri occhi si sono incrociati per la prima volta. Nessuno dei due sapeva che quel momento avrebbe cambiato tutto.",
    body_fr: "C'était un après-midi ordinaire quand nos regards se sont croisés pour la première fois. Aucun de nous ne savait que ce moment allait tout changer.",
    img: "assets/img/event-1.jpg",
    imgBtn: null
  },
  {
    date: "13/07/2024",
    title_it: "Primo bacio",
    title_fr: "Premier baiser",
    body_it: "Due giorni dopo, ci siamo ritrovati quasi per caso in un piccolo parco. Camminando lentamente, ridendo di niente, è arrivato il momento più naturale del mondo.",
    body_fr: "Deux jours après, on s'est retrouvés presque par hasard dans un petit parc. En marchant lentement, en riant de rien, est venu le moment le plus naturel du monde.",
    img: "assets/img/event-2.jpg",
    imgBtn: null
  },
  {
    date: "13/08/2024",
    title_it: "Primo viaggio",
    title_fr: "Premier voyage",
    body_it: "Un mese dopo, le valigie erano aperte e i cuori ancora di più. La nostra prima avventura insieme: paesaggi nuovi, sapori nuovi.",
    body_fr: "Un mois plus tard, les valises étaient ouvertes et nos cœurs encore plus. Notre première aventure ensemble : de nouveaux paysages, de nouvelles saveurs.",
    img: "assets/img/event-3.jpg",
    imgBtn: null
  },
  {
    date: "25/10/2024",
    title_it: "Sei mesi insieme",
    title_fr: "Six mois ensemble",
    body_it: "Sei mesi di piccoli gesti che si accumulano: il caffè del mattino, i messaggi assurdi alle tre di notte, le cene improvvisate.",
    body_fr: "Six mois de petits gestes qui s'accumulent : le café du matin, les messages absurdes à trois heures du matin, les dîners improvisés.",
    img: "assets/img/event-4.jpg",
    imgBtn: null
  },
  {
    date: "30/05/2025",
    title_it: "Un anno insieme",
    title_fr: "Un an ensemble",
    body_it: "Un anno di noi. Di crescita, di risate, di pianti e di forza condivisa. Di scelte fatte insieme, di un appartamento che è diventato il nostro nido.",
    body_fr: "Un an de nous. De croissance, de rires, de larmes et de force partagée. D'un appartement devenu notre nid.",
    img: "assets/img/event-5.jpg",
    imgBtn: {
      label_it: "Per entrare in casa clicca qui",
      label_fr: "Entrez chez nous ici",
      href: "casa.html"
    }
  },
  {
    date: "?",
    title_it: "Capitolo futuro",
    title_fr: "Chapitre futur",
    body_it: "La storia continua… non vediamo l'ora di scoprire cosa ci riserva il prossimo capitolo.",
    body_fr: "L'histoire continue… nous avons hâte de découvrir ce que le prochain chapitre nous réserve.",
    img: null,
    imgBtn: null
  }
];

let activeIdx = null;
let timelineOpen = false;

function buildTrack() {
  const track = document.getElementById('tlTrack');
  track.innerHTML = '';
  EVENTS.forEach((ev, i) => {
    const el = document.createElement('div');
    el.className = 'tl-item';
    el.innerHTML = `<div class="tl-dot"></div><span class="tl-date">${ev.date}</span>`;
    el.addEventListener('click', () => selectEvent(i, el));
    track.appendChild(el);
  });
}

function buildEvents() {
  const container = document.getElementById('tlEvents');
  container.innerHTML = '';
  const it = lang === 'it';

  EVENTS.forEach((ev, i) => {
    const div = document.createElement('div');
    div.className = 'tl-event' + (i % 2 === 1 ? ' photo-right' : '');
    div.id = `ev-${i}`;

    let photoHTML;
    if (ev.img) {
      let btnHTML = '';
      if (ev.imgBtn) {
        const label = it ? ev.imgBtn.label_it : ev.imgBtn.label_fr;
        btnHTML = `<a href="${ev.imgBtn.href}" class="ev-img-btn">${label}</a>`;
      }
      photoHTML = `<img src="${ev.img}" class="ev-img" alt="${it ? ev.title_it : ev.title_fr}" />${btnHTML}`;
    } else {
      photoHTML = `<div class="ev-img-placeholder">✨</div>`;
    }

    div.innerHTML = `
      <div class="ev-photo">${photoHTML}</div>
      <div class="ev-text">
        <span class="ev-tag">${ev.date}</span>
        <h3 class="ev-title">${it ? ev.title_it : ev.title_fr}</h3>
        <p class="ev-body">${it ? ev.body_it : ev.body_fr}</p>
      </div>`;

    container.appendChild(div);
  });

  if (activeIdx !== null) {
    document.getElementById(`ev-${activeIdx}`)?.classList.add('active');
  }
}

function selectEvent(i, el) {
  document.querySelectorAll('.tl-item').forEach(e => e.classList.remove('active'));
  el.classList.add('active');
  activeIdx = i;
  buildEvents();
  document.getElementById(`ev-${i}`)?.classList.add('active');
}

function toggleTimeline() {
  const sec     = document.getElementById('timeline-section');
  const viaggi  = document.getElementById('viaggi-section');
  const btn     = document.getElementById('ctaBtn');
  timelineOpen  = !timelineOpen;
  sec.classList.toggle('open', timelineOpen);
  btn.classList.toggle('open', timelineOpen);
  viaggi.style.display = timelineOpen ? 'block' : 'none';
  if (timelineOpen) {
    setTimeout(() => sec.scrollIntoView({ behavior: 'smooth', block: 'start' }), 120);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  buildTrack();
  buildEvents();
});
