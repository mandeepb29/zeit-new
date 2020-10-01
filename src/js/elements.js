export const elements = {
    scrollContainer: document.querySelector(".scroll-container"),
    _3dHoverContainer: document.querySelectorAll("._3d-hover__container"),
    _3dHoverItem: document.querySelectorAll("._3d-hover__item"),
    storySections: document.querySelectorAll(".story-section"),
    animatedHeadingsSection: document.querySelectorAll(
      ".section-heading-animate"
    ),
    body: document.querySelector('body'),
    anchorTag: document.querySelector('a'),
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