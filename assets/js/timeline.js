const EVENTS = [
  {
    date: "11/07/2024",
    title_it: "Primo incontro",
    title_fr: "Première rencontre",
    body_it: "Dopo il match, abbiamo passato dieci ore al telefono, come se ci conoscessimo già da tempo. Era mercoledi ed io avevo deciso che volevo che ci vedessimo domenica, ma con le sue tecniche persuasive è riuscito momento dopo momento ad anticipare sempre di piu il nostro incontro, alla fine ci siamo visti il giorno dopo. Jordan mi aveva detto di raggiungerlo su un ponte… peccato che avesse sbagliato il nome. Avevo paura mi avesse dato buca. Così, tra una risata e una chiamata, abbiamo iniziato ad avvicinarci l’uno all’altra. Ci siamo trovati davanti alla statua di Châtelet. Lui era elegantissimo, io decisamente più sportiva. Ho notato subito il suo sorriso, uno di quelli che ti fanno pensare: “niente male”. Gli avevo detto chiaramente che non volevo essere toccata, e lui ha rispettato questa cosa per tutto il tempo, mantenendo una distanza quasi buffa ma piena di attenzione. Tra qualche piccolo battibecco e tante chiacchiere, l’appuntamento è volato. E alla fine, contro ogni mia previsione iniziale, Jordan si è guadagnato un abbraccio. Il primo di tanti altri.",
    body_fr: "Après le match, nous avons passé dix heures au téléphone, comme si nous nous connaissions déjà depuis longtemps. C’était mercredi et j’avais décidé que je voulais qu’on se voie dimanche, mais avec ses techniques de persuasion, il a réussi, petit à petit, à avancer notre rendez-vous, jusqu’à ce qu’on décide de ne plus attendre : le lendemain, juste après le travail, on allait se voir. Jordan m’avait dit de le rejoindre près d’un pont… sauf qu’il s’était trompé de nom. J’ai eu peur qu’il m’ait posé un lapin. Alors, entre un rire et un appel, on a commencé à se rapprocher l’un de l’autre. On s’est retrouvés devant la statue de Châtelet. Lui était très élégant, moi beaucoup plus sportive. J’ai tout de suite remarqué son sourire, de ceux qui te font penser : « pas mal du tout ». Je lui avais clairement dit que je ne voulais pas qu’il me touche, et il a respecté ça pendant tout le rendez-vous, en gardant une distance presque drôle mais pleine d’attention. Entre quelques petits désaccords et beaucoup de discussions, le rendez-vous est passé en un instant. Et à la fin, contre toute attente, Jordan a gagné un câlin. Le premier d’une longue série.",
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
