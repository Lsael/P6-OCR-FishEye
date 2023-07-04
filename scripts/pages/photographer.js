async function getPhotographer() {
  const id = location.search.split("=")[1];
  const photographer = fetch("data/photographers.json")
    .then((res) => res.json())
    .then((datas) => {
      return datas.photographers.filter((data) => data.id === +id)[0];
    });

  return photographer;
}

async function displayDetails() {
  const photographer = await getPhotographer();
  const photographerHeader = document.querySelector("main");

  console.log(photographer)

  const photographerModel = photographerTemplate(photographer);
  const userCardDOM = photographerModel.getPhotographerDetails();
  photographerHeader.appendChild(userCardDOM);
}

displayDetails();
