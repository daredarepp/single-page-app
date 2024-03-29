import { menu } from './menu';

/**
 * Creates html code representing the app.
 * 
 * @param {{}} props Dynamic data used to render the app.
 * @returns {string} html code representing the app.
 */
 export function app({menuList, hasRouting}) {
  return `
    ${menu({menuList})}

    <main>
      ${hasRouting ? `<div class="js-router"></div>` : ``}
    </main>
  `
}