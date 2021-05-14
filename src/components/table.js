/**
 * Creates html code representing the products table.
 * 
 * @param {{}} props Dynamic data used to render the products table.
 * @returns {string} html code represeting the products table.
 */
 export function table({list, sortColumn, sortOrder}) {
  let columns = Object.keys(list[0]);

  return `
    <div class="js-table-wrapper table-wrapper">
      <table>
        <tr>
          ${columns.map(column => `
            <th
              data-order="${column === sortColumn ? sortOrder : ''}"
              data-column="${column}"
            >
              ${column}
            </th>
          `).join('')}
        </tr>

        ${list.map(item =>  `
          <tr>
            ${columns.map(column => `
              <td>${item[column]}</td>
            `).join('')}
          </tr>
        `).join('')}
      </table>
    </div>
  `;
}