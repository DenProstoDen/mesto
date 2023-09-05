import Popup from "./Popup";

export class PopupWithForm {
    constructor({popup, submitter}) {
        super(popup);
        this._submitter = submitter;
        this._form = this._popup.querySelector('.popup__form');
        this._inputList = this._popup.querySelectorAll('.popup__item');
        this._submitButton = this._form.querySelector('.popup__submit-button');
        this._submitButtonText = this._submitButton.textContent;
    }
    _getInputValues() {
        this._inputValues = {};
        this._inputList.forEach(inputElement => this._inputValues[inputElement.name] = inputElement.value);
        return this._inputValues;
    }
    close() {
        super.close();
        this._form.reset();
    }
    setInputValues(data) {
        this._inputList.forEach((inputElement) => {
          inputElement.value = data[inputElement.name];
        })
    }
    renderLoading(isLoading, loadingText='Сохранение...') {
        isLoading
          ?  this._submitButton.textContent = loadingText
          :  this._submitButton.textContent = this._submitButtonText;
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