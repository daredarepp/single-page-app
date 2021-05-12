export class HomeComp extends HTMLElement {
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

customElements.define('home-comp', HomeComp);