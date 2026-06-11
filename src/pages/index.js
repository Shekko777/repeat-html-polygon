import {
  initialCards, // Начальные карточки

  editPopup,
  editNameInput,
  editDescriptionInput,
  openEditButton,
  closeEditButton,
  profileName,
  profileDescription,
  elementsList,
  templateCard,
  addCardPopup,
  openAddCardForm,
  closeAddCardButton,
  cardName,
  cardLink,
  imagePopup,
  imageLink,
  imageFigcaption,
  closeImagePopupButton
} from '../scripts/constants.js';

// Инициализация при запуске
initialCards.forEach(el => elementsList.append(createCard(el.name, el.link)));

// Функции
function handleOpenPopup(popupElement) { // Общая открыть форму
  popupElement.classList.add("popup_opened");
}

function handleClosePopup(popupElement) { // Общая закрыть форму
  popupElement.classList.remove("popup_opened");
}

function handleOpenEditPopup() { // Открываем изменение профиля
  handleOpenPopup(editPopup);
  editNameInput.value = profileName.textContent;
  editDescriptionInput.value = profileDescription.textContent;
}

function handleAddCardClosePopup() { // Закрываем измненение профидя
  handleClosePopup(addCardPopup);
  addCardPopup.querySelector('form').reset();
}

function handleEditClosePopup() { // Закрываем измненение профидя
  handleClosePopup(editPopup);
  editPopup.querySelector('form').reset();
}

function handleSubmitEditPopup(evt) { // Отправка формы попапа
  evt.preventDefault();
  profileName.textContent = editNameInput.value;
  profileDescription.textContent = editDescriptionInput.value;
  handleClosePopup(editPopup);
}

function handleSubmitAddCardPopup(evt) { // Отправка новой карточки
  evt.preventDefault();
  elementsList.prepend(createCard(cardName.value, cardLink.value));
  handleClosePopup(addCardPopup);
}

function handleOpenImagePopup(popupElement, imgFigcaption, imgLink) {
  handleOpenPopup(popupElement);
  imageLink.src = imgLink;
  imageFigcaption.textContent = imgFigcaption;
}

function createCard(name, link) { // Создание карточки и активных кнопок лайка
  const card = templateCard.cloneNode(true).querySelector('.elements__item');
  const likeButton = card.querySelector(".elements__like");
  const deleteCardButton = card.querySelector(".elements__button-delete");
  const title = card.querySelector(".elements__title");
  const imgCard = card.querySelector(".elements__img");
  
  title.textContent = name;
  imgCard.src = link;

  likeButton.addEventListener('click', () => likeButton.classList.toggle("elements__like_active"));
  deleteCardButton.addEventListener('click', () => card.remove());
  imgCard.addEventListener('click', () => handleOpenImagePopup(imagePopup, name, link));

  return card;
}

// СЛУШАТЕЛИ
// edit form
openEditButton.addEventListener('click', handleOpenEditPopup);
closeEditButton.addEventListener('click', handleEditClosePopup);
editPopup.addEventListener('submit', handleSubmitEditPopup);

// add form
openAddCardForm.addEventListener('click', () => {handleOpenPopup(addCardPopup)});
closeAddCardButton.addEventListener('click', handleAddCardClosePopup);
addCardPopup.addEventListener('submit', handleSubmitAddCardPopup);

// image popup
closeImagePopupButton.addEventListener('click', () => {handleClosePopup(imagePopup)});