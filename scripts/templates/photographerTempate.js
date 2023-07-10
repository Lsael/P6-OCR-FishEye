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
