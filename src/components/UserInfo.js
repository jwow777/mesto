export default class UserInfo {
  constructor(name, about, avatar) {
    this._name = name;
    this._about = about;
    this._avatar = avatar;
  }

  getUserInfo() {
    const userInfo = {
      name: this._name.textContent,
      about: this._about.textContent
    };
    return userInfo;
  }

  setUserInfo(userDataFromServer) {
    this._name.textContent = userDataFromServer.name;
    this._about.textContent = userDataFromServer.about;
    this._id = userDataFromServer._id;
    this._avatar.src = userDataFromServer.avatar;
  }

  getId() {
    return this._id;
  }
}