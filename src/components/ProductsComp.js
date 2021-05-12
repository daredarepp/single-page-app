export class ProductsComp extends HTMLElement {
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

customElements.define('products-comp', ProductsComp);