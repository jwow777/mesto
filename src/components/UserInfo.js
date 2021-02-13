export default class UserInfo {
  constructor({ userName, selfInfo, avatar }) {
    this._userName = userName;
    this._selfInfo = selfInfo;
    this._avatar = avatar;
  }

  getUserInfo() {
    const userInfo = {
      userName: this._userName.textContent,
      selfInfo: this._selfInfo.textContent
    };
    return userInfo;
  }

  setUserInfo(userData) {
    this._userName.textContent = userData.name;
    this._selfInfo.textContent = userData.about;
    this._id = userData._id;
    this._avatar.src = userData.avatar;
  }

  getId() {
    return this._id;
  }
}