/**
 * Creates html code representing a blank page.
 * 
 * @param {{}} props Dynamic data used to render the page.
 * @returns {string} html code representing the page.
 */
 export function pageBlank() {
  return `
    <h1>${document.title}</h1>
  `
}