export default class Card {
    constructor(data, callbackSubmitForm, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._callbackSubmitForm = callbackSubmitForm.bind(this, this._name, this._link);
        this._handleButtonLike = this._handleButtonLike.bind(this);
        this._handleButtonRemove = this._handleButtonRemove.bind(this);
        this._cardSelector = cardSelector;
    }

    _handleButtonLike(evt) {
        evt.target.classList.toggle('place__button-like_active');
    }

    _handleButtonRemove(evt) {
        evt.target.closest('.place').remove();
        this._removeSetEventListeners();
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._cardSelector).content.cloneNode(true);

        return cardElement
    }

    _setEventListeners() {
        this._removeButtonPlace.addEventListener('click', this._handleButtonRemove);
        this._likeButtonPlace.addEventListener('click', this._handleButtonLike);
        this._placeImage.addEventListener('click', this._callbackSubmitForm);

    }

    _removeSetEventListeners() {
        this._removeButtonPlace.removeEventListener('click', this._handleButtonRemove);
        this._likeButtonPlace.removeEventListener('click', this._handleButtonLike);
        this._placeImage.removeEventListener('click', this._callbackSubmitForm);
    }

    generateCard() {
        this._element = this._getTemplate();
        this._likeButtonPlace = this._element.querySelector('.place__button-like');
        this._removeButtonPlace = this._element.querySelector('.place__button-remove');
        this._placeImage = this._element.querySelector('.place__image');
        this._setEventListeners();

        this._element.querySelector('.place__image').src = this._link;
        this._element.querySelector('.place__title').textContent = this._name;

        return this._element
    }
}