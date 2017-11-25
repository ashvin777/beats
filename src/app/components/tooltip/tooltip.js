function Tooltip(selector, text, options) {
  let $element = document.querySelector(selector);
  this.text = text;
  this.options = options || {};

  $element.addEventListener('mouseenter', this.mouseenter.bind(this));
  $element.addEventListener('mouseleave', this.mouseleave.bind(this));
}

Tooltip.prototype = {

  constructor: Tooltip,
  
  mouseenter: function (ev) {
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

  },

  mouseleave: function (ev) {
    let $tooltip = this.getTooltipElement();
    $tooltip.removeAttribute('class');

    $tooltip.style.display = 'none';
    $tooltip.querySelector('span').innerHTML = '';
  },

  getTooltipElement: function () {
    let $tooltip = document.querySelector('#tooltip') || null;

    if (!$tooltip) {
      $tooltip = document.createElement('span');
      $tooltip.id = 'tooltip';
      let $child = document.createElement('span');
      $tooltip.appendChild($child);
      document.body.appendChild($tooltip);
    }

    return $tooltip;
  },

  top: function ($tooltip, el) {
    $tooltip.style.top = `${el.y}px`;
    $tooltip.style.left = `${el.x + el.width / 2}px`;
  },

  bottom: function ($tooltip, el) {
    $tooltip.style.top = `${el.y + el.height - 5}px`;
    $tooltip.style.left = `${el.x + el.width / 2}px`;
  },

  left: function ($tooltip, el) {
    $tooltip.style.top = `${el.y + el.height / 2}px`;
    $tooltip.style.left = `${el.x + 5}px`;
  },

  right: function ($tooltip, el) {
    $tooltip.style.top = `${el.y + el.height / 2}px`;
    $tooltip.style.left = `${el.x + el.width - 5}px`;
  }

}

export default Tooltip;
