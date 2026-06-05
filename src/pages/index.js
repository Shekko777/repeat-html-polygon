// Переменные
const editPopup = document.querySelector('.popup_type_edit'); // Попап редактирования
const editNameInput = editPopup.querySelector('.popup__input_place_title'); // Поле имени в попа
const editDescriptionInput = editPopup.querySelector('.popup__input_place_subtitle'); // Поле описани в попе
const openEditButton = document.querySelector('.profile__edit-btn'); // Кнопка редактирования попа
const closeEditButton = editPopup.querySelector('.popup__close'); // Крестик в попапе редактирования
const profileName = document.querySelector('.profile__title'); // Имя профиля
const profileDescription = document.querySelector('.profile__subtitle'); // Описание профиля

// Функции
function handleOpenPopup() { // Открываем попап
  editPopup.classList.add("popup_opened");
  editNameInput.value = profileName.textContent;
  editDescriptionInput.value = profileDescription.textContent;
}

function handleClosePopup() { // Закрываем попа
  editPopup.classList.remove("popup_opened");
  editNameInput.value = '';
  editDescriptionInput.value = '';
}

function handleSubmitEditPopup(evt) { // Отправка формы попапа
  evt.preventDefault();
  profileName.textContent = editNameInput.value;
  profileDescription.textContent = editDescriptionInput.value;
  handleClosePopup();
}

// Слушатели
openEditButton.addEventListener('click', handleOpenPopup);
closeEditButton.addEventListener('click', handleClosePopup);
editPopup.addEventListener('submit', handleSubmitEditPopup)