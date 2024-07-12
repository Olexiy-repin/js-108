/*
 * Наслідування класів
 *
 *  - extends
 *  - Конструктор дочірнього класу (super)
 *  - Методи дочірнього класу
 */

class Timer {
  constructor(deadline, rootSelector) {
    this.deadline = deadline;
    this.rootSelector = rootSelector;
    this.daysEl = {};
    this.hoursEl = {};
    this.minutesEl = {};
    this.secondsEl = {};
  }

  start() {
    console.log('Start');
  }

  stop() {
    console.log('Stop');
  }
}
