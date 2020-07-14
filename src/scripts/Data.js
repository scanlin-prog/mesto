import baikal from '../images/Байкал.jpg';
import stena from '../images/Китайская_стена.jpg';
import tadj from '../images/Тадж_махал.jpg';
import sahara from '../images/Сахара.jpg';
import elbrus from '../images/Эльбрус.jpg';
import eiphel from '../images/Эйфелева_башня.jpg';

export const initialPlaces = [
    {
        name: 'Байкал',
        link: baikal
    },
    {
        name: 'Китайская стена',
        link: stena
    },
    {
        name: 'Тадж Махал',
        link: tadj
    },
    {
        name: 'Сахара',
        link: sahara
    },
    {
        name: 'Эльбрус',
        link: elbrus
    },
    {
        name: 'Эйфелева башня',
        link: eiphel
    }
];

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
const popupWindowImage = document.querySelector('#popup-image');
export const editButtonInfo = document.querySelector('.profile__button-edit');
export const addButtonInfo = document.querySelector('.profile__button-add');
export const popupFormEdit = popupWindowEdit.querySelector('.popup__container');
export const inputFirstEdit = popupWindowEdit.querySelector('.popup__input_first');
export const inputSecondEdit = popupWindowEdit.querySelector('.popup__input_second');
export const submitButtonFormAdd = popupWindowAdd.querySelector('.popup__button-create');
export const popupImage = popupWindowImage.querySelector('.popup__image');
export const popupImageTitle = popupWindowImage.querySelector('.popup__image-title');
export const formList = Array.from(document.querySelectorAll(validationOptions.formSelector));

