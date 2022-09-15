import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const makeGalleryItemsMarkup = (galleryitems) =>
    galleryitems.map(({ preview, original, description }) =>
    ` <a class="gallery__item" href="${original}">
        <img class ="gallery__image"
            src = "${preview}"    
            alt = "${description}" 
            "/>
            </a>
    </div>`).join("");

const galleryContainer = document.querySelector(".gallery");
const itemsMarkup = makeGalleryItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup);
//galleryContainer.addEventListener('click', onGalleryContainerClick);
//function onGalleryContainerClick(evt) {
  //evt.preventDefault();
        
    const anim = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
}); 
//}
