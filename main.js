/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/addPopover.js
function showPopover(element, title, content) {
  const container = document.querySelector('.container');
  const popover = document.createElement('div');
  const arrow = document.createElement('div');
  const popoverTitle = document.createElement('h4');
  const popoverContent = document.createElement('p');
  popoverTitle.textContent = title;
  popoverContent.textContent = content;
  popover.appendChild(popoverTitle);
  popover.appendChild(popoverContent);
  popover.appendChild(arrow);
  arrow.className = 'arrow';
  popover.className = 'popover';
  container.offsetParent.appendChild(popover);
  const elementRect = element.getBoundingClientRect();
  const popoverRect = popover.getBoundingClientRect();
  popover.style.top = `${elementRect.top - popoverRect.height - arrow.offsetHeight}px`;
  popover.style.left = `${elementRect.left + (elementRect.width - popoverRect.width) / 2}px`;
}
function hidePopover() {
  const popover = document.querySelector('.popover');
  if (popover) {
    popover.remove();
  }
}
;// CONCATENATED MODULE: ./src/js/app.js


// let popoverVisible = false;

// const button = document.querySelector('.btn');
// const title = 'Popover title';
// const content = 'And here`s some amazing content. It`s very engaging. Right?';
// let popover = null;

// button.addEventListener('click', () => {
//     showPopover(button, title, content);
//     setTimeout(hidePopover, 1000); // Скрыть popover через 3 секунды
// });

let popoverVisible = false;
const app_button = document.querySelector('.btn');
const title = 'Popover title';
const content = 'And here`s some amazing content. It`s very engaging. Right?';
let popover = null;
app_button.addEventListener('click', () => {
  if (popoverVisible) {
    hidePopover();
    popoverVisible = false;
  } else {
    showPopover(app_button, title, content);
    popoverVisible = true;
    setTimeout(() => {
      hidePopover();
      popoverVisible = false;
    }, 3000); // Скрыть popover через 1 секунду
  }
});
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;