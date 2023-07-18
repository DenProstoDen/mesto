export class Card {
  #data;
  #newCard;
  #templateSelector;
  #handleClickLike;
  #handleClickDelete;

  constructor({data, handleClickDelete, handleClickLike}, templateSelector) {
    this.#data = data;
    this.#templateSelector = templateSelector
    this.#handleClickLike = handleClickLike;
    this.#handleClickDelete = handleClickDelete;
  }


  #getTemplate() {
    return document
      .querySelector(this.#templateSelector)
      .content.querySelector('.card')
      .cloneNode(true);
  }
  #closePopup = (modal) => {
    modal.classList.remove('popup_opened');
    document.removeEventListener('keydown', this.#closeByEsc);
  }

  #closeByEsc = (evt) => {
    if (evt.key === "Escape") {
      const openedPopup = document.querySelector('.popup_opened');
      this.#closePopup(openedPopup); 
    }
  }

  #closeButtonClick = (evt) => {
    const target = evt.target;
    const currentPopup = target.closest('.popup');
    if (target.classList.contains('popup__close-button') || target === currentPopup) {
      this.#closePopup(currentPopup);
    }
  }
  #openPopup = (modal) => {
    const root = document.querySelector('.root');
    modal.classList.add('popup_opened');
    document.addEventListener('keydown', this.#closeByEsc);
    root.addEventListener('click', this.#closeButtonClick);
  }

  createCard = () => {
    this.#newCard = this.#getTemplate();
    const popupImgNode = document.querySelector('.img-add');
    const templateImg = this.#newCard.querySelector('.card__img');
    const templateText = this.#newCard.querySelector('.card__text');
    const likeButton = this.#newCard.querySelector('.card__like-button');
    const deleteButton = this.#newCard.querySelector('.card__delete-button');
    const popupPlaceNode = document.querySelector('.popup_place-add');
    const popupImgPicture = document.querySelector('.popup-image__picture');
    const popupImgText = document.querySelector('.popup-image__text');
    
    templateImg.src = this.#data.link;
    templateImg.alt = this.#data.name;
    templateText.textContent = this.#data.name;
 
    const setImgValue = () => {
      popupImgPicture.src = this.#data.link;
      popupImgPicture.alt = this.#data.name;
      popupImgText.textContent = this.#data.name;
    };
  
    likeButton.addEventListener('click', function(evt){
      evt.target.classList.toggle('card__like-button_active');
    })
    //попап картинка
    templateImg.addEventListener('click', () =>{
      setImgValue();
      this.#openPopup(popupImgNode);
    });

    deleteButton.addEventListener('click', () => {
      this.#handleClickDelete(this.#newCard);
    });
    return this.#newCard;
  }
  getView() {
    return this.#newCard;
  }
  
}