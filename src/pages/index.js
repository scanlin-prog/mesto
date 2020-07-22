import './index.css';
import {
    validationOptions,
    avatarInfo,
    editAvatarButton,
    editButtonInfo,
    addButtonInfo,
    popupFormEdit,
    inputFirstEdit,
    inputSecondEdit,
    submitButtonFormAdd,
    submitButtonFormEditAvatar,
    submitButtonFormEdit,
    formList,
} from '../utils/constants.js';
import UserInfo from '../components/UserInfo.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import FormValidator from '../components/FormValidator.js';
import Api from '../components/Api.js';

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-13',
    headers: {
      authorization: '66ad8adf-40e8-490a-9692-6e1f4ed571f6',
      'Content-Type': 'application/json'
    }
  })

const userInfo = new UserInfo({
    nameSelector: '.profile__info-title',
    infoSelector: '.profile__info-subtitle'
});
const editPopup = new PopupWithForm(editFormHandlerSubmit,'#popup-edit');
const addPopup = new PopupWithForm(addFormHandlerSubmit, '#popup-add');
const editAvatarPopup = new PopupWithForm(editAvatarFormHandlerSubmit, '#popup-avatar');
const imagePopup = new PopupWithImage('#popup-image');
const confirmPopup = new PopupWithConfirm('#popup-confirm');
const popupEditValidation = new FormValidator(validationOptions, popupFormEdit);
let cardList;

function createCard(item, cardSelector, handleImageCard, popupWithConfirm, Api) {

    const card = new Card(item, cardSelector, handleImageCard, popupWithConfirm, Api);
    return card.generateCard();
}

function addCardTypePlace(item) {
    cardList.addItem(createCard(item, '#place-template', handleImageCardClick, confirmPopup, api))
}

function handleImageCardClick(name, link) {

    imagePopup.openPopup(name, link)
}

function onEditButtonClick () {

    const data = userInfo.getUserInfo();

    inputFirstEdit.value = data.name;
    inputSecondEdit.value = data.info;

    popupEditValidation.resetValidationErrors();

    submitButtonFormEdit.textContent = 'Сохранить';
    editPopup.openPopup();

}

function onAddButtonClick () {
    
    submitButtonFormAdd.textContent = 'Создать';
    addPopup.openPopup();
}

function onEditAvatarClick() {

    submitButtonFormEditAvatar.textContent = 'Сохранить';
    editAvatarPopup.openPopup()
}

function editFormHandlerSubmit(item) {

    api.sendProfileData(item)
    .then((result) => {
        userInfo.setUserInfo(result.name, result.about)
    })

}

function addFormHandlerSubmit(item) {
    
    api.sendCardData(item)
    .then((result) => {
        addCardTypePlace(result)
    })
    
    submitButtonFormAdd.classList.add(validationOptions.inactiveButtonClass);
    submitButtonFormAdd.setAttribute('disabled', true);
}

function editAvatarFormHandlerSubmit(data) {

    api.changeAvatar(data)
    .then((result) => {
        avatarInfo.src = result.avatar;
    }).catch((err) => {
        console.log(`Ошибка: ${err}`)
    })

    submitButtonFormEditAvatar.classList.add(validationOptions.inactiveButtonClass)
    submitButtonFormEditAvatar.setAttribute('disabled', true);
    
}

editButtonInfo.addEventListener('click', onEditButtonClick);
addButtonInfo.addEventListener('click', onAddButtonClick);
editAvatarButton.addEventListener('click', onEditAvatarClick);

api.getProfileData()
.then((result) => {
    document.querySelector('.profile__info-title').textContent = result.name;
    document.querySelector('.profile__info-subtitle').textContent = result.about;
    document.querySelector('.profile__avatar').src = result.avatar;
}).catch((err) => {
    console.log(`Ошибка: ${err}`)
})

api.getCardsData()
.then((result) => {
     result.reverse()
     cardList = new Section({
        items: result,
        renderer: (item) => {
            addCardTypePlace(item)
            if (item.likes.length > 0) {
                document.querySelector('.place__button-like-number').textContent = item.likes.length;
            }
        }
    }, '.places')
    cardList.renderItems();
}).catch((err) => {
    console.log(`Ошибка: ${err}`)
})

formList.forEach((formItem) => {
    const form = new FormValidator(validationOptions, formItem);

    form.enableValidation();
})