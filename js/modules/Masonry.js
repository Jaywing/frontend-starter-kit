const imagesLoaded = require("imagesloaded");
const masonryLayout = require("masonry-layout");

export default class Masonry {
  constructor(el) {
    this.el = el;
    const grid = this.el;

    imagesLoaded(grid, function() {
      const msnry = new masonryLayout(grid, {
        columnWidth: ".masonry__sizer",
        itemSelector: ".masonry__item",
        percentPosition: true,
        transitionDuration: 0
      });
    });
  }
}
