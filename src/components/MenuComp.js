export class MenuComp extends HTMLElement {
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

customElements.define('menu-comp', MenuComp);