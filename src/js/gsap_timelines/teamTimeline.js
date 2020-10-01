//-------------------------------------------------------------------------//
//OUR TEAM SETION TIMLINE
//-------------------------------------------------------------------------//

var teamTimeline = gsap.timeline({ defaults: { opacity: 0 } });
teamTimeline
  .from(".bg-element__circle-3", {
    y: "-30%",
    ease: "power4",
    delay: 0.6,
  })
  .from(
    ".team-member__img",
    {
      stagger: {
        amount: 0.6,
      },
      y: 30,
      ease: "back.out(1.7)",
    },
    "<"
  )
  .from(
    ".team-member__img-bg",
    {
      stagger: {
        amount: 0.3,
      },
      ease: "power4",
    },
    "<0.2"
  )
  .from(
    ".team-member__details",
    {
      stagger: {
        amount: 0.6,
      },
    },
    "<0.1"
  );
new ScrollMagic.Scene({
  triggerElement: ".team-section",
  triggerHook: 0.5,
})
  .setTween(teamTimeline)
  .addTo(controller);