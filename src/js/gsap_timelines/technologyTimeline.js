//-------------------------------------------------------------------------//
//TECHNOLOGY SECTION TIMELINE
//-------------------------------------------------------------------------//
var techTimeline = gsap.timeline({ defaults: { opacity: 0 } });
techTimeline
  .from(".technology-section p", {
    y: 25,
    duration: 0.5,
    ease: "power2",
  })
  .from(".technology-section .tech-box", {
    stagger: {
      amount: 0.6,
    },
    x: 10,
    ease: "power1",
  });

new ScrollMagic.Scene({
  triggerElement: ".technology-section",
})
  .setTween(techTimeline)
  .addTo(controller);