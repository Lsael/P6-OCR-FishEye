async function getPhotographers() {
  const photographers = fetch("data/photographers.json")
    .then((res) => res.json())
    .then((datas) => {
      return { photographers: datas.photographers };
    });

  return photographers;
}

async function displayData() {
  const { photographers } = await getPhotographers();
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerTemplate(photographer);
    const userCardDOM = photographerModel.getPhotographerThumbnail();
    photographersSection.appendChild(userCardDOM);
  });
}

// Pourquoi une fonction init ?

/* async function init() {
  const { photographers } = await getPhotographers();
  displayData(photographers);
} */

displayData();
