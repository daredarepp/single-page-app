/**
 * Creates html code representing the products table.
 * 
 * @param {{}} props Dynamic data used to render the products table.
 * @returns {string} html code represeting the products table.
 */
 export function productsTable(props) {
  let columns = Object.keys(props.products[0]);

  return `
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