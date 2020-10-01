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