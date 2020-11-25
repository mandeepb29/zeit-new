import {controller} from '../base';

export const toggleFixedBtn = () => {
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
}

export const toggleHeader = () =>{
    //adding and removing class from navbar
new ScrollMagic.Scene({
    triggerElement: ".domain-section",
    triggerHook: 0,
  })
    .on("start", function () {
      $(".navbar").toggleClass("navbar-black");
      $(".floating-contact-btn").toggleClass("is-black");
    })
    .addTo(controller);
  
  new ScrollMagic.Scene({
    triggerElement: ".team-section",
    triggerHook: 0,
  })
    .on("start", function () {
      $(".navbar").toggleClass("navbar-black");
      $(".floating-contact-btn").toggleClass("is-black");
    })
    .addTo(controller);
  
  new ScrollMagic.Scene({
    triggerElement: ".footer",
    triggerHook: 0,
  })
    .on("start", function () {
      $(".navbar").toggleClass("navbar-black");
      $(".floating-contact-btn").toggleClass("is-black");
    })
    .addTo(controller);
} 