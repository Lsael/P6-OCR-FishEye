function photographerTemplate(data) {
  const { name, portrait, id } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const thumbnail = document.createElement("a");
    thumbnail.href = `/photographer.html?id=${id}`;
    thumbnail.ariaLabel = name;
    const article = document.createElement("article");
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.alt = `photo de ${name}`;
    const h2 = document.createElement("h2");
    h2.textContent = name;
    article.appendChild(img);
    article.appendChild(h2);
    thumbnail.appendChild(article);
    return thumbnail;
  }
  return { name, picture, getUserCardDOM };
}
