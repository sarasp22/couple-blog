const DESTINATIONS = [
  {
    id: 'italia-francia',
    label_it: 'Italia & Francia',
    label_fr: 'Italie et France',
    pin: { x: 48, y: 35 },
    col: 'left',
    places: [
      {
        loc: 'Napoli',
        desc_it: 'Pizza, caos e bellezza assoluta. Napoli non si spiega, si vive.',
        desc_fr: 'Pizza, chaos et beauté absolue. Naples ne s\'explique pas, elle se vit.',
        img: 'assets/img/napoli.jpg'
      },
      {
        loc: 'Rocamadour',
        desc_it: 'Mare cristallino e spiagge di sabbia bianca da sogno.',
        desc_fr: 'Mer cristalline et plages de sable blanc de rêve.',
        img: 'assets/img/rocamadour.jpeg'
      },
      {
        loc: 'Costiera Amalfitana',
        desc_it: 'La strada più bella del mondo, punto.',
        desc_fr: 'La plus belle route du monde, point.',
        img: 'assets/img/amalfi.jpg'
      },
      {
        loc: 'Saint-Malo',
        desc_it: 'Il nostro angolo segreto sui Monti Simbruini, lontano da tutto.',
        desc_fr: 'Notre coin secret dans les Monti Simbruini, loin de tout.',
        img: 'assets/img/saintmalo.jpg'
      },
    ]
  },
  {
    id: 'nord-europa',
    label_it: 'Nord Europa',
    label_fr: 'Europe du nord',
    pin: { x: 52, y: 25 },
    col: 'left',
    places: [
      {
        loc: 'Copenaghen',
        desc_it: 'Una giornata intera tra castelli da favola lungo il fiume Loira.',
        desc_fr: 'Une journée entière dans des châteaux de conte de fées le long de la Loire.',
        img: 'assets/img/copenaghen.jpg'
      },
      {
        loc: 'Slovaer',
        desc_it: 'Lavanda, mercati provenzali e tramonti rosa sul Mediterraneo.',
        desc_fr: 'Lavande, marchés provençaux et couchers de soleil roses sur la Méditerranée.',
        img: 'assets/img/norvegia.jpg'
      },
    ]
  },
  {
    id: 'sud-america',
    label_it: 'Sud America',
    label_fr: 'Amerique du sud',
    pin: { x: 32, y: 50 },
    col: 'right',
    places: [
      {
        loc: 'Salento',
        desc_it: 'Aperitivi in Navigli, la Madonnina e mille posti nuovi da scoprire.',
        desc_fr: 'Apéros aux Navigli, la Madonnina et mille nouveaux endroits à découvrir.',
        img: 'assets/img/milano.jpg'
      },
      {
        loc: 'Galapagos',
        desc_it: 'Cinque paesi colorati abbarbicati sulle scogliere liguri.',
        desc_fr: 'Cinq villages colorés accrochés aux falaises liguriennes.',
        img: 'assets/img/cinqueterre.jpg'
      },
      {
        loc: 'Casa en el agua',
        desc_it: 'Cinque paesi colorati abbarbicati sulle scogliere liguri.',
        desc_fr: 'Cinq villages colorés accrochés aux falaises liguriennes.',
        img: 'assets/img/cinqueterre.jpg'
      },
    ]
  },
  {
    id: 'turchia',
    label_it: 'Turchia',
    label_fr: 'Turquie',
    pin: { x: 58, y: 37 },
    col: 'right',
    places: [
      {
        loc: 'Istanbul',
        desc_it: 'Pizza, caos e bellezza assoluta. Napoli non si spiega, si vive.',
        desc_fr: 'Pizza, chaos et beauté absolue. Naples ne s\'explique pas, elle se vit.',
        img: 'assets/img/turchia.jpg'
      },
      {
        loc: 'Cappadocia',
        desc_it: 'La strada più bella del mondo, punto.',
        desc_fr: 'La plus belle route du monde, point.',
        img: 'assets/img/amalfi.jpg'
      },
      {
        loc: 'Pamukkale',
        desc_it: 'Mare cristallino e spiagge di sabbia bianca da sogno.',
        desc_fr: 'Mer cristalline et plages de sable blanc de rêve.',
        img: 'assets/img/sardegna.jpg'
      },
    ]
  }
];

let activeDest = null;

function buildViagggi() {
  const leftCol = document.getElementById('destLeft');
  const rightCol = document.getElementById('destRight');
  const mapWrap = document.getElementById('mapWrap');
  leftCol.innerHTML = '';
  rightCol.innerHTML = '';
  mapWrap.querySelectorAll('.map-pin').forEach(p => p.remove());

  const it = lang === 'it';

  DESTINATIONS.forEach(dest => {
    /* pillola */
    const pill = document.createElement('span');
    pill.className = 'dest-pill' + (activeDest === dest.id ? ' active' : '');
    pill.textContent = it ? dest.label_it : dest.label_fr;
    pill.addEventListener('click', () => selectDest(dest.id));
    (dest.col === 'left' ? leftCol : rightCol).appendChild(pill);

    /* pin sulla mappa */
    const pin = document.createElement('div');
    pin.className = 'map-pin' + (activeDest === dest.id ? ' active' : '');
    pin.style.left = dest.pin.x + '%';
    pin.style.top  = dest.pin.y + '%';
    pin.title = it ? dest.label_it : dest.label_fr;
    pin.addEventListener('click', () => selectDest(dest.id));
    mapWrap.appendChild(pin);
  });
}

function selectDest(id) {
  activeDest = activeDest === id ? null : id;
  buildViagggi();
  renderGallery();
}

function renderGallery() {
  const gallery = document.getElementById('viaggiGallery');
  const grid    = document.getElementById('galleryGrid');
  const title   = document.getElementById('galleryTitle');

  if (!activeDest) {
    gallery.classList.remove('active');
    return;
  }

  const dest = DESTINATIONS.find(d => d.id === activeDest);
  const it   = lang === 'it';

  title.textContent = it ? dest.label_it : dest.label_fr;
  grid.innerHTML = '';

  dest.places.forEach(p => {
    const card = document.createElement('div');
    card.className = 'gallery-card';
    card.innerHTML = `
      <img src="${p.img}" class="gallery-card-img" alt="${p.loc}"
           onerror="this.style.background='#f2ddd9';this.style.minHeight='180px'" />
      <div class="gallery-card-body">
        <div class="gallery-card-loc">${p.loc.toUpperCase()}</div>
        <p class="gallery-card-desc">${it ? p.desc_it : p.desc_fr}</p>
      </div>`;
    grid.appendChild(card);
  });

  gallery.classList.add('active');
  setTimeout(() => gallery.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
}

document.addEventListener("DOMContentLoaded", () => { buildViagggi(); });
