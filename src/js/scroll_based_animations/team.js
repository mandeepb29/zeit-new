//TEAM SECTION SCROLL ANIMATION
var teamBGTimeline = gsap.timeline();
teamBGTimeline
  .to(".bg-element__rect-3", {
    y: "80vh",
  })
  .to(
    ".bg-element__rect-2",
    {
      y: "-100vh",
    },
    "<0.2"
  );
new ScrollMagic.Scene({
  triggerElement: ".team-section",
  triggerHook: 1,
})
  .duration("280%")
  .setTween(teamBGTimeline)
  .addTo(controller);

//FOOTER SECTION SCROLL ANIMATION
var footerBGTimeline = gsap.timeline();
footerBGTimeline.to(".bg-element__lamp-only", {
  x: -350,
});
new ScrollMagic.Scene({
  triggerElement: ".footer",
  triggerHook: 1,
})
  .duration("300%")
  .setTween(footerBGTimeline)
  .addTo(controller);