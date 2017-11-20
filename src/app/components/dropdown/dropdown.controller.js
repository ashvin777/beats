import DropDown from './dropdown';

export default class DropdownController {
  constructor() {
    'ngInject';
  }

  $onInit() {
    var dd = new DropDown($('#dd'));

    $(document).click(function () {
      // all dropdowns
      $('.wrapper-dropdown').removeClass('active');
    });
  }
}
