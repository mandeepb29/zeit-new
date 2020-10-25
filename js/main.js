//CURSOR ANIMATION
const elements = {
  scrollContainer: document.querySelector(".scroll-container"),
  _3dHoverContainer: document.querySelectorAll("._3d-hover__container"),
  _3dHoverItem: document.querySelectorAll("._3d-hover__item"),
  storySections: document.querySelectorAll(".story-section"),
  animatedHeadingsSection: document.querySelectorAll(
    ".section-heading-animate"
  ),
  //hoverContainer: document.querySelectorAll(".hover-this"),
  hoverItem: document.querySelectorAll(".hover-item"),
  cursor: document.querySelector(".cursor"),
  header: document.querySelector(".header"),
  navbar: document.querySelector(".navbar"),
  introText: document.querySelectorAll(".intro-heading"),
  cursorLinksBig: document.querySelectorAll(".cursor--link--big"),
  cursorLinksMedium: document.querySelectorAll(".cursor--link--medium"),
  cursorLinksTiny: document.querySelectorAll(".cursor--link--tiny"),
  menuLinks: document.querySelectorAll(".menu__link a"),
  toggleMenuBtn: document.querySelector(".hamburger"),
  techIcons: document.querySelectorAll(".shape__tech"),
  storyContainer: document.querySelector(".story-section-wrapper"),
  storyScrollableContainer: document.querySelector(".story-scrollable-content"),
  //colorHeadings:document.querySelectorAll(".heading__color")
};

cursorLinksBigArr = Array.from(elements.cursorLinksBig);
cursorLinksMediumArr = Array.from(elements.cursorLinksMedium);
cursorLinksTinyArr = Array.from(elements.cursorLinksTiny);
techIconsArr = Array.from(elements.techIcons);
menuLinksArr = Array.from(elements.menuLinks);
introTextArr = Array.from(elements.introText);
hoverItemArr = Array.from(elements.hoverItem);
_3dHoverContainerArr = Array.from(elements._3dHoverContainer);
_3dHoverItemArr = Array.from(elements._3dHoverItem);
storySectionsArr = Array.from(elements.storySections);
animatedHeadingsSectionArr = Array.from(elements.animatedHeadingsSection);

document.addEventListener("mousemove", moveCursor);

techIconsArr.forEach((e) => {
  e.addEventListener("mouseover", addBigCursor);
});
techIconsArr.forEach((e) => {
  e.addEventListener("mouseleave", removeBigCursor);
});

cursorLinksBigArr.forEach((e) => {
  e.addEventListener("mouseover", addBigCursor);
});
cursorLinksBigArr.forEach((e) => {
  e.addEventListener("mouseleave", removeBigCursor);
});

cursorLinksMediumArr.forEach((e) => {
  e.addEventListener("mouseover", addMediumCursor);
});
cursorLinksMediumArr.forEach((e) => {
  e.addEventListener("mouseleave", removeMediumCursor);
});

cursorLinksTinyArr.forEach((e) => {
  e.addEventListener("mouseover", addTinyCursor);
});
cursorLinksTinyArr.forEach((e) => {
  e.addEventListener("mouseleave", removeTinyCursor);
});

introTextArr.forEach((e) => {
  e.addEventListener("mouseover", addBorderCursor);
});
introTextArr.forEach((e) => {
  e.addEventListener("mouseleave", removeBorderCursor);
});
//--FUNCTIONS TO MANIPULATE CURSOR PROPERTIES

function moveCursor(e) {
  elements.cursor.style.top = e.pageY + "px";
  elements.cursor.style.left = e.pageX + "px";
}

function addMediumCursor() {
  elements.cursor.classList.add("medium-cursor");
}

function removeMediumCursor() {
  elements.cursor.classList.remove("medium-cursor");
}

function addBigCursor() {
  elements.cursor.classList.add("big-cursor");
}

function removeBigCursor() {
  elements.cursor.classList.remove("big-cursor");
}

function addBorderCursor() {
  elements.cursor.classList.add("border-cursor");
}

function removeBorderCursor() {
  elements.cursor.classList.remove("border-cursor");
}

function addTinyCursor() {
  elements.cursor.classList.add("tiny-cursor");
}

function removeTinyCursor() {
  elements.cursor.classList.remove("tiny-cursor");
}

elements.header.addEventListener("scroll", () => {
  console.log("header scrolled");
});

function goToNextSection() {
  $(".scroll-container").moveDown();
}

//functions to manipulate hover element
function hoverEffect(e, item) {
  const { offsetX: x, offsetY: y } = e,
    { offsetWidth: width, offsetHeight: height } = item,
    move = 30,
    xMove = (x / width) * (move * 1.5) - move,
    yMove = (y / height) * (move * 1.5) - move;

  item.style.transform = `translate(${xMove}px, ${yMove}px)`;
}

var onMouseEnterHandler1 = function (event) {
  hoverEffect(event, this);
};

var onMouseLeaveHandler1 = function () {
  this.style.transform = "";
};

var onMouseMoveHandler1 = function (event) {
  //console.log("mouse move",this);
  if (isTimeToUpdate()) {
    hoverEffect(event, this);
  }
};

hoverItemArr.forEach((b) =>
  b.addEventListener("mouseenter", onMouseEnterHandler1)
);
hoverItemArr.forEach((b) =>
  b.addEventListener("mouseleave", onMouseLeaveHandler1)
);
hoverItemArr.forEach((b) =>
  b.addEventListener("mousemove", onMouseMoveHandler1)
);




var counter = 0;
var updateRate = 10;
var isTimeToUpdate = function () {
  // console.log(counter);
  return counter++ % updateRate === 0;
};

$(".anchor-link").click(function () {
  var page_index = $($(this).attr("href")).data("index");
  var el = $(".scroll-container");
  el.moveTo(page_index);
});


//---------------------------------------------------------------------------------------------------------------------//
//----------------------------------------GSAP ANIMATIONS BEGINS-------------------------------------------------------//
//---------------------------------------------------------------------------------------------------------------------//

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

///-------------------SCROLL ANIMATIONS BEGINS-------------------------------------///

//SCROLL MAGIC INITIALISATION
var controller = new ScrollMagic.Controller();

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

//-------------------------------------------------------------------------//
//about timeline
//-------------------------------------------------------------------------//

//ABOUT TOP TIMELINE
var aboutTimelineTop = new gsap.timeline({ defaults: { opacity: 0 } });
aboutTimelineTop.from(
  ".about-section .counter-box__item",
  {
    stagger: 0.15,
    y: 50,
  },
  "-=0.4s"
);
new ScrollMagic.Scene({
  triggerElement: ".about-section",
})
  .setTween(aboutTimelineTop)
  .addTo(controller);

//ABOUT BOTTOM TIMELINE
aboutTimelineBottom = new gsap.timeline({ defaults: { opacity: 0 } });
aboutTimelineBottom
  .from(".about-section .heading__tertiory", {
    stagger: {
      amount: 0.4,
    },
    y: 20,
    ease: "power2.out",
  })
  .from(
    ".about-section p",
    {
      y: 10,
      duration: 0.6,
      ease: "power2.out",
    },
    "<0.6"
  )
  .from(
    ".about-section .heading__color",
    {
      stagger: {
        amount: 0.5,
      },
      y: 10,
      ease: "power4",
    },
    "<0.1s"
  );
new ScrollMagic.Scene({
  triggerElement: "#about-bottom",
  triggerHook: 0.7,
})
  .setTween(aboutTimelineBottom)
  .addTo(controller);

//-------------------------------------------------------------------------//
//HOW WE WORK SECTION INTRO TIMELINE
//-------------------------------------------------------------------------//
var howWeWorkTimeline = gsap.timeline({
  defaults: { opacity: 0, duration: 0.5 },
});
howWeWorkTimeline
  .from(".bg-element__downwave", {
    opacity: 1,
    y: "100%",
  })
  .from(".bg-element__plant", {
    duration: 0.5,
    y: "100%",
    ease: "back.out(1.7)",
  })
  .from(
    ".bg-element__light",
    {
      duration: 1,
      y: "-100%",
      ease: "back.out(1)",
    },
    "-=1"
  )

  .from(
    ".bg-element__clock",
    {
      opacity: 0,
    },
    "-=0.1"
  )
  .from(
    ".intro-heading__primary--small",
    {
      y: 20,
      ease: "back.out(1.7)",
    },
    "<"
  );

new ScrollMagic.Scene({
  triggerElement: ".how-we-work-intro",
  //triggerHook: 0,
})
  .setTween(howWeWorkTimeline)
  .addTo(controller);

//-------------------------------------------------------------------------//
//story section COMMON timeline
//-------------------------------------------------------------------------//
storySectionsArr.forEach((el) => {
  let headings = el.querySelectorAll(".heading__part");
  let texts = el.querySelector("p");
  let image = el.querySelector(".story-img");
  storyTimelineArray = gsap.timeline({ defaults: { opacity: 0 } });

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

//-------------------------------------------------------------------------//
//DOMAIN SECTION TOP TIMLINE
//-------------------------------------------------------------------------//
var domainTimelineTop = gsap.timeline({ defaults: { opacity: 0 } });

domainTimelineTop.from(
  ".domain-section p",
  {
    y: 25,
    ease: "power2",
  },
  "<0.2"
);

new ScrollMagic.Scene({
  triggerElement: ".domain-section",
  triggerHook: 0,
})
  .setTween(domainTimelineTop)
  .addTo(controller);

//-------------------------------------------------------------------------//
//DOMAIN SECTION BOTTOM TIMLINE
//-------------------------------------------------------------------------//
var domainTimelineBottom = gsap.timeline({ defaults: { opacity: 0 } });

domainTimelineBottom
  .from(".domain-section .icon__primary", {
    y: 20,
    stagger: {
      amount: 0.6,
    },
    ease: "back.out(1.5)",
  })
  .from(
    ".domain-section .icon__border",
    {
      scaleX: 0,
      opacity: 1,
      stagger: {
        amount: 0.6,
      },
      ease: "back.out(1.5)",
    },
    "<0.3"
  )
  .from(
    ".domain-section .icon__text",
    {
      y: 20,
      stagger: {
        amount: 0.6,
      },
      ease: "power2",
    },
    "<0.3"
  )
  .from(
    ".domain-section .icon__img",
    {
      y: -20,
      stagger: {
        amount: 0.6,
      },
      ease: "power2",
    },
    "<"
  );

new ScrollMagic.Scene({
  triggerElement: ".domain-section",
  triggerHook: 0.2,
})
  .setTween(domainTimelineBottom)
  .addTo(controller);

//-------------------------------------------------------------------------//
//TECHNOLOGY SECTION TIMELINE
//-------------------------------------------------------------------------//
var techTimeline = gsap.timeline({ defaults: { opacity: 0 } });
techTimeline
  .from(".technology-section p", {
    y: 25,
    duration: 0.5,
    ease: "power2",
  })
  .from(".technology-section .tech-box", {
    stagger: {
      amount: 0.6,
    },
    x: 10,
    ease: "power1",
  });

new ScrollMagic.Scene({
  triggerElement: ".technology-section",
})
  .setTween(techTimeline)
  .addTo(controller);

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

//-------------------------------------------------------------------------//
//CLIENT TIMELINE
//-------------------------------------------------------------------------//

var clientTimeline = gsap.timeline({ defaults: { opacity: 0 } });
clientTimeline
  .from(".bg-element__circle-2", {
    y: "-30%",
    rotate: 45,
    ease: "power1",
    duration: 0.5,
  })
  .from(
    ".client-section .heading__secondary",
    {
      y: 25,
      stagger: { amount: 0.4 },
      ease: "power4",
      delay: 0.5,
    },
    "<"
  )
  .from(
    ".client-col",
    {
      y: 15,
      stagger: { amount: 0.4 },
      ease: "power4",
      delay: 0.3,
    },
    "<0.4"
  );

new ScrollMagic.Scene({
  triggerElement: ".client-section",
})
  .setTween(clientTimeline)
  .addTo(controller);

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

//-------------------------------------------------------------------------//
//ANMATIONS THAT MOVES WITH THE SCROLL
//-------------------------------------------------------------------------//

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

//TECHNOLOGY SECTION SCROLL ANIMATION
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

//adding and removing class from navbar
new ScrollMagic.Scene({
  triggerElement: ".domain-section",
  triggerHook: 0,
})
  .on("start", function () {
    $(".navbar").toggleClass("navbar-black");
    $(".floating-contact-btn").toggleClass("is-black");  
  })
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: ".client-section",
  triggerHook: 0,
})
  .on("start", function () {
    $(".navbar").toggleClass("navbar-black");
    $(".floating-contact-btn").toggleClass("is-black");  
  })
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: ".footer",
  triggerHook: 0,
})
  .on("start", function () {
    $(".navbar").toggleClass("navbar-black");
    $(".floating-contact-btn").toggleClass("is-black");  
  })
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: ".story-section__intro",
  triggerHook: 0,
})
  .on("start", function () {
    $(".story-section__buttons").toggleClass("show");
  })
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: ".story-section__1",
})
  .on("start", function () {
    $(".story-section__buttons .btn__with-img").toggleClass("show-next-text");
  })
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: ".story-section__5",
})
  .on("start", function () {
    $(".story-section__buttons .btn__with-img").toggleClass("show-next-text");
    $(".story-section__buttons .btn__with-img").toggleClass(
      "show-seemore-text"
    );
  })
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: ".domain-section",
})
  .on("start", function () {
    $(".story-section__buttons").toggleClass("show");
  })
  .addTo(controller);
