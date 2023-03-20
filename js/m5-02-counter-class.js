const CounterPlagin = function ({
  rootSelector,
  initialValue = 0,
  step = 1,
} = {}) {
  this._value = initialValue;
  this._step = step;

  this._refs = this._getRefs(rootSelector);

  this._bindEvents();

  this.updateValueUI();
};

CounterPlagin.prototype._getRefs = function (rootSelector) {
  const refs = {};

  refs.container = document.querySelector(rootSelector);
  refs.incrementBtn = refs.container.querySelector("[data-increment]");
  refs.decrementBtn = refs.container.querySelector("[data-decrement]");
  refs.value = refs.container.querySelector("[data-value]");

  return refs;
};

CounterPlagin.prototype._bindEvents = function () {
  this._refs.incrementBtn.addEventListener("click", () => {
    console.log("CounterPlagin.prototype._bindEvents -> this ", this);

    this.increment();
    this.updateValueUI();
  });

  this._refs.decrementBtn.addEventListener("click", () => {
    console.log("CounterPlagin.prototype._bindEvents -> this ", this);

    this.decrement();

    this.updateValueUI();
  });
};

CounterPlagin.prototype.updateValueUI = function () {
  this._refs.value.textContent = this._value;
};

CounterPlagin.prototype.increment = function () {
  this._value += this._step;
};

CounterPlagin.prototype.decrement = function () {
  this._value -= this._step;
};

const counter1 = new CounterPlagin({ rootSelector: "#counter-1", step: 10 });
console.log("counter1", counter1);

const counter2 = new CounterPlagin({ rootSelector: "#counter-2", step: 2 });
console.log("counter2", counter2);
