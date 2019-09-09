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
      menuParent: this.el.querySelectorAll(
        ".is-parent-button, .nav--tabs .nav__link"
      )
    };
  }

  addEventListeners() {
    for (let i = 0, len = this.dom.menuParent.length; i < len; i++) {
      this.dom.menuParent[i].addEventListener("click", e => {
        e.preventDefault();
        this.handleParentClick(e);
      });
    }
  }

  handleParentClick(e) {
    var getClosest = function(elem, selector) {
      for (; elem && elem !== document; elem = elem.parentNode) {
        if (elem.matches(selector)) return elem;
      }
      return null;
    };

    let clickedContainer = getClosest(e.target, ".nav");
    let clickedParent = getClosest(e.target, ".nav__item");

    if (clickedParent.classList.contains("is-active")) {
      clickedParent.classList.remove("is-active");
      return;
    }

    if (clickedContainer.classList.contains("nav--tabs")) {
      this.handleTabs(e.target);
    }

    let items = clickedParent.parentNode.querySelectorAll(".nav__item");

    for (let i = 0, len = items.length; i < len; i++) {
      items[i].classList.remove("is-active");
    }

    clickedParent.classList.add("is-active");
  }

  handleTabs(elem) {
    let target = elem.getAttribute("href").substr(1);
    let tab = document.getElementById(target);
    let tabs = tab.parentNode.querySelectorAll(".tab-pane");
    for (let i = 0, len = tabs.length; i < len; i++) {
      tabs[i].classList.remove("is-active");
    }
    tab.classList.add("is-active");
  }
}
