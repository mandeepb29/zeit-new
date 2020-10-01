//STORY SECTION 1 SCROLL ANIMAITON
var story1BG = gsap.timeline();
story1BG.to(".bg-element__lamp-only-left", {
  y: 400,
});
new ScrollMagic.Scene({
  triggerElement: ".story-section__1",
  triggerHook: 0,
})
  .duration("300%")
  .setTween(story1BG)
  .addTo(controller);

//STORY SECTION 2 SCROLL ANIMAITON
var story2BG = gsap.timeline();
story2BG.to(".bg-element__bench", {
  x: "100%",
});
new ScrollMagic.Scene({
  triggerElement: ".story-section__2",
  triggerHook: 0,
})
  .duration("200%")
  .setTween(story2BG)
  .addTo(controller);

//STORY SECTION 3 SCROLL ANIMAITON
var story3BG = gsap.timeline();
story3BG
  .to(".bg-element__white-light", {
    x: "100%",
  })
  .from(
    ".bg-element__vase",
    {
      x: -500,
    },
    "<"
  );
new ScrollMagic.Scene({
  triggerElement: ".story-section__3",
  triggerHook: 1,
})
  .duration("180%")
  .setTween(story3BG)
  .addTo(controller);

//STORY SECTION 4 SCROLL ANIMAITON
var story4BG = gsap.timeline();
story4BG.to(".bg-element__plant-bottom", {
  y: "100%",
});
new ScrollMagic.Scene({
  triggerElement: ".story-section__4",
  triggerHook: 0,
})
  .duration("180%")
  .setTween(story4BG)
  .addTo(controller);

//STORY SECTION 5 SCROLL ANIMAITON
var story5BG = gsap.timeline();
story5BG
  .to(".bg-element__dove1", {
    y: 500,
  })
  .to(
    ".bg-element__dove2",
    {
      y: -100,
      x: -80,
    },
    "<"
  );
new ScrollMagic.Scene({
  triggerElement: ".story-section__5",
  triggerHook: 1,
})
  .duration("200%")
  .setTween(story5BG)
  .addTo(controller);