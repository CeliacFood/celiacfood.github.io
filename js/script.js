(() => {
  'use strict';

  const header = document.querySelector('.site-header');
  const toggle = header?.querySelector('.nav-toggle');
  const navigation = document.getElementById('primary-nav');

  if (!header || !toggle || !navigation) return;

  const desktop = window.matchMedia('(min-width: 761px)');
  const isOpen = () => toggle.getAttribute('aria-expanded') === 'true';

  function closeNavigation(returnFocus = false) {
    toggle.setAttribute('aria-expanded', 'false');
    if (returnFocus) toggle.focus();
  }

  toggle.hidden = false;
  header.setAttribute('data-nav-enhanced', '');

  toggle.addEventListener('click', () => {
    if (desktop.matches) return;
    toggle.setAttribute('aria-expanded', String(!isOpen()));
  });

  navigation.addEventListener('click', (event) => {
    if (event.target instanceof Element && event.target.closest('a[href]')) {
      closeNavigation();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isOpen() && !desktop.matches) {
      closeNavigation(true);
    }
  });

  document.addEventListener('click', (event) => {
    if (isOpen() && event.target instanceof Node && !header.contains(event.target)) {
      closeNavigation();
    }
  });

  header.addEventListener('focusout', (event) => {
    if (isOpen() && !header.contains(event.relatedTarget)) {
      closeNavigation();
    }
  });

  desktop.addEventListener('change', (event) => {
    if (event.matches) {
      closeNavigation();
    } else if (navigation.contains(document.activeElement)) {
      toggle.setAttribute('aria-expanded', 'true');
    }
  });
})();
