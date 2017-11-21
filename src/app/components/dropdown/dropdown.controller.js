import DropDown from './dropdown';

export default class DropdownController {
  constructor() {
    'ngInject';

    this.dropdown = 'eldest';

    this.options = [{
      text: 'Sort by...',
      value: null,
      disabled: true
    }, {
      text: 'Sort by name',
      value: 'name',
      seperator: true
    }, {
      text: 'Sort by oldest',
      value: 'oldest'
    }, {
      text: 'Sort by eldest',
      value: 'eldest'
    }, {
      text: 'Sort by category',
      value: 'category',
      seperator: true,
      disabled: true
    }];

  }

  $onInit() {
    let arr = [];
    arr[0] = new DropDown('#dropdown1');
    arr[2] = new DropDown('#dropdown3');
    arr[3] = new DropDown('#dropdown4');
  }

  onClick(option){
    console.log(option);
  }
}
