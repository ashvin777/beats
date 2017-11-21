export default class DropdownController {
  constructor() {
    'ngInject';

    this.isOptionsVisible = false;
  }

  toggleMenu() {
    this.isOptionsVisible = !this.isOptionsVisible;
  }

  optionClick(option) {
    this.ngModel = option.value || option.text;
    this.onOptionClick({
      option: option
    })
  }

  getValue(value){
    let text = null;
    for( let option of this.options){
      if( option.value == value ){
        text = option.text;
        break;
      }
    }
    return text;
  }
}
