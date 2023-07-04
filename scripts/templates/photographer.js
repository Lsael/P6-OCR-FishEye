function photographerTemplate(data) {
  /*   console.log(data);
  const { name, portrait, id } = data; */

  const picture = `assets/photographers/${data.portrait}`;

  // Pourquoi imbriquer les fonctions ici ?

  function getPhotographerThumbnail() {
    const thumbnail = document.createElement("a");
    thumbnail.href = `/photographer.html?id=${data.id}`;
    thumbnail.ariaLabel = data.name;
    const article = document.createElement("article");
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.alt = `photo de ${data.name}`;
    const h2 = document.createElement("h2");
    h2.textContent = data.name;
    article.appendChild(img);
    article.appendChild(h2);
    thumbnail.appendChild(article);
    return thumbnail;
  }

  function getPhotographerDetails() {
    const header = document.createElement("div");
    header.classList.add("photograph_header");
    const photographerPres = document.createElement("div");
    const photographerName = document.createElement("h1");
    photographerName.innerText = data.name;
    const photographerCity = document.createElement("h3");
    photographerCity.textContent = data.city;
    const photographerTagline = document.createElement("span");
    photographerTagline.textContent = data.tagline;
    photographerPres.append(
      photographerName,
      photographerCity,
      photographerTagline
    );
    const contactButton = document.createElement("button");
    contactButton.classList.add("button")
    contactButton.textContent = "Contactez-moi"
/*     contactButton.onclick = displayModal() */
    const photographerPhoto = document.createElement("img")
    photographerPhoto.setAttribute("src", picture)
    header.append(photographerPres, contactButton, photographerPhoto);
    return header;
  }

  return {
    /* name, picture, */ getPhotographerThumbnail,
    getPhotographerDetails,
  };
}
