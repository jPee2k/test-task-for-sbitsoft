const app = () => {
  const buttons = document.querySelectorAll('button[data-toggle]');
  if (buttons.length === 0) {
    return;
  }

  const body = document.querySelector('body');

  const openMenu = (menu, menuName, button) => {
    menu.classList.add(`${menuName}--shown`);
    button.setAttribute('aria-expanded', 'true');
    button.setAttribute('aria-label', 'close menu');
  };

  const closeMenu = (menu, menuName, button) => {
    menu.classList.remove(`${menuName}--shown`);
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'open menu');
  };

  const closeAllMenus = () => {
    const openedMenuButtons = document.querySelectorAll('button[aria-expanded="true"]');
    openedMenuButtons.forEach((button) => {
      const menuName = button.dataset.toggle;
      const menu = document.querySelector(`.${menuName}`);
      closeMenu(menu, menuName, button);
    });
    body.classList.remove('nav__lock');
  };

  buttons.forEach((button) => {
    const menuName = button.dataset.toggle;
    const menu = document.querySelector(`.${menuName}`);

    button.addEventListener('click', (evt) => {
      if (evt.currentTarget.getAttribute('aria-expanded') === 'false') {
        closeAllMenus();
        openMenu(menu, menuName, evt.currentTarget);
      } else {
        closeMenu(menu, menuName, evt.currentTarget);
      }
    });

    if (menuName === 'nav') {
      button.addEventListener('click', () => {
        body.classList.toggle('nav__lock');
      });
    }
  });

  window.addEventListener('keyup', (evt) => {
    if (evt.code === 'Escape') {
      closeAllMenus();
    }
  });

  window.addEventListener('click', (evt) => {
    const openedMenuButton = document.querySelector('button[aria-expanded="true"]');
    if (!openedMenuButton) {
      return;
    }

    if (evt.target.classList.contains('nav__lock')) {
      closeAllMenus();
    }

    const className = openedMenuButton.dataset.toggle;
    if (className === 'nav') {
      return;
    }

    if (!evt.target.className.includes(className) || !evt.target.parentElement?.className.includes(className)) {
      evt.stopPropagation();
      closeAllMenus();
    }
  }, true);
};

export default app;
