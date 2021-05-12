'use strict';

window.addEventListener('load', () => {
  class AppComp extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.page = '/';
    }

    async connectedCallback() {
      this.render();

      // Event Listeners
      this.shadowRoot.addEventListener('NAVIGATE', e => {
        this.page = e.detail.url;
        this.render();
      })

      // Fetch data
      this.data = await fetchAndParseJSON('/data.json');
      console.log('data fetched', this.data);
      this.render();
    }

    _renderMenu() {

    }

    render() {
      if (this.data) {
        this.shadowRoot.innerHTML = `
          <h1>App Component</h1>
  
          <menu-comp></menu-comp>

          ${this.page === '/' ? '<home-comp></home-comp>' : '<products-comp></products-comp>'}
        `;
        
        /* let template = createNodes(`
          <h1>App Component</h1>
          <div class="menu-comp"></div>
          <home-comp></home-comp>
        `)

        function createComponent() 

        this.shadowRoot.append(
          createComponent('menu-comp', props, [children]),
          document.createElement
        )
        let menu = document.createElement('menu-comp');
        menu.props = `` */



        this.shadowRoot.querySelector('menu-comp').props = {menu: this.data.menu}
        
      } else {
        this.shadowRoot.innerHTML = `Loading DATA`
      }

      console.log('<app-comp> renders');
    }
  }
  
  class MenuComp extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
      this.render();

      // Event listeners
      this.shadowRoot.addEventListener('click', e => {
        if (e.target.tagName === 'A') {
          e.preventDefault();
          this.dispatchEvent(new CustomEvent('NAVIGATE', {
            bubbles: true,
            detail: {
              url: e.target.getAttribute('href')
            }
          }));
        }
      })
    }

    get props() {
      return this._props || {};
    }

    set props(val) {
      this._props = val;
      console.log('new props value: ', val);
      this.render();
    }

    _renderItems(menu) {
      return menu.map(item => `
        <li>
          <a href="${item.url}">${item.name}</a>
        </li>
      `).join('');
    }

    render() {
      let {menu} = this.props;
      if (menu) {
        this.shadowRoot.innerHTML = `
        <h2>Menu Component</h2>
        <ul>
          ${this._renderItems(menu)}
        </ul>
      `  
      } else {
        this.shadowRoot.innerHTML = `
          <h2>Menu Component</h2>
        `
      }

      console.log('<menu-comp> renders');
    }
  }

  class HomeComp extends HTMLElement {
    constructor() {
      super();
      this.text = 'text';
    }

    connectedCallback() {
      this.render();
    }

    render() {
      this.innerHTML = `
        <h2>Home Component</h2>
      `;
      console.log('<home-comp> renders');
    }
  }

  class ProductsComp extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
      const { shadowRoot } = this;
      // Template.
      shadowRoot.innerHTML = `
        <h2>Products Component</h2>
      `;
    }
  }

  class TableComp extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
      const { shadowRoot } = this;
      // Template.
      shadowRoot.innerHTML = `
        <table>
          <tr>
            ${columns.map(column => `
              <th>${column}</th>
            `).join('')}
          </tr>

          ${props.products.map(product =>  `
            <tr>
              ${columns.map(column => `
                <td>${product[column]}</td>
              `).join('')}
            </tr>
          `).join('')}
        </table>
      `;
    }
  }

  class LinkComp extends HTMLElement {
    connectedCallback() {
      let path = this.getAttribute('to');
      let shadow = this.attachShadow({mode: 'open'});

      // Template.
      shadow.innerHTML = `
        <a href="${path}"><slot></slot></a>
      `

      // Event listeners.
      /* this.addEventListener('click', e => {
        e.preventDefault();
        history.pushState({}, '', path);
      }) */
    }
  }

  customElements.define('home-comp', HomeComp);
  customElements.define('products-comp', ProductsComp);
  customElements.define('app-comp', AppComp);
  customElements.define('link-comp', LinkComp);
  customElements.define('menu-comp', MenuComp);
  customElements.define('table-comp', TableComp);

  window.fetchAndParseJSON = async (url) => {
    try {
      let res = await fetch(url);
      if (!res.ok) throw new Error('Couldn\'t fetch data');
      let data = await res.json();
      return data;
    } catch(err) {
      return err.message;
    }
  }

  let routerObj = router.createRouter([]);
  framework.mountApp(document.querySelector('#app'), AppComp, router);
})