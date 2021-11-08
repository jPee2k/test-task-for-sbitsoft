const app = () => {
  const customSelect = document.querySelector('.language');

  if (!customSelect) {
    return;
  }

  const showList = () => {
    customSelect.classList.toggle('language--active');
  };

  const hideList = () => {
    customSelect.classList.remove('language--active');
  };

  const currentItem = customSelect.querySelector('.language__current');
  currentItem.addEventListener('click', showList);
  currentItem.addEventListener('keyup', (evt) => {
    evt.preventDefault();
    if (evt.code === 'Space' || evt.code === 'Enter') {
      showList();
    }
  });

  const listItems = customSelect.querySelectorAll('.language__radio');
  listItems.forEach((item) => {
    item.addEventListener('click', (evt) => {
      showList();
      currentItem.textContent = evt.target.nextElementSibling.textContent;

      // or submit form
      // const languageForm = document.querySelector('.language__form');
      // languageForm.submit();
    });
  });

  window.addEventListener('keyup', (evt) => {
    if (evt.code === 'Escape') {
      hideList();
    }
  });
};

export default app;
