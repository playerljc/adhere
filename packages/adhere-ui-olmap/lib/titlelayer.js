var __assign =
  (this && this.__assign) ||
  function () {
    return (__assign =
      Object.assign ||
      function (e) {
        for (var t, r = 1, o = arguments.length; r < o; r++)
          for (const i in (t = arguments[r]))
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e;
      }).apply(this, arguments);
  };
const __importDefault =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.getTileWMSTileLayer = exports.getWMTSTileLayer = exports.getXYZTileLayer = exports.getOSMTileLayer = exports.getTileWMS = exports.getWMTS = exports.getXYZ = exports.getOSM = void 0);
const Tile_1 = __importDefault(require('ol/layer/Tile'));
const source_js_1 = require('ol/source.js');

function getOSM(e) {
  return new source_js_1.OSM(e);
}
function getXYZ(e) {
  return new source_js_1.XYZ(e);
}
function getTileWMS(e) {
  return new source_js_1.TileWMS(e);
}
function getWMTS(e) {
  return new source_js_1.WMTS(e);
}
function getOSMTileLayer(e) {
  var t = void 0 === e ? { sourceOptions: {}, options: {} } : e;
  var e = t.sourceOptions;
  var e = void 0 === e ? {} : e;
  var t = t.options;
  var t = void 0 === t ? {} : t;
  return new Tile_1.default({ source: getOSM(e || {}), ...(t || {}) });
}
function getXYZTileLayer(e) {
  var t = void 0 === e ? { sourceOptions: {}, options: {} } : e;
  var e = t.sourceOptions;
  var e = void 0 === e ? {} : e;
  var t = t.options;
  var t = void 0 === t ? {} : t;
  return new Tile_1.default({ source: getXYZ(e || {}), ...(t || {}) });
}
function getWMTSTileLayer(e) {
  var t = void 0 === e ? { sourceOptions: {}, options: {} } : e;
  var e = t.sourceOptions;
  var e = void 0 === e ? {} : e;
  var t = t.options;
  var t = void 0 === t ? {} : t;
  return new Tile_1.default({ source: getWMTS(e || {}), ...(t || {}) });
}
function getTileWMSTileLayer(e) {
  var t = void 0 === e ? { sourceOptions: {}, options: {} } : e;
  var e = t.sourceOptions;
  var e = void 0 === e ? {} : e;
  var t = t.options;
  var t = void 0 === t ? {} : t;
  return new Tile_1.default({ source: getTileWMS(e || {}), ...(t || {}) });
}
(exports.getOSM = getOSM),
  (exports.getXYZ = getXYZ),
  (exports.getTileWMS = getTileWMS),
  (exports.getWMTS = getWMTS),
  (exports.getOSMTileLayer = getOSMTileLayer),
  (exports.getXYZTileLayer = getXYZTileLayer),
  (exports.getWMTSTileLayer = getWMTSTileLayer),
  (exports.getTileWMSTileLayer = getTileWMSTileLayer);
// # sourceMappingURL=titlelayer.js.map
