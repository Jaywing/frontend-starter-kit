export default class Modal {
  constructor(el, options) {
    const defaults = {
      name: "Cookie"
    };
    this.el = el;
    this.settings = Object.assign(defaults, options);
    this.init();
  }

  init() {
    this.dom = this.cacheDom();
    this.addEventListeners();
    this.cookieName = this.settings.name;
    this.activeCookie = this.getCookie(this.cookieName);

    if (this.activeCookie == "true") {
      this.el.classList.remove("is-active");
    }
  }

  cacheDom() {
    return {
      button: this.el.querySelector(".js-modal-close")
    };
  }

  addEventListeners() {
    this.dom.button.addEventListener("click", e => {
      this.handleCookieMessageClosed();
    });
  }

  handleCookieMessageClosed() {
    this.setTheCookie(this.settings.name, true, 60);
    this.el.classList.remove("is-active");
  }

  setTheCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");

    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
}
