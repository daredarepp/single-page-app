import { hero } from './hero';

/**
 * Creates html code representing the home page.
 * 
 * @param {{}} props Dynamic data used to render the page.
 * @returns {string} html code representing the page.
 */
 export function pageHome() {
  return `
    ${hero({title: 'Home'})}
    
    <div class="container">
      <h2>Home</h2>
    </div>
  `
}