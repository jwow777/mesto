export default class Section {
  constructor({ renderer }, cardsContainer) {
    this._renderer = renderer;
    this._container = cardsContainer;
  }

  addItemArr(element) {
    this._container.append(element);
  }

  addItem(element) {
    this._container.prepend(element);
  }

  renderItems(cards) {
    cards.forEach((item) => {
      this._renderer(item);
    });
  }
}