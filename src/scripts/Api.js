
// export class Api {
//     constructor ({url, headers}) {
//         this._url = url;
//         this._headers = headers;
//         this._authorization = headers.authorization;
//     }
//     #onResponce(res) {
//         return res.ok ? res.json() : res.json().then(errData => Promise.reject(errData))
//     }    
//     getUserInfo() {
//         return fetch(`${this._url}/users/me`, {
//              headers: this._headers,
//         })
//         .then(this.#onResponce)
//     }
    
//     setUserInfo(fullName, aboutMe) {
//         return fetch(`${this._url}/users/me`, {
//             method: 'PATCH',
//             headers: this._headers,
//             body: JSON.stringify({
//                 name: fullName,
//                 about: aboutMe
//             })
//         })
//         .then(this._getResponseData)
//     }
    
    
//     getTasks() {
//         return fetch(`${this._url}/cards/`, {
//           headers: this._headers,
//           method: 'GET',
//         })
//         .then(this.#onResponce)
//     }
    
//     getTasksById(idTask) {
//         return fetch(`${this._url}/cards/${idTask}`, {
//           headers: this._headers,
//           method: 'GET',
//         })
//         .then(this.#onResponce)
//     }
    
//     deleteCardID(cardID) {
//         return fetch(`${this._url}/cards/${cardID}`, {
//             method: 'DELETE',
//             headers: {
//                 authorization: this._authorization,
//             }
//         })
//         .then(this.#onResponce)
//     }
    
    
//     addTask(data) {
//         return fetch(`${this._url}/cards/`, {
//           headers: this._headers,
//           method: 'POST',
//           body: JSON.stringify(data)
//         })
//         .then(this.#onResponce)
//     }

//     addLike(cardID) {
//         return fetch(`${this._url}/cards/${cardID}/likes`, {
//             method: 'PUT',
//             headers: {
//                 authorization: this._authorization,
//             }
//         })
//         .then(this.#onResponce)
//     }
    
//     deleteLike(cardID) {
//         return fetch(`${this._url}/cards/${cardID}/likes`, {
//             method: 'DELETE',
//             headers: {
//                 authorization: this._authorization,
//             }
//         })
//         .then(this.#onResponce)
//     }
    
//     setInfoAvatar(data) {
//       return fetch(`${this._url}/users/me/avatar`, {
//           method: 'PATCH',
//           headers: this._headers,
//           body: JSON.stringify({
//               avatar: data.editAvatar,
//           })
//       })
//       .then(this.#onResponce)
//     }
// }