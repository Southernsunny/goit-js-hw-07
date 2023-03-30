import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryEl = createGalery(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryEl);

function createGalery() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li> `;
    })
    .join('');
}

const onGalleryContainerClick = event => {
  event.preventDefault();

  const nodeName = event.target.nodeName;
  if (nodeName !== 'IMG') {
    return;
  }

  const source = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${source}" width="800" height="600">`);

  instance.show();

  // escape
  document.addEventListener(
    'keydown',
    event => {
      if (event.code === 'Escape') {
        instance.close();
      }
    },
    { once: true }
  );
};
galleryContainer.addEventListener('click', onGalleryContainerClick);

console.log(galleryItems);
