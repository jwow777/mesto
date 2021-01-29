export default class UserInfo {
  constructor({ userName, selfInfo }) {
    this._userName = userName;
    this._selfInfo = selfInfo;
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
    this._selfInfo.textContent = userData.desc;
  }
}