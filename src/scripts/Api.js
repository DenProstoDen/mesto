export class Api {
    constructor ({url, headers}) {
        this._url = url;
        this._headers = headers;
        this._authorization = headers.authorization;
    }
}