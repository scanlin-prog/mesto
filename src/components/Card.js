export default class Card {
    constructor(data, cardSelector, handleImageCard, popupWithConfirm, Api) {
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;
        this._owner = data.owner;
        this._id = data._id;
        this._api = Api;
        this._confirmPopup = popupWithConfirm;
        this._handleImageCard = handleImageCard.bind(this, this._name, this._link);
        this._handleButtonLike = this._handleButtonLike.bind(this);
        this._handleButtonRemove = this._handleButtonRemove.bind(this);
        this._callbackSubmitForm = this._callbackSubmitForm.bind(this);
        this._cardSelector = cardSelector;
    }

    _handleButtonLike(evt) {
        evt.target.classList.toggle('place__button-like_active');
        if (evt.target.classList.contains('place__button-like_active')) {
            this._likes.push(this._owner);
            this._api.likeCard(this._id)
            .then(() => {
                this._likeButtonPlace.classList.add('place__button-like_active')
            });
        } else {
            this._likes.pop(this._owner);
            this._api.unlikeCard(this._id)
            .then(() => {
                this._likeButtonPlace.classList.remove('place__button-like_active')
            });
        }
        if (this._likes.length > 0) {
            this._likeNumber.textContent = this._likes.length;
        } else {
            this._likeNumber.textContent = '';
        }

    }

    _handleButtonRemove() {
        this._confirmPopup.openPopup();
        this._confirmPopup.setSubmit(this._callbackSubmitForm);
    }

    _callbackSubmitForm() {

        this._api.deleteCard(this._id)
            .then(() => {
                this._removeButtonPlace.closest('.place').remove();
                this._removeSetEventListeners();
            }).catch((err) => {
                console.log(`Ошибка: ${err}`)
            })

    }

    _getTemplate() {
        const cardElement = document.querySelector(this._cardSelector).content.cloneNode(true);

        return cardElement
    }

    _setEventListeners() {
        this._removeButtonPlace.addEventListener('click', this._handleButtonRemove);
        this._likeButtonPlace.addEventListener('click', this._handleButtonLike);
        this._placeImage.addEventListener('click', this._handleImageCard);
    }

    _removeSetEventListeners() {
        this._removeButtonPlace.removeEventListener('click', this._handleButtonRemove);
        this._likeButtonPlace.removeEventListener('click', this._handleButtonLike);
        this._placeImage.removeEventListener('click', this._handleImageCard);
    }

    generateCard() {
        this._element = this._getTemplate();
        this._likeButtonPlace = this._element.querySelector('.place__button-like');
        this._likeNumber = this._element.querySelector('.place__button-like-number');
        this._removeButtonPlace = this._element.querySelector('.place__button-remove');
        this._placeImage = this._element.querySelector('.place__image');
        this._placeTitle = this._element.querySelector('.place__title');
        this._setEventListeners();

        this._placeImage.src = this._link;
        this._placeTitle.textContent = this._name;

        if (this._owner._id === 'e1d30e9d8042878e27f0bd02') {
            this._removeButtonPlace.classList.add('place__button-remove_active')
        }

        this._likes.find((owner) => {
            if (owner._id === 'e1d30e9d8042878e27f0bd02') {
                this._likeButtonPlace.classList.add('place__button-like_active')
            }
        })

        return this._element
    }
}