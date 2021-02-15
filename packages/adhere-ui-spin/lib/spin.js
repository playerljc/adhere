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
const __importDefault =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(exports, '__esModule', { value: !0 });
const react_1 = __importDefault(require('react'));
const prop_types_1 = __importDefault(require('prop-types'));
const adhere_util_resource_1 = __importDefault(require('@baifendian/adhere-util-resource'));

const selectorPrefix = 'adhere-ui-spin';
const Spin = (function (e) {
  function t() {
    return (e !== null && e.apply(this, arguments)) || this;
  }
  return (
    __extends(t, e),
    (t.prototype.render = function () {
      var e = this.props;
      const t = e.spinning;
      const r = e.text;
      var e = e.zIndex;
      return t
        ? react_1.default.createElement(
            'div',
            { className: selectorPrefix, style: { zIndex: e } },
            react_1.default.createElement(
              'span',
              { className: `${selectorPrefix}-dot` },
              react_1.default.createElement('i', null),
              react_1.default.createElement('i', null),
              react_1.default.createElement('i', null),
              react_1.default.createElement('i', null),
            ),
            react_1.default.createElement('div', { className: `${selectorPrefix}-text` }, r),
          )
        : null;
    }),
    t
  );
})(react_1.default.Component);

(Spin.defaultProps = {
  spinning: !1,
  text: '',
  zIndex: adhere_util_resource_1.default.Dict.value.ResourceNormalMaxZIndex.value,
}),
  (Spin.propTypes = {
    spinning: prop_types_1.default.bool,
    text: prop_types_1.default.string,
    zIndex: prop_types_1.default.number,
  }),
  (exports.default = Spin);
// # sourceMappingURL=spin.js.map
