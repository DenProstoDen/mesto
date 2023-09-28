import { Popup } from "../scripts/Popup.js";

export class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._pictureCaption = this._popup.querySelector('.popup-img__text');
    this._pictureImage = this._popup.querySelector('.popup-image__picture');
  }

  open(name, link) {
    this._pictureImage.src = link;
    this._pictureImage.alt = name;
    this._pictureCaption.textContent = name;
    super.open();
  }
}
