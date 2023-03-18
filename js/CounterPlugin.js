const CounterPlugin = function ({
  initialValue = 0,
  step = 1,
  rootSelector,
} = {}) {
  this._value = initialValue;
  this._step = step;

  this._refs = this._getRefs(rootSelector);

  this._bindEvents();

  this._updateValueUI();
};

CounterPlugin.prototype._getRefs = function (rootSelector) {
  const refs = {};

  refs.container = document.querySelector(rootSelector);
  refs.incrementBtn = refs.container.querySelector("[data-increment]");
  refs.decrementBtn = refs.container.querySelector("[data-decrement]");
  refs.value = refs.container.querySelector("[data-value]");

  return refs;
};

CounterPlugin.prototype._bindEvents = function () {
  this._refs.incrementBtn.addEventListener("click", () => {
    this.increment();

    this._updateValueUI();
  });

  this._refs.decrementBtn.addEventListener("click", () => {
    this.decrement();

    this._updateValueUI();
  });
};

CounterPlugin.prototype._updateValueUI = function () {
  this._refs.value.textContent = this._value;
};

CounterPlugin.prototype.increment = function () {
  this._value += this._step;
};
CounterPlugin.prototype.decrement = function () {
  this._value -= this._step;
};

new CounterPlugin({ rootSelector: "#counter-1", step: 10 });

new CounterPlugin({ rootSelector: "#counter-2", step: 2 });
