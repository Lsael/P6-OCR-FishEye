const usePhotographerThumbnailTemplate = (photographer) => {
  const { name, portrait, id } = photographer;

  return `
  <a href = '/photographer.html?id=${id}'>
    <article>
      <img src='assets/photographers/${portrait}' alt='${name}-picture' />
      <h2>${name}<h2>
    </article>
  </a>
  `;
};

const usePhotographerPageTemplate = (photographer) => {
  const { name, city, tagline, portrait } = photographer;

  return `
  <section class="photographer-header">
    <div class="photographer-infos">
      <h1 class="photographer-name">${name}</h1>
      <h3 class="photographer-city">${city}</h3>
      <span class="photographer-tagline">${tagline}</span>
    </div>
    <button class="button" onclick="displayModal()">Contactez-moi</button>
    <img src='assets/photographers/${portrait}' alt='${name}-picture' />
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
      .map((media) => {
        return `
        <article>
          ${media.image ? 
            `<img src='assets/media/${media.image}' alt='${media.title}' />` :
            `
            <video preload="metadata" alt='${media.title}' controls >
              <source src='assets/media/${media.video}#t=0.1' type="video/mp4">
            </video>
            `
          }
          <div>
            <h3>${media.title}</h3>
            <p aria-label="likes" class="${media.id}" onClick={UpdateLikes(1,${media.id})}><span>${media.likes}</span> &hearts;</p>
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
    <p><span id="total-likes-count"></span> &hearts;</p>
    <span>${photographerPrice}€ / jour</span>
  </aside>
  `
}
