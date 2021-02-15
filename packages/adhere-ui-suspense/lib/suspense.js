const __extends =
  (this && this.__extends) ||
  (function () {
    var i = function (t, e) {
      return (i =
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
      i(t, e),
        (t.prototype = e === null ? Object.create(e) : ((r.prototype = e.prototype), new r()));
    };
  })();
const __importDefault =
  (this && this.__importDefault) ||
  function (t) {
    return t && t.__esModule ? t : { default: t };
  };
Object.defineProperty(exports, '__esModule', { value: !0 });
const react_1 = __importDefault(require('react'));
const prop_types_1 = __importDefault(require('prop-types'));
const antd_1 = require('antd');

const selectorPrefix = 'adhere-ui-suspense';
const Suspense = (function (e) {
  function t() {
    const t = (e !== null && e.apply(this, arguments)) || this;
    return (t.isFirst = !0), (t.isFirstLoading = !1), t;
  }
  return (
    __extends(t, e),
    (t.prototype.componentWillReceiveProps = function (t) {
      t.reset && ((this.isFirst = !0), (this.isFirstLoading = !1), this.forceUpdate());
    }),
    (t.prototype.componentDidMount = function () {
      this.fetchData();
    }),
    (t.prototype.renderNormalFirstLoading = function () {
      for (var t = [], e = 0; e < 7; e++)
        t.push(
          react_1.default.createElement(antd_1.Skeleton, {
            key: e + 1,
            loading: !0,
            active: !0,
            avatar: !0,
          }),
        );
      return react_1.default.createElement('div', { className: `${selectorPrefix}-loading` }, t);
    }),
    (t.prototype.renderFirstLoading = function () {
      const t = this.props.firstLoading;
      return t != null ? t : this.renderNormalFirstLoading();
    }),
    (t.prototype.renderNormal = function () {
      return react_1.default.createElement(
        antd_1.Spin,
        { size: 'large', spinning: this.showLoading() },
        this.renderInner(),
      );
    }),
    (t.prototype.renderDispatch = function () {
      const t = this.showLoading();
      return (
        this.isFirst && !this.isFirstLoading && t && (this.isFirstLoading = !0),
        this.isFirst &&
          this.isFirstLoading &&
          !t &&
          ((this.isFirst = !1), (this.isFirstLoading = !1)),
        this.isFirst ? this.renderFirstLoading() : this.renderNormal()
      );
    }),
    (t.prototype.render = function () {
      return react_1.default.createElement(
        'div',
        { className: selectorPrefix },
        this.renderDispatch(),
      );
    }),
    t
  );
})(react_1.default.Component);

(Suspense.defaultProps = { reset: !1, firstLoading: null }),
  (Suspense.propTypes = {
    reset: prop_types_1.default.bool,
    firstLoading: prop_types_1.default.node,
  }),
  (exports.default = Suspense);
// # sourceMappingURL=suspense.js.map
