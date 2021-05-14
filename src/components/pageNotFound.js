import { hero } from './hero';

/**
 * Creates html code representing the page not found.
 * 
 * @param {{}} props Dynamic data used to render the page.
 * @returns {string} html code represeting the page.
 */
 export function pageNotFound() {
  return `
    ${hero({title: document.title})}

    <div class="container">
      <h2>Nothing here 😢</h2>
      <p>Sorry guys, but it seems like the page at <strong>${window.location.pathname}</strong> doesn't exist anymore.</p>
      <span>
        You can always check some 
        <a href="/products" data-internal="true">products</a>
        though...
      </span>
    </div>
  `;
}