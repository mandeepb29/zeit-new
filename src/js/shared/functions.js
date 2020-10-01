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

// elements.header.addEventListener("scroll", () => {
//   console.log("header scrolled");
// });

if(is_touch_device()){
    elements.cursor.style.display = "none";
    elements.body.style.cursor = "auto";
    elements.anchorTag.style.cursor = "pointer";
  }
  