const getContactModalTemplate = (name) => {
    return `
    <div class="modal">
        <header>
            <div><h2>Contactez-moi<br>${name}</h2></div>
            <img src="assets/icons/close.svg" onclick="closeModal()" />
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
      </div>
    `
}