import { galleryItems } from "./gallery-items.js";
// Change code below this line
const list = document.querySelector(".gallery");

list.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

function createMarkup(arr) {
  return galleryItems
    .map(
      ({ description, original, preview }) =>
        `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">  
        <img
        class="gallery__image"
        src="${preview}" 
        alt="${description}"
        data-source="${original}">
      </a>
    </li>
  `
    )
    .join("");
}

list.addEventListener("click", handleClick);

function handleClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}"width="800" height="600">`
  );
  instance.show();

  //   list.addEventListener("keydown", (event) => {
  //     if (event.code === "Escape") {
  //       instance.close();
  //     }
  //   });
  document.addEventListener("keydown", onEscClick);

  function onEscClick(event) {
    if (event.code === "Escape") {
      instance.close();
      document.removeEventListener("keydown", onEscClick);
    }
  }
}
