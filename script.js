// small interactions for menu + forms
document.getElementById('year').textContent = new Date().getFullYear();

// burger menu toggle
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
burger.addEventListener('click', () => {
  if (nav.style.display === 'block') {
    nav.style.display = '';
  } else {
    nav.style.display = 'block';
  }
});

// smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      // close nav on mobile
      if (window.innerWidth <= 980) nav.style.display = '';
    }
  });
});

// reservation form demo handler
const reservationForm = document.getElementById('reservationForm');
if (reservationForm) {
  reservationForm.addEventListener('submit', e => {
    e.preventDefault();
    // simple validation demo
    const name = reservationForm.name.value.trim();
    const email = reservationForm.email.value.trim();
    if (!name || !email) {
      alert('Please enter name and email.');
      return;
    }
    alert('Thanks ' + name + '! Your reservation request has been received. (Demo: connect a backend to send real confirmations.)');
    reservationForm.reset();
  });
}
