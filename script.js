const btnOpen = document.querySelector('#btnOpen');
const btnClose = document.querySelector('#btnClose');
const media = window.matchMedia('(width < calc(700 / 16 * 1rem))');
const topNavMenu = document.querySelector('.topnav__menu');
const topNavMenuContent = document.querySelector('.topnav__menu-content');
const main = document.querySelector('main');
const body = document.querySelector('body');

function safeEnableBodyScroll() {
  try {
    if (typeof bodyScrollLockUpgrade !== 'undefined' && bodyScrollLockUpgrade.enableBodyScroll) {
      bodyScrollLockUpgrade.enableBodyScroll(body);
    }
  } catch (e) {
    /* ignore */
  }
}

function safeDisableBodyScroll() {
  try {
    if (typeof bodyScrollLockUpgrade !== 'undefined' && bodyScrollLockUpgrade.disableBodyScroll) {
      bodyScrollLockUpgrade.disableBodyScroll(body);
    }
  } catch (e) {
    /* ignore */
  }
}

function openMobileMenu() {
  if (!btnOpen || !topNavMenu || !topNavMenuContent) return;
  btnOpen.setAttribute('aria-expanded', 'true');
  topNavMenu.removeAttribute('inert');
  topNavMenuContent.removeAttribute('style');
  if (main) main.setAttribute('inert', '');
  safeDisableBodyScroll();
  if (btnClose) btnClose.focus();
}

function closeMobileMenu() {
  if (!btnOpen || !topNavMenu || !topNavMenuContent) return;
  btnOpen.setAttribute('aria-expanded', 'false');
  if (main) main.removeAttribute('inert');
  safeEnableBodyScroll();

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

if (btnOpen) btnOpen.addEventListener('click', openMobileMenu);
if (btnClose) btnClose.addEventListener('click', closeMobileMenu);

media.addEventListener('change', function (e) {
  setupTopNav(e);
});