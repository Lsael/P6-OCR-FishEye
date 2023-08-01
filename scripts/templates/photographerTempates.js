const usePhotographerThumbnailTemplate = (photographer) => {
  const { name, portrait, id, city, country, price, tagline } = photographer;

  return `
  <article class='photographer-thumbnail'>
    <a href='/photographer.html?id=${id}'>
      <img src='assets/photographers/${portrait}' alt='${name}'/>
      <h2>${name}</h2>
    </a>
    <span>${city}, ${country}</span>
    <span>${tagline}</span>
    <span>${price}€/jour</span>
  </article>
  `;
};

const usePhotographerPageTemplate = (photographer) => {
  const { name, city, country, tagline, portrait } = photographer;

  return `
  <section class="photographer-header">
    <div class="photographer-infos">
      <h1 class="photographer-name">${name}</h1>
      <h3 class="photographer-city">${city}, ${country}</h3>
      <span class="photographer-tagline">${tagline}</span>
    </div>
    <button type="button" class="button" onclick="displayContactModal()">Contactez-moi</button>
    <img src='assets/photographers/${portrait}' alt='${name}'/>
  </section>
  <section class="sort-bar">
    <label for="sort-options">Trier par</label>
    <select id="sort-options" onChange="displayPhotographersGallery()">
      <option value="Popularity">Popularité</option>
      <option value="Date">Date</option>
      <option value="Title">Titre</option>
    </select>
  </section>
  `;
};

const usePhotographerGalleryTemplate = (gallery) => {
  return `
  <section class="photographer-gallery">
    ${gallery
      .map((media, index) => {
        const { title, image, video, id, likes } = media;
        return `
        <article aria-label="${title}, close up view">
          ${
            image
              ? `<img src='assets/media/${image}' alt='${title}' onkeyup="onKeyUp(event);" onClick="displayLightBoxModal(${index})" tabindex="0"/>`
              : `
            <video preload="metadata" alt='${title}' onkeyup="onKeyUp(event);" onClick="displayLightBoxModal(${index})" tabindex="0">
              <source src='assets/media/${video}#t=0.1' type="video/mp4">
            </video>
            `
          }
          <div>
            <h3>${title}</h3>
            <p aria-label="likes" role="button" class="${id}" onkeyup="onKeyUp(event);" onClick={updateLikes(1,${id})} tabindex="0"><span>${likes}</span> &hearts;</p>
          </div>
        </article>
        `;
      })
      .join('')}
  </section>
  `;
};

const usePhotographerPriceBoxTemplate = (photographerPrice) => {
  return `
  <aside class="photographer-price">
    <p aria-label="total likes"><span id="total-likes-count"></span> &hearts;</p>
    <span aria-label="price per day">${photographerPrice}€ / jour</span>
  </aside>
  `;
};
