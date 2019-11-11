import LazyLoad from "vanilla-lazyload";

export default class Slider {
  constructor(el, options) {
    const defaults = {
      type: false,
      slidesToShow: false,
      slidesToShowMd: false
    };

    this.el = el;
    this.settings = Object.assign(defaults, options);
    this.init();
  }

  init() {
    console.log(`${this} has initialised`);
    this.dom = this.cacheDom();

    const lazyLoadInstance = new LazyLoad({
      elements_selector: ".lazy"
    });

    // Make the slider
    this.makeSlider();
    if (!Element.prototype.matches) {
      Element.prototype.matches = Element.prototype.msMatchesSelector;
    }
  }

  cacheDom() {
    return {
      slides: this.el.querySelector(".slider__slides"),
      slide: this.el.querySelectorAll(".slider__slide"),
      controls: this.el.querySelector(".slider__controls"),
      nextButton: this.el.querySelector(".slider__next"),
      previousButton: this.el.querySelector(".slider__previous"),
      pips: this.el.querySelector(".slider__pips")
    };
  }

  makeSlider() {
    let sliderNum = 0;
    let direction = 1;
    let slidesTotal = this.dom.slide.length;
    let slideHeight = this.dom.slide[0].querySelector("img").offsetHeight;

    el => {
      console.log("Loaded", el);
    };
    this.el.style.minHeight = slideHeight;

    for (let i = 0; i < slidesTotal; i++) {
      if (
        slidesTotal > 1 &&
        this.dom.slide[i].classList.contains("is-active")
      ) {
        sliderNum = i;
      }

      // Create pips
      if (slidesTotal > 1) {
        if (i == 0) {
          this.dom.pips.innerHTML += `<div class="slider__pip is-active"></div>`;
        } else {
          this.dom.pips.innerHTML += `<div class="slider__pip"></div>`;
        }
      }
    }

    if (slidesTotal == 1) {
      this.dom.controls.style.display = "none";
    }

    let slides = Array.from(this.el.querySelector(".slider__pips").children);

    const slideForward = () => {
      direction = 1;
      sliderNum += 1;
      if (sliderNum >= slidesTotal) sliderNum = 0;
      this.changeSlide(sliderNum, direction);
    };

    const slideBackward = () => {
      direction = 0;
      sliderNum -= 1;
      if (sliderNum < 0) sliderNum = slidesTotal - 1;
      this.changeSlide(sliderNum, direction);
    };

    const setSlide = event => {
      direction = 1;
      if (!event.target.matches("div.slider__pip")) return;
      let slide = event.target;
      let prevSlide = sliderNum;
      sliderNum = slides.indexOf(slide);
      if (prevSlide > sliderNum) {
        direction = 0;
      }

      this.changeSlide(sliderNum, direction);
    };

    this.dom.nextButton.addEventListener("click", slideForward);
    this.dom.previousButton.addEventListener("click", slideBackward);
    this.el.querySelector(".slider__pips").addEventListener("click", setSlide);
  }

  changeSlide(sliderNum, direction) {
    let slidesTotal = this.dom.slide.length;

    if (!this.settings.slidesToShow) {
      for (let i = 0; i < slidesTotal; i++) {
        this.dom.slide[i].classList.remove(
          "is-active",
          "is-active--next",
          "is-active--previous",
          "is-next",
          "is-previous"
        );
      }

      this.dom.slide[sliderNum].classList.add("is-active");
      if (direction == 1)
        this.dom.slide[sliderNum].classList.add("is-active--next");
      if (direction == 0)
        this.dom.slide[sliderNum].classList.add("is-active--previous");
      if (this.dom.slide[sliderNum].nextElementSibling)
        this.dom.slide[sliderNum].nextElementSibling.classList.add("is-next");
      if (this.dom.slide[sliderNum].previousElementSibling)
        this.dom.slide[sliderNum].previousElementSibling.classList.add(
          "is-previous"
        );
    }

    // Set pips state
    this.el
      .querySelector(".slider__pip.is-active")
      .classList.remove("is-active");
    this.el
      .querySelectorAll(".slider__pip")
      [sliderNum].classList.add("is-active");
  }
}
