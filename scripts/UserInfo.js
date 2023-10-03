export class UserInfo {
    constructor (userDataSelectors) {
        this._name = document.querySelector(userDataSelectors.userName);
        this._job = document.querySelector(userDataSelectors.userJob);
    }
    getUserInfo() {
        const userInfo = {
            name: this._name.textContent,
            description: this._job.textContent,
        };
        return userInfo;
    }
    setUserInfo({name, job}) {
        this._name.textContent = name;
        this._job.textContent = job;
    }
}