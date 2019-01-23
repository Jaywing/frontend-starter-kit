export default class Nav {
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
      dropdownMenuParent: this.el.querySelectorAll(".is-dropdown-button"),
      accordionMenuParent: this.el.querySelectorAll(".is-accordion-button")
    };
  }

  addEventListeners() {
    for (let i = 0, len = this.dom.dropdownMenuParent.length; i < len; i++) {
      this.dom.dropdownMenuParent[i].addEventListener("click", e => {
        e.preventDefault();
        this.handleParentClick(e, i, this.dom.dropdownMenuParent[i].parentNode);
      });
    }

    for (let i = 0, len = this.dom.accordionMenuParent.length; i < len; i++) {
      this.dom.accordionMenuParent[i].addEventListener("click", e => {
        e.preventDefault();
        this.handleParentClick(
          e,
          i,
          this.dom.accordionMenuParent[i].parentNode
        );
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
