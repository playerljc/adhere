const __extends =
  (this && this.__extends) ||
  (function () {
    var n = function (t, e) {
      return (n =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (const r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
        })(t, e);
    };
    return function (t, e) {
      function r() {
        this.constructor = t;
      }
      n(t, e),
        (t.prototype = e === null ? Object.create(e) : ((r.prototype = e.prototype), new r()));
    };
  })();
var __assign =
  (this && this.__assign) ||
  function () {
    return (__assign =
      Object.assign ||
      function (t) {
        for (var e, r = 1, n = arguments.length; r < n; r++)
          for (const o in (e = arguments[r]))
            Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
        return t;
      }).apply(this, arguments);
  };
const __rest =
  (this && this.__rest) ||
  function (t, e) {
    const r = {};
    for (o in t) Object.prototype.hasOwnProperty.call(t, o) && e.indexOf(o) < 0 && (r[o] = t[o]);
    if (t != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var n = 0, o = Object.getOwnPropertySymbols(t); n < o.length; n++)
        e.indexOf(o[n]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(t, o[n]) &&
          (r[o[n]] = t[o[n]]);
    return r;
  };
const __importDefault =
  (this && this.__importDefault) ||
  function (t) {
    return t && t.__esModule ? t : { default: t };
  };
Object.defineProperty(exports, '__esModule', { value: !0 });
const react_1 = __importDefault(require('react'));
const prop_types_1 = __importDefault(require('prop-types'));

const selectorPrefix = 'adhere-ui-split';
const SplitGroup = (function (t) {
  function e() {
    return (t !== null && t.apply(this, arguments)) || this;
  }
  return (
    __extends(e, t),
    (e.prototype.render = function () {
      const t = this.props;
      const e = t.children;
      const r = __rest(t, ['children']);
      return react_1.default.createElement(
        react_1.default.Fragment,
        null,
        e.map(function (t, e) {
          return e !== 0
            ? react_1.default.createElement(
                react_1.default.Fragment,
                null,
                react_1.default.createElement(Split, { ...r, key: e }),
                t,
              )
            : t;
        }),
      );
    }),
    e
  );
})(react_1.default.Component);

(SplitGroup.defaultProps = { direction: 'vertical', size: 20, className: '' }),
  (SplitGroup.propTypes = {
    direction: prop_types_1.default.oneOf(['vertical', 'horizontal']),
    size: prop_types_1.default.oneOfType([
      prop_types_1.default.string,
      prop_types_1.default.number,
    ]),
    className: prop_types_1.default.string,
  });
var Split = (function (t) {
  function e() {
    return (t !== null && t.apply(this, arguments)) || this;
  }
  return (
    __extends(e, t),
    (e.prototype.getStyle = function () {
      var t = this.props;
      const e = t.direction;
      var t = t.size;
      return e === 'horizontal'
        ? { display: 'inline-block', width: 1, height: '100%', margin: `0 ${t}px` }
        : { width: '100%', height: 1, margin: `${t}px 0` };
    }),
    (e.prototype.render = function () {
      const t = this.props.className;
      return react_1.default.createElement('div', {
        className: `${selectorPrefix} ${t}`,
        style: this.getStyle(),
      });
    }),
    (e.Group = SplitGroup),
    e
  );
})(react_1.default.Component);
(Split.defaultProps = { direction: 'vertical', size: 20, className: '' }),
  (Split.propTypes = {
    direction: prop_types_1.default.oneOf(['vertical', 'horizontal']),
    size: prop_types_1.default.oneOfType([
      prop_types_1.default.string,
      prop_types_1.default.number,
    ]),
    className: prop_types_1.default.string,
  }),
  (exports.default = Split);
// # sourceMappingURL=split.js.map
