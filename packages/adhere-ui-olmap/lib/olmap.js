const __extends =
  (this && this.__extends) ||
  (function () {
    var o = function (e, t) {
      return (o =
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
      o(e, t),
        (e.prototype = t === null ? Object.create(t) : ((r.prototype = t.prototype), new r()));
    };
  })();
var __assign =
  (this && this.__assign) ||
  function () {
    return (__assign =
      Object.assign ||
      function (e) {
        for (var t, r = 1, o = arguments.length; r < o; r++)
          for (const a in (t = arguments[r]))
            Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
        return e;
      }).apply(this, arguments);
  };
const __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (e, t, r, o) {
        void 0 === o && (o = r),
          Object.defineProperty(e, o, {
            enumerable: !0,
            get() {
              return t[r];
            },
          });
      }
    : function (e, t, r, o) {
        e[(o = void 0 === o ? r : o)] = t[r];
      });
const __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (e, t) {
        Object.defineProperty(e, 'default', { enumerable: !0, value: t });
      }
    : function (e, t) {
        e.default = t;
      });
const __importStar =
  (this && this.__importStar) ||
  function (e) {
    if (e && e.__esModule) return e;
    const t = {};
    if (e != null)
      for (const r in e)
        r !== 'default' && Object.hasOwnProperty.call(e, r) && __createBinding(t, e, r);
    return __setModuleDefault(t, e), t;
  };
const __importDefault =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(exports, '__esModule', { value: !0 });
const react_1 = __importStar(require('react'));
const prop_types_1 = __importDefault(require('prop-types'));
const style_js_1 = require('ol/style.js');
const adhere_util_resource_1 = __importDefault(require('@baifendian/adhere-util-resource'));
const util_1 = __importDefault(require('./util'));
const constent_1 = __importDefault(require('./constent'));

const selectorPrefix = 'adhere-ui-olmap';
const OlMap = (function (t) {
  function e(e) {
    const o = t.call(this, e) || this;
    return (
      (o.addClickListener = function (e, t, r) {
        util_1.default.addClickListener(o.map, e, t, r, o.setCursor);
      }),
      (o.setCursor = function (e) {
        o.map.getTarget().style.cursor = e;
      }),
      (o.el = react_1.createRef()),
      (o.zoom = null),
      o
    );
  }
  return (
    __extends(e, t),
    (e.prototype.componentDidMount = function () {
      var e = this.props;
      const t = e.mapConfig;
      const r = e.type;
      const o = e.maxZoom;
      const a = e.minZoom;
      const n = e.zoom;
      const i = e.layers;
      const u = e.center;
      var e = e.extent;
      (this.map = util_1.default.createMap({
        config: { target: this.el.current },
        type: r,
        maxZoom: o,
        zoom: n,
        minZoom: a,
        center: u,
        extent: e,
        layers: i,
        ...t,
      })),
        (this.zoom = this.map.getView().getZoom());
    }),
    (e.prototype.addMainGeoJSONLayer = function (e) {
      const t = e.geoJSONStyle;
      var e = e.geoJSONData;
      const r = t.stroke;
      const o = t.fill;
      const a = t.text;
      this.mainGeoLayer = this.addGeoLayer(e, function () {
        return new style_js_1.Style({
          fill: new style_js_1.Fill({ ...o }),
          stroke: new style_js_1.Stroke({ ...r }),
          text: new style_js_1.Text({
            ...a,
            fill: new style_js_1.Fill({ color: a.color }),
            overflow: !0,
          }),
        });
      });
    }),
    (e.prototype.addGeoLayer = function (e, t, r) {
      return void 0 === r && (r = 0), util_1.default.addGeoLayer(this.map, e, t, r);
    }),
    (e.prototype.addDataLayer = function (e) {
      return util_1.default.addVectorLayer(this.map, e);
    }),
    (e.prototype.addHoverListener = function (e, t, r) {
      util_1.default.addHoverListener(this.map, e, t, r);
    }),
    (e.prototype.addZoomListener = function (r) {
      const o = this;
      this.map.on('moveend', function (e) {
        const t = o.map.getView().getZoom();
        t !== o.zoom && r(t), (o.zoom = t);
      });
    }),
    (e.prototype.addOverlay = function (e) {
      return util_1.default.addOverlay(this.map, e);
    }),
    (e.prototype.setOverlayState = function (e, t) {
      util_1.default.setOverlayState(e, t);
    }),
    (e.prototype.clear = function () {
      for (let e = this.map.getLayers(), t = 1; t < e.getLength(); t++)
        this.map.removeLayer(e.item(t));
    }),
    (e.prototype.getMap = function () {
      return this.map;
    }),
    (e.prototype.render = function () {
      return react_1.default.createElement('div', { className: selectorPrefix, ref: this.el });
    }),
    e
  );
})(react_1.default.Component);

(OlMap.defaultProps = {
  type: constent_1.default.MAP_TYPE_ADMINISTRATIVE,
  mapConfig: {},
  maxZoom: adhere_util_resource_1.default.Dict.value.ResourceGisMapMaxZoom.value,
  zoom: adhere_util_resource_1.default.Dict.value.ResourceGisMapMaxZoom.value,
  fitZoom: adhere_util_resource_1.default.Dict.value.ResourceGisMapMaxZoom.value,
  minZoom: adhere_util_resource_1.default.Dict.value.ResourceGisMapMinZoom.value,
  center: adhere_util_resource_1.default.Dict.value.ResourceGisXinbeiquCenterPoint.value,
  extent: adhere_util_resource_1.default.Dict.value.ResourceGisXinbeiquMapExtent.value,
  layers: void 0,
}),
  (OlMap.propTypes = {
    type: prop_types_1.default.oneOf([
      constent_1.default.MAP_TYPE_ADMINISTRATIVE,
      constent_1.default.MAP_TYPE_SATELLITE,
    ]),
    mapConfig: prop_types_1.default.object,
    maxZoom: prop_types_1.default.oneOfType([
      prop_types_1.default.string,
      prop_types_1.default.number,
    ]),
    zoom: prop_types_1.default.oneOfType([
      prop_types_1.default.string,
      prop_types_1.default.number,
    ]),
    fitZoom: prop_types_1.default.oneOfType([
      prop_types_1.default.string,
      prop_types_1.default.number,
    ]),
    minZoom: prop_types_1.default.oneOfType([
      prop_types_1.default.string,
      prop_types_1.default.number,
    ]),
    center: prop_types_1.default.arrayOf(prop_types_1.default.number),
    extent: prop_types_1.default.arrayOf(prop_types_1.default.arrayOf(prop_types_1.default.number)),
    layers: prop_types_1.default.array,
  }),
  (exports.default = OlMap);
// # sourceMappingURL=olmap.js.map
