import DropdownDirective from './dropdown/dropdown.directive';
import DropdownController from './dropdown/dropdown.controller';


angular.module('directives', [])
  .directive('dropdown', () => new DropdownDirective())
  .controller('dropdownController', DropdownController)
  ;