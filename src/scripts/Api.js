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

    addCard(data) {
        return fetch(`${this._url}/cards`, {
          headers: this._headers,
          method: 'POST',
          body: JSON.stringify({ 
            name: data.name,
            link: data.link })
        })
        .then((response) => onError(response))
  }
    changeAvatar(data) {
      return fetch(`${this._url}/users/me/avatar`, {
        headers: this._headers,
        method: 'PATCH',
        body: JSON.stringify({
          avatar: data.avatar
          })
    })
    .then((response) => onError(response))
  }
    deleteCard(cardId) {
      return fetch(`${this._url}/cards/${cardId} `, {
      headers: this._headers,
      method: 'DELETE',
    })
    .then((response) => onError(response))
  }
}