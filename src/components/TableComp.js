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

customElements.define('table-comp', TableComp);