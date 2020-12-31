import {elements} from '../base';
//-------------------------------------------------------------------------//
//naviagtion timeLine
//-------------------------------------------------------------------------//
export const navTimeline = gsap.timeline({ paused: true });
navTimeline
  .to(".menu-wrap", 0.6, {
    top: "0%",
    ease: Power1.easeInOut,
  })
  .from(
    ".menu__link",
    {
      opacity: 0,
      y: -20,
      stagger: {
        amount: 0.3,
      },
    },
    "-=0.1"
  )
  .from(
    ".contact",
    {
      duration: 0.4,
      opacity: 0,
      y: -20,
    },
    "-=0.5"
  )
  .from(
    ".social",
    {
      duration: 0.4,
      opacity: 0,
      y: -20,
    },
    "-=0.5"
  );

  export const toggleMenu = () => {
    if (elements.toggleMenuBtn.classList.contains("toggled")) {
      elements.toggleMenuBtn.classList.remove("toggled");
    } else {
      elements.toggleMenuBtn.classList.add("toggled");
    }
  
    if (navTimeline.paused()) {
      navTimeline.play();
    } else if (navTimeline.reversed()) {
      navTimeline.play();
    } else {
      navTimeline.reverse();
    }
  };
