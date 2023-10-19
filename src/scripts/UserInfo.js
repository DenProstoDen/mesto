export class UserInfo {
    constructor (userName, userJob, userAvatar) {
        this._name = document.querySelector(userName);
        this._job = document.querySelector(userJob);
        this._avatar = document.querySelector(userAvatar);
    }
    getUserInfo() {
        return {
            name: this._name.textContent,
            job: this._job.textContent,
            avatar: this._avatar.src,
        };
    }
    setUserInfo(user) {
        this._name.textContent = user.name;
        this._job.textContent = user.job;
        this._avatar.src = avatar;
    }
}