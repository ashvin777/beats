
import HomeComponent from './home/home.component';

import CardComponent from './card/card.component';

angular
  .module('components', [])
  .component('homeComponent', HomeComponent)
  .component('card', CardComponent)
  ;