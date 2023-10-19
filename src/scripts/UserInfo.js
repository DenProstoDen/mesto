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
    setUserInfo({ name, job, avatar }) {
        this._name.textContent = name;
        this._job.textContent = job;
        this._avatar.src = avatar;
    }
}