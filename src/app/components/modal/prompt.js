/**
 * Prompt
 * @param {String} text 
 */
export default function Prompt(text = '', callback) {
  
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
  