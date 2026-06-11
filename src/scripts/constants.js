export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// Переменные
export const editPopup = document.querySelector('.popup_type_edit'); // Попап редактирования
export const editNameInput = editPopup.querySelector('.popup__input_place_title'); // Поле имени в попапе
export const editDescriptionInput = editPopup.querySelector('.popup__input_place_subtitle'); // Поле описания в попапе
export const openEditButton = document.querySelector('.profile__edit-btn'); // Кнопка редактирования попапа
export const closeEditButton = editPopup.querySelector('.popup__close'); // Крестик в попапе редактирования
export const profileName = document.querySelector('.profile__title'); // Имя профиля
export const profileDescription = document.querySelector('.profile__subtitle'); // Описание профиля
export const elementsList = document.querySelector('.elements__list'); // Список, куда добавляем новые карточки
export const templateCard = document.querySelector('.template-card').content; // Темплейт карточки для дублирования
 
// Форма добавления карточки
export const addCardPopup = document.querySelector(".popup_type_add"); // Форма
export const openAddCardForm = document.querySelector(".profile__add-btn"); // Кнопка открытия
export const closeAddCardButton = addCardPopup.querySelector(".popup__close"); // Крестик закрытия
export const cardName = addCardPopup.querySelector(".popup__input_add_name");
export const cardLink = addCardPopup.querySelector(".popup__input_add_link");

// Попап картинки
export const imagePopup = document.querySelector(".popup_type_images");
export const imageLink = imagePopup.querySelector(".popup-images__img");
export const imageFigcaption = imagePopup.querySelector(".popup-images__figcaption");
export const closeImagePopupButton = imagePopup.querySelector(".popup__close");
