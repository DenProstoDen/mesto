export default class Api {
  constructor({baseUrl, headers}) {
    this._url = baseUrl;
    this._headers = headers;
  }
  _checkResponse(response) {
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(`Ошибка ${response.status} ${response.statusText}`);
    }
  }
  getName() {
    return fetch(`${this._url}/users/me `, {
      headers: this._headers,
      method: 'GET',
    })
    .then((response) => this._checkResponse(response))
  }
    getCard() {
    return fetch(`${this._url}/cards`, {
        headers: this._headers,
        method: 'GET',
      })
    .then((response) => this._checkResponse(response))
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
    .then((response) => this._checkResponse(response))
  }

  addCard(data) {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({ 
        name: data.name,
        link: data.link })
    })
    .then((response) => this._checkResponse(response))
  }
  changeAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify({
        avatar: data.avatar
      })
    })
    .then((response) => this._checkResponse(response))
  }
    deleteCard(cardId) {
      return fetch(`${this._url}/cards/${cardId} `, {
      headers: this._headers,
      method: 'DELETE',
    })
    .then((response) => this._checkResponse(response))
  }
  addLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes `, {
      headers: this._headers,
      method: 'PUT',
    })
    .then((response) => this._checkResponse(response))
  }
  removeLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes `, {
      headers: this._headers,
      method: 'DELETE',
    })
    .then((response) => this._checkResponse(response))
  }
}