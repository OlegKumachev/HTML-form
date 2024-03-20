export function showPopover(element, title, content) {
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

export function hidePopover() {
  const popover = document.querySelector('.popover');
  if (popover) {
      popover.remove();
  }
}
