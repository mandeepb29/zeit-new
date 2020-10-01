//-------------------------------------------------------------------------//
//about timeline
//-------------------------------------------------------------------------//

//ABOUT TOP TIMELINE
var aboutTimelineTop = new gsap.timeline({ defaults: { opacity: 0 } });
aboutTimelineTop.from(
  ".about-section .counter-box__item",
  {
    stagger: 0.15,
    y: 50,
  },
  "-=0.4s"
);
new ScrollMagic.Scene({
  triggerElement: ".about-section",
})
  .setTween(aboutTimelineTop)
  .addTo(controller);

//ABOUT BOTTOM TIMELINE
aboutTimelineBottom = new gsap.timeline({ defaults: { opacity: 0 } });
aboutTimelineBottom
  .from(".about-section .heading__tertiory", {
    stagger: {
      amount: 0.4,
    },
    y: 20,
    ease: "power2.out",
  })
  .from(
    ".about-section p",
    {
      y: 10,
      duration: 0.6,
      ease: "power2.out",
    },
    "<0.6"
  )
  .from(
    ".about-section .heading__color",
    {
      stagger: {
        amount: 0.5,
      },
      y: 10,
      ease: "power4",
    },
    "<0.1s"
  );
new ScrollMagic.Scene({
  triggerElement: "#about-bottom",
  triggerHook: 0.7,
})
  .setTween(aboutTimelineBottom)
  .addTo(controller);