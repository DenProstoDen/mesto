export class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const element = document
    .querySelector(this._templateSelector)
    .content.querySelector('.card')
    .cloneNode(true);
    return element;
  }

  generateCard = () => {
    this._card = this._getTemplate();

    this._card.querySelector('.card__text').textContent = this._name;
    this._card.querySelector('.card__img').alt = this._name;
    this._card.querySelector('.card__img').src = this._link;

    this._setEventListeners();

    return this._card;
  }

  _handleLike() {
    this._card.querySelector(".card__like-button").classList.toggle("card__like-button_active");
  }

  _handleDelete() {
    this._card.remove();
    this._card = null;
  }

  _setEventListeners() {
    this._card.querySelector(".card__delete-button").addEventListener('click', () => {
      this._card.remove();
    });

    this._card.querySelector(".card__like-button").addEventListener('click', () => {
      this._handleLike();
    });

    this._card.querySelector(".card__img").addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }
}