/**
 * Fetches and parses JSON data.
 * 
 * @param {string} url Data url.
 * @returns {Promise} Parsed ui data.
 */
 export async function fetchAndParseJSON(url) {
  try {
    let res = await fetch(url);
    if (!res.ok) throw new Error('Couldn\'t fetch data');
    let data = await res.json();
    return data;
  } catch(err) {
    return err.message;
  }
}

/**
 * Creates new sorted table by the column & order specified.
 * 
 * @param {[]} list The original unsorted table. 
 * @param {string} column Column by which the table is sorted.
 * @param {string} order Order by which the table is sorted.
 * @returns {[]} New sorted table.
 */
 export function sortTable(list, column, order) {
  list = JSON.parse(JSON.stringify(list));
  list.sort((a, b) => {
    if (order === 'asc') {
      if (a[column] < b[column]) return -1;
      if (a[column] > b[column]) return 1;
      return 0;
    }
    if (order === 'desc') {
      if (a[column] > b[column]) return -1;
      if (a[column] < b[column]) return 1;
      return 0;
    }
  });
  return list;
}
