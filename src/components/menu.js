/**
 * Creates html code representing the menu.
 * 
 * @param {{}} props Dynamic data used to render the menu.
 * @returns {string} html code representing the menu.
 */
 export function menu(props) {
  return `
    <ul>
      <li>
        <a href="/" data-internal="true">Home</a>
      </li>
      ${props.menu.map(item => `
        <li>
          <a href="/${item.url}" data-internal="true" data-title="${item.name}">${item.name}</a>
        </li>
      `).join('')}
    </ul>
  `;
}