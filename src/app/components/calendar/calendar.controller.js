import Calendar from './calendar';

export default class CalendarController{
  constructor() {
    'ngInject';
  }

  $onInit() {
    new Calendar("#calendar");
  }
}