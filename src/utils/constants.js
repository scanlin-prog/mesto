export const validationOptions = {
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button-create',
    inactiveButtonClass: 'popup__button-create_inactive',
    inputErrorClass: 'popup__input_type_error',
    activeErrorClass: 'popup__input-error_active'
}

const popupWindowEdit = document.querySelector('#popup-edit');
const popupWindowAdd = document.querySelector('#popup-add');
const popupWindowEditAvatar = document.querySelector('#popup-avatar');
const popupWindowImage = document.querySelector('#popup-image');
export const page = document.querySelector('.page');
export const editButtonInfo = document.querySelector('.profile__button-edit');
export const addButtonInfo = document.querySelector('.profile__button-add');
export const avatarInfo = document.querySelector('.profile__avatar');
export const editAvatarButton = document.querySelector('.profile__overlay');
export const popupFormEdit = popupWindowEdit.querySelector('.popup__container');
export const inputFirstEdit = popupWindowEdit.querySelector('.popup__input_first');
export const inputSecondEdit = popupWindowEdit.querySelector('.popup__input_second');
export const submitButtonFormEdit = popupWindowEdit.querySelector('.popup__button-create');
export const popupFormEditAvatar = popupWindowEditAvatar.querySelector('.popup__container');
export const submitButtonFormEditAvatar = popupWindowEditAvatar.querySelector('.popup__button-create');
export const popupFormAdd = popupWindowAdd.querySelector('.popup__container');
export const submitButtonFormAdd = popupWindowAdd.querySelector('.popup__button-create');
export const popupImage = popupWindowImage.querySelector('.popup__image');
export const popupImageTitle = popupWindowImage.querySelector('.popup__image-title');
export const formList = Array.from(document.querySelectorAll(validationOptions.formSelector));

