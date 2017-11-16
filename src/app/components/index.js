
import HomeComponent from './home/home.component';

import PanelComponent from './panel/panel.component';

angular
  .module('components', [])
  .component('homeComponent', HomeComponent)
  .component('panel', PanelComponent)
  ;