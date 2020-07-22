
export default class Api {
    constructor(options) {
        this._baseurl = options.baseUrl;
        this._headers = options.headers;
    }

    _handleResponse(response) {
        if (response.ok) {
            return response.json();
        } else {
            console.log('_handleResponse rejection')
            return Promise.reject(response.statusText)
        }
    }

    _handleResponseError(err) {
        console.log(err)
    }

    getProfileData() {
        return fetch(`${this._baseurl}/users/me`, { headers: this._headers })
            .then(this._handleResponse)
            .catch(this._handleResponseError)
    }

    sendProfileData(data) {
        return fetch(`${this._baseurl}/users/me`, {
            headers: this._headers,
            method: 'PATCH',
            body: JSON.stringify(data)
        })
            .then(this._handleResponse)
            .catch(this._handleResponseError)
    }

    getCardsData() {
        return fetch(`${this._baseurl}/cards`, { headers: this._headers })
            .then(this._handleResponse)
            .catch(this._handleResponseError)
    }

    sendCardData(data) {
        return fetch(`${this._baseurl}/cards`, {
            headers: this._headers,
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(this._handleResponse)
            .catch(this._handleResponseError)
    }

    likeCard(id) {
        return fetch(`${this._baseurl}/cards/likes/${id}`, {
            headers: this._headers,
            method: 'PUT'
        })
            .then(this._handleResponse)
            .catch(this._handleResponseError)
    }

    unlikeCard(id) {
        return fetch(`${this._baseurl}/cards/likes/${id}`, {
            headers: this._headers,
            method: 'DELETE'
        })
            .then(this._handleResponse)
            .catch(this._handleResponseError)
    }

    deleteCard(id) {
        return fetch(`${this._baseurl}/cards/${id}`, {
            headers: this._headers,
            method: 'DELETE'
        })
            .then(this._handleResponse)
            .catch(this._handleResponseError)
    }

    changeAvatar({link}) {
        return fetch(`${this._baseurl}/users/me/avatar`, {
            headers: this._headers,
            method: 'PATCH',
            body: JSON.stringify({
                avatar: link
            })
        })
            .then(this._handleResponse)
            .catch(this._handleResponseError)
    }
}
