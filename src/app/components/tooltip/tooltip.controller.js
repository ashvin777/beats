import Tooltip from './tooltip';

export default class TooltipController {
  constructor() {
    'ngInject';
  }

  $onInit() {
    
    new Tooltip('#hoverMe1', 'Good. Now hover over next');
    new Tooltip('#hoverMe2', 'Cool.');

    new Tooltip('#left', 'Is\'nt is awesome', {
      direction: 'left'
    });

    new Tooltip('#top', 'Is\'nt is awesome', {
      direction: 'top'
    });

    new Tooltip('#bottom', 'Is\'nt is awesome', {
      direction: 'bottom'
    });

    new Tooltip('#right', 'Is\'nt is awesome', {
      direction: 'right'
    });
  }
}