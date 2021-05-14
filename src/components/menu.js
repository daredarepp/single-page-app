/**
 * Creates html code representing the menu.
 * 
 * @param {{}} props Dynamic data used to render the menu.
 * @returns {string} html code representing the menu.
 */
 export function menu({menuList}) {
  return `
    <header>
      <div class="container">
        <nav>
          <a href="/" data-internal="true" class="logo">👊 SPA</a>

          <div class="menu">
            ${menuList.map(item => `
                <a href="/${item.url}" data-internal="true" data-title="${item.name}" class="menu__link">${item.name}</a>
            `).join('')}
          </div>
        </nav>
      </container>
    </header>
  `;
}