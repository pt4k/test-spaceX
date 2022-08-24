const burgerButton = document.querySelector('.burger');

class Popup {
  constructor(popupSelector, headerSelector, burgerBar) {
    this._popup = document.querySelector(popupSelector);
    this._header = document.querySelector(headerSelector);
  }

  open() {
    this._popup.classList.toggle('header__links_opened');
    this._header.classList.toggle('header_down');
  }
}

const headerLinksPopup = new Popup('.header__links', '.header');

burgerButton.addEventListener('click', () => {
  headerLinksPopup.open();
});
