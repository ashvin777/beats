function Tooltip(selector, text, options) {
  this.element = document.querySelector(selector);
  this.text = text;
  this.options = options || {};

  this.element.addEventListener('mouseenter', this.mouseEnter.bind(this));
  this.element.addEventListener('mouseleave', this.mouseLeave.bind(this));
}

Tooltip.prototype.mouseEnter = function (ev) {
  let $tooltip = this.getTooltipElement();

  $tooltip.querySelector('span').innerHTML = this.text;

  let el = ev.currentTarget.getBoundingClientRect();
  //position the absolute
  $tooltip.style.display = 'inline-block';
  $tooltip.classList.add(this.options.direction);

  if (this.options.direction == 'top') {
    this.top($tooltip, el);
  } else if (this.options.direction == 'left') {
    this.left($tooltip, el);
  } else if (this.options.direction == 'right') {
    this.right($tooltip, el);
  } else {
    this.bottom($tooltip, el);
  }

}

Tooltip.prototype.mouseLeave = function (ev) {
  let $tooltip = this.getTooltipElement();
  $tooltip.removeAttribute('class');

  $tooltip.style.display = 'none';
  $tooltip.querySelector('span').innerHTML = '';
}

Tooltip.prototype.getTooltipElement = function () {
  let $tooltip = document.querySelector('#tooltip') || null;

  if (!$tooltip) {
    $tooltip = document.createElement('span');
    $tooltip.id = 'tooltip';
    let $child = document.createElement('span');
    $tooltip.appendChild($child);
    document.body.appendChild($tooltip);
  }

  return $tooltip;
}

Tooltip.prototype.top = function ($tooltip, el) {
  $tooltip.style.top = `${el.y}px`;
  $tooltip.style.left = `${el.x + el.width / 2}px`;
}

Tooltip.prototype.bottom = function ($tooltip, el) {
  $tooltip.style.top = `${el.y + el.height - 5}px`;
  $tooltip.style.left = `${el.x + el.width / 2}px`;
}

Tooltip.prototype.left = function ($tooltip, el) {
  $tooltip.style.top = `${el.y + el.height / 2}px`;
  $tooltip.style.left = `${el.x + 5}px`;
}

Tooltip.prototype.right = function ($tooltip, el) {
  $tooltip.style.top = `${el.y + el.height / 2}px`;
  $tooltip.style.left = `${el.x + el.width - 5}px`;
}

export default Tooltip;
