export class UserInfo {
    constructor (userDataSelectors) {
        this._name = document.querySelector(userDataSelectors.userName);
        this._job = document.querySelector(userDataSelectors.userJob);
        this._avatar = document.querySelector(userDataSelectors.userAvatar);
    }
    getUserInfo() {
        return {
            username: this._username.textContent,
            profession: this._userJob.textContent,
        };
    }
}