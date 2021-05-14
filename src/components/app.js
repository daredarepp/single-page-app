import { menu } from './menu';

/**
 * Creates html code representing the app.
 * 
 * @param {{}} props Dynamic data used to render the app.
 * @returns {string} html code representing the app.
 */
 export function app(props) {
  return `
    ${menu({menu: props.menu})}
    ${props.hasRouting ? `<div class="js-router"></div>` : ``}
  `
}