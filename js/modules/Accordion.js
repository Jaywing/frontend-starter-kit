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
      accordionItem: this.el.querySelectorAll(".accordion__item"),
      accordionParent: this.el.querySelectorAll(".accordion__toggle")
    };
  }

  handleParents(el, tag) {
    while (el.parentNode) {
      el = el.parentNode;
      if (el.classList.contains(tag)) return el;
    }
    return null;
  }

  addEventListeners() {
    for (let i = 0, len = this.dom.accordionParent.length; i < len; i++) {
      this.dom.accordionParent[i].addEventListener("click", e => {
        e.preventDefault();
        this.handleParentClick(e, this.dom.accordionParent[i]);
      });
    }
  }

  handleParentClick(e, itemParent) {
    let item = this.handleParents(itemParent, "accordion__item");
    if (item) {
      if (item.classList.contains("is-active")) {
        item.classList.remove("is-active");
      } else {
        for (let i = 0, len = this.dom.accordionItem.length; i < len; i++) {
          this.dom.accordionItem[i].classList.remove("is-active");
        }
        item.classList.add("is-active");
      }
    }
  }
}
