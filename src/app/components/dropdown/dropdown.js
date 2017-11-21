/* global window */

function DropDown(el) {
  this.dd = document.querySelector(el);
  this.placeholder = this.dd.querySelector('.title');
  this.opts = this.dd.querySelectorAll('ul.menu > li:not([disabled])');
  this.val = '';
  this.index = -1;
  this.initEvents();
}

DropDown.prototype = {
  initEvents: function () {
    var obj = this;
    const CLICK = 'click';
    const ACTIVE = 'active';

    obj.dd.addEventListener(CLICK, function(){
      this.classList.toggle(ACTIVE);
      return false;
    });

    obj.opts.forEach(function(element, index) {

      element.addEventListener(CLICK,function(){
        obj.val = element.innerText;
        obj.index = index;
        if(obj.placeholder){
          obj.placeholder.innerText = obj.val;
        }
      });

    });

    document.addEventListener(CLICK, function(ev){
      if( ev.target.closest('#'+ obj.dd.getAttribute('id')) == null ){
        obj.dd.classList.remove(ACTIVE);
      }
    });

  },
  getValue: function () {
    return this.val;
  },
  getIndex: function () {
    return this.index;
  }
}

export default DropDown;
