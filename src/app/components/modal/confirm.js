/**
 * Confirm
 * @param {String} text 
 */
export default function Confirm(text = '', callback) {
  
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