import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(callbackSubmitForm, popupSelector) {
        super(popupSelector);
        this._callbackSubmitForm = callbackSubmitForm;
        this._popupForm = this._popup.querySelector('.popup__container');
        this._formSubmitHandler = this._formSubmitHandler.bind(this);
    }

    _getInputValues() {
        this._inputList = Array.from(this._popupForm.querySelectorAll('.popup__input'));
        this._formValues = {};
        this._inputList.forEach((input) => {
            this._formValues[input.name] = input.value; 
        });

        return this._formValues;
    }

    _formSubmitHandler(evt) {
        evt.preventDefault();

        this._callbackSubmitForm(this._getInputValues());

        this.closePopup();
    }

    setEventListeners() {
        this._popupForm.addEventListener('submit', this._formSubmitHandler);
        super.setEventListeners();
    }

    closePopup() {
        super.closePopup();
        this._popupForm.reset();
    }

    
}

