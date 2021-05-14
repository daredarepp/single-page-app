'use strict';

import { Router } from './router';
import { app } from './components/app';
import { pageHome } from './components/pageHome';
import { pageProducts } from './components/pageProducts';
import { pageBlank } from './components/pageBlank';
import { pageNotFound } from './components/pageNotFound';

window.addEventListener('load', async () => {
  /**
   * Fetches and parses JSON data.
   * 
   * @param {string} url Data url.
   * @returns {Promise} Parsed ui data.
   */
   async function fetchAndParseJSON(url) {
    try {
      let res = await fetch(url);
      if (!res.ok) throw new Error('Couldn\'t fetch data');
      let data = await res.json();
      return data;
    } catch(err) {
      return err.message;
    }
  }
  
  let appContainerEl = document.querySelector('#app');
  let dataUrl = '/static/json/data.json';
  let data = await fetchAndParseJSON(dataUrl);

  // Error fetching data
  if (typeof data === 'string') {
    appContainerEl.append(data);
    return;
  }

  let router = new Router({
    '/': {component: pageHome, props: data},
    '/index.html': {component: pageHome, props: data},
    '/aboutus': {component: pageBlank, title: 'About Us'},
    '/company': {component: pageBlank, title: 'Company Structure'},
    '/careeer': {component: pageBlank, title: 'Career'},
    '/products': {component: pageProducts, title: 'Products', props: data},
    '/services': {component: pageBlank, title: 'Services'},
    '/contact': {component: pageBlank, title: 'Contact'},
    '404': {component: pageNotFound, title: 'Page Not Found', props: data},
  }, 'Single Page Application');
  

  appContainerEl.innerHTML = app({...data, hasRouting: true});
  router.navigateTo(window.location.pathname, true);
})