import Slider from './slider';

export default class SliderController {
  constructor(){
    'ngInject';
  }

  $onInit() {
    new Slider('#slider1');
  }
}