'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (n) {
    return n && n.__esModule ? n : { default: n };
  };
Object.defineProperty(exports, '__esModule', { value: !0 });
var prop_types_1 = __importDefault(require('prop-types')),
  show_1 = __importDefault(require('./show')),
  visibility_1 = __importDefault(require('./visibility'));
function ConditionalRender(n) {
  var o = n.conditional,
    i = n.noMatch,
    n = n.children;
  return o ? n() : i ? i() : null;
}
(ConditionalRender.Show = show_1.default),
  (ConditionalRender.Visibility = visibility_1.default),
  (ConditionalRender.conditionalRender = function (n) {
    var o = n.conditional,
      i = n.match,
      n = n.noMatch;
    return o ? i : n || null;
  }),
  (ConditionalRender.conditionalArr = function (n) {
    return n.filter(function (n) {
      var o;
      return (
        !('props' in n && 'conditional' in n.props && !n.props.conditional) ||
        !(
          !n.props.noMatch ||
          null === (null === (n = (o = n.props).noMatch) || void 0 === n ? void 0 : n.call(o))
        )
      );
    });
  }),
  (ConditionalRender.conditionalNotEmptyArr = function (n) {
    return n.filter(function (n) {
      return !(null == n);
    });
  }),
  (ConditionalRender.defaultProps = {
    conditional: !0,
    noMatch: function () {
      return null;
    },
  }),
  (ConditionalRender.propTypes = {
    conditional: prop_types_1.default.bool,
    noMatch: prop_types_1.default.func,
  }),
  (exports.default = ConditionalRender);
//# sourceMappingURL=conditionalrender.js.map
