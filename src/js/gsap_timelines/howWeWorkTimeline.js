//-------------------------------------------------------------------------//
//HOW WE WORK SECTION INTRO TIMELINE
//-------------------------------------------------------------------------//
var howWeWorkTimeline = gsap.timeline({
    defaults: { opacity: 0, duration: 0.5 },
  });
  howWeWorkTimeline
    .from(".bg-element__downwave", {
      opacity: 1,
      y: "100%",
    })
    .from(".bg-element__plant", {
      duration: 0.5,
      y: "100%",
      ease: "back.out(1.7)",
    })
    .from(
      ".bg-element__light",
      {
        duration: 1,
        y: "-100%",
        ease: "back.out(1)",
      },
      "-=1"
    )
  
    .from(
      ".bg-element__clock",
      {
        opacity: 0,
      },
      "-=0.1"
    )
    .from(
      ".intro-heading__primary--small",
      {
        y: 20,
        ease: "back.out(1.7)",
      },
      "<"
    );
  
  new ScrollMagic.Scene({
    triggerElement: ".how-we-work-intro",
    //triggerHook: 0,
  })
    .setTween(howWeWorkTimeline)
    .addTo(controller);