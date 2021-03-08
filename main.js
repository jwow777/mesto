(()=>{"use strict";var e=document.querySelector(".profile__btn-edit"),t=document.querySelector(".popup_type_edit"),n=document.querySelector(".popup__form_type_edit"),r=document.querySelector(".profile__full-name"),o=document.querySelector(".profile__description"),i=document.querySelector(".profile__avatar-image"),a=document.querySelector(".popup__input_type_name"),c=document.querySelector(".popup__input_type_desc"),u=document.querySelector(".profile__btn-add"),s=document.querySelector(".popup_type_add"),l=document.querySelector(".popup__form_type_add"),f=(document.querySelector(".popup__input_type_title"),document.querySelector(".popup__input_type_link"),document.querySelector(".elements__container")),p=document.querySelector("#card-template"),h=document.querySelector(".popup_overlay_image"),d=document.querySelector(".popup__image"),_=document.querySelector(".popup__description"),y=document.querySelector(".popup_type_avatar"),m=document.querySelector(".popup__form_type_avatar"),v=document.querySelector(".profile__overlay"),b=document.querySelector(".popup_type_delete"),k={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var S=function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._headers=r}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"patchUserInfo",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"postCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"like",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"dislike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"patchUserAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._checkResponse)}}])&&g(t.prototype,n),e}();function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t,n,r,o,i,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._cardSelector=n,this.cardData=t,this._name=this.cardData.name,this._link=this.cardData.link,this._like=this.cardData.likes,this._likes=this.cardData.likes.length,this._cardId=this.cardData._id,this._ownerId=this.cardData.owner._id,this._myId=r,this._handleCardClick=o.bind(this),this._handleCardDelete=i.bind(this),this._handleCardLike=a.bind(this)}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return this._cardSelector.content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".element__image"),this._locationName=this._element.querySelector(".element__location"),this._likeCounter=this._element.querySelector(".element__like-counter"),this._likeButton=this._element.querySelector(".element__btn-like"),this._deleteButton=this._element.querySelector(".element__btn-delete"),this._ownerId!==this._myId&&(this._deleteButton.remove(),delete this._deleteButton),this._cardImage.alt=this._name,this._cardImage.src=this._link,this._locationName.textContent=this._name,this._likeCounter.textContent=this._likes,this.handleLikeButton(this.cardData),this._setEventListeners(),this._element}},{key:"isLikedByMe",value:function(e){var t=this;return e.likes.some((function(e){return e._id===t._myId}))}},{key:"handleLikeButton",value:function(e){this.isLikedByMe(e)?this._likeButton.classList.add("element__btn-like_active"):this._likeButton.classList.remove("element__btn-like_active"),this._likeCounter.textContent=e.likes.length}},{key:"_setEventListeners",value:function(){var e=this;this._likeButton.addEventListener("click",(function(){e._handleCardLike()})),this._ownerId===this._myId&&this._deleteButton.addEventListener("click",this._handleCardDelete),this._cardImage.addEventListener("click",this._handleCardClick)}}])&&E(t.prototype,n),e}();function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=t,this._container=n}var t,n;return t=e,(n=[{key:"addItemArr",value:function(e){this._container.append(e)}},{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){return t._renderer(e)}))}}])&&L(t.prototype,n),e}();function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j=function(){function e(t,n){var r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=n,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._inputList=function(e){if(Array.isArray(e))return O(e)}(r=this._formSelector.querySelectorAll(this._inputSelector))||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(r)||function(e,t){if(e){if("string"==typeof e)return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?O(e,t):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),this._buttonElement=this._formSelector.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e){var t=this._formSelector.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),t.classList.add(this._errorClass),t.textContent=e.validationMessage}},{key:"_hideInputError",value:function(e){var t=this._formSelector.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled=!0):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"resetValidation",value:function(){var e=this;this._inputList.forEach((function(t){return e._hideInputError(t)})),this._toggleButtonState()}},{key:"enableValidation",value:function(){this._formSelector.addEventListener("submit",(function(e){return e.preventDefault()})),this._setEventListeners()}}])&&I(t.prototype,n),e}();function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=t,this._handleEscClose=this._handleEscClose.bind(this),this._closeByOverlay=this._closeByOverlay.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupSelector.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose),document.addEventListener("click",this._closeByOverlay)}},{key:"close",value:function(){this._popupSelector.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose),document.removeEventListener("click",this._closeByOverlay)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_closeByOverlay",value:function(e){e.target===this._popupSelector&&this.close()}},{key:"setEventListeners",value:function(){this._popupSelector.querySelector(".popup__btn-close").addEventListener("click",this.close.bind(this))}}])&&q(t.prototype,n),e}();function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function D(e,t,n){return(D="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=x(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function U(e,t){return!t||"object"!==R(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var V=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(r);if(o){var n=x(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return U(this,e)});function a(e,t){var n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._popupForm=n._popupSelector.querySelector(".popup__form"),n._inputList=function(e){if(Array.isArray(e))return B(e)}(r=n._popupForm.querySelectorAll(".popup__input"))||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(r)||function(e,t){if(e){if("string"==typeof e)return B(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?B(e,t):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n._handleSubmitForm=t,n._submitTextLoading=n._popupForm.querySelector(".popup__button"),n._submitTextDefault=n._submitTextLoading.textContent,n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"close",value:function(){D(x(a.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"renderLoader",value:function(e){this._submitTextLoading.textContent=e?"Сохранение...":this._submitTextDefault}},{key:"setEventListeners",value:function(){var e=this;D(x(a.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitForm(e._getInputValues())}))}}])&&T(t.prototype,n),a}(P);function F(e){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N(e,t,n){return(N="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=G(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function J(e,t){return(J=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function $(e,t){return!t||"object"!==F(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function G(e){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var H=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&J(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=G(r);if(o){var n=G(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return $(this,e)});function a(e,t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(r=i.call(this,e))._popupImage=t,r._popupDescription=n,r}return t=a,(n=[{key:"open",value:function(e){this._popupImage.src=e._link,this._popupImage.alt=e._name,this._popupDescription.textContent=e._name,N(G(a.prototype),"open",this).call(this)}}])&&M(t.prototype,n),a}(P);function z(e){return(z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function K(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Q(e,t,n){return(Q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Y(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function W(e,t){return(W=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function X(e,t){return!t||"object"!==z(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Y(e){return(Y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&W(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Y(r);if(o){var n=Y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return X(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._popupForm=n._popupSelector.querySelector(".popup__form"),n._handleSubmitForm=t,n}return t=a,(n=[{key:"open",value:function(e){Q(Y(a.prototype),"open",this).call(this),this.cardId=e._cardId,this.element=e._element}},{key:"setEventListeners",value:function(){Q(Y(a.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",this._handleSubmitForm)}}])&&K(t.prototype,n),a}(P);function ee(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var te=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t,this._about=n,this._avatar=r}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent}}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._about.textContent=e.about,this._id=e._id,this._avatar.src=e.avatar}},{key:"getId",value:function(){return this._id}}])&&ee(t.prototype,n),e}();function ne(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var re=new S({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-20",headers:{authorization:"5e9e6ed0-2e3b-49ef-bceb-982a1b5626d9","Content-Type":"application/json"}}),oe=function(e){return new w(e,p,de.getId(),(function(){he.open(this)}),(function(){fe.open(e)}),(function(){var t=this;this.isLikedByMe(e)?re.dislike(e._id).then((function(e){t.cardData.likes=e.likes,t.handleLikeButton(e)})).catch((function(e){return console.log(e)})):re.like(e._id).then((function(e){t.cardData.likes=e.likes,t.handleLikeButton(e)})).catch((function(e){return console.log(e)}))})).generateCard()},ie=new C((function(e){var t=oe(e);ie.addItemArr(t)}),f),ae=new j(k,n),ce=new j(k,l),ue=new j(k,m),se=new V(t,(function(e){var t=this;this.renderLoader(!0),re.patchUserInfo(e).then((function(e){de.setUserInfo(e),se.close()})).catch((function(e){return console.log(e)})).finally((function(){return t.renderLoader(!1)}))})),le=new V(s,(function(e){var t=this;this.renderLoader(!0),re.postCard(e).then((function(e){var t=oe(e);ie.addItem(t),le.close()})).catch((function(e){return console.log(e)})).finally((function(){return t.renderLoader(!1)}))})),fe=new Z(b,(function(e){e.preventDefault(),re.deleteCard(fe.cardId).then((function(){fe.element.remove(),delete fe.element,fe.close()})).catch((function(e){return console.log(e)}))})),pe=new V(y,(function(e){var t=this;this.renderLoader(!0),re.patchUserAvatar(e).then((function(e){de.setUserInfo(e),pe.close()})).catch((function(e){return console.log(e)})).finally((function(){return t.renderLoader(!1)}))})),he=new H(h,d,_),de=new te(r,o,i),_e=function(){se.open();var e=de.getUserInfo();a.value=e.name,c.value=e.about,ae.resetValidation()},ye=function(){le.open(),ce.resetValidation()},me=function(){pe.open(),ue.resetValidation()};Promise.all([re.getUserInfo(),re.getInitialCards()]).then((function(t){var n,r,o=(r=2,function(e){if(Array.isArray(e))return e}(n=t)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(n,r)||function(e,t){if(e){if("string"==typeof e)return ne(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ne(e,t):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[0],a=o[1];de.setUserInfo(i),ie.renderItems(a),se.setEventListeners(),e.addEventListener("click",_e),le.setEventListeners(),u.addEventListener("click",ye),pe.setEventListeners(),v.addEventListener("click",me),fe.setEventListeners()})).catch((function(e){return console.log(e)})),ae.enableValidation(),ce.enableValidation(),ue.enableValidation(),he.setEventListeners()})();