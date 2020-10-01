//ANIMATE ALL THE HEADINGS IN THE SECTION
animatedHeadingsSectionArr.forEach((el) => {
    var headingParts = el.querySelectorAll(".heading__part");
    headingsTimeline = gsap.timeline({ defaults: { opacity: 0, y: 15 } });
  
    headingsTimeline.from(headingParts, {
      stagger: {
        amount: 0.3,
      },
      ease: "power4",
    });
    new ScrollMagic.Scene({
      triggerElement: el,
    })
      .setTween(headingsTimeline)
      .addTo(controller);
  });