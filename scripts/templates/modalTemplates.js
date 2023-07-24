const getContactModalTemplate = (name) => {
  return `
        <header>
            <div><h2>Contactez-moi<br>${name}</h2></div>
            <span role="button" aria-label="Close dialog" onclick="closeModal()" class="close-button">&#215;</span>
        </header>
        <form>
          <div>
            <label for="firstname">Prénom</label>
            <input name="firstname"/>
            <label for="lastname">Nom</label>
            <input name="lastname"/>
            <label for="email">Email</label>
            <input name="email"/>
            <label for="your message">Votre message</label>
            <textarea name="your message"></textarea>
          </div>
          <button type="button" class="button">Envoyer</button>
        </form>
    `;
};

const getLightBoxModalTemplate = (media, index) => {
  return `
    <div>
        <span role="button" aria-label="Previous image" onClick="displayLightBoxModal(${index - 1})">&lsaquo;</span>
        <div class="media">
        ${
          media.image
            ? `<img src='assets/media/${media.image}' alt='${media.title}' class="lightbox-media"/>`
            : `<video src='assets/media/${media.video}' type="video/mp4" alt='${media.title}' controls></video>`
        }
            <h3>${media.title}</h3>
        </div>
        <span role="button" aria-label="Next image" onClick="displayLightBoxModal(${index + 1})">&rsaquo;</span>
    </div>
    <span role="button" aria-label="Close dialog" onclick="closeModal()" class="close-button">&#215;</span>
    `;
};
