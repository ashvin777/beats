export default class DropdownDirective {
  constructor(){
    'ngInject';

    this.restrict = 'E';
    this.templateUrl = 'app/directives/dropdown/dropdown.template.html';
    this.scope = {
      placeholder: '@',
      ngModel: '=',
      options: '=',
      onOptionClick: '&'
    };
    this.controller = 'dropdownController';
    this.controllerAs = '$ctrl';
    this.bindToController = true;
  }
}