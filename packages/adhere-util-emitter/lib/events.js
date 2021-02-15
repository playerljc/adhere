Object.defineProperty(exports, '__esModule', { value: !0 });
const Events = (function () {
  function t() {
    this.events = {};
  }
  return (
    (t.prototype.remove = function (t, e) {
      let n;
      !this.hasType(t) ||
        ((n = this.events[t].handlers.findIndex(function (t) {
          return t === e;
        })) !== -1 &&
          this.events[t].handlers.splice(n, 1));
    }),
    (t.prototype.hasType = function (t) {
      return t in this.events;
    }),
    (t.prototype.clear = function (t) {
      this.hasType(t) && (this.events[t].handlers = []);
    }),
    (t.prototype.clearAll = function () {
      this.events = {};
    }),
    (t.prototype.on = function (t, e) {
      this.hasType(t) || (this.events[t] = { handlers: [] }), this.events[t].handlers.push(e);
    }),
    (t.prototype.trigger = function (t) {
      for (var e, n = [], s = 1; s < arguments.length; s++) n[s - 1] = arguments[s];
      return (
        this.hasType(t) &&
          this.events[t].handlers.forEach(function (t) {
            e = t.apply(void 0, n);
          }),
        e
      );
    }),
    (t.prototype.dispatchEvent = function (t, e, n) {
      void 0 === t && (t = document);
      n = new CustomEvent(e, n);
      t.dispatchEvent(n);
    }),
    t
  );
})();
exports.default = Events;
// # sourceMappingURL=events.js.map
