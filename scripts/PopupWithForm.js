import { Popup } from "../scripts/Popup.js";

export class PopupWithForm extends Popup {
  constructor({popupSelector, submitter}) {
    super(popupSelector);
    this._submitter = submitter;
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = this._popup.querySelectorAll('.popup__input');
    // this. _popupButton = this._form.querySelector('.popup__save-button');
    // this._submitButtonText = this._submitButton.textContent;
  }
  _getInputValues() {
    this._inputValues = {};
    this._inputList.forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return this._inputValues;
  }

  close() {
    super.close();
    this._form.reset();
  }

  setEventListeners() {
    this._form.addEventListener('submit', evt => {
      evt.preventDefault();
      const data = this._getInputValues();
      this._submitter(data);
    });
    super.setEventListeners();
  }
}