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
    <img src="${preview}" alt="${description}" class="gallery__image">
    </li>
  `
    )
    .join("");
}
