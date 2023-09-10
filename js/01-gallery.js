import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

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

list.addEventListener("click", onImageClick);

function onImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}"width="800" height="600">`
  );
  instance.show();

  list.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}
