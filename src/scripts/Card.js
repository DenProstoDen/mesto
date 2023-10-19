export class Card {
  constructor(data, templateSelector, handleCardClick, openDeletePopup, like, removeLike) {
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
    this._like = like;
    this._removeLike = removeLike; 
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
    this._likeButton = this._card.querySelector(".card__like-button");
    this._setLikesState(this._likes);
    this._showCardButton();
    this._setEventListeners();

    return this._card;
  }

  _handleToggleLike() {
    if(this.hasLike) {
      this._removeLike(this._ID)
      .then((updatedCard)=>{
        this._setLikesState(updatedCard.likes)
      })
      .catch(error => console.error(`Ошибка лайкa ${error}`))
    }
    else {
        this._like(this._ID)
        .then((updatedCard)=>{
          this._setLikesState(updatedCard.likes)
        })
        .catch(error => console.error(`Ошибка лайкa ${error}`))
    }
  }
  _handleCardTrash() {
    this._openDeletePopup({card: this, cardID: this._ID})
  }
  _setHasLike() {
    const hasLike = this._likes.some((card) => {
        return card._id === this._meID
      })
      this.hasLike = hasLike;
      if (hasLike) {
        this._likeButton.classList.add("card__like-button_active");
      }
      else {
        this._likeButton.classList.remove("card__like-button_active");
      }
    }

  _setLikesState(likes) {
    this._likes = likes;
    this._likesNumber = likes.length;
    this._card.querySelector(".card__like-numbers").textContent = this._likesNumber;
    this._setHasLike()
  }
  _showCardButton () {
    if (this._ownerID === this._meID) {
      this._card.querySelector(".card__delete-button").style.display = 'block'
    }
    else {
      this._card.querySelector(".card__delete-button").style.display = 'none'
    }
  }
  cardTrash() {
    this._card.remove();
    this._card = null;
  }

  _setEventListeners() {
    this._card.querySelector(".card__delete-button").addEventListener('click', () => {
      this._handleCardTrash();
    });

    this._likeButton.addEventListener('click', () => {
      this._handleToggleLike();
    });

    this._card.querySelector(".card__img").addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }
}