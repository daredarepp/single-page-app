'use strict';

import { Router } from './router';

import { app } from './components/app';
import { pageHome } from './components/pageHome';
import { pageProducts } from './components/pageProducts';
import { pageBlank } from './components/pageBlank';
import { pageNotFound } from './components/pageNotFound';
import { table } from './components/table';

import { fetchAndParseJSON } from './utils';
import { sortTable } from './utils';

window.addEventListener('load', async () => {
  /**
   * All UI events that are not connected to the router are specified here.
   */
   function addAppListeners() {
    document.addEventListener('click', e => {
      // Sort table.
      if (e.target.tagName === 'TH') {
        let order = e.target.dataset.order || null;
        let column = e.target.dataset.column;
        let newOrder = null;
        if (!order) newOrder = 'asc';
        else if (order === 'asc') newOrder = 'desc';
        else if (order === 'desc') newOrder = '';
        let sortedProducts = newOrder ? sortTable(data.products, column, newOrder) : data.products;

        // Replace old with new table.
        let oldTable = e.target.closest('.js-table-wrapper');
        let temp = document.createElement('div');
        temp.innerHTML = table({list: sortedProducts, sortColumn: column, sortOrder: newOrder});
        let newTable = temp.firstElementChild;
        oldTable.parentElement.replaceChild(newTable, oldTable);
      }
    })
  }
  
  let appContainerEl = document.querySelector('#app');
  let dataUrl = '/static/json/data.json';
  let data = await fetchAndParseJSON(dataUrl);

  // Error fetching data
  if (typeof data === 'string') {
    appContainerEl.append('Error while fetching app data. Reload to try again.');
    return;
  }

  let router = new Router({
    '/': {component: pageHome},
    '/index.html': {component: pageHome},
    '/aboutus': {component: pageBlank, title: 'About Us'},
    '/company': {component: pageBlank, title: 'Company Structure'},
    '/careeer': {component: pageBlank, title: 'Career'},
    '/products': {component: pageProducts, title: 'Products', props: {products: data.products}},
    '/services': {component: pageBlank, title: 'Services'},
    '/contact': {component: pageBlank, title: 'Contact'},
    '404': {component: pageNotFound, title: 'Page Not Found'},
  }, 'Single Page Application');
  

  appContainerEl.innerHTML = app({menuList: data.menu, hasRouting: true});
  router.navigateTo(window.location.pathname, true);
  addAppListeners();
})