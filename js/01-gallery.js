import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryBoxMarkup = document.querySelector(".gallery");

function createGallery(galleryItems) {
    return galleryItems.map(({preview, original, description}) =>
    `<div class = "gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>`)
        .join("");
}



const addGalleryMarkup = createGallery(galleryItems);

galleryBoxMarkup.innerHTML = addGalleryMarkup;

galleryBoxMarkup.addEventListener("click", onImageClick);


function onImageClick(event) {
    // запрет откр ссылки на картинку
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
        return;
    }
//  использ ligthbox
    
    const instance = basicLightbox.create(`<div class="modal"><img 
        src="${event.target.dataset.source}" 
        width="800"
        heigth = "600"></div>`);
    instance.show();

    galleryBox.addEventListener("keydown", (event) => {
    
    if (event.code === "Escape") {
        instance.close();
    }
})
}


console.log(galleryItems);