const getContactModalTemplate = (name) => {
  return `
        <header>
            <div><h2>Contactez-moi<br>${name}</h2></div>
            <span onclick="closeModal()" class="close-button">&#215;</span>
        </header>
        <form>
          <div>
            <label>Prénom</label>
            <input />
            <label>Nom</label>
            <input />
            <label>Email</label>
            <input />
            <label>Votre message</label>
            <textarea></textarea>
          </div>
          <button class="button">Envoyer</button>
        </form>
    `;
};

const getLightBoxModalTemplate = (media) => {
  return `
    <div>
        <span>&lsaquo;</span>
        <div class="media">
        ${
          media.image
            ? `<img src='assets/media/${media.image}' alt='${media.title}' class="lightbox-media"/>`
            : `<video src='assets/media/${media.video}' type="video/mp4" alt='${media.title}' controls></video>`
        }
            <h3>${media.title}</h3>
        </div>
        <span>&rsaquo;</span>
    </div>
    <span onclick="closeModal()" class="close-button">&#215;</span>
    `;
};
