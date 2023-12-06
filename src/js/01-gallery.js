// Add imports above this line
// Описаний в документації
import SimpleLightbox from "simplelightbox";

// Додатковий імпорт стилів
import"simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';
// Change code below this line
const galleryRef = document.querySelector('ul.gallery');
createGallery(galleryItems);
const lightbox = new SimpleLightbox('.gallery a', {
    captions: 'true',
    captionSelector: '.gallery img',
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250
});

function createGallery(items) {
    const galleryListMarkup = items.map(({preview, original, description}) => {
    return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
    </li>`
    });

    galleryRef.insertAdjacentHTML('beforeend', galleryListMarkup.join(''));
}