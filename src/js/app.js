import { showPopover, hidePopover } from './addPopover';

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

const button = document.querySelector('.btn');
const title = 'Popover title';
const content = 'And here`s some amazing content. It`s very engaging. Right?';
let popover = null;

button.addEventListener('click', () => {
    if (popoverVisible) {
        hidePopover();
        popoverVisible = false;
    } else {
        showPopover(button, title, content);
        popoverVisible = true;
        setTimeout(() => {
            hidePopover();
            popoverVisible = false;
        }, 3000); // Скрыть popover через 1 секунду
    }
});
