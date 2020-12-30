import { is_touch_device, elements, goToNextSection } from "./base";
import * as cursor from "./cursor";
import * as commonTimelines from "./gsap_timelines/commonTimelines";
import *  as sectionTimeline from './gsap_timelines/section_timelines';
import * as scrollTimeline from './gsap_timelines/scroll_based_gsap';
import {toggleMenu,navTimeline} from './gsap_timelines/navbarTimeline';
import * as hoverEffect from './hover_animations/moveAwayOnHover';
import * as toggleAnimation from './gsap_timelines/toggle_animations';

//-------------------------------CURSOR ANIMATION---------------------------------------//
//add cursor animation
document.addEventListener("mousemove", cursor.moveCursor);

//adding event listners to cursor animations
let techIconsArr = Array.from(elements.techIcons);
techIconsArr.forEach((e) => {
   e.addEventListener("mouseover", cursor.addBigCursor);
});
techIconsArr.forEach((e) => {
   e.addEventListener("mouseleave", cursor.removeBigCursor);
});

let cursorLinksBigArr = Array.from(elements.cursorLinksBig);
cursorLinksBigArr.forEach((e) => {
   e.addEventListener("mouseover", cursor.addBigCursor);
});
cursorLinksBigArr.forEach((e) => {
   e.addEventListener("mouseleave", cursor.removeBigCursor);
});

let cursorLinksMediumArr = Array.from(elements.cursorLinksMedium);
cursorLinksMediumArr.forEach((e) => {
   e.addEventListener("mouseover", cursor.addMediumCursor);
});
cursorLinksMediumArr.forEach((e) => {
   e.addEventListener("mouseleave", cursor.removeMediumCursor);
});

let cursorLinksTinyArr = Array.from(elements.cursorLinksTiny);
cursorLinksTinyArr.forEach((e) => {
   e.addEventListener("mouseover", cursor.addTinyCursor);
});
cursorLinksTinyArr.forEach((e) => {
   e.addEventListener("mouseleave", cursor.removeTinyCursor);
});

let introTextArr = Array.from(elements.introText);
introTextArr.forEach((e) => {
   e.addEventListener("mouseover", cursor.addBorderCursor);
});
introTextArr.forEach((e) => {
   e.addEventListener("mouseleave", cursor.removeBorderCursor);
});


//------------------------------------------------ HOVER EFFECT-------------------------------------------------//
  let hoverItemArr = Array.from(elements.hoverItem); 
  hoverItemArr.forEach((item) =>{
     if(!is_touch_device())
   item.addEventListener("mouseenter",hoverEffect.onMouseEnterHandler)
 }
 );
 hoverItemArr.forEach((item) =>{
   if(!is_touch_device())
   item.addEventListener("mouseleave", hoverEffect.onMouseLeaveHandler)
 }
 );
 hoverItemArr.forEach((item) =>
 {
   if(!is_touch_device())
   item.addEventListener("mousemove", hoverEffect.onMouseMoveHandler)
 }
 );

//------------------------------------------------GSAP TIMELINES-------------------------------------------------//
//--common timelines--//
commonTimelines.animateStories();
commonTimelines.animateHeadings();

//--navigation timeline--//
  elements.toggleMenuBtn.addEventListener("click", toggleMenu);
  let menuLinksArr = Array.from(elements.menuLinks);
  menuLinksArr.forEach((e) => {
    e.addEventListener("click", (event) => {
      event.preventDefault();
      elements.toggleMenuBtn.classList.remove("toggled");
      navTimeline.reverse();
    });
  });

  //--toggle timelines--//
  toggleAnimation.toggleHeader();
  toggleAnimation.toggleFixedBtn();

//adding event listeners 
document.getElementById('next-section-btn').addEventListener("click", goToNextSection);
  
let anchorLinksArr = Array.from(elements.anchorLinks);
anchorLinksArr.forEach(el => el.addEventListener("click", (e) => {
   if(screen.width >= 1199.98){
      let page_index = $($(el).attr("href")).data("index");
      let container = $(".scroll-container");
      //console.log(page_index);
      container.moveTo(page_index);
   }
   else{
      console.log(el.hash);
   // Make sure this.hash has a value before overriding default behavior
    if (el.hash !== "") {
      // 1
      e.preventDefault();
      // 2
      const href = $(el).attr("href");
      // 3
      $("html, body").animate({ scrollTop: $(href).offset().top }, 800);
    } // End if
   }
}))

 document.getElementById('goNext').addEventListener("click", goToNextSection);

//toggling the cursor 
window.onresize = toggleCursor;
function toggleCursor(){
   if(is_touch_device()){
      elements.cursor.style.display = "none";
   }
   else{
      elements.cursor.style.display = "block";
   }
}

toggleCursor();