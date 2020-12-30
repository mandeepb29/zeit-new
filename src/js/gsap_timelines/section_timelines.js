import {controller} from '../base';
//-------------------------------------------------------------------------//
//about timeline
//-------------------------------------------------------------------------//
//ABOUT TOP TIMELINE
export var aboutTimelineTop = new gsap.timeline({ defaults: { opacity: 0 } });
aboutTimelineTop.from(
  ".about-section .counter-box__item",
  {
    stagger: 0.15,
    y: 50,
  },
  "-=0.4s"
);

if(screen.width < 1199.99){
new ScrollMagic.Scene({
  triggerElement: ".about-section",
  triggerHook: 0.75,
})
  .setTween(aboutTimelineTop)
  .addTo(controller);
}
else{
  new ScrollMagic.Scene({
    triggerElement: ".about-section",
  })
    .setTween(aboutTimelineTop)
    .addTo(controller);
}
//ABOUT BOTTOM TIMELINE
export var aboutTimelineBottom = new gsap.timeline({ defaults: { opacity: 0 } });
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
   if(screen.width < 1199.99){
new ScrollMagic.Scene({
  triggerElement: "#about-bottom",
  triggerHook: 0.7,
})
  .setTween(aboutTimelineBottom)
  .addTo(controller);
   }
   else{
    new ScrollMagic.Scene({
      triggerElement: "#about-bottom",
      triggerHook: 0.785,
    })
      .setTween(aboutTimelineBottom)
      .addTo(controller);
       }
   

//-------------------------------------------------------------------------//
//HOW WE WORK SECTION INTRO TIMELINE
//-------------------------------------------------------------------------//
export var howWeWorkTimeline = gsap.timeline({
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
  
    if(screen.width < 1199.99){
  new ScrollMagic.Scene({
    triggerElement: ".how-we-work-intro",
    triggerHook: 0.75,
  })
    .setTween(howWeWorkTimeline)
    .addTo(controller);
    }
    else{
      new ScrollMagic.Scene({
        triggerElement: ".how-we-work-intro"
      })
        .setTween(howWeWorkTimeline)
        .addTo(controller);
    }
    //-------------------------------------------------------------------------//
//DOMAIN SECTION TOP TIMLINE
//-------------------------------------------------------------------------//
export var domainTimelineTop = gsap.timeline({ defaults: { opacity: 0 } });

domainTimelineTop.from(
  ".domain-section p",
  {
    y: 25,
    ease: "power2",
  },
  "<0.2"
);

if(screen.width < 1199.99){
new ScrollMagic.Scene({
  triggerElement: ".domain-section",
  triggerHook: 0.75,
})
  .setTween(domainTimelineTop)
  .addTo(controller);
}
else{
  new ScrollMagic.Scene({
    triggerElement: ".domain-section",
    triggerHook: 0,
  })
    .setTween(domainTimelineTop)
    .addTo(controller);
}
//-------------------------------------------------------------------------//
//DOMAIN SECTION BOTTOM TIMLINE
//-------------------------------------------------------------------------//
export var domainTimelineBottom = gsap.timeline({ defaults: { opacity: 0 } });

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

  if(screen.width < 1199.99){
new ScrollMagic.Scene({
  triggerElement: ".domain-section",
  triggerHook: 0.75,
})
  .setTween(domainTimelineBottom)
  .addTo(controller);
  }
  else{
    new ScrollMagic.Scene({
      triggerElement: ".domain-section",
      triggerHook: 0.2,
    })
      .setTween(domainTimelineBottom)
      .addTo(controller);
  }
  //-------------------------------------------------------------------------//
//TECHNOLOGY SECTION TIMELINE
//-------------------------------------------------------------------------//
export var techTimeline = gsap.timeline({ defaults: { opacity: 0 } });
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

export var teamTimeline = gsap.timeline({ defaults: { opacity: 0 } });
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

  if(screen.width < 1199.99){
new ScrollMagic.Scene({
  triggerElement: ".team-section",
  triggerHook: 0.8,
})
  .setTween(teamTimeline)
  .addTo(controller);
}
else{
  new ScrollMagic.Scene({
    triggerElement: ".team-section",
    triggerHook: 0.5,
  })
    .setTween(teamTimeline)
    .addTo(controller);
}
  //-------------------------------------------------------------------------//
//CLIENT TIMELINE
//-------------------------------------------------------------------------//

export var clientTimeline = gsap.timeline({ defaults: { opacity: 0 } });
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


  if(screen.width < 1199.99){
new ScrollMagic.Scene({
  triggerElement: ".client-section",
  triggerHook:0.75
})
  .setTween(clientTimeline)
  .addTo(controller);
  }
  else{
    new ScrollMagic.Scene({
      triggerElement: ".client-section",
    })
      .setTween(clientTimeline)
      .addTo(controller);
  }
  //-------------------------------------------------------------------------//
//FOOTER TIMELINE
//-------------------------------------------------------------------------//

export var footerTimeline = gsap.timeline({ defaults: { opacity: 0 } });
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

  if(screen.width < 1199.99){
new ScrollMagic.Scene({
  triggerElement: ".footer"
})
  .setTween(footerTimeline)
  .addTo(controller);
}
else{
  new ScrollMagic.Scene({
    triggerElement: ".footer",
    triggerHook: 0.05,
  })
    .setTween(footerTimeline)
    .addTo(controller);
  }
