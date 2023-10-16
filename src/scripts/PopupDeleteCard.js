// import { Popup } from "../scripts/Popup.js";

// export default class PopupDeleteCard extends Popup {
//     constructor({handleFormSubmit}, popupSelector) {
//         super(popupSelector);
//         this._handleFormSubmit = handleFormSubmit;
//         this._form = this._popup.querySelector('.popup__form_delete');
//     }
//     setEventListeners() {
//         super.setEventListeners();
//         this._form.addEventListener('submit', (evt) => {
//             evt.preventDefault();
//             this.submitBtn.textContent = `${this.submitBtn.textContent}...`
//             this._handleFormSubmit({card: this._card, cardID: this._cardID});
//         })
//       }
//     open = ({card, cardID}) => {
//         super.open();
//         this._card = card;
//         this._cardID = cardID;
//     }
// }