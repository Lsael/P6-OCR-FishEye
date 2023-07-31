const searchParams = new URLSearchParams(location.search);
const id = searchParams.get('id');
const photographerDetailsElement = document.querySelector('#photographer-details');

const getPhotographer = async (id) => {
  const photographer = fetch('data/photographers.json')
    .then((res) => res.json())
    .then((datas) => {
      return datas.photographers.find((data) => data.id === +id);
    });

  return photographer;
};

const getPhotographerGallery = async (id) => {
  const gallery = fetch('data/photographers.json')
    .then((res) => res.json())
    .then((datas) => {
      return datas.media.filter((data) => data.photographerId === +id);
    });

  return gallery;
};

const sortGallery = (gallery, selectedOption) => {
  switch (selectedOption) {
    case 'Popularity':
      gallery.sort((a, b) => {
        return b.likes - a.likes;
      });
      return gallery;
    case 'Date':
      gallery.sort((a, b) => {
        return b.date - a.date;
      });
      return gallery;
    case 'Title':
      gallery.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
      return gallery;
  }
};

const updateLikes = (quantity, id) => {
  let totalLikesElement = document.querySelector('#total-likes-count');
  let totalLikes = Number(totalLikesElement.innerText);

  if (id) {
    let mediaLikesElement = document.querySelector(`.${CSS.escape(id)} > span`);
    let mediaLikes = Number(mediaLikesElement.innerText);
    mediaLikesElement.innerText = mediaLikes += quantity;
    totalLikesElement.innerText = totalLikes += quantity;
    document.querySelector(`.${CSS.escape(id)}`).onclick = null
  } else {
    totalLikesElement.innerText = totalLikes += quantity;
  }
};

const displayPhotographersGallery = async () => {
  const gallery = await getPhotographerGallery(id);
  const selectElement = document.querySelector('#sort-options');
  const galleryElement = document.querySelector('.photographer-gallery');

  const photographerGallery = usePhotographerGalleryTemplate(sortGallery(gallery, selectElement.value));

  if (galleryElement) {
    galleryElement.remove();
  }

  photographerDetailsElement.insertAdjacentHTML('beforeend', photographerGallery);
};

const displayPhotographersPriceBox = (HTMLtarget, photographerPrice, totalLikes) => {
  const photographerPriceBox = usePhotographerPriceBoxTemplate(photographerPrice, totalLikes);
  HTMLtarget.insertAdjacentHTML('beforeend', photographerPriceBox);
};

const displayPhotographersPage = (HTMLtarget, photographer) => {
  const photographerPage = usePhotographerPageTemplate(photographer);
  HTMLtarget.innerHTML = photographerPage;
};

const initPhotographerPage = async () => {
  const photographer = await getPhotographer(id);
  const gallery = await getPhotographerGallery(id);

  let totalLikes = 0;
  gallery.map((element) => {
    totalLikes += element.likes;
  });

  displayPhotographersPage(photographerDetailsElement, photographer);
  displayPhotographersGallery();
  displayPhotographersPriceBox(photographerDetailsElement, photographer.price);
  updateLikes(totalLikes);
};

initPhotographerPage()