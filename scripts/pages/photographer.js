const getPhotographer = async (id) => {
  const photographer = fetch('data/photographers.json')
    .then((res) => res.json())
    .then((datas) => {
      return datas.photographers.filter((data) => data.id === +id)[0];
    });

  return photographer;
}

const displayPhotographersPage = (HTMLtarget, photographer) => {
  const photographerPage = getPhotographerPageTemplate(photographer);
  HTMLtarget.innerHTML = photographerPage;
}

(async () => {
  const id = await location.search.split('=')[1];
  const photographerHeader = document.querySelector('main');
  const photographer = await getPhotographer(id);

  displayPhotographersPage(photographerHeader, photographer);
})();
