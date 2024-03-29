export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._closeByEsc = this._closeByEsc.bind(this);    
    }
    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._closeByEsc);
    }
    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._closeByEsc);
    }
    _closeByEsc = e => {
        if(e.key === 'Escape') {
            this.close();
        }
    }
    setEventListeners() {
        this._popup.addEventListener('click', (evt) => {
            if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close-button')) {
                this.close();
            }
        });
    }
}
