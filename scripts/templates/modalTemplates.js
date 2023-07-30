
const getContactModalTemplate = (name) => {
  return `
        <header>
            <div><h2 id="photographer" aria-label="Contact me, ${name}">Contactez-moi<br>${name}</h2></div>
            <span role="button" aria-label="Close dialog" onclick="closeModal()" class="close-button">&#215;</span>
        </header>
        <form onSubmit="submitContactForm(); return false;">
          <div>
            <label for="firstname">Prénom</label>
            <input name="firstname" id="contact-firstname"/>
            <label for="lastname">Nom</label>
            <input name="lastname" id="contact-lastname"/>
            <label for="email">Email</label>
            <input name="email" id="contact-email"/>
            <label for="your message">Votre message</label>
            <textarea name="your message" id="contact-message"></textarea>
          </div>
          <button type="submit" class="button">Envoyer</button>
        </form>
    `;
};

const getLightBoxModalTemplate = (media, index) => {
  const { image, title, video } = media;
  return `
    <div>
        <span role="button" onkeydown="onKeyDown(event);"  aria-label="Previous image" onClick="displayLightBoxModal(${index - 1})" tabindex="0">&lsaquo;</span>
        <div class="media">
        ${
          image
            ? `<img src='assets/media/${image}' alt='${title}' class="lightbox-media" tabindex="0"/>`
            : `<video src='assets/media/${video}' type="video/mp4" alt='${title}' controls tabindex="0"/>`
        }
            <h3>${title}</h3>
        </div>
        <span role="button" onkeydown="onKeyDown(event);" aria-label="Next image" onClick="displayLightBoxModal(${index + 1})" tabindex="0">&rsaquo;</span>
    </div>
    <span role="button" onkeydown="onKeyDown(event);" aria-label="Close dialog" onclick="closeModal()" class="close-button" tabindex="0">&#215;</span>
    `;
};
