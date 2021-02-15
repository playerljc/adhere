const __extends =
  (this && this.__extends) ||
  (function () {
    var o = function (e, r) {
      return (o =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, r) {
            e.__proto__ = r;
          }) ||
        function (e, r) {
          for (const t in r) r.hasOwnProperty(t) && (e[t] = r[t]);
        })(e, r);
    };
    return function (e, r) {
      function t() {
        this.constructor = e;
      }
      o(e, r),
        (e.prototype = r === null ? Object.create(r) : ((t.prototype = r.prototype), new t()));
    };
  })();
const __importDefault =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(exports, '__esModule', { value: !0 });
const layer_1 = require('ol/layer');
const source_1 = require('ol/source');
const GeoJSON_1 = __importDefault(require('ol/format/GeoJSON'));
const adhere_util_resource_1 = __importDefault(require('@baifendian/adhere-util-resource'));

const GeoLayer = (function (u) {
  function e(e, r, t) {
    let o = this;
    var e = new source_1.Vector({
      features: new GeoJSON_1.default({
        dataProjection: adhere_util_resource_1.default.Dict.value.ResourceGisEpsg4326.value,
        featureProjection: adhere_util_resource_1.default.Dict.value.ResourceGisEpsg3857.value,
      }).readFeatures(e),
    });
    return ((o = u.call(this, { source: e, style: r, zIndex: t }) || this).vectorSource = e), o;
  }
  return __extends(e, u), e;
})(layer_1.Vector);

exports.default = GeoLayer;
// # sourceMappingURL=geolayer.js.map
