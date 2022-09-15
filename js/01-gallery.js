
import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

//Створення і рендер розмітки на підставі масиву даних 
//galleryItems і наданого шаблону елемента галереї.

const makeGalleryItemsMarkup = (galleryitems) =>
    galleryitems.map(({ preview, original, description }) =>
    `<div class="gallery__item"> 
    <a class="gallery__link" href="${preview}">
        <img class ="gallery__image"
            src = "${preview}" data-source = "${original}"   
            alt = "${description}" 
            width = "100%vw" height = "100%vh"
            />
            </a>
    </div>`).join("");

    
const galleryContainer = document.querySelector(".gallery");
const itemsMarkup = makeGalleryItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup);

//Реалізація делегування на div.gallery і 
//отримання url великого зображення.

galleryContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(evt) {
    evt.preventDefault();
    const imageEl = evt.target;
  //const isImageEl = imageEl.classList.contains('gallery__image');
  //if (!isImageEl) { return; };
    
  //Відкриття модального вікна по кліку на елементі галереї. 
    
    const doBigImageEl = imageEl.dataset.source;
    
  //Заміна значення атрибута src елемента <img> 
  //в модальному вікні перед відкриттям.

    const modal = basicLightbox.create(`
    <img src = "${doBigImageEl}"  width = "100%" height = "100%"/>
`, {
    onShow: modal => {
    window.addEventListener('keydown', onEscKeyPress);
    
    },
    onClose: modal => {
        indow.removeEventListener('keydown', onEscKeyPress);

    },
    }
    );
    modal.show();

    function onEscKeyPress(evt) {
    const ECS_KEY_CODE = 'Escape';
    if (evt.code === ECS_KEY_CODE) {
    modal.close();
    }
    };
}