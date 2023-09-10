import { galleryItems } from "./gallery-items.js";
// Change code below this line
const list = document.querySelector(".gallery");

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
        alt="${description}">
      </a>
    </li>
  `
    )
    .join("");
}

list.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
