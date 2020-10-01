//fixed button toggle
new ScrollMagic.Scene({
  triggerElement: ".story-section__intro",
  triggerHook: 0,
})
  .on("start", function () {
    $(".story-section__buttons").toggleClass("show");
  })
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: ".story-section__1",
})
  .on("start", function () {
    $(".story-section__buttons .btn__with-img").toggleClass("show-next-text");
  })
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: ".story-section__5",
})
  .on("start", function () {
    $(".story-section__buttons .btn__with-img").toggleClass("show-next-text");
    $(".story-section__buttons .btn__with-img").toggleClass(
      "show-seemore-text"
    );
  })
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: ".domain-section",
})
  .on("start", function () {
    $(".story-section__buttons").toggleClass("show");
  })
  .addTo(controller);
