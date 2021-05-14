import { table } from './table';

/**
 * Creates html code representing the products page.
 * 
 * @param {{}} props Dynamic data used to render the page.
 * @returns {string} html code representing the page.
 */
 export function pageProducts({products}) {
  return `
    <h1>Products</h1>
    ${table({list: products})}
  `
}