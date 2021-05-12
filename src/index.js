'use strict';

import { DOM, ROUTER } from './framework';
import './components/AppComp';
import './components/MenuComp';
import './components/HomeComp';
import './components/ProductsComp';
import './components/TableComp';

window.addEventListener('load', () => {
  window.fetchAndParseJSON = async(url) => {
    try {
      let res = await fetch(url);
      if (!res.ok) throw new Error('Couldn\'t fetch data');
      let data = await res.json();
      return data;
    } catch(err) {
      return err.message;
    }
  }

  document.querySelector('#app').innerHTML = '<app-comp></app-comp>';
})