import { hero } from './hero';

/**
 * Creates html code representing a blank page.
 * 
 * @param {{}} props Dynamic data used to render the page.
 * @returns {string} html code representing the page.
 */
 export function pageBlank() {
  return `
    ${hero({title: document.title})}

    <div class="container">
      <h2>${document.title}</h2>
    </div>
  `
}