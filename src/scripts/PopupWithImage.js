import {popupImageTitle, popupImage} from './Data.js';
import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
    }

    openPopup(name, link) {
        popupImageTitle.textContent = name;
        popupImage.src = link;
        super.openPopup();
    }
}