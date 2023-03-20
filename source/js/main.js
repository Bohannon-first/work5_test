const btnCreateShop = document.querySelector('.button--create-shop');
const popup = document.querySelector('.popup');
const formBtnClose = document.querySelector('.form__btn-close');
const formBtnCancel = document.querySelector('#form-btn-cancel');
const formBtnSend = document.querySelector('#form-btn-send');
const formInput = document.querySelector('.form__input');
const myTable = document.querySelector('.table-shops__table');
const NUMBER_CELLS = 4;

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
const templateDomainCommon = /[^a-zA-Z]/g;

// Замена символов в строке
const validateDomain = () => {
  formInput.value = formInput.value.toLowerCase().replace(templateDomainCommon, '');
};

formInput.addEventListener('input', validateDomain);

// Добавить магазин (вставить в таблицу строку с названием магазина)
const addShop = () => {
  if (formInput.value) {
    const newRow = myTable.insertRow(-1);
    newRow.classList.add('table-shops__row');

    // Счётчик цикл для добавления ячеек в ряд
    for (let i = 1; i <= NUMBER_CELLS; i++) {
      newRow.insertCell();
    }

    const cells = newRow.querySelectorAll('td');
    let lastCell = null;

    for (let i = 0; i < cells.length; i ++) {
      cells[0].textContent = '12345';
      cells[1].textContent = 'Дипломная работа';
      cells[2].textContent = `http://www.${formInput.value}`;
      cells[3].classList.add('row', 'table-shops__btn-container');
      lastCell = cells[3];
    }

    lastCell.insertAdjacentHTML('beforeend', `<a class="button button--available button--management-shops" href="#">
    <svg class="button--icon-pencil" width='14' height='16'>
      <use xlink:href='img/sprite.svg#icon-pencil'></use>
    </svg>
    Редактировать</a>`);
    lastCell.insertAdjacentHTML('beforeend', `<a class="button button--disable button--management-shops" href="#">
    <svg class="button--icon-close" width='13' height='14'>
      <use xlink:href='img/sprite.svg#icon-close'></use>
    </svg>
    Редактировать</a>`);
    formInput.value = '';
    closePopup();
  }
};

formBtnSend.addEventListener('click', addShop);
