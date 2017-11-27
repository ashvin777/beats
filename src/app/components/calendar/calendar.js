/** global document */

function Calendar(selector) {
  this.$opener = document.querySelector(selector);

  this.init.call(this);
}

Calendar.prototype = {

  constructor: Calendar,

  init: function () {
    this.$opener.addEventListener('click', this.show.bind(this));
    this.$opener.addEventListener('blur', this.hide.bind(this));

    //TODO - Added for testing only
    // let $calendar = this.getCalendarElement();
    // $calendar.style.display = 'inline-block';
  },

  show: function (ev) {

    let $calendar = this.getCalendarElement();
    let el = ev.currentTarget.getBoundingClientRect();

    $calendar.style.display = 'inline-block';
    $calendar.style.top = `${el.y + el.height - 5}px`;
    $calendar.style.left = `${el.x + el.width / 2}px`;
  },

  hide: function () {
    let $calendar = this.getCalendarElement();
    $calendar.style.display = 'none';
  },

  getCalendarElement: function () {
    let $calendar = document.querySelector('#calendar-picker') || null;

    if (!$calendar) {
      $calendar = document.createElement('div');
      $calendar.id = 'calendar-picker';
      $calendar.innerHTML = this.getContainer();

      document.body.appendChild($calendar);
    }

    return $calendar;
  },

  getContainer() {

    return `<div class="calendar">
      <div class="calendar-header"></div>
      <div class="calendar-body">
        <div class="calendar-months"></div>
      </div>
    </div>`;

  },

  getMonthTemplate() {
    return `<div class="calendar-month"></div>`;
  },

  getDaysRow() {
    return `<div class="calendar-week-day-row"></div>`;
  },

  getMonthRowsTemplate() {
    return `<div class="calendar-week-row"></div>`;
  }
}

export default Calendar;
