const getPhotographers = async () => {
  const photographers = fetch('data/photographers.json')
    .then((res) => res.json())
    .then((datas) => {
      return { photographers: datas.photographers };
    });

  return photographers;
};

const displayPhotographersThumbnails = (HTMLtarget, photographers) => {
  const photographersList = photographers
    .map((photographer) => {
      return usePhotographerThumbnailTemplate(photographer);
    })
    .join('');

  HTMLtarget.innerHTML = photographersList;
};

const initHomePage = async () => {
  const photographersSection = document.querySelector('.photographer-section');
  const { photographers } = await getPhotographers();

  displayPhotographersThumbnails(photographersSection, photographers);
};

initHomePage()
