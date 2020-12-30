//functions to manipulate hover element
var counter = 0;
var updateRate = 10;
var isTimeToUpdate = function () {
  // console.log(counter);
  return counter++ % updateRate === 0;
};

function hoverEffect(e, item) {
  
    const { offsetX: x, offsetY: y } = e,
      { offsetWidth: width, offsetHeight: height } = item,
      move = 30,
      xMove = (x / width) * (move * 1.5) - move,
      yMove = (y / height) * (move * 1.5) - move;
  
    item.style.transform = `translate(${xMove}px, ${yMove}px)`;
  }
  
 export var onMouseEnterHandler = function (event) {
    hoverEffect(event, this);
  };
  
 export var onMouseLeaveHandler = function () {
    this.style.transform = "";
  };
  
  export var onMouseMoveHandler = function (event) {
    //console.log("mouse move",this);
    if (isTimeToUpdate()) {
      hoverEffect(event, this);
    }
  };
  
