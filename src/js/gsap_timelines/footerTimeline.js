//-------------------------------------------------------------------------//
//FOOTER TIMELINE
//-------------------------------------------------------------------------//

var footerTimeline = gsap.timeline({ defaults: { opacity: 0 } });
footerTimeline
  .from(".footer .heading__tertiory", {
    y: 15,
    ease: "power4",
  })
  .from(
    ".form__group",
    {
      y: 15,
      stagger: {
        amount: 0.3,
      },
      ease: "power2",
    },
    "<"
  )

  .from(".form__btn", {
    y: 15,
    ease: "power4",
  })
  .from(
    ".footer__contact-item",
    {
      stagger: {
        amount: 0.4,
      },
      y: 15,
      ease: "power4",
    },
    "<0"
  )
  .from(
    ".bg-element__circle-1",
    {
      y: "-100%",
      duration: 0.8,
      ease: "back.out(1.7)",
    },
    "<"
  );
new ScrollMagic.Scene({
  triggerElement: ".footer",
  triggerHook: 0.05,
})
  .setTween(footerTimeline)
  .addTo(controller);