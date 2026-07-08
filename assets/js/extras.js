const heartCursor = document.getElementById('heart-cursor');

document.addEventListener('mousemove', e => {
  heartCursor.style.left = e.clientX + 'px';
  heartCursor.style.top  = e.clientY + 'px';
});

document.addEventListener('click', () => {
  heartCursor.style.transform = 'translate(-50%, -50%) scale(1.6)';
  setTimeout(() => {
    heartCursor.style.transform = 'translate(-50%, -50%) scale(1)';
  }, 150);
});


const START_DATE = new Date('2024-07-11');

const countdownStrings = {
  label:  { it: 'Insieme da',  fr: 'Ensemble depuis' },
  years:  { it: 'anni',        fr: 'ans'   },
  months: { it: 'mesi',        fr: 'mois'  },
  days:   { it: 'giorni',      fr: 'jours' },
};

function updateCountdown() {
  const now   = new Date();
  let years   = now.getFullYear()  - START_DATE.getFullYear();
  let months  = now.getMonth()     - START_DATE.getMonth();
  let days    = now.getDate()      - START_DATE.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) { years--; months += 12; }

  document.getElementById('cdYears').textContent  = years;
  document.getElementById('cdMonths').textContent = months;
  document.getElementById('cdDays').textContent   = days;
}

function updateCountdownLang() {
  const l = typeof lang !== 'undefined' ? lang : 'it';
  document.getElementById('countdownLabel').textContent  = countdownStrings.label[l];
  document.getElementById('cdYearsLabel').textContent    = countdownStrings.years[l];
  document.getElementById('cdMonthsLabel').textContent   = countdownStrings.months[l];
  document.getElementById('cdDaysLabel').textContent     = countdownStrings.days[l];
}

document.addEventListener('DOMContentLoaded', () => {
  updateCountdown();
  updateCountdownLang();
  setInterval(updateCountdown, 60000);
});


function toggleSpotify(open) {
  const wrap = document.getElementById('spotifyWrap');
  if (wrap) wrap.classList.toggle('visible', open);
}
