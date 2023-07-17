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
  const media = gallery[index];

  return getLightBoxModalTemplate(media);
};

const displayLightBoxModal = async (index) => {
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');
  const modal = await getLightBoxModal(id, index);

  const lightboxModalElement = document.querySelector('.lightbox-modal');
  lightboxModalElement.innerHTML = modal;
  lightboxModalElement.showModal();
};

const closeModal = () => {
  const modals = document.querySelectorAll('.modals');
  modals.forEach((modal) => modal.close());
};