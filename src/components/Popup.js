
export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._closePopup = this.closePopup.bind(this);
        this._handleMouseClose = this._handleMouseClose.bind(this);
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.closePopup();
        }
    }

    _handleMouseClose(evt) {
        evt.target.classList.remove('popup_opened');
    }

    openPopup() {
        this._popup.classList.add('popup_opened');
        this.setEventListeners();
    }

    closePopup() {
        this._popup.classList.remove('popup_opened');
        this.removeSetEventListeners();
    }

    setEventListeners() {
        const currentCloseButton = this._popup.querySelector('.popup__button-close');
        currentCloseButton.addEventListener('click', this._closePopup);
        this._popup.addEventListener('mousedown', this._handleMouseClose);
        document.addEventListener('keydown', this._handleEscClose);
    }

    removeSetEventListeners() {
        const currentCloseButton = this._popup.querySelector('.popup__button-close');
        currentCloseButton.removeEventListener('click', this._closePopup);
        this._popup.removeEventListener('mousedown', this._handleMouseClose);
        document.removeEventListener('keydown', this._handleEscClose);
    }
}