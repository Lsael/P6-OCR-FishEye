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
  <div class="photographer-header">
    <div class="photographer-infos">
      <h1 class="photographer-name">${name}</h1>
      <h3 class="photographer-city">${city}</h3>
      <span class="photographer-tagline">${tagline}</span>
    </div>
    <button class="button" onclick="displayModal()">Contactez-moi</button>
    <img src='assets/photographers/${portrait}' alt='${name}-picture' />
  </div>
  `;
};

const usePhotographerGalleryTemplate = (gallery) => {
  console.log(gallery);

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
            <h3>${media.title}<h3>
            <span aria-label="likes">${media.likes} &hearts;</span>
          </div>
        </article>
        `;
      })
      .join('')}
  </section>
  `;
};

const usePhotographerPriceBoxTemplate = (photographerPrice, gallery) => {
  let totalLikes = 0;
  gallery.map((element) => {
    totalLikes += element.likes
  })

  return `
  <aside class="photographer-price">
    <span>${totalLikes} &hearts;</span>
    <span>${photographerPrice}€ / jour</span>
  </aside>
  `
}
