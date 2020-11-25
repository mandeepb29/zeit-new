import {elements, controller} from '../base';

//STORY SECTION COMMON TIMELINE
export const animateStories = () => {
  var storySectionsArr = Array.from(elements.storySections);
  storySectionsArr.forEach((el) => {

    let headings = el.querySelectorAll(".heading__part");
    let texts = el.querySelector("p");
    let image = el.querySelector(".story-img");
    let storyTimelineArray = gsap.timeline({ defaults: { opacity: 0 } });
  
    storyTimelineArray
      .from(headings, {
        y: 15,
        stagger: {
          amount: 0.6,
        },
        ease: "power4",
      })
      .from(
        image,
        {
          x: 30,
          duration: 1,
          ease: "power3",
        },
        "<"
      )
      .from(
        texts,
        {
          duration: 0.8,
          y: 40,
          ease: "power4",
        },
        "-=0.6"
      );
    new ScrollMagic.Scene({
      triggerElement: el,
      triggerHook: 0.05,
    })
      .setTween(storyTimelineArray)
      .addTo(controller);
  });
  
}

//ANIMATE ALL THE HEADINGS IN THE SECTION
export const animateHeadings = () => {
  var animatedHeadingsSectionArr = Array.from(elements.animatedHeadingsSection);

  animatedHeadingsSectionArr.forEach((el) => {
    let headingParts = el.querySelectorAll(".heading__part");
    let headingsTimeline = gsap.timeline({ defaults: { opacity: 0, y: 15 } });
  
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
  
}
