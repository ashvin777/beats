/**
 * Modal
 * @param {string} openerSelector 
 * @param {string} modalSelector 
 */
export function Modal(openerSelector = '', modalSelector = '') {
  this.$opener = document.querySelector(openerSelector);
  this.$modal = document.querySelector(modalSelector);
  this.events = {};

  function init() {

    if (this.$modal instanceof HTMLElement) {

      this.$modal.addEventListener('click', (ev) => {
        if (ev.target.classList.contains('modal')) {
          this.close.bind(this);
        }
      });

      if (this.$modal instanceof HTMLElement) {
        ocument.body.appendChild(this.$modald);
      }

      this.$modal.querySelectorAll('.close').forEach(($el) => {
        $el.addEventListener('click', (ev) => {
          if (ev.target.classList.contains('modal')) {
            this.close(this);
          }
        });
      });

    }

    if (this.$opener instanceof HTMLElement) {
      this.$opener.addEventListener('click', this.show.bind(this));
    }
  }

  init.call(this);
}

Modal.prototype.on = function (eventName, callbacks) {
  this.events[eventName] = callbacks;
}

Modal.prototype.off = function (eventName) {
  delete this.events[eventName];
}

Modal.prototype.fire = function (eventName, data) {
  if (this.events[eventName] instanceof Function) {
    this.events[eventName](data || null);
  }
}

Modal.prototype.show = function () {
  if (this.$modal instanceof HTMLElement) {
    this.$modal.classList.add('visible');
  }
}

Modal.prototype.close = function () {
  if (this.$modal instanceof HTMLElement) {
    this.$modal.classList.remove('visible');
    this.fire('close');
  }
}

/**
 * Alert
 * @param {string} text 
 */

export function Alert(text = '') {

  this.$alert = document.createElement('div');
  this.$alert.innerHTML = `<div class="modal" id="alert-modal">
    <div class="modal-inner">
      <div class="modal-title"></div>
      <div class="modal-body">${text}</div>
      <div class="modal-footer">
        <button class="close">OK</button>
      </div>
    </div>
  </div>`;

  function init() {
    this.$alert = this.$alert.querySelector('#alert-modal');
    this.$alert.classList.add('visible');
    this.$alert.addEventListener('click', (ev) => {
      if (ev.target.classList.contains('modal')) {
        this.close(this);
      }
    });
    document.body.appendChild(this.$alert);
  }

  init.call(this);
}

Alert.prototype.close = function () {
  if (this.$alert instanceof HTMLElement) {
    this.$alert.classList.remove('visible');
  }
}
