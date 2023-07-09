async function getPhotographer(id) {
  const photographer = fetch("data/photographers.json")
    .then((res) => res.json())
    .then((datas) => {
      return datas.photographers.filter((data) => data.id === +id)[0];
    });

  return photographer;
}

async function displayDetails() {
  const id = location.search.split("=")[1];
  const photographer = await getPhotographer(id);
  const photographerHeader = document.querySelector("main");

  console.log(photographer)

  const photographerModel = photographerTemplate(photographer);
  const userCardDOM = photographerModel.getPhotographerDetails();
  photographerHeader.appendChild(userCardDOM);
}

displayDetails();
