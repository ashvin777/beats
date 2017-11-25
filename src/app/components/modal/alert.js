/**
 * Alert
 * @param {String} text 
 */
export default function Alert(text = '') {
  
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