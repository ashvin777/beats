import HomeComponent from './home/home.component';

import CardComponent from './card/card.component';
import FormsComponent from './forms/forms.component';
import TabsComponent from './tabs/tabs.component';
import ButtonsComponent from './buttons/buttons.component';
import DropdownComponent from './dropdown/dropdown.component';
import TooltipComponent from './tooltip/tooltip.component';

angular
  .module('components', [])
  .component('homeComponent', HomeComponent)
  .component('cardComponent', CardComponent)
  .component('formsComponent', FormsComponent)
  .component('tabsComponent', TabsComponent)
  .component('buttonsComponent', ButtonsComponent)
  .component('dropdownComponent', DropdownComponent)
  .component('tooltipComponent', TooltipComponent);
