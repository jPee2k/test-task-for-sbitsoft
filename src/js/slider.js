const renderMainBlock = () => {
  // render all data
  // -> const id = activeItem.dataset.slideId;
};

const insertData = (slider, item = null) => {
  let activeItem;

  if (!item) {
    activeItem = slider.querySelector('.slider__item--active');
  } else {
    activeItem = item;
  }

  const imageSrc = activeItem.querySelector('.slider__img')
    .getAttribute('src');
  const bgSrc = imageSrc.replace('img_', 'img_bg_');
  slider.style.backgroundImage = `url("${bgSrc}")`;

  renderMainBlock();
};

const buttonsApp = (slider) => {
  const prevBtn = slider.querySelector('.slider__button--prev');
  const nextBtn = slider.querySelector('.slider__button--next');

  const itemsList = [...slider.querySelectorAll('.slider__item')];

  const buttonHandler = (evt) => {
    if (!itemsList) {
      return;
    }

    const activeItem = slider.querySelector('.slider__item--active');
    let nextItem = activeItem.nextElementSibling;
    let prevItem = activeItem.previousElementSibling;

    if (evt.target === prevBtn) {
      if (!prevItem) {
        prevItem = itemsList[itemsList.length - 1];
      }
      prevItem.classList.add('slider__item--active');
      prevItem.focus();
      insertData(slider, prevItem);
    } else if (evt.target === nextBtn) {
      if (!nextItem) {
        [nextItem] = itemsList;
      }
      nextItem.classList.add('slider__item--active');
      nextItem.focus();
      insertData(slider, nextItem);
    }
    activeItem.classList.remove('slider__item--active');
  };

  nextBtn.addEventListener('click', buttonHandler);
  prevBtn.addEventListener('click', buttonHandler);
};

const itemClickApp = (slider) => {
  const itemsList = [...slider.querySelectorAll('.slider__item')];

  itemsList.forEach((item) => {
    item.addEventListener('click', (evt) => {
      const activeItem = slider.querySelector('.slider__item--active');
      activeItem.classList.remove('slider__item--active');
      evt.currentTarget.classList.add('slider__item--active');
      insertData(slider, evt.currentTarget);
    });
  });
};

const app = () => {
  const slider = document.querySelector('.slider');

  if (!slider) {
    return;
  }

  itemClickApp(slider);
  buttonsApp(slider);
  insertData(slider);
};

export default app;
