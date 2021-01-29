export default class Section {
  constructor({ items, renderer }, cardsContainer) {
    this._renderItems = items;
    this._renderer = renderer;
    this._container = cardsContainer;
  }

  addItem(element) {
    this._container.prepend(element);
  }

  renderItems() {
    this._renderItems.forEach((item) => {
      this._renderer(item);
    });
  }
}