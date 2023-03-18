const btnCreateShop = document.querySelector('.button--create-shop');
const popup = document.querySelector('.popup');
const formBtnClose = document.querySelector('.form__btn-close');
const formBtnCancel = document.querySelector('#form-btn-cancel');
const formBtnSend = document.querySelector('#form-btn-send');
const formInput = document.querySelector('.form__input');

// Обработчик клика по кнопке "Создать свой магазин"
const clickHandlerBtnCreateShop = () => {
  if (popup.classList.contains('popup--show')) {
    return false;
  }
  popup.classList.add('popup--show');
};

btnCreateShop.addEventListener('click', clickHandlerBtnCreateShop);

// Закрытие попапа
const closePopup = () => {
  popup.style.animation = 'closePopup 0.5s ease 0s normal forwards';
  formInput.value = '';
  setTimeout(() => {
    popup.classList.remove('popup--show');
    popup.removeAttribute('style');
    formInput.classList.remove('form__input--error');
  }, 500);
};

formBtnClose.addEventListener('click', closePopup);
formBtnCancel.addEventListener('click', closePopup);

// Проверка заполнено ли поле ввода "Домен"
const isFieldFilled = () => {
  if (!formInput.value) {
    formInput.classList.add('form__input--error', 'form__input--shake-error');
    setTimeout(() => {
      formInput.classList.remove('form__input--shake-error');
    }, 400);
  }
};

formBtnSend.addEventListener('click', isFieldFilled);

// Удаление красной обводки при наборе текста
formInput.oninput = () => {
  if (formInput.classList.contains('form__input--error')) {
    formInput.classList.remove('form__input--error');
  }
};

// Шаблон регулярного выражения
// const templateDomainCommon = /^[a-zA-Z-]+$/gm;

// Пока не работает замена символов в строке. Попозже исправлю.
// const validateDomain = () => {
//   formInput.value = formInput.value.replace(templateDomainCommon, '');
// };

// formInput.addEventListener('input', validateDomain);
