//-------------------------------------------------------------------------//
//CLIENT TIMELINE
//-------------------------------------------------------------------------//

var clientTimeline = gsap.timeline({ defaults: { opacity: 0 } });
clientTimeline
  .from(".bg-element__circle-2", {
    y: "-30%",
    rotate: 45,
    ease: "power1",
    duration: 0.5,
  })
  .from(
    ".client-section .heading__secondary",
    {
      y: 25,
      stagger: { amount: 0.4 },
      ease: "power4",
      delay: 0.5,
    },
    "<"
  )
  .from(
    ".client-col",
    {
      y: 15,
      stagger: { amount: 0.4 },
      ease: "power4",
      delay: 0.3,
    },
    "<0.4"
  );

new ScrollMagic.Scene({
  triggerElement: ".client-section",
})
  .setTween(clientTimeline)
  .addTo(controller);