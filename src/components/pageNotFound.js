/**
 * Creates html code representing the page not found.
 * 
 * @param {{}} props Dynamic data used to render the page.
 * @returns {string} html code represeting the page.
 */
 export function pageNotFound() {
  return `
    <h1>Nothing here 😢</h1>
    <p>Sorry guys, I have nothing to show you for <strong>${window.location.pathname}</strong>.</p>
    <span>Go <a href="/" data-internal="true">home</a> instead</span>
  `;
}