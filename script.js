const btnOpen = document.querySelector('#btnOpen');
const btnClose = document.querySelector('#btnClose');
const media = window.matchMedia('(width < calc(700 / 16 * 1rem))');
const topNavMenu = document.querySelector('.topnav__menu');
const topNavMenuContent = document.querySelector('.topnav__menu-content');
const main = document.querySelector('main');
const body = document.querySelector('body');

function openMobileMenu() {
  btnOpen.setAttribute('aria-expanded', 'true');
  topNavMenu.removeAttribute('inert');
  topNavMenuContent.removeAttribute('style');
  main.setAttribute('inert', '');
  bodyScrollLockUpgrade.disableBodyScroll(body);
  btnClose.focus();
}

function closeMobileMenu() {
  console.log('close mobile menu');
  btnOpen.setAttribute('aria-expanded', 'false');
  topNavMenu.setAttribute('inert', '');
  main.removeAttribute('inert');
  bodyScrollLockUpgrade.enableBodyScroll(body);
  btnOpen.focus();

  setTimeout(() => {
    topNavMenuContent.style.transition = 'none';
  }, 500);
}

function setupTopNav(e) {
  if (e.matches) {
    // is mobile
    console.log('is mobile');
    topNavMenu.setAttribute('inert', '');
    topNavMenuContent.style.transition = 'none';
  } else {
    // is tablet/desktop
    console.log('is desktop');
    closeMobileMenu();
    topNavMenu.removeAttribute('inert');
  }
}

setupTopNav(media);

btnOpen.addEventListener('click', openMobileMenu);
btnClose.addEventListener('click', closeMobileMenu);

media.addEventListener('change', function (e) {
  setupTopNav(e);
});