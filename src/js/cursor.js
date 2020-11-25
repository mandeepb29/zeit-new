import {elements} from './base';

//--FUNCTIONS TO MANIPULATE CURSOR PROPERTIES
export function moveCursor(e) {
  elements.cursor.style.top = e.pageY + "px";
  elements.cursor.style.left = e.pageX + "px";
}

export function addMediumCursor() {
  elements.cursor.classList.add("medium-cursor");
}

export function removeMediumCursor() {
  elements.cursor.classList.remove("medium-cursor");
}

export function addBigCursor() {
  elements.cursor.classList.add("big-cursor");
}

export function removeBigCursor() {
  elements.cursor.classList.remove("big-cursor");
}

export function addBorderCursor() {
  elements.cursor.classList.add("border-cursor");
}

export function removeBorderCursor() {
  elements.cursor.classList.remove("border-cursor");
}

export function addTinyCursor() {
  elements.cursor.classList.add("tiny-cursor");
}

export function removeTinyCursor() {
  elements.cursor.classList.remove("tiny-cursor");
}



