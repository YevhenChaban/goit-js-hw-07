import { galleryItems } from "./gallery-items.js";
// Change code below this line

const imgs = galleryItems
  .map((img) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${img.original}" >
  <img
    class="gallery__image"
    src="${img.preview}"
    data-source="${img.original}"
    alt="${img.description}"/>
</a>
</div>`;
  })
  .join(" ");

const gallery = document.querySelector(".gallery");
gallery.innerHTML = imgs;

gallery.addEventListener("click", onImgClick);

function onImgClick(event) {
  event.preventDefault();

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

  instance.show();
}
