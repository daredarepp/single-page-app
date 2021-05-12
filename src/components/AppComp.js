export class AppComp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.page = window.location.pathname;
  }

  async connectedCallback() {
    this.render();

    // Event Listeners
    this.shadowRoot.addEventListener('NAVIGATE', e => {
      this.page = e.detail.url;
      this.render();
    })

    // Fetch data
    this.data = await fetchAndParseJSON('/static/json/data.json');
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

customElements.define('app-comp', AppComp);