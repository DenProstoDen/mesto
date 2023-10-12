import { Popup } from "../scripts/Popup.js";

export class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
  }

  open(name, link) {
    const pictureCaption = this._popup.querySelector(".popup-image__text");
    const imgElementPopup = this._popup.querySelector(".popup-image__picture");
    imgElementPopup.alt = name;
    pictureCaption.textContent = name;
    imgElementPopup.src = link;
    super.open();
  }
}
