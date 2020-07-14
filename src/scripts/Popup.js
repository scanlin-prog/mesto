
export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.closePopup();
        }
    }

    openPopup() {
        this._popup.classList.add('popup_opened');
        this.setEventListeners();
    }

    closePopup() {
        this._popup.classList.remove('popup_opened');
    }

    setEventListeners() {
        const currentCloseButton = this._popup.querySelector('.popup__button-close');
        currentCloseButton.addEventListener('click', () => {
            this.closePopup();
        });
        this._popup.addEventListener('mousedown', (evt) => {
            evt.target.classList.remove('popup_opened');
        });
        document.addEventListener('keydown', (evt) => {
            this._handleEscClose(evt);
        });
    }
}