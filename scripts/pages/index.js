async function getPhotographers() {
  const photographers = fetch("data/photographers.json")
    .then((res) => res.json())
    .then((datas) => {return {photographers: datas.photographers}});

    return photographers
}


async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerTemplate(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}


async function init() {
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();
