import '../scss/index.scss';
import 'regenerator-runtime/runtime.js';

import runCustomSelectApp from './custom-select.js';
import runAutocompleteApp from './search-form.js';
import runMenuApp from './menu.js';
import runSliderApp from './slider.js';

document.addEventListener('DOMContentLoaded', () => {
  runCustomSelectApp();
  runAutocompleteApp();
  runMenuApp();
  runSliderApp();
});
