import { Popup } from "../scripts/Popup";

export  class PopupDeleteCard extends Popup {
    constructor (popupSelector, submitFunction) {
    super(popupSelector);
    this._submitFunction = submitFunction;
    this._form = this._popup.querySelector('.popup__form');
    this._popupDelete = document.querySelector('.popup-delete');
    this._popupDeleteButton = this._popupDelete.querySelector('.popup__delete-btn');
    }
    _handleDelete() {
        this._popupDelete.classList.add('popup_opened');
        this._popupDeleteButton.addEventListener("click", () => {
           this._card.remove();
           this._card = null;
           this._popupDelete.classList.remove('popup_opened');
        })
    }
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
            this._submitFunction({card: this._card, cardID: this._cardID});
        })
    }
    open = ({card, cardID}) => {
        super.open();
        this._card = card;
        this._cardID = cardID;
    }
}