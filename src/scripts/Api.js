const onError = (response) => {
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(`Ошибка ${response.status} ${response.statusText}`);
    }
  }

export default class Api {
    constructor({baseUrl, headers}) {
        this._url = baseUrl;
        this._headers = headers;
    }

    getName() {
        return fetch(`${this._url}/users/me `, {
            headers: this._headers,
            method: 'GET',
          })
          .then((response) => onError(response))
    }

    // /cards массив карточек с сервера
    getCard() {
        return fetch(`${this._url}/cards`, {
            headers: this._headers,
            method: 'GET',
        })
        .then((response) => onError(response))
    }

    editProfileInfo({name, about}) {
        return fetch(`${this._url}/users/me`, {
            headers: this._headers,
            method: 'PATCH',
            body: JSON.stringify({
                name,
                about
              })
        })
        .then((response) => onError(response))
    }

    addCard({name, link}) {
        return fetch(`${this._url}/cards`, {
          headers: this._headers,
          method: 'POST',
          body: JSON.stringify({ 
            name,
            link })
        })
        .then((response) => onError(response))
    }
}