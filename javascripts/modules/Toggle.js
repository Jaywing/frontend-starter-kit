export default class Toggle {
  constructor(el, options) {
    const defaults = {
      activeClass: "is-active",
      target: ""
    };
    this.el = el;
    this.settings = Object.assign(defaults, options);
    this.init();
  }

  init() {
    const toggle = () => {
      let target = this.settings.target;
      if (target === "") {
        this.el.classList.toggle(this.settings.activeClass);
      } else {
        if (typeof target === "string") {
          if (target === "parent") {
            this.el.parentNode.classList.toggle(this.settings.activeClass);
          } else {
            document
              .querySelector(target)
              .classList.toggle(this.settings.activeClass);
          }
        }
      }
    };

    this.el.addEventListener("click", toggle);
  }
}
