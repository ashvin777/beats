export function Modal(openerSelector, modalSelector) {
  this.$opener = document.querySelector(openerSelector);
  this.$modal = document.querySelector(modalSelector);
  this.events = {};

  if (this.$modal instanceof HTMLElement) {
    this.clone();
    this.bindClose();
    this.$modal.addEventListener('click', this.close.bind(this));
  }

  if (this.$opener instanceof HTMLElement) {
    this.$opener.addEventListener('click', this.show.bind(this));
  }
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

Modal.prototype.clone = function () {
  document.body.appendChild(this.$modal);
}

Modal.prototype.bindClose = function () {
  let $closeElements = this.$modal.querySelectorAll('.close-modal');
  $closeElements.forEach(($el) => {
    $el.addEventListener('click', this.close.bind(this));
  });
}

Modal.prototype.show = function () {
  this.$modal.classList.add('visible');
}

Modal.prototype.close = function () {
  if (ev.target.classList.contains('modal')) {
    this.$modal.classList.remove('visible');
    this.fire('close');
  }  
}

export function Alert(text) {

  this.$modal = document.createElement('div');
  this.$modal.id = '#alert-modal';
  this.$modal.innerHTML = `<div class="modal" >
    <div class="modal-inner">
      <div class="modal-title"></div>
      <div class="modal-body">${text}</div>
      <div class="modal-footer"></div>
    </div>
  </div>`;

  document.body.appendChild(this.$modal);
  
  let $alert = new Modal(this.$modal.dd);

  $alert.show();

}

Alert.prototype = Object.create(Modal.prototype);
Alert.prototype.constructor = Alert;
