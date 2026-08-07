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
        desc_it: 'Averti nella mia Napoli e mostrarti i luoghi che porto nel cuore mi ha resa immensamente felice. Spero di essere riuscita a farti entrare Napoli dentro, anche solo un po’, come Parigi è entrata dentro di me.',
        desc_fr: 'T’avoir dans ma Naples et te faire découvrir les endroits qui me tiennent à cœur m’a rendue profondément heureuse. J’espère avoir réussi à te faire entrer Naples en toi, ne serait-ce qu’un peu, comme Paris est entrée en moi.',
        img: 'assets/img/napoli.jpg'
      },
      {
        loc: 'Rocamadour',
        desc_it: 'Il primo regalo di compleanno che mi hai fatto è stato qualcosa di stupendo: un viaggio a sorpresa che porto nel cuore. Mi ha fatto vedere quanto amore e impegno metti per rendermi felice, e mi ha permesso di conoscerti ancora di più.',
        desc_fr: 'Le premier cadeau d’anniversaire que tu m’as fait a été quelque chose de magnifique : un voyage surprise que je garde dans le cœur. Il m’a montré tout l’amour et l’engagement que tu mets pour me rendre heureuse, et m’a permis de te connaître encore davantage.',
        img: 'assets/img/rocamadour.jpeg'
      },
      {
        loc: 'Milano',
        desc_it: 'La mia terza città, e anche la tua seconda, è stata lo scenario perfetto per fare i turisti insieme in un luogo che sento come casa. È stato bello condividere un pezzo di me e scoprire un po’ della tua storia.',
        desc_fr: 'Ma troisième ville, et aussi ta deuxième, a été le cadre parfait pour jouer les touristes ensemble dans un endroit que je considère comme chez moi. C’était beau de partager une part de moi et de découvrir un peu de ton histoire.',
        img: 'assets/img/milano.jpg'
      },
      {
        loc: 'Affile',
        desc_it: 'Il mio posto preferito al mondo, il mio laghetto: spero ti sia piaciuto quanto piace a me. E spero un giorno di tornarci con qualcuno in più, insieme a noi.',
        desc_fr: 'Mon endroit préféré au monde, un morceau de mon histoire et une part de moi. Je rêve qu’un jour nous ayons une petite maison là-bas et d’y retourner avec toi comme je le faisais enfant.',
        img: 'assets/img/affile2.jpg'
      },
      {
        loc: 'Saint-Malo',
        desc_it: 'Il weekend che ci siamo regalati in Bretagna per il nostro primo anniversario. In questa città abbiamo anche litigato, non ricordo nemmeno il perché, ma so che anche quello ci ha uniti ancora di più. Ogni esperienza non fa altro che rafforzare il nostro legame.',
        desc_fr: 'Le week-end que nous nous sommes offert en Bretagne pour notre premier anniversaire. Dans cette ville, nous nous sommes aussi disputés, je ne me souviens même plus pourquoi, mais je sais que cela nous a encore plus rapprochés. Chaque expérience ne fait que renforcer notre lien.',
        img: 'assets/img/saintmalo.jpg'
      },
      {
        loc: 'Côtes-dArmor',
        desc_it: 'La Costa di Granito Rosa, grazie amore per aver guidato per tutta la Bretagna per realizzare questo mio piccolo capriccio. Come sempre in Bretagna ha piovuto, ma questo non ha impedito che fosse comunque un weekend incredibile, come tutto quello che vivo con te.',
        desc_fr: 'La Côte de Granit Rose, merci mon amour d’avoir conduit à travers toute la Bretagne pour réaliser ce petit caprice. Comme toujours en Bretagne, il a plu, mais cela n’a pas empêché que ce soit un week-end incroyable, comme tout ce que je vis avec toi.',
        img: 'assets/img/granito.jpg'
      },
      {
        loc: 'Staffal',
        desc_it: 'La prima volta a sciare insieme: spoiler, non sono per niente brava a sciare mentre tu sei quasi un pro. Nonostante la frustrazione per la pista rossa fatta tra le cadute, ho apprezzato tantissimo la tua pazienza, non solo con me. Grazie amore!',
        desc_fr: 'Notre première fois au ski ensemble : spoiler, je ne suis pas du tout douée en ski alors que toi tu es presque un pro. Malgré la colère sur la piste rouge faite de chutes, j’ai énormément apprécié ta patience, pas seulement avec moi. Merci mon amour !',
        img: 'assets/img/staffal.jpg'
      },
      {
        loc: 'Costiera Amalfitana',
        desc_it: 'La MotoGP sulla Vespa rossa nelle strade della Costiera Amalfitana è ormai indimenticabile. Sono felicissima di averti aiutato a realizzare questo piccolo sogno: nonostante la pioggia e i nostri malanni, è stata una piccola parentesi magica.',
        desc_fr: 'La “MotoGP” sur la Vespa rouge dans les routes de la Côte amalfitaine est désormais inoubliable. Je suis très heureuse d’avoir pu t’aider à réaliser ce petit rêve : malgré la pluie et nos petits soucis de santé, ça a été une parenthèse magique.',
        img: 'assets/img/vespa.jpg'
      },
      {
        loc: 'Pompei',
        desc_it: 'Io, te e la nostra guida virtuale Gemini sotto la pioggia, tra le strade degli scavi di Pompei. Riesci a rendere anche le cose più semplici completamente eccezionali.',
        desc_fr: 'Moi, toi et notre guide virtuelle Gemini sous la pluie, dans les rues des fouilles de Pompéi. Tu arrives à rendre même les choses les plus simples absolument exceptionnelles.',
        img: 'assets/img/pompei.jpg'
      },
      {
        loc: 'Sardegna',
        desc_it: 'Tra mille spiagge, acque cristalline, puro relax, il calore del sole e tante dolci coccole. Una fuga perfetta e momenti indimenticabili che porteremo sempre nel cuore!',
        desc_fr: 'Entre mille plages, eaux cristallines, pure détente, la chaleur du soleil et plein de câlins. Une escapade parfaite et des moments inoubliables que nous garderons toujours dans notre cœur !',
        img: 'assets/img/Sardegna.jpg'
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
        desc_it: 'Il nostro primo weekend all’estero insieme: è stato un fine settimana davvero rilassante, trascorso in sella alle nostre bici. Sei la guida in bici migliore che ci sia.',
        desc_fr: 'Notre premier week-end à l’étranger ensemble : un week-end vraiment relaxant, passé sur la selle de nos vélos. Tu es le meilleur guide à vélo qui soit.',
        img: 'assets/img/copenaghen.jpg'
      },
      {
        loc: 'Slovaer',
        desc_it: 'Il tuo regalo di compleanno per i miei 30 anni: mi hai regalato un sogno che si è realizzato, vedere l’aurora boreale. Un altro aneddoto da aggiungere alla nostra lista di momenti assurdi: aver pagato per vederla per poi scoprire che la si poteva ammirare ogni sera gratuitamente fuori casa.',
        desc_fr: 'Ton cadeau d’anniversaire pour mes 30 ans : tu m’as offert un rêve devenu réalité, voir les aurores boréales. Une autre anecdote à ajouter à notre liste de moments improbables : avoir payé pour les voir pour ensuite découvrir qu’on pouvait les admirer gratuitement chaque soir devant la maison.',
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
        desc_it: 'Trekking nel Salento: per me ha significato tantissimo condividere con te questo viaggio unico alla scoperta della Colombia. Paesaggi incredibili e un’avventura che porterò sempre con me.',
        desc_fr: 'Trekking dans le Salento : cela a énormément compté pour moi de partager avec toi ce voyage unique à la découverte de la Colombie. Des paysages incroyables et une aventure que je garderai toujours avec moi.',
        img: 'assets/img/salento.jpg'
      },
      {
        loc: 'Galapagos',
        desc_it: 'La mia prima immersione, e una delle tante per te: non avrei mai immaginato di vivere un’esperienza del genere prima di conoscerti. Un momento indimenticabile, in isole straordinarie come le Galápagos, tra una natura e degli animali semplicemente incredibili.',
        desc_fr: 'Ma première plongée, et une parmi tant d’autres pour toi : je n’aurais jamais imaginé vivre une expérience comme celle-ci avant de te rencontrer. Un moment inoubliable, dans des îles extraordinaires comme les Galápagos, au milieu d’une nature et d’animaux tout simplement incroyables.',
        img: 'assets/img/galapagos.jpg'
      },
      {
        loc: 'Islas del Rosario',
        desc_it: 'Dopo una parte di viaggio estremamente avventurosa e faticosa, una piccola parentesi di pace nel mare caraibico del nord della Colombia. Tra acque cristalline, scimmiette curiose e pappagalli dispettosi, ho ritrovato la pace tra le tue braccia.',
        desc_fr: 'Après une partie du voyage intense et éprouvante, une douce parenthèse de paix dans la mer des Caraïbes au nord de la Colombie. Entre eaux cristallines, petits singes curieux et perroquets malicieux, j’ai retrouvé la paix dans tes bras.',
        img: 'assets/img/casaagua.jpg'
      },
      {
        loc: 'Tayrona',
        desc_it: 'La fine del nostro viaggio, di nuovo all’insegna dell’avventura, tra giungla, animali, frutti di cacao e tanto, tantissimo sudore. Dormire in una capannina in mezzo alla foresta è stata un’esperienza unica: abbiamo macinato chilometri a piedi, accompagnati da tante scimmiette che giocavano tra gli alberi.',
        desc_fr: 'La fin de notre voyage, à nouveau sous le signe de l’aventure, entre jungle, animaux, fruits de cacao et beaucoup, beaucoup de sueur. Dormir dans une petite cabane au cœur de la forêt a été une expérience unique : nous avons parcouru des kilomètres à pied, entourés de petits singes qui jouaient dans les arbres.',
        img: 'assets/img/tayrona.jpg'
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
        loc: 'Instabul',
        desc_it: 'Tra gattini e tanto kebab, abbiamo passato giorni felici in questa città magica: Istanbul. Il nostro primo viaggio itinerante in coppia, e l’inizio di tante altre avventure insieme.',
        desc_fr: 'Entre petits chats et beaucoup de kebab, nous avons passé des jours heureux dans cette ville magique : Istanbul. Notre premier voyage itinérant en couple, et le début de tant d’autres aventures ensemble.',
        img: 'assets/img/instabul.jpg'
      },
      {
        loc: 'Cappadocia',
        desc_it: 'Uno dei ricordi più belli in assoluto: quando abbiamo ricevuto l’email della nostra amatissima signora Cavanna che ci ha scelti per la nostra casetta. Finalmente potevamo tornare a respirare e goderci davvero il nostro viaggio.',
        desc_fr: 'Un de mes plus beaux souvenirs : quand nous avons reçu l’email de notre chère Madame Cavanna qui nous a choisis pour notre petit chez-nous. On pouvait enfin respirer à nouveau et profiter pleinement de notre voyage.',
        img: 'assets/img/turchia.jpg'
      },
      {
        loc: 'Goreme',
        desc_it: 'La meraviglia di svegliarsi nel buio totale alle cinque del mattino e scoprire, appena fuori, mongolfiere gigantesche che volano sopra le nostre teste: impagabile. Non smetterò mai di ridere per le mie foto col broncio perché non erano come le volevo io… ma resta uno degli aneddoti più divertenti per me.',
        desc_fr: 'La magie de se réveiller dans le noir complet à cinq heures du matin et de découvrir, juste dehors, d’immenses montgolfières au-dessus de nos têtes : inestimable. Je ne cesserai jamais de rire de mes photos boudeuses parce qu’elles n’étaient pas comme je les voulais… mais ça reste l’une des anecdotes les plus drôles pour moi.',
        img: 'assets/img/mongolfiere.jpg'
      },
      {
        loc: 'Pamukkale',
        desc_it: 'Dopo 10 ore di viaggio in bus siamo arrivati in un luogo che sognavo di vedere da tanto tempo. Con te realizzare i sogni sembra qualcosa di estremamente semplice: un viaggio fatto di meraviglie, introspezione e momenti che ci hanno permesso di conoscerci ancora meglio.',
        desc_fr: 'Après 10 heures de bus, nous sommes arrivés dans un endroit que je rêvais de découvrir depuis longtemps. Avec toi, réaliser mes rêves semble tellement simple : un voyage rempli de merveilles, d’introspection et de moments qui nous ont permis de mieux nous connaître encore.',
        img: 'assets/img/pamukkale.jpg'
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
