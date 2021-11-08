const app = () => {
  // mock items
  const items = ['Robert Davidson', 'Robert Smith', 'Robert Doe', 'Roberta Hadson', 'Robertinia Devidson'];

  const autocompleteElements = document.querySelectorAll('input[data-autocomplete]');
  autocompleteElements.forEach((el) => {
    const route = el.dataset.autocomplete;
    const dataAutocompleteName = el.dataset.autocompleteName;
    el.addEventListener('input', async (e) => {
      const list = document.querySelector(`ul[data-autocomplete-name="${dataAutocompleteName}"]`);
      const url = new URL(route, window.location.origin);
      const { value } = e.target;
      url.searchParams.append('term', value);

      // ajax, catch err, etc...
      // const response = await fetch(url);
      // const items = await response.json();

      const options = items.length === 0 ? ['Nothing'] : items;
      const listHTML = options
        .filter((item) => { // tmp
          if (value) {
            return item.includes(value);
          }
          return false;
        })
        .map((item) => {
          const newItem = item.replace(value, `<span class="search-form__match">${value}</span>`);
          return `<li class="search-form__item" tabindex="0">${newItem}</li>`;
        })
        .join('\n');
      list.innerHTML = listHTML;
    });
  });
};

export default app;
