const __extends =
  (this && this.__extends) ||
  (function () {
    var n = function (e, t) {
      return (n =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, t) {
            e.__proto__ = t;
          }) ||
        function (e, t) {
          for (const r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
        })(e, t);
    };
    return function (e, t) {
      function r() {
        this.constructor = e;
      }
      n(e, t),
        (e.prototype = t === null ? Object.create(t) : ((r.prototype = t.prototype), new r()));
    };
  })();
var __assign =
  (this && this.__assign) ||
  function () {
    return (__assign =
      Object.assign ||
      function (e) {
        for (var t, r = 1, n = arguments.length; r < n; r++)
          for (const o in (t = arguments[r]))
            Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        return e;
      }).apply(this, arguments);
  };
const __rest =
  (this && this.__rest) ||
  function (e, t) {
    const r = {};
    for (o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
    if (e != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var n = 0, o = Object.getOwnPropertySymbols(e); n < o.length; n++)
        t.indexOf(o[n]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, o[n]) &&
          (r[o[n]] = e[o[n]]);
    return r;
  };
const __importDefault =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(exports, '__esModule', { value: !0 });
const react_1 = __importDefault(require('react'));
const prop_types_1 = __importDefault(require('prop-types'));

const selectorPrefix = 'adhere-ui-space';
const SpaceGroup = (function (e) {
  function t() {
    return (e !== null && e.apply(this, arguments)) || this;
  }
  return (
    __extends(t, e),
    (t.prototype.render = function () {
      const e = this.props;
      const t = e.children;
      const r = __rest(e, ['children']);
      return react_1.default.createElement(
        react_1.default.Fragment,
        null,
        t.map(function (e, t) {
          return t !== 0
            ? react_1.default.createElement(
                react_1.default.Fragment,
                null,
                react_1.default.createElement(Space, { ...r, key: t }),
                e,
              )
            : e;
        }),
      );
    }),
    t
  );
})(react_1.default.Component);

(SpaceGroup.defaultProps = { direction: 'vertical', size: 20, className: '' }),
  (SpaceGroup.propTypes = {
    direction: prop_types_1.default.oneOf(['vertical', 'horizontal']),
    size: prop_types_1.default.oneOfType([
      prop_types_1.default.string,
      prop_types_1.default.number,
    ]),
    className: prop_types_1.default.string,
  });
var Space = (function (e) {
  function t() {
    return (e !== null && e.apply(this, arguments)) || this;
  }
  return (
    __extends(t, e),
    (t.prototype.getStyle = function () {
      var e = this.props;
      const t = e.direction;
      var e = e.size;
      return t === 'horizontal'
        ? { display: 'inline-block', height: '100%', margin: `0 ${e}px` }
        : { width: '100%', margin: `${e}px 0` };
    }),
    (t.prototype.render = function () {
      const e = this.props.className;
      return react_1.default.createElement('div', {
        className: `${selectorPrefix} ${e}`,
        style: this.getStyle(),
      });
    }),
    (t.Group = SpaceGroup),
    t
  );
})(react_1.default.Component);
(Space.defaultProps = { direction: 'vertical', size: 20, className: '' }),
  (Space.propTypes = {
    direction: prop_types_1.default.oneOf(['vertical', 'horizontal']),
    size: prop_types_1.default.oneOfType([
      prop_types_1.default.string,
      prop_types_1.default.number,
    ]),
    className: prop_types_1.default.string,
  }),
  (exports.default = Space);
// # sourceMappingURL=space.js.map
