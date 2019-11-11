export default class OffCanvas {
  constructor(el, options) {
    const defaults = {};
    this.el = el;
    this.settings = Object.assign(defaults, options);
    this.init();
  }

  init() {}
}
