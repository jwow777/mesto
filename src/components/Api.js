export default class Api {
constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, { method: 'GET', headers: this._headers })      
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, { method: 'GET', headers: this._headers })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

  patchUserInfo(userData) {
    return fetch(`${this._baseUrl}/users/me`, { 
      method: 'PATCH', 
      headers: this._headers, 
      body: JSON.stringify(userData)
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

  postCard(cardData) {
    return fetch(`${this._baseUrl}/cards`, { 
      method: 'POST', 
      headers: this._headers, 
      body: JSON.stringify(cardData)
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, { 
      method: 'DELETE', 
      headers: this._headers
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

  like(cardId) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, { 
      method: 'PUT', 
      headers: this._headers
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

  notLike(cardId) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, { 
      method: 'DELETE', 
      headers: this._headers
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

  patchUserAvatar(userData) {
    return fetch(`${this._baseUrl}/users/me/avatar`, { 
      method: 'PATCH', 
      headers: this._headers, 
      body: JSON.stringify(userData)
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }
}