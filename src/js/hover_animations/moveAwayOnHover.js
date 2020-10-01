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
  
  hoverItemArr.forEach((b) =>{
    if(!is_touch_device())
    b.addEventListener("mouseenter", onMouseEnterHandler1)
  }
  );
  hoverItemArr.forEach((b) =>{
    if(!is_touch_device())
    b.addEventListener("mouseleave", onMouseLeaveHandler1)
  }
  );
  hoverItemArr.forEach((b) =>
  {
    if(!is_touch_device())
    b.addEventListener("mousemove", onMouseMoveHandler1)
  }
  );