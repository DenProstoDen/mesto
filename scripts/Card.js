export class Card {
  #data;
  #newCard;
  #templateSelector;
  #handleClickLike;
  #handleClickDelete;
  #handleOpenPopup

  constructor({data, handleClickDelete, handleClickLike, handleOpenPopup}, templateSelector) {
    this.#data = data;
    this.#templateSelector = templateSelector
    this.#handleClickLike = handleClickLike;
    this.#handleClickDelete = handleClickDelete;
    this.#handleOpenPopup = handleOpenPopup;
  }


  #getTemplate() {
    return document
      .querySelector(this.#templateSelector)
      .content.querySelector('.card')
      .cloneNode(true);
  }
  createCard = () => {
    this.#newCard = this.#getTemplate();
    const templateImg = this.#newCard.querySelector('.card__img');
    const templateText = this.#newCard.querySelector('.card__text');
    const likeButton = this.#newCard.querySelector('.card__like-button');
    const deleteButton = this.#newCard.querySelector('.card__delete-button');
    
    templateImg.src = this.#data.link;
    templateImg.alt = this.#data.name;
    templateText.textContent = this.#data.name;
 
    likeButton.addEventListener('click', (evt) =>{
      this.#handleClickLike(evt);
    });

    //попап картинка
    templateImg.addEventListener('click', () =>{
      this.#handleOpenPopup(this.#data.name, this.#data.link);
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