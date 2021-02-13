export default class Section {
  constructor({ renderer }, cardsContainer) {
    this._renderer = renderer;
    this._container = cardsContainer;
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