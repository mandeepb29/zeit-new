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


  if(!is_touch_device()){
    document.addEventListener("mousemove", moveCursor);
    }
    
    techIconsArr.forEach((e) => {
      if(!is_touch_device())
      e.addEventListener("mouseover", addBigCursor);
    });
    techIconsArr.forEach((e) => {
      if(!is_touch_device())
      e.addEventListener("mouseleave", removeBigCursor);
    });
    
    cursorLinksBigArr.forEach((e) => {
      if(!is_touch_device())
      e.addEventListener("mouseover", addBigCursor);
    });
    cursorLinksBigArr.forEach((e) => {
      if(!is_touch_device())
      e.addEventListener("mouseleave", removeBigCursor);
    });
    
    cursorLinksMediumArr.forEach((e) => {
      if(!is_touch_device())
      e.addEventListener("mouseover", addMediumCursor);
    });
    cursorLinksMediumArr.forEach((e) => {
      if(!is_touch_device())
      e.addEventListener("mouseleave", removeMediumCursor);
    });
    
    cursorLinksTinyArr.forEach((e) => {
      if(!is_touch_device())
      e.addEventListener("mouseover", addTinyCursor);
    });
    cursorLinksTinyArr.forEach((e) => {
      if(!is_touch_device())
      e.addEventListener("mouseleave", removeTinyCursor);
    });
    
    introTextArr.forEach((e) => {
      if(!is_touch_device())
      e.addEventListener("mouseover", addBorderCursor);
    });
    introTextArr.forEach((e) => {
      if(!is_touch_device())
      e.addEventListener("mouseleave", removeBorderCursor);
    });