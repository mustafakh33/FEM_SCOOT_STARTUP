const btnOpen = document.querySelector('#btnOpen');
const btnClose = document.querySelector('#btnClose');
const media = window.matchMedia('(width < calc(700 / 16 * 1rem))');
const topNavMenu = document.querySelector('.topnav__menu');
const topNavMenuContent = document.querySelector('.topnav__menu-content');
const topNav = document.querySelector('.topnav');
const main = document.querySelector('main');
const body = document.querySelector('body');

function openMobileMenu() {
  if (!btnOpen || !topNavMenu || !topNavMenuContent) return;
  btnOpen.setAttribute('aria-expanded', 'true');
  topNavMenu.removeAttribute('inert');
  topNavMenuContent.removeAttribute('style');
  if (main) main.setAttribute('inert', '');

  // Prevent background scroll
  document.body.style.overflow = 'hidden';

  if (btnClose) btnClose.focus();
}

function closeMobileMenu() {
  if (!btnOpen || !topNavMenu || !topNavMenuContent) return;
  btnOpen.setAttribute('aria-expanded', 'false');
  if (main) main.removeAttribute('inert');

  // Restore background scroll
  document.body.style.overflow = '';

  if (media.matches) {
    topNavMenu.setAttribute('inert', '');
  } else {
    topNavMenu.removeAttribute('inert');
  }

  btnOpen.focus();

  setTimeout(() => {
    topNavMenuContent.style.transition = 'none';
  }, 500);
}

function setupTopNav(e) {
  if (!topNavMenu || !topNavMenuContent) return;

  if (e.matches) {
    topNavMenu.setAttribute('inert', '');
    topNavMenuContent.style.transition = 'none';
  } else {
    closeMobileMenu();
    topNavMenu.removeAttribute('inert');
  }
}

setupTopNav(media);

// Open / Close button handlers
if (btnOpen) btnOpen.addEventListener('click', openMobileMenu);
if (btnClose) btnClose.addEventListener('click', closeMobileMenu);

// Close menu when clicking overlay (the ::before pseudo on .topnav)
if (topNav) {
  topNav.addEventListener('click', function (e) {
    // Only close if clicking the overlay area (the topnav element itself, not children)
    if (e.target === topNav && btnOpen && btnOpen.getAttribute('aria-expanded') === 'true') {
      closeMobileMenu();
    }
  });
}

// Close menu when clicking any nav link (on mobile)
const topNavLinks = document.querySelectorAll('.topnav__link');
topNavLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    if (media.matches && btnOpen && btnOpen.getAttribute('aria-expanded') === 'true') {
      closeMobileMenu();
    }
  });
});

media.addEventListener('change', function (e) {
  setupTopNav(e);
});