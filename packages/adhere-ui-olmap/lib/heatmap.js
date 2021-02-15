const __extends =
  (this && this.__extends) ||
  (function () {
    var a = function (t, e) {
      return (a =
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
      a(t, e),
        (t.prototype = e === null ? Object.create(e) : ((r.prototype = e.prototype), new r()));
    };
  })();
const __importDefault =
  (this && this.__importDefault) ||
  function (t) {
    return t && t.__esModule ? t : { default: t };
  };
Object.defineProperty(exports, '__esModule', { value: !0 });
const prop_types_1 = __importDefault(require('prop-types'));
const olmap_1 = __importDefault(require('./olmap'));
const util_1 = __importDefault(require('./util'));
const layer_1 = require('ol/layer');

const HeatMap = (function (t) {
  function e() {
    return (t !== null && t.apply(this, arguments)) || this;
  }
  return (
    __extends(e, t),
    (e.prototype.addLayer = function () {
      const t = this.props.heatMapLayerConfig;
      this.vectorSource = util_1.default.addHeatmapLayer(this.map, t);
    }),
    (e.prototype.getHeatmapLayer = function () {
      for (var t = this.map.getLayers(), e = null, r = 1; r < t.getLength(); r++) {
        const a = t.item(r);
        if (a instanceof layer_1.Heatmap) {
          e = a;
          break;
        }
      }
      return e;
    }),
    e
  );
})(olmap_1.default);

(HeatMap.defaultProps = { heatMapLayerConfig: {} }),
  (HeatMap.propTypes = { heatMapLayerConfig: prop_types_1.default.object }),
  (exports.default = HeatMap);
// # sourceMappingURL=heatmap.js.map
