export default class Accordion {
  constructor(el) {
    this.el = el;
    this.init();
  }
  init() {
    this.dom = this.cacheDom();
    this.addEventListeners();
  }

  cacheDom() {
    return {
      accordionParent: this.el.querySelectorAll(".c-accordion__toggle")
    };
  }

  addEventListeners() {
    for (let i = 0, len = this.dom.accordionParent.length; i < len; i++) {
      this.dom.accordionParent[i].addEventListener("click", e => {
        e.preventDefault();
        this.handleParentClick(e, i, this.dom.accordionParent[i].parentNode);
      });
    }
  }

  handleParentClick(e, item, itemParent) {
    if (itemParent.classList.contains("is-active")) {
      itemParent.classList.remove("is-active");
    } else {
      itemParent.classList.add("is-active");
    }
  }
}
