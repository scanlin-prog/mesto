export default class Card {
    constructor(data, callbackSubmitForm, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._callbackSubmitForm = callbackSubmitForm;
        this._cardSelector = cardSelector;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._cardSelector).content.cloneNode(true);

        return cardElement
    }

    _setEventListeners() {
        const removeButtonPlace = this._element.querySelector('.place__button-remove');
        const likeButtonPlace = this._element.querySelector('.place__button-like');
        const placeImage = this._element.querySelector('.place__image');
        removeButtonPlace.addEventListener('click', () => {
            const deadPlaceElement = removeButtonPlace.closest('.place');
            deadPlaceElement.remove();
        });
        likeButtonPlace.addEventListener('click', (evt) => {
            evt.target.classList.toggle('place__button-like_active');
        });
        placeImage.addEventListener('click', () => {
            this._callbackSubmitForm(this._name, this._link)
        });

    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector('.place__image').src = this._link;
        this._element.querySelector('.place__title').textContent = this._name;

        return this._element
    }
}