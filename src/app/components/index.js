
import HomeComponent from './home/home.component';

import CardComponent from './card/card.component';
import FormsComponent from './forms/forms.component';

angular
  .module('components', [])
  .component('homeComponent', HomeComponent)
  .component('cardComponent', CardComponent)
  .component('formsComponent', FormsComponent)
  ;