const getPhotographer = async (id) => {
  const photographer = fetch('data/photographers.json')
    .then((res) => res.json())
    .then((datas) => {
      return datas.photographers.filter((data) => data.id === +id)[0];
    });

  return photographer;
}

const getPhotographerGallery = async (id) => {
  const gallery = fetch('data/photographers.json')
  .then((res) => res.json())
  .then((datas) => {
    return datas.media.filter((data) => data.photographerId === +id);
  });

return gallery;
}

const displayPhotographersGallery = (HTMLtarget, gallery) => {
  const photographerGallery = usePhotographerGalleryTemplate(gallery)
  HTMLtarget.insertAdjacentHTML( 'beforeend', photographerGallery )
}

const displayPhotographersPage = (HTMLtarget, photographer) => {
  console.log(photographer)
  const photographerPage = usePhotographerPageTemplate(photographer);
  HTMLtarget.innerHTML = photographerPage;
}

(async () => {
  const id = await location.search.split('=')[1];
  const photographerMain = document.querySelector('main');
  const photographer = await getPhotographer(id);
  const gallery = await getPhotographerGallery(id)

  displayPhotographersPage(photographerMain, photographer);
  displayPhotographersGallery(photographerMain, gallery)
})();
