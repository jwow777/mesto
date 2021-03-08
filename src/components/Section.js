export default class Section {
  constructor(renderer, cardsContainer) {
    this._renderer = renderer;
    this._container = cardsContainer;
  }

  addItemArr(element) {
    this._container.append(element);
  }

  addItem(element) {
    this._container.prepend(element);
  }

  renderItems(cardsFromServer) {
    cardsFromServer.forEach(item => this._renderer(item));
  }
}