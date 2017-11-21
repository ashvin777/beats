import {
  routerConfig
} from './index.route';

import './components/';
import './directives/';

angular
  .module('beats', [
    'components',
    'directives',
    'ui.router',
    'hljs'
  ])
  .config(routerConfig);
