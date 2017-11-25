/**
 * Modal
 * @param {String} selector 
 */

export function Modal(selector = '') {
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

Modal.prototype.show = function () {
  if (this.$modal instanceof HTMLElement) {
    this.$modal.classList.add('visible');
  }
}

Modal.prototype.close = function () {
  if (this.$modal instanceof HTMLElement) {
    this.$modal.classList.remove('visible');
  }
}

/**
 * Alert
 * @param {String} text 
 */
export function Alert(text = '') {

  let id = 'alert-modal';
  let $alert = document.getElementById(id);

  //add element if doesn't exist
  if (!$alert) {

    $alert = document.createElement('div');
    $alert.innerHTML = `<div class="modal" id="${id}">
      <div class="modal-inner">
        <div class="modal-body">${text}</div>
        <div class="modal-footer">
          <button class="close">OK</button>
        </div>
      </div>
    </div>`;

    $alert = $alert.querySelector(`#${id}`);
    $alert.addEventListener('click', click);
    document.addEventListener('keypress', keypress);

    function click(ev) {
      let classList = ev.target.classList;
      if (classList.contains('modal') || classList.contains('close')) {
        $alert.classList.remove('visible');
      }
    };

    function keypress(ev) {
      if (ev.code == 'Enter') {
        $alert.classList.remove('visible');
      }
    }

    document.body.appendChild($alert);
  }

  $alert.classList.add('visible');

}

/**
 * Confirm
 * @param {String} text 
 */
export function Confirm(text = '', callback) {

  let id = 'confirm-modal';
  let $confirm = document.getElementById(id);

  //add element if doesn't exist
  if (!$confirm) {

    $confirm = document.createElement('div');
    $confirm.innerHTML = `<div class="modal" id="${id}">
        <div class="modal-inner">
          <div class="modal-body">${text}</div>
          <div class="modal-footer">
            <button class="close no">NO</button>
            <button class="close yes">YES</button>
          </div>
        </div>
      </div>`;

    $confirm = $confirm.querySelector(`#${id}`);
    $confirm.addEventListener('click', click);
    document.addEventListener('keypress', keypress);

    function click(ev) {
      let classList = ev.target.classList;
      if (classList.contains('modal') || classList.contains('close')) {
        $confirm.classList.remove('visible');
      }

      if (classList.contains('yes')) {
        callback(true);
      }

      if (classList.contains('no')) {
        callback(false);
      }
    }

    function keypress(ev) {
      if (ev.code == 'Enter') {
        $confirm.classList.remove('visible');
        callback(true);
      }
    }

    document.body.appendChild($confirm);
  }

  $confirm.classList.add('visible');

}

/**
 * Prompt
 * @param {String} text 
 */
export function Prompt(text = '', callback) {

  let id = 'prompt-modal';
  let $prompt = document.getElementById(id);

  //add element if doesn't exist
  if (!$prompt) {

    $prompt = document.createElement('div');
    $prompt.innerHTML = `<div class="modal" id="${id}">
          <div class="modal-inner">
            <div class="modal-body">
              <div>${text}</div>
              <input type='text' />
            </div>
            <div class="modal-footer">
              <button class="close ok">OK</button>
            </div>
          </div>
        </div>`;

    $prompt = $prompt.querySelector(`#${id}`);
    $prompt.addEventListener('click', click);
    document.addEventListener('keypress', keypress);

    function click(ev) {
      let classList = ev.target.classList;
      if (classList.contains('modal') || classList.contains('close')) {
        $prompt.classList.remove('visible');
      }

      if (classList.contains('ok')) {
        callback($prompt.querySelector('input').value);
      }
    }

    function keypress(ev) {
      if (ev.code == 'Enter') {
        $prompt.classList.remove('visible');
        callback($prompt.querySelector('input').value);
      }
    }

    document.body.appendChild($prompt);
  }

  $prompt.classList.add('visible');
  $prompt.querySelector('input').focus();

}
