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

const displayPhotographersGallery = (HTMLtarget, gallery) => {
  const photographerGallery = usePhotographerGalleryTemplate(gallery);
  HTMLtarget.insertAdjacentHTML('beforeend', photographerGallery);
};

const displayPhotographersPriceBox = (HTMLtarget, photographerPrice, totalLikes) => {
  const photographerPriceBox = usePhotographerPriceBoxTemplate(photographerPrice, totalLikes);
  HTMLtarget.insertAdjacentHTML('beforeend', photographerPriceBox);
};

const displayPhotographersPage = (HTMLtarget, photographer) => {
  console.log(photographer);
  const photographerPage = usePhotographerPageTemplate(photographer);
  HTMLtarget.innerHTML = photographerPage;
};

const UpdateLikes = (quantity, id) => {
  let totalLikesElement = document.querySelector("#total-likes-count")
  let totalLikes = Number(totalLikesElement.innerText)
  
  if(id) {
    let mediaLikesElement = document.querySelector(`.${CSS.escape(id)} > span`)
    let mediaLikes = Number(mediaLikesElement.innerText)
    mediaLikesElement.innerText = (mediaLikes += quantity)
    totalLikesElement.innerText = (totalLikes += quantity)
  } else {
    totalLikesElement.innerText = (totalLikes += quantity)
  }
}

(async () => {
  const searchParams = new URLSearchParams(location.search)
  const id = searchParams.get('id')
  const photographerDetailsElement = document.querySelector('#photographer-details');
  const photographer = await getPhotographer(id);
  const gallery = await getPhotographerGallery(id);
  
  let totalLikes = 0;
  gallery.map((element) => {
    totalLikes += element.likes
  })

  displayPhotographersPage(photographerDetailsElement, photographer);
  displayPhotographersGallery(photographerDetailsElement, gallery);
  displayPhotographersPriceBox(photographerDetailsElement, photographer.price)
  UpdateLikes(totalLikes)

})();
