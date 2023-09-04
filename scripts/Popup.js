export default class Popup {
    constructor(popup) {
        this._popup = popup;
        this._closeBtn = this._popup.querySelector('');
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
        if(e.key === 'Escape') this.close();
    }
}