//-------------------------------------------------------------------------//
//naviagtion timeLine
//-------------------------------------------------------------------------//

const navTimeline = gsap.timeline({ paused: true });
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
        amount: 0.6,
      },
    },
    "-=0.2"
  )
  .from(
    ".contact",
    {
      duration: 0.6,
      opacity: 0,
      y: -20,
    },
    "-=1"
  )
  .from(
    ".social",
    {
      duration: 0.6,
      opacity: 0,
      y: -20,
    },
    "-=0.5"
  );

  const toggleMenu = () => {
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
  
  //EVENTS LISTENERS TO THE MENU ANIMATIONS
  elements.toggleMenuBtn.addEventListener("click", toggleMenu);
  menuLinksArr.forEach((e) => {
    e.addEventListener("click", (event) => {
      event.preventDefault();
      elements.toggleMenuBtn.classList.remove("toggled");
      navTimeline.reverse();
    });
  });