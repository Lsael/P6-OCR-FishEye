const getContactModal = async (id) => {
  const { name } = await getPhotographer(id);
  return getContactModalTemplate(name);
};

const displayContactModal = async () => {
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');
  const contactModal = await getContactModal(id);

  const modal = document.querySelector('.contact-modal');
  modal.innerHTML = contactModal;
  modal.showModal();
};

const getLightBoxModal = async (id, index) => {
  const gallery = await getPhotographerGallery(id);
  const sortChoice = document.querySelector('#sort-options').value;
  sortGallery(gallery, sortChoice);

  let media;

  if(index < 0) {
    media = gallery[gallery.length - 1]
    index = gallery.length
  } else if (index >= gallery.length) {
    media = gallery[0]
    index = 0
  } else {
    media = gallery[index]
  }

  return getLightBoxModalTemplate(media, index);
};

const displayLightBoxModal = async (index) => {
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');
  const modal = await getLightBoxModal(id, index);

  const lightboxModalElement = document.querySelector('.lightbox-modal');
  lightboxModalElement.innerHTML = modal;

  if(!lightboxModalElement.open) {
    lightboxModalElement.showModal();
  }
};

const closeModal = () => {
  const modals = document.querySelectorAll('.modals');
  modals.forEach((modal) => modal.close());
};