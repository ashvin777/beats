/* global malarkey:false, moment:false */

import {
  routerConfig
} from './index.route';

import './components/';

angular
  .module('beats', [
    'components',
    'ui.router'
  ])
  .config(routerConfig);