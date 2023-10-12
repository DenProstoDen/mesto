export class UserInfo {
    constructor ({userName, userJob}) {
        this._name = document.querySelector(userName);
        this._job = document.querySelector(userJob);
    }
    getUserInfo() {
        const userData = {
            name: this._name.textContent,
            job: this._job.textContent,
        };
        return userData;
    }
    setUserInfo(userData) {
        this._name.textContent = userData.name;
        this._job.textContent = userData.job;
    }
}