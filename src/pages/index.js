import './index.css';
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
} from '../utils/constants.js';
import UserInfo from '../components/UserInfo.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import FormValidator from '../components/FormValidator.js';

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
        addCardTypePlace(item)
    }
}, '.places');
const popupEditValidation = new FormValidator(validationOptions, popupFormEdit);

function createCard(item, callbackSubmitForm, cardSelector) {

    const card = new Card(item, callbackSubmitForm, cardSelector);
    return card.generateCard();
}

function addCardTypePlace(item) {
    cardList.addItem(createCard(item, handleCardClick,  '#place-template'))
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

function editFormHandlerSubmit(item) {

    userInfo.setUserInfo(item.name, item.job);

}

function addFormHandlerSubmit(item) {
    
    addCardTypePlace(item);
    
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


