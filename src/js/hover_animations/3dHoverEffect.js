//functions to manipulate the 3d hover elements // --that are team members image

_3dHoverContainerArr.forEach((el) =>
  el.addEventListener("mouseenter", onMouseEnterHandler2)
);
_3dHoverContainerArr.forEach((el) =>
  el.addEventListener("mouseleave", onMouseLeaveHandler2)
);
_3dHoverContainerArr.forEach((el) =>
  el.addEventListener("mousemove", onMouseMoveHandler2)
);

var onMouseEnterHandler2 = function (event) {
    // console.log("mouse enter",this);
    var innerItem = this.querySelector("._3d-hover__item");
    mouse.setOrigin(this);
    //update(event, innerItem);
  };
  
  var onMouseLeaveHandler2 = function () {
    var innerItem = this.querySelector("._3d-hover__item");
    innerItem.style = "";
    //console.log(innerItem, 'styles changed successfully');
  };
  
  var onMouseMoveHandler2 = function (event, el) {
    var innerItem = this.querySelector("._3d-hover__item");
    //console.log("mouse move",this);
    //console.log(counter);
    if (isTimeToUpdate()) {
      update(event, innerItem);
      displayMousePositionHelper(event, innerItem, this);
      //console.log("update!!");
    }
  };
  
  var counter = 0;
  var updateRate = 10;
  var isTimeToUpdate = function () {
    // console.log(counter);
    return counter++ % updateRate === 0;
  };
  
  $(".anchor-link").click(function () {
    var page_index = $($(this).attr("href")).data("index");
    var el = $(".scroll-container");
    el.moveTo(page_index);
  });
  
  _3dHoverContainerArr.forEach((el) => {
    console.log("The offsets - ");
    console.log($(el).offset().top, $(el).offset().left);
  });
  
  var mouse = {
    _x: 0,
    _y: 0,
    x: 0,
    y: 0,
  
    setOrigin: function (itemContainer) {
      console.log(itemContainer);
      this.x = 0;
      this.y = 0;
      this._x =
        itemContainer.offsetLeft + Math.floor(itemContainer.offsetWidth / 2);
      this._y =
        itemContainer.offsetTop + Math.floor(itemContainer.offsetHeight / 2);
  
      console.log(`x =  ${this.x},y = ${this.y},_x = ${this._x},_y = ${this._y}`);
    },
  
    updatePosition: function (event) {
      console.log("Update Position", event);
      var e = event;
      this.x = e.clientX - this._x;
      this.y = (e.clientY - this._y) * -1;
    },
  
    show: function () {
      return "(" + this.x + ", " + this.y + ")";
    },
  };
  // Track the mouse position relative to the center of the container.
  
  var update = function (event, innerItem) {
    console.log(event);
    mouse.updatePosition(event);
  
    updateTransformStyle(
      (mouse.y / innerItem.offsetHeight / 2).toFixed(2),
      (mouse.x / innerItem.offsetWidth / 2).toFixed(2),
      innerItem
    );
  };
  
  var updateTransformStyle = function (x, y, item) {
    //console.log(item);
    var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
    item.style.transform = style;
    item.style.webkitTransform = style;
    item.style.mozTransform = style;
    item.style.msTransform = style;
    item.style.oTransform = style;
  };
  