import { COMPONENTS } from './home.constants';

export default class HomeCtrl { 
  constructor() {
    'ngInject';
    this.component = 'Tooltip';//COMPONENTS[0];
    this.components = COMPONENTS;
  }

  openTab(component) {
    this.component = component;
  }
}