
const getPhotographerThumbnailTemplate = (photographer) => {
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

const getPhotographerPageTemplate = (photographer) => {
  const { id, name, city, tagline, picture } = photographer

  return `
  <div class="photograph_header">
    <h1 class="photograph-name"></h1>
    <div class="photograph-infos">
      <h3 class="photograph-city"></h3>
      <span class="photograph-tagline"></span>
    </div>
    <button class="button" onclick="displayModal()">Contactez-moi</button>
  </div>
  `
  const header = document.createElement('div');
  header.classList.add('photograph_header');
  const photographerPres = document.createElement('div');
  const photographerName = document.createElement('h1');
  photographerName.innerText = data.name;
  const photographerCity = document.createElement('h3');
  photographerCity.textContent = data.city;
  const photographerTagline = document.createElement('span');
  photographerTagline.textContent = data.tagline;
  photographerPres.append(photographerName, photographerCity, photographerTagline);
  const contactButton = document.createElement('button');
  contactButton.classList.add('button');
  contactButton.textContent = 'Contactez-moi';
  /*     contactButton.onclick = displayModal() */
  const photographerPhoto = document.createElement('img');
  photographerPhoto.setAttribute('src', picture);
  header.append(photographerPres, contactButton, photographerPhoto);
  return header;
}