export default class UserInfo {
    constructor (userDataSelectors) {
        this._name = document.querySelector(userDataSelectors.userName);
        this._job = document.querySelector(userDataSelectors.userJob);
        this._avatar = document.querySelector(userDataSelectors.userAvatar);
    }
    getUserInfo() {
        const userData = { name: this._name.textContent, about: this._job.textContent };
        return userData;
    }
}