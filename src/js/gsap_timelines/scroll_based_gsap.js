import {controller} from '../base';
//-------------------------STORY ANIMATIONS -----------------------------//
//STORY SECTION 1 SCROLL ANIMAITON
export var story1BG = gsap.timeline();
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
export var story2BG = gsap.timeline();
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
export var story3BG = gsap.timeline();
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
export var story4BG = gsap.timeline();
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
export var story5BG = gsap.timeline();
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

  //TEAM SECTION SCROLL ANIMATION
  export var teamBGTimeline = gsap.timeline();
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
export var footerBGTimeline = gsap.timeline();
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

  //TECHNOLOGY SECTION SCROLL ANIMATION
export var domainBGTimeline = gsap.timeline();
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