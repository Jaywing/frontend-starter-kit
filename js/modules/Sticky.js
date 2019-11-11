import stickybits from "stickybits";

export default class Sticky {
  constructor(el, options) {
    const defaults = {
      stickyItem: ".sticky__item"
    };
    this.el = el;
    this.settings = Object.assign(defaults, options);

    const stickybit = stickybits(this.settings.stickyItem);
  }
}
