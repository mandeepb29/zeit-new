//CURSOR ANIMATION
const elements = {
  cursor: document.querySelector(".cursor"),
  header: document.querySelector("header"),
  navbar: document.querySelector(".navbar"),
  introText: document.querySelector(".intro-heading"),
  cursorLinksBig: document.querySelectorAll(".cursor--link--big"),
  cursorLinksMedium: document.querySelectorAll(".cursor--link--medium"),
  cursorLinksTiny: document.querySelectorAll(".cursor--link--tiny"),
  menuLinks: document.querySelectorAll(".menu__link a"),
  toggleMenuBtn: document.querySelector(".hamburger"),
  techIcons: document.querySelectorAll(".shape__tech")
  //colorHeadings:document.querySelectorAll(".heading__color")
};

cursorLinksBigArr = Array.from(elements.cursorLinksBig);
cursorLinksMediumArr = Array.from(elements.cursorLinksMedium);
cursorLinksTinyArr = Array.from(elements.cursorLinksTiny);
techIconsArr = Array.from(elements.techIcons);
menuLinksArr = Array.from(elements.menuLinks);

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

// elements.introText.addEventListener("mouseover", addHugeCursor);
// elements.introText.addEventListener("mouseleave", removeHugeCursor);

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

function addHugeCursor() {
  elements.cursor.classList.add("huge-cursor");
}

function removeHugeCursor() {
  elements.cursor.classList.remove("huge-cursor");
}

function addTinyCursor() {
  elements.cursor.classList.add("tiny-cursor");
}

function removeTinyCursor() {
  elements.cursor.classList.remove("tiny-cursor");
}

//naviagtion timeLine
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

elements.toggleMenuBtn.addEventListener("click", toggleMenu);
menuLinksArr.forEach((e) => {
  e.addEventListener("click", () => {
    elements.toggleMenuBtn.classList.remove("toggled");
    navTimeline.reverse();
  });
});


// PARTICLES TIMElINE

// var circleTimeline = gsap.timeline({repeat:-1})
// circleTimeline.
// fromTo(".shape__circle", 5, {
//  y:0
// },
// {
//   top:0
// })

//SCROLL MAGIC INITIALISATION

var controller = new ScrollMagic.Controller();

//about timeline

var aboutTimelineTop = new gsap.timeline({ defaults: { opacity: 0 } });

aboutTimelineTop
  .from(".about-section .heading__primary", 0.5, {
  y: 50,
  duration:0.8,
  ease: Power1.easeOut,
})
  .from(".about-section .counter-box__item", {
  stagger:0.15,
  y: 50
}, "-=0.4s");

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
        each: 0.15,
      },
      y: 10,
      ease: "back.out(1.7)",
    },
    "<0.1s"
  );

//about scene top
// new ScrollMagic.Scene({
//   triggerElement: ".about-section",
// })
//   .setClassToggle(".body-wrapper", "bg-white")
//   // .addIndicators({
//   //   name: "about Scene",
//   //   colorTrigger: "#101010",
//   // })
//   .setTween(aboutTimelineTop)
//   .addTo(controller);

//about scene bottom
new ScrollMagic.Scene({
  triggerElement: "#about-bottom",
  triggerHook: 0.7,
})

  // .addIndicators({
  //   name: "about bottom Scene",
  // })
  .setTween(aboutTimelineBottom)
  .addTo(controller);
