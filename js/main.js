

//CURSOR ANIMATION
const elements = {
  scrollContainer: document.querySelector(".scroll-container"),
  _3dHoverContainer: document.querySelector("._3d-hover__container"),
  _3dHoverItem: document.querySelector("._3d-hover__item"),
  //hoverContainer: document.querySelectorAll(".hover-this"),
  hoverItem: document.querySelectorAll(".hover-item"),
  cursor: document.querySelector(".cursor"),
  header: document.querySelector("header"),
  navbar: document.querySelector(".navbar"),
  introText: document.querySelectorAll(".intro-heading"),
  cursorLinksBig: document.querySelectorAll(".cursor--link--big"),
  cursorLinksMedium: document.querySelectorAll(".cursor--link--medium"),
  cursorLinksTiny: document.querySelectorAll(".cursor--link--tiny"),
  menuLinks: document.querySelectorAll(".menu__link a"),
  toggleMenuBtn: document.querySelector(".hamburger"),
  techIcons: document.querySelectorAll(".shape__tech"),
  storyContainer:document.querySelector(".story-section-wrapper"),
  storyScrollableContainer:document.querySelector(".story-scrollable-content")
  //colorHeadings:document.querySelectorAll(".heading__color")
};

cursorLinksBigArr = Array.from(elements.cursorLinksBig);
cursorLinksMediumArr = Array.from(elements.cursorLinksMedium);
cursorLinksTinyArr = Array.from(elements.cursorLinksTiny);
techIconsArr = Array.from(elements.techIcons);
menuLinksArr = Array.from(elements.menuLinks);
introTextArr = Array.from(elements.introText);
hoverItemArr = Array.from(elements.hoverItem);
//_3dHoverContainerArr = Array.from(elements._3dHoverContainer);
//_3dHoverItemArr = Array.from(elements._3dHoverItem);

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

elements.header.addEventListener("scroll", ()=> {
  console.log("header scrolled");
} )

//functions to manipulate hover element
function hoverEffect(e){
    const { offsetX: x, offsetY: y } = e,
    
    { offsetWidth: width, offsetHeight: height } = this,
 
    move = 25,
    xMove = x / width * (move * 1.5) - move,
    yMove = y / height * (move * 1.5) - move;

    //console.log(x,y);
    this.style.transform = `translate(${xMove}px, ${yMove}px)`;

    if (e.type === 'mouseleave') this.style.transform = '';
}

hoverItemArr.forEach(b => b.addEventListener('mousemove', hoverEffect));
hoverItemArr.forEach(b => b.addEventListener('mouseleave', hoverEffect));

//------------------------------------------------------------------------------//

//functions to manipulate the 3d hover elements // that are team members image

var onMouseEnterHandler = function(event){
  update(event);
}

var onMouseLeaveHandler = function() {
    elements._3dHoverItem.style = "";
};

var onMouseMoveHandler = function(event) {
  if (isTimeToUpdate()) {
    update(event);
  }
};

elements._3dHoverContainer.addEventListener("mouseenter",onMouseEnterHandler);

elements._3dHoverContainer.addEventListener("mouseleave",onMouseLeaveHandler);

elements._3dHoverContainer.addEventListener("mousemove",onMouseMoveHandler);

var counter = 0;
var updateRate = 10;
var isTimeToUpdate = function() {
  return counter++ % updateRate === 0;
};

var mouse = {
  _x: 0,
  _y: 0,
  x: 0,
  y: 0,
  updatePosition: function(event) {
    var e = event || window.event;
    this.x = e.clientX - this._x;
    this.y = (e.clientY - this._y) * -1;
  },
  setOrigin: function(e) {
    this._x = e.offsetLeft + Math.floor(e.offsetWidth/2);
    this._y = e.offsetTop + Math.floor(e.offsetHeight/2);
    console.log(e,this.show());
  },
  show: function() { return '(' + this.x + ', ' + this.y + ')'; }
}

// Track the mouse position relative to the center of the container.
  mouse.setOrigin(elements._3dHoverContainer);


var update = function(event) {
  mouse.updatePosition(event);
  updateTransformStyle(
    (mouse.y / elements._3dHoverItem.offsetHeight/2).toFixed(2),
    (mouse.x / elements._3dHoverItem.offsetWidth/2).toFixed(2)
  );
};

var updateTransformStyle = function(x, y) {
  var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
  elements._3dHoverItem.style.transform = style;
  elements._3dHoverItem.style.webkitTransform = style;
  elements._3dHoverItem.style.mozTransform = style;
  elements._3dHoverItem.style.msTransform = style;
  elements._3dHoverItem.style.oTransform = style;
};


//-------------------------------------------------------------------//


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
  e.addEventListener("click", (event) => {
    event.preventDefault();
    elements.toggleMenuBtn.classList.remove("toggled");
    navTimeline.reverse();
  });
});

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
new ScrollMagic.Scene({
  triggerElement: ".about-section",
})
  // .addIndicators({
  //   name: "about Scene",
  //   colorTrigger: "#101010",
  // })
  .setTween(aboutTimelineTop)
  .addTo(controller);

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


  //HOW WE WORK SECTION INTRO TIMELINE

  var howWeWorkTimeline = gsap.timeline({defaults:{opacity:0,duration:0.5}});
  howWeWorkTimeline
  .from(".bg-element__downwave",{
    opacity:1,
    y:"100%"
  })
  .from(".bg-element__plant", {
    duration:0.5,
    y:"100%",
    ease: "back.out(1.7)"
  })
  .from(".bg-element__light", {
    duration:1,
    y:"-100%",
    ease: "back.out(1)"
  },"-=1")
  
  .from(".bg-element__clock", {
    opacity:0
  },"-=0.1")
  .from(".intro-heading__primary--small .char", {
    y:30,
    stagger: {
      amount:0.5
    }
  },"<")
  


  new ScrollMagic.Scene({
    triggerElement: ".how-we-work-intro",
    //triggerHook: 0,
  })
    .setTween(howWeWorkTimeline)
    .addTo(controller);


    ///////------------------------STORY MODE FUCNTIONS--------------------------///

    ////ADDING A SCROLL DETECTTION FUNCTION IN THE STORY WRAPPER CONTAINER 


// $window = $(window);
// var distance = $(elements.storyContainer).offset().top,
//     $window = $(window);

// $window.scroll(function() {
//     if ( $window.scrollTop() >= distance ) {
//         // Your div has reached the top
//         elements.storyContainer.classList.add("scroll-snap");
//     }
// });

// const startStory = () =>{
//   elements.storyContainer.addEventListener('wheel', function(event)
//   {
//    if (event.deltaY < 0)
//    {
//      console.log("scroll up")
//      moveToNextStory();
//     }
//    else if (event.deltaY >0){
//     console.log("scroll down")
//     moveToPreviousStory();
//   }
// });
// }
   
//   const moveToNextStory = () => {
//     elements.storyScrollableContainer.style.transform = "translateY(100vh)";
//   }

//   const moveToPreviousStory = () => {
//     elements.storyScrollableContainer.style.transform = "translateY(-100vh)";
//   }