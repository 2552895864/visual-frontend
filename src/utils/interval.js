class Interval {
  constructor() {
    this.timeId = null;
    this.func = null;
  }
  repeat(func, ms) {
    if (this.func === null) {
      this.func = func;
    }
    if (this.func !== func) {
      return;
    }
    this.timeId = setTimeout(() => {
      func();
      this.repeat(func, ms);
    }, ms);
  }
  clear() {
    clearTimeout(this.timeId);
  }
}

export default Interval;
