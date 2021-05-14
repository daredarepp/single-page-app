import { productsTable } from './productsTable';

/**
 * Creates html code representing the products page.
 * 
 * @param {{}} props Dynamic data used to render the page.
 * @returns {string} html code representing the page.
 */
 export function pageProducts(props) {
  return `
    <h1>Products</h1>
    ${productsTable({products: props.products})}
  `
}