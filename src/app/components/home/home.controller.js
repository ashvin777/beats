export default class HomeCtrl { 
  constructor() {
    'ngInject';
    this.index = 0;
  }

  openTab(index) {
    this.index = index;
  }
}