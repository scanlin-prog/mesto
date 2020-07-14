import './images/Mesto.svg';
import './images/face.jpg';
import './pages/index.css';
import {
    initialPlaces,
    validationOptions,
    editButtonInfo,
    addButtonInfo,
    popupFormEdit,
    inputFirstEdit,
    inputSecondEdit,
    submitButtonFormAdd,
    formList
} from './scripts/Data.js';
import UserInfo from './scripts/UserInfo.js';
import Card from './scripts/Card.js';
import Section from './scripts/Section.js';
import PopupWithForm from './scripts/PopupWithForm.js';
import PopupWithImage from './scripts/PopupWithImage.js';
import FormValidator from './scripts/FormValidator.js';

const userInfo = new UserInfo({
    nameSelector: '.profile__info-title',
    infoSelector: '.profile__info-subtitle'
});
const editPopup = new PopupWithForm(editFormHandlerSubmit,'#popup-edit');
const addPopup = new PopupWithForm(addFormHandlerSubmit, '#popup-add');
const imagePopup = new PopupWithImage('#popup-image');
const cardList = new Section({
    items: initialPlaces,
    renderer: (item) => {
        const place = createCard(item, handleCardClick,  '#place-template');
        cardList.addItem(place);
    }
}, '.places');
const popupEditValidation = new FormValidator(validationOptions, popupFormEdit);

function createCard(item, callbackSubmitForm, cardSelector) {

    const card = new Card(item, callbackSubmitForm, cardSelector);
    const cardElement = card.generateCard();

    return cardElement;
}

function handleCardClick(name, link) {

    imagePopup.openPopup(name, link)
}

function onEditButtonClick () {

    const data = userInfo.getUserInfo();

    inputFirstEdit.value = data.name;
    inputSecondEdit.value = data.info;

    popupEditValidation.resetValidationErrors();

    editPopup.openPopup();

}

function onAddButtonClick () {
    
    addPopup.openPopup();
}

function editFormHandlerSubmit(formValues) {

    userInfo.setUserInfo(formValues.name, formValues.job);

}

function addFormHandlerSubmit(formValues) {
    
    const place = createCard(formValues, handleCardClick, '#place-template');
    cardList.addItem(place);
    
    submitButtonFormAdd.classList.add(validationOptions.inactiveButtonClass);
    submitButtonFormAdd.setAttribute('disabled', true);
}

editButtonInfo.addEventListener('click', onEditButtonClick);
addButtonInfo.addEventListener('click', onAddButtonClick);

cardList.renderItems();

formList.forEach((formItem) => {
    const form = new FormValidator(validationOptions, formItem);

    form.enableValidation();
})


