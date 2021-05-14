/**
 * Creates html code representing a hero.
 * 
 * @param {{}} props Dynamic data used to render the hero.
 * @returns {string} html code representing the hero.
 */
 export function hero({title}) {
  return `
    <div class="hero">
      <img src="https://source.unsplash.com/HkAy-PdSqeA/1900x470" alt="Abstract img" class="hero__img" width="1900" height="470">
        <div class="hero__content">
          <div class="container">
            <h1>${title}</h1>
          </div>
        </div>
    </div>
  `
}