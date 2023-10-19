export class Card {
  constructor(data, templateSelector, handleCardClick, openDeletePopup) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._likes = data.likes;
    this._likesNumber = data.likes.length;
    this._meID = data.meID;
    this._ID = data._id;
    this._ownerID = data.owner._id;
    this._openDeletePopup = openDeletePopup;
    this._popupDelete = document.querySelector('.popup-delete');
    this._popupDeleteButton = this._popupDelete.querySelector('.popup__delete-btn');
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
    this._card.querySelector('.card__like-numbers').textContent = this._likesNumber;
    this._removeCardButton();
    this._setEventListeners();

    return this._card;
  }

  _handleLike() {
    this._card.querySelector(".card__like-button").classList.toggle("card__like-button_active");
  }

  _handleDelete() {
    this._popupDelete.classList.add('popup_opened');
    this._popupDeleteButton.addEventListener("click", () => {
       this._card.remove();
       this._card = null;
       this._popupDelete.classList.remove('popup_opened');
    })
  }
  _removeCardButton () {
    if (this._ownerID === this._meID) {
      this._card.querySelector(".card__delete-button").style.display = 'block'
    }
    else {
      this._card.querySelector(".card__delete-button").style.display = 'none'
    }
  }

  _handleCardTrash() {
    this._popupDelete.classList.add('popup_opened');
    this._popupDeleteButton.addEventListener("click", () => {
       this._card.remove();
       this._card = null;
       this._popupDelete.classList.remove('popup_opened');
    })
  }
  cardTrash() {
    this._card.remove();
    this._card = null;
}
  _setEventListeners() {
    this._card.querySelector(".card__delete-button").addEventListener('click', () => {
      this._handleCardTrash();
    });

    this._card.querySelector(".card__like-button").addEventListener('click', () => {
      this._handleLike();
    });

    this._card.querySelector(".card__img").addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }
}