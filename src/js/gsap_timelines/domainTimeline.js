//-------------------------------------------------------------------------//
//DOMAIN SECTION TOP TIMLINE
//-------------------------------------------------------------------------//
var domainTimelineTop = gsap.timeline({ defaults: { opacity: 0 } });

domainTimelineTop.from(
  ".domain-section p",
  {
    y: 25,
    ease: "power2",
  },
  "<0.2"
);

new ScrollMagic.Scene({
  triggerElement: ".domain-section",
  triggerHook: 0,
})
  .setTween(domainTimelineTop)
  .addTo(controller);

//-------------------------------------------------------------------------//
//DOMAIN SECTION BOTTOM TIMLINE
//-------------------------------------------------------------------------//
var domainTimelineBottom = gsap.timeline({ defaults: { opacity: 0 } });

domainTimelineBottom
  .from(".domain-section .icon__primary", {
    y: 20,
    stagger: {
      amount: 0.6,
    },
    ease: "back.out(1.5)",
  })
  .from(
    ".domain-section .icon__border",
    {
      scaleX: 0,
      opacity: 1,
      stagger: {
        amount: 0.6,
      },
      ease: "back.out(1.5)",
    },
    "<0.3"
  )
  .from(
    ".domain-section .icon__text",
    {
      y: 20,
      stagger: {
        amount: 0.6,
      },
      ease: "power2",
    },
    "<0.3"
  )
  .from(
    ".domain-section .icon__img",
    {
      y: -20,
      stagger: {
        amount: 0.6,
      },
      ease: "power2",
    },
    "<"
  );

new ScrollMagic.Scene({
  triggerElement: ".domain-section",
  triggerHook: 0.2,
})
  .setTween(domainTimelineBottom)
  .addTo(controller);