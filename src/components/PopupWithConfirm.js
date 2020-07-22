import Popup from './Popup.js';

export default class PopupWithConfirm extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
        this._popupForm = this._popup.querySelector('.popup__container');
        this._formSubmitHandler = this._formSubmitHandler.bind(this);
    }

    _formSubmitHandler(evt) {
        evt.preventDefault();

        this._submit();

        this.closePopup();
    }

    setEventListeners() {
        this._popupForm.addEventListener('submit', this._formSubmitHandler);
        super.setEventListeners();
    }

     setSubmit(submit) {
        this._submit = submit;
    }
}