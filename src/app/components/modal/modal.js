/**
 * Modal
 * @param {String} selector 
 */

export default function Modal(selector = '') {
  this.$modal = document.querySelector(selector);

  //initialization
  if (this.$modal instanceof HTMLElement) {
    document.body.appendChild(this.$modal);
    this.$modal.addEventListener('click', (ev) => {
      if (ev.target.classList.contains('modal') || ev.target.classList.contains('close')) {
        this.close();
      }
    });
  }
}

Modal.prototype = {
  constructor: Modal,
  show: function () {
    if (this.$modal instanceof HTMLElement) {
      this.$modal.classList.add('visible');
    }
  },
  close: function () {
    if (this.$modal instanceof HTMLElement) {
      this.$modal.classList.remove('visible');
    }
  }
}

