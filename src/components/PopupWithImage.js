import { Popup } from "../components/Popup.js";

export class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._pictureCaption = this._popup.querySelector(".popup-image__text");
    this._imgElementPopup = this._popup.querySelector(".popup-image__picture");
  }

  open(name, link) {
    this._imgElementPopup.alt = name;
    this._pictureCaption.textContent = name;
    this._imgElementPopup.src = link;
    super.open();
  }
}
