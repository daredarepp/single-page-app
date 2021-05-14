import { table } from './table';
import { hero } from './hero';

/**
 * Creates html code representing the products page.
 * 
 * @param {{}} props Dynamic data used to render the page.
 * @returns {string} html code representing the page.
 */
 export function pageProducts({products}) {
  return `
    ${hero({title: 'Products'})}

    <div class="container">
      ${table({list: products})}
    </div>
  `
}