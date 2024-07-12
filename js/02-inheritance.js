/*
 * Наслідування класів
 *
 *  - extends
 *  - Конструктор дочірнього класу (super)
 *  - Методи дочірнього класу
 */

class Timer {
  static timerTest = 10;

  constructor(deadline, rootSelector) {
    // this = {};
    this.deadline = deadline;
    this.rootSelector = rootSelector;
    this.daysEl = {};
    this.hoursEl = {};
    this.minutesEl = {};
    this.secondsEl = {};
    // return this;
  }

  start() {
    console.log('Start');
  }

  stop() {
    console.log('Stop');
  }
}

const timer = new Timer('13.07.2024', '.timer-1');

console.log(timer);

class CustomTimer extends Timer {
  constructor(deadline, rootSelector, cssProps) {
    super(deadline, rootSelector);

    this.styles = cssProps;
  }

  pause() {
    console.log('Pause!');
  }
}

console.dir(CustomTimer);

const customTimer1 = new CustomTimer('14.07.2024', '.custom-timer-1', {
  fontSize: '20px',
  backgrounColor: 'teal',
  color: 'yellow',
});

console.log(customTimer1);
