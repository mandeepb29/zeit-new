//TECHNOLOGY SECTION SCROLL ANIMATION
var domainBGTimeline = gsap.timeline();
domainBGTimeline
  .to(".bg-element__plant3", {
    y: 300,
  })
  .to(
    ".bg-element__custom-square",
    {
      rotate: -150,
      y: "130vh",
    },
    "<"
  )
  .to(
    ".bg-element__custom-triangle",
    {
      rotate: 150,
      y: "-150vh",
    },
    "<"
  )
  .to(
    ".bg-element__custom-circle--1",
    {
      y: "20vh",
    },
    "<"
  )
  .to(
    ".bg-element__custom-circle--2",
    {
      y: "-50vh",
    },
    "<"
  );
new ScrollMagic.Scene({
  triggerElement: ".domain-section",
  triggerHook: 1,
})
  .duration("350%")
  .setTween(domainBGTimeline)
  .addTo(controller);