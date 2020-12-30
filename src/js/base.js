export const elements = {
    scrollContainer: document.querySelector(".scroll-container"),
    _3dHoverContainer: document.querySelectorAll("._3d-hover__container"),
    _3dHoverItem: document.querySelectorAll("._3d-hover__item"),
    storySections: document.querySelectorAll(".story-section"),
    animatedHeadingsSection: document.querySelectorAll(
      ".section-heading-animate"
    ),
    body: document.querySelector("body"),
    anchorTag: document.querySelector("a"),
    //hoverContainer: document.querySelectorAll(".hover-this"),
    hoverItem: document.querySelectorAll(".hover-item"),
    cursor: document.querySelector(".cursor"),
    header: document.querySelector(".header"),
    navbar: document.querySelector(".navbar"),
    anchorLinks: document.querySelectorAll('.anchor-link'),
    introText: document.querySelectorAll(".intro-heading"),
    cursorLinksBig: document.querySelectorAll(".cursor--link--big"),
    cursorLinksMedium: document.querySelectorAll(".cursor--link--medium"),
    cursorLinksTiny: document.querySelectorAll(".cursor--link--tiny"),
    menuLinks: document.querySelectorAll(".menu__link a"),
    toggleMenuBtn: document.querySelector(".hamburger"),
    techIcons: document.querySelectorAll(".shape__tech"),
    storyContainer: document.querySelector(".story-section-wrapper"),
    storyScrollableContainer: document.querySelector(".story-scrollable-content"),
    // cursorLinksBigArr: Array.from(this.cursorLinksBig),
    // cursorLinksMediumArr: Array.from(this.cursorLinksMedium),
    // cursorLinksTinyArr: Array.from(this.cursorLinksTiny),
    // techIconsArr: Array.from(this.techIcons),
    // menuLinksArr: Array.from(this.menuLinks),
    // introTextArr: Array.from(elements.introText),
    // hoverItemArr: Array.from(elements.hoverItem),
    // _3dHoverContainerArr: Array.from(elements._3dHoverContainer),
    // _3dHoverItemArr: Array.from(elements._3dHoverItem),
    // storySectionsArr: Array.from(elements.storySections),
    // animatedHeadingsSectionArr: Array.from(elements.animatedHeadingsSection),
    //colorHeadings:document.querySelectorAll(".heading__color")
  };  

//SCROLL MAGIC INITIALISATION
export const controller = new ScrollMagic.Controller();

export const is_touch_device = ()=> {
  console.log("touch enabled: ",'ontouchstart' in window ) ||  
  ( navigator.maxTouchPoints > 0 ) ||  
  ( navigator.msMaxTouchPoints > 0 )
    return ( 'ontouchstart' in window ) ||  
           ( navigator.maxTouchPoints > 0 ) ||  
           ( navigator.msMaxTouchPoints > 0 ); 
           
}

export const goToNextSection =() => {
  $(".scroll-container").moveDown();
}