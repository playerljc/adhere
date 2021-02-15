var __assign =
  (this && this.__assign) ||
  function () {
    return (__assign =
      Object.assign ||
      function (e) {
        for (var t, r = 1, o = arguments.length; r < o; r++)
          for (const n in (t = arguments[r]))
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
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
const __rest =
  (this && this.__rest) ||
  function (e, t) {
    const r = {};
    for (n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
        t.indexOf(n[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
          (r[n[o]] = e[n[o]]);
    return r;
  };
const __importDefault =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(exports, '__esModule', { value: !0 });
const uuid_1 = require('uuid');
const Map_1 = __importDefault(require('ol/Map'));
const Circle_1 = __importDefault(require('ol/geom/Circle'));
const Polygon_1 = __importDefault(require('ol/geom/Polygon'));
const LinearRing_1 = __importDefault(require('ol/geom/LinearRing'));
const geom_1 = require('ol/geom');
const View_1 = __importDefault(require('ol/View'));
const Feature_js_1 = __importDefault(require('ol/Feature.js'));
const Text_1 = __importDefault(require('ol/style/Text'));
const Overlay_js_1 = __importDefault(require('ol/Overlay.js'));
const proj_js_1 = require('ol/proj.js');
const extent_js_1 = require('ol/extent.js');
const coordinate_1 = require('ol/coordinate');
const layer_js_1 = require('ol/layer.js');
const source_js_1 = require('ol/source.js');
const style_js_1 = require('ol/style.js');
const Draw_js_1 = __importStar(require('ol/interaction/Draw.js'));
const Modify_1 = __importDefault(require('ol/interaction/Modify'));
const control_js_1 = require('ol/control.js');
const Zoom_js_1 = __importDefault(require('ol/control/Zoom.js'));
const MousePosition_js_1 = __importDefault(require('ol/control/MousePosition.js'));
const ScaleLine_js_1 = __importDefault(require('ol/control/ScaleLine.js'));
const adhere_util_resource_1 = __importDefault(require('@baifendian/adhere-util-resource'));
const TitleLayer = __importStar(require('./titlelayer'));
const geolayer_1 = __importDefault(require('./geolayer'));

const EARTH_RADIUS = adhere_util_resource_1.default.Dict.value.ResourceGisEarthRadius.value;
const DEFAULT_COLOE = '#1788F3';

function getMinZoom(e) {
  e = e.clientWidth;
  return Math.ceil(Math.LOG2E * Math.log(e / 256));
}
function transformLonLat(e) {
  return proj_js_1.transform(
    e,
    adhere_util_resource_1.default.Dict.value.ResourceGisEpsg3857.value,
    adhere_util_resource_1.default.Dict.value.ResourceGisEpsg4326.value,
  );
}
exports.default = {
  SHOWBASESTATION_MINZOOM: 5,
  createMap(e) {
    const t = e.config;
    const r = e.fitZoom;
    var o = e.zoom;
    const n = void 0 === o ? getMinZoom(t.target) || 3 : o;
    var a = e.minZoom;
    const i = void 0 === a ? getMinZoom(t.target) || 3 : a;
    var u = e.maxZoom;
    var o =
      void 0 === u ? adhere_util_resource_1.default.Dict.value.ResourceGisMapMaxZoom.value : u;
    var a = e.center;
    var u =
      void 0 === a
        ? adhere_util_resource_1.default.Dict.value.ResourceGisXinbeiquCenterPoint.value
        : a;
    var a = e.extent;
    const l =
      void 0 === a
        ? adhere_util_resource_1.default.Dict.value.ResourceGisXinbeiquMapExtent.value
        : a;
    var e = e.layers;
    var e = void 0 === e ? [TitleLayer.getOSMTileLayer()] : e;
    console.log(e);
    const s = new Map_1.default({
      ...t,
      controls: control_js_1
        .defaults({ attributionOptions: { collapsible: !1 } })
        .extend([
          new Zoom_js_1.default(),
          new ScaleLine_js_1.default(),
          new MousePosition_js_1.default({
            coordinateFormat: coordinate_1.createStringXY(5),
            projection: adhere_util_resource_1.default.Dict.value.ResourceGisEpsg4326.value,
          }),
        ]),
      pixelRatio: 1,
      view: new View_1.default({
        center: proj_js_1.fromLonLat(u),
        minZoom: i,
        maxZoom: o,
        zoom: n,
        extent: proj_js_1.transformExtent(
          extent_js_1.boundingExtent(l),
          adhere_util_resource_1.default.Dict.value.ResourceGisEpsg4326.value,
          adhere_util_resource_1.default.Dict.value.ResourceGisEpsg3857.value,
        ),
      }),
      layers: e,
    });
    return (
      setTimeout(function () {
        let e;
        (e =
          r ||
          ((e = [].concat(proj_js_1.fromLonLat(l[0])).concat(proj_js_1.fromLonLat(l[1]))),
          (e = s.getView().getResolutionForExtent(e)),
          s.getView().getZoomForResolution(e))),
          s.getView().setZoom(e);
      }, 100),
      s
    );
  },
  setOverlayState(e, t) {
    e.setPosition(t);
  },
  addClickListener: (function () {
    let e;
    let i;
    return function (t, r, o, n, a) {
      void 0 === o && (o = function (e) {}), void 0 === n && (n = function (e) {});
      e && t.un('click', e),
        i && t.un('pointermove', i),
        (e = function (e) {
          e.dragging ||
            ((e = e.pixel),
            t.forEachFeatureAtPixel(e, function (e, t) {
              return (t === r ? o : n)(e), !0;
            }));
        }),
        (i = function (e) {
          e.dragging ||
            t.forEachFeatureAtPixel(e.pixel, function (e, t) {
              return a(t === r ? 'pointer' : ''), !0;
            });
        }),
        t.on('click', e),
        t.on('pointermove', i);
    };
  })(),
  addHoverListener: (function () {
    let e;
    return function (o, n, a, i) {
      e && o.un('pointermove', e),
        (e = function (e) {
          let r;
          e.dragging ||
            ((e = o.getEventPixel(e.originalEvent)),
            (e = e),
            (r = !1),
            o.forEachFeatureAtPixel(e, function (e, t) {
              return (
                (r = !0),
                t === n
                  ? ((o.getTarget().style.cursor = 'pointer'), a(e))
                  : ((o.getTarget().style.cursor = ''), i(e)),
                !0
              );
            }),
            r || i());
        }),
        o.on('pointermove', e);
    };
  })(),
  addGeoLayer(e, t, r, o) {
    void 0 === r && (r = function () {}), void 0 === o && (o = 0);
    o = new geolayer_1.default(t, r, o);
    return e.addLayer(o), o;
  },
  addVectorLayer(e, t) {
    const r = new source_js_1.Vector();
    var t = new layer_js_1.Vector({ source: r, zIndex: t });
    return e.addLayer(t), { vectorLayer: t, vectorSource: r };
  },
  addHeatmapLayer(e, t) {
    const r = new source_js_1.Vector();
    var t = new layer_js_1.Heatmap({
      source: r,
      gradient: ['#00005c', '#020288', '#0202c0', '#0ff', '#0f0', '#ff0', '#f00'],
      weight() {
        return 1;
      },
      shadow: 500,
      blur: 15,
      radius: 20,
      ...t,
    });
    return e.addLayer(t), r;
  },
  drawCircle(e) {
    const t = e.center;
    const r = e.radius;
    var o = e.color;
    const n = void 0 === o ? 'rgba(23,136,243,.2)' : o;
    var a = e.strokeColor;
    const i = void 0 === a ? DEFAULT_COLOE : a;
    var u = e.strokeWidth;
    var o = void 0 === u ? 2 : u;
    var a = e.zIndex;
    var u =
      void 0 === a ? adhere_util_resource_1.default.Dict.value.ResourceNormalMaxZIndex.value : a;
    var a = e.id;
    var a = void 0 === a ? uuid_1.v4() : a;
    var e = e.propertys;
    var e = void 0 === e ? {} : e;
    var e = new Feature_js_1.default({ zIndex: u, geometry: new Circle_1.default(t, r), ...e });
    return (
      e.setId(a),
      e.setStyle(
        new style_js_1.Style({
          fill: new style_js_1.Fill({ color: n }),
          stroke: new style_js_1.Stroke({ width: o, color: i }),
        }),
      ),
      e
    );
  },
  drawPolygon(e) {
    const t = e.points;
    var r = e.color;
    const o = void 0 === r ? 'rgba(23,136,243,.2)' : r;
    var n = e.strokeColor;
    const a = void 0 === n ? DEFAULT_COLOE : n;
    var i = e.strokeWidth;
    var r = void 0 === i ? 2 : i;
    var n = e.zIndex;
    var i =
      void 0 === n ? adhere_util_resource_1.default.Dict.value.ResourceNormalMaxZIndex.value : n;
    var n = e.id;
    var n = void 0 === n ? uuid_1.v4() : n;
    var e = e.propertys;
    var e = void 0 === e ? {} : e;
    var e = new Feature_js_1.default({ zIndex: i, geometry: new Polygon_1.default(t), ...e });
    return (
      e.setId(n),
      e.setStyle(
        new style_js_1.Style({
          fill: new style_js_1.Fill({ color: o }),
          stroke: new style_js_1.Stroke({ width: r, color: a }),
        }),
      ),
      e
    );
  },
  drawCirclePoint(e) {
    const t = e.id;
    const r = e.pos;
    var o = e.fillOpt;
    const n = void 0 === o ? { color: 'rgba(23,136,243,.2)' } : o;
    var a = e.strokeOpt;
    const i = void 0 === a ? { width: 2, color: DEFAULT_COLOE } : a;
    var u = e.radius;
    const l = void 0 === u ? 10 : u;
    var o = e.textOpt;
    var a = void 0 === o ? {} : o;
    var u = e.zIndex;
    var o = void 0 === u ? 1 : u;
    var u = e.text;
    var u = void 0 === u ? '' : u;
    var e = e.propertys;
    var e = void 0 === e ? {} : e;
    var e = new Feature_js_1.default({
      zIndex: adhere_util_resource_1.default.Dict.value.ResourceNormalMaxZIndex.value,
      geometry: new geom_1.Point(r),
      ...e,
    });
    return (
      e.setId(t),
      e.setStyle(
        new style_js_1.Style({
          image: new style_js_1.Circle({
            fill: new style_js_1.Fill(n),
            stroke: new style_js_1.Stroke(i),
            radius: l,
          }),
          text: new Text_1.default({
            text: u,
            textAlign: 'center',
            fill: new style_js_1.Fill({ color: '#fff' }),
            ...a,
          }),
          zIndex: o,
        }),
      ),
      e
    );
  },
  drawRegularShapePoint(e) {
    const t = e.id;
    const r = e.pos;
    var o = e.fillOpt;
    const n = void 0 === o ? { color: 'rgba(23,136,243,.2)' } : o;
    var a = e.strokeOpt;
    const i = void 0 === a ? { width: 2, color: DEFAULT_COLOE } : a;
    var u = e.text;
    const l = void 0 === u ? '' : u;
    var o = e.textOpt;
    var a = void 0 === o ? {} : o;
    var u = e.zIndex;
    var o = void 0 === u ? 1 : u;
    var u = e.propertys;
    var u = void 0 === u ? {} : u;
    var e = __rest(e, [
      'id',
      'pos',
      'fillOpt',
      'strokeOpt',
      'text',
      'textOpt',
      'zIndex',
      'propertys',
    ]);
    var u = new Feature_js_1.default({
      zIndex: adhere_util_resource_1.default.Dict.value.ResourceNormalMaxZIndex.value,
      geometry: new geom_1.Point(r),
      ...u,
    });
    return (
      u.setId(t),
      u.setStyle(
        new style_js_1.Style({
          image: new style_js_1.RegularShape({
            fill: new style_js_1.Fill(n),
            stroke: new style_js_1.Stroke(i),
            ...e,
          }),
          text: new Text_1.default({
            text: l,
            textAlign: 'center',
            fill: new style_js_1.Fill({ color: '#fff' }),
            ...a,
          }),
          zIndex: o,
        }),
      ),
      u
    );
  },
  drawImagePoint(e) {
    const t = e.id;
    const r = e.pos;
    var o = e.zIndex;
    const n = void 0 === o ? 1 : o;
    const a = e.src;
    const i = e.color;
    const u = e.opacity;
    const l = e.scale;
    const s = e.anchor;
    var c = e.rotation;
    const _ = void 0 === c ? 0 : c;
    var d = e.offset;
    const f = void 0 === d ? [0, 0] : d;
    const g = e.offsetOrigin;
    var o = e.size;
    var c = e.text;
    var d = void 0 === c ? '' : c;
    var c = e.textOpt;
    var c = void 0 === c ? {} : c;
    var e = e.propertys;
    var e = void 0 === e ? {} : e;
    var e = new Feature_js_1.default({
      zIndex: adhere_util_resource_1.default.Dict.value.ResourceNormalMaxZIndex.value,
      geometry: new geom_1.Point(r),
      ...e,
    });
    return (
      e.setId(t),
      e.setStyle(
        new style_js_1.Style({
          image: new style_js_1.Icon({
            color: i,
            src: a,
            anchor: s,
            opacity: u,
            scale: l,
            rotation: _,
            offset: f,
            offsetOrigin: g,
            size: o,
          }),
          fill: new style_js_1.Fill({ color: '#fff' }),
          text: new Text_1.default({
            text: d,
            textAlign: 'center',
            fill: new style_js_1.Fill({ color: '#fff' }),
            ...c,
          }),
          zIndex: n,
        }),
      ),
      e
    );
  },
  createRegularPolygonCurve(e, t, r, o, n) {
    const a = 360 - o;
    let i = Math.PI * (1 / r - 0.5);
    a && (i += (a / 180) * Math.PI);
    for (var u = [], l = 0; l < r; ++l) {
      var s = i + (2 * (l * ((360 - a) / 360)) * Math.PI) / r;
      const c = e[0] + t * Math.cos(s);
      var s = e[1] + t * Math.sin(s);
      u.push([c, s]);
    }
    a != 0 && u.push(e);
    let _ = new LinearRing_1.default(u);
    _.rotate(Math.PI - ((n - o / 2) / 180) * Math.PI, e);
    (o = new Polygon_1.default([u])), (_ = _.A);
    return (o.A = _), o;
  },
  removeFeature(e, t) {
    e.removeFeature(t);
  },
  removeAllFeature(e) {
    e.clear();
  },
  removeAllOverlay(e) {
    e.getOverlays().clear();
  },
  setMapCenterAnimate(e) {
    const t = e.map;
    const r = e.point;
    var e = e.duration;
    var e = void 0 === e ? 600 : e;
    t.getView().animate({ center: r, duration: e });
  },
  drawLine(e) {
    var t = e.points;
    const r = e.width;
    const o = e.color;
    var n = e.lineCap;
    var n = void 0 === n ? 'square' : n;
    var e = e.lineJoin;
    var e = void 0 === e ? 'round' : e;
    var t = new Feature_js_1.default({ geometry: new geom_1.LineString(t) });
    return (
      t.setStyle(
        new style_js_1.Style({
          stroke: new style_js_1.Stroke({ width: r, color: o, lineCap: n, lineJoin: e }),
        }),
      ),
      t
    );
  },
  createInteraction(e, t) {
    const r = t.onDrawStart;
    var t = new Draw_js_1.default(t);
    return (
      t.on('drawstart', function (e) {
        r && r(e);
      }),
      e.addInteraction(t),
      t
    );
  },
  polygonInteraction(e) {
    const a = e.map;
    var t = e.freehand;
    const r = void 0 === t || t;
    var t = e.vectorSource;
    const i = e.onDrawEnd;
    var e = __rest(e, ['map', 'freehand', 'vectorSource', 'onDrawEnd']);
    var e = this.createInteraction(a, { source: t, type: 'Polygon', freehand: r, ...e });
    return (
      e.on('drawend', function (e) {
        e.feature.setId(uuid_1.v4());
        const t = e.feature.getGeometry();
        const r = [];
        const o = t.getCoordinates()[0].map(function (e) {
          return r.push(transformLonLat(e)), e;
        });
        const n = a.getView().getCenter();
        i &&
          i({
            e,
            geometry: t,
            coordinates: o,
            lonlats: r,
            centerp: n,
            transformCenterp: transformLonLat(n),
          });
      }),
      e
    );
  },
  circleInteraction(e) {
    const t = e.map;
    const r = e.vectorSource;
    const n = e.onDrawEnd;
    var e = __rest(e, ['map', 'vectorSource', 'onDrawEnd']);
    var e = this.createInteraction(t, { source: r, type: 'Circle', freehand: !0, ...e });
    return (
      e.on('drawend', function (e) {
        const t = e.feature.getGeometry();
        const r = t.getRadius();
        const o = t.getCenter();
        e.feature.setId(uuid_1.v4()),
          n && n({ e, geometry: t, radius: r, center: o, transformCenter: transformLonLat(o) });
      }),
      e
    );
  },
  boxInteraction(e) {
    const n = e.map;
    const t = e.vectorSource;
    const a = e.onDrawEnd;
    var e = __rest(e, ['map', 'vectorSource', 'onDrawEnd']);
    var e = this.createInteraction(n, {
      source: t,
      type: 'Circle',
      freehand: !0,
      geometryFunction: Draw_js_1.createBox(),
      ...e,
    });
    return (
      e.on('drawend', function (e) {
        e.feature.setId(uuid_1.v4());
        const t = e.feature.getGeometry();
        const r = t.getCoordinates()[0].map(function (e) {
          return e;
        });
        const o = n.getView().getCenter();
        a && a({ e, geometry: t, coordinates: r, centerp: o });
      }),
      e
    );
  },
  linStringInteraction(e) {
    const i = e.map;
    var t = e.freehand;
    const r = void 0 === t || t;
    var t = e.vectorSource;
    const u = e.onDrawEnd;
    var e = __rest(e, ['map', 'freehand', 'vectorSource', 'onDrawEnd']);
    var e = this.createInteraction(i, { source: t, type: 'LineString', freehand: r, ...e });
    return (
      e.on('drawend', function (e) {
        e.feature.setId(uuid_1.v4());
        const t = e.feature.getGeometry();
        const r = [];
        const o = t.getCoordinates().map(function (e) {
          return r.push(transformLonLat(e)), e;
        });
        const n = i.getView().getCenter();
        const a = t.getLength().toFixed(3);
        u &&
          u({
            e,
            geometry: t,
            coordinates: o,
            lonlats: r,
            centerp: n,
            mileage: a,
            transformCenterp: transformLonLat(n),
          });
      }),
      e
    );
  },
  createModifyInteraction(e) {
    const t = e.map;
    var r = e.vectorSource;
    const o = e.onModifyEnd;
    var r = new Modify_1.default({ source: r });
    return (
      r.on('modifyend', function (e) {
        var t = e.features.getArray();
        var t = t[t.length - 1].getGeometry();
        o({ e, geometry: t });
      }),
      t.addInteraction(r),
      r
    );
  },
  removeInteraction(e, t) {
    e.removeInteraction(t);
  },
  removeInteractionAll(e) {
    e.getInteractions().clear();
  },
  mapFit(e, t, r) {
    void 0 === t && (t = {}),
      (e = void 0 === e ? [] : e).length !== 0 &&
        r
          .getView()
          .fit(e, {
            padding: [40, 40, 40, 40],
            constrainResolution: !1,
            nearest: !0,
            duration: 200,
            ...t,
          });
  },
  addArrowsSource(e) {
    for (var t = e.points, r = e.color, o = e.icon, n = [], a = 0; a < t.length - 1; a++) {
      var i = t[a];
      var u = t[a + 1];
      var l = u[0] - i[0];
      var i = u[1] - i[1];
      var l = Math.atan2(i, l);
      var u = new Feature_js_1.default({ geometry: new geom_1.Point(u) });
      u.setStyle(
        new style_js_1.Style({
          image: new style_js_1.Icon({
            color: r,
            src: o,
            anchor: [0.5, 0.5],
            rotateWithView: !0,
            rotation: -l,
          }),
        }),
      ),
        n.push(u);
    }
    return n;
  },
  addArrowsOverlay(e, t, r, o) {
    for (let n = 0; n < o.length - 1; n++) {
      var a = o[n];
      const i = o[n + 1];
      var u = i[0] - a[0];
      var a = i[1] - a[1];
      var a = Math.atan2(a, u) * (180 / Math.PI);
      var u = document.createElement('div');
      (u.className = 'fa fa-caret-right overleayArrowPoint'),
        (u.style.transform = `rotate(${-a}deg)`),
        (u.style.color = r),
        t.appendChild(u),
        this.addOverlay(e, i, u);
    }
  },
  addOverlay(e, t, r) {
    t = new Overlay_js_1.default(t);
    return e.addOverlay(t), t;
  },
  getRad(e) {
    return (e * Math.PI) / 180;
  },
  getExtentByCoordinates(e) {
    if (e.length === 0) return [];
    if (e.length === 1) return [].concat(e[0], e[0]);
    for (var t = [], r = [], o = 0; o < e.length; o++) {
      const n = e[o];
      t.push(n[0]), r.push(n[1]);
    }
    return (
      t.sort(function (e, t) {
        return e < t ? -1 : t < e ? 1 : 0;
      }),
      r.sort(function (e, t) {
        return e < t ? -1 : t < e ? 1 : 0;
      }),
      [t[0], r[0], t[t.length - 1], r[r.length - 1]]
    );
  },
  getExtentByVectorSource(e, t) {
    void 0 === t && (t = 'Point');
    t = this.getCectorSourceCoordinates(e, t);
    return this.getExtentByCoordinates(t);
  },
  getCectorSourceCoordinates(e, o) {
    void 0 === o && (o = 'Point');
    let n = [];
    return (
      e
        .getFeatures()
        .filter(function (e) {
          return e.getGeometry().getType() === o;
        })
        .map(function (e) {
          let t;
          const r = e.getGeometry();
          o === 'Circle'
            ? ((e = r.getExtent()), n.push([e[0], e[1]]), n.push([e[2], e[3]]))
            : o === 'Point'
            ? ((t = r.getCoordinates()), n.push(t))
            : ((t = r.getCoordinates()), (n = n.concat(t)));
        }),
      n
    );
  },
  getCenterByCoordinates(e, o) {
    void 0 === o && (o = 'Point');
    let n = [];
    return (
      e
        .getFeatures()
        .filter(function (e) {
          return e.getGeometry().getType() === o;
        })
        .map(function (e) {
          let t;
          const r = e.getGeometry();
          o === 'Circle'
            ? ((e = r.getExtent()), n.push([e[0], e[1]]), n.push([e[2], e[3]]))
            : o === 'Point'
            ? ((t = r.getCoordinates()), n.push(t))
            : ((t = r.getCoordinates()), (n = n.concat(t)));
        }),
      this.getCenterByPoints(n)
    );
  },
  getCenterByPoints(e) {
    for (var t = [], r = [], o = 0; o < e.length; o++) {
      const n = proj_js_1.transform(
        e[o],
        adhere_util_resource_1.default.Dict.value.ResourceGisEpsg3857.value,
        adhere_util_resource_1.default.Dict.value.ResourceGisEpsg4326.value,
      );
      t.push(n[0]), r.push(n[1]);
    }
    return {
      centerLon: Math.min.apply(Math, t) + (Math.max.apply(Math, t) - Math.min.apply(Math, t)) / 2,
      centerLat: Math.min.apply(Math, r) + (Math.max.apply(Math, r) - Math.min.apply(Math, r)) / 2,
    };
  },
  getPointsExtent(e) {
    for (var t = [], r = [], o = 0; o < e.length; o++) {
      const n = proj_js_1.transform(
        e[o],
        adhere_util_resource_1.default.Dict.value.ResourceGisEpsg4326.value,
        adhere_util_resource_1.default.Dict.value.ResourceGisEpsg3857.value,
      );
      t.push(n[0]), r.push(n[1]);
    }
    return {
      leftTop: [Math.min.apply(Math, t), Math.min.apply(Math, r)],
      rightBottom: [Math.max.apply(Math, t), Math.max.apply(Math, r)],
    };
  },
  getFlatternDistance(e, t, r, o) {
    var n = this.getRad((e + r) / 2);
    var a = this.getRad((e - r) / 2);
    var i = this.getRad((t - o) / 2);
    var e = EARTH_RADIUS;
    var r = Math.sin(a);
    var t = Math.sin(i);
    var o = Math.sin(n);
    var a = (r *= r) * (1 - (t *= t)) + (1 - (o *= o)) * t;
    var i = (1 - r) * (1 - t) + o * t;
    var n = Math.atan(Math.sqrt(a / i));
    var t = Math.sqrt(a * i) / n;
    return (
      2 *
      n *
      e *
      (1 +
        (1 / 298.257) * (((3 * t - 1) / 2 / i) * o * (1 - r) - ((3 * t + 1) / 2 / a) * (1 - o) * r))
    );
  },
  wrapLon(e) {
    return e - 360 * Math.floor((e + 180) / 360);
  },
  getMapExtent(e) {
    if (!e) return !1;
    var t = e.getView().calculateExtent(e.getSize());
    var r = proj_js_1.toLonLat(extent_js_1.getBottomLeft(t));
    var o = proj_js_1.toLonLat(extent_js_1.getTopRight(t));
    var e = o[1];
    var t = this.wrapLon(o[0]);
    var o = this.wrapLon(r[0]);
    var r = r[1];
    return [
      { lon: o, lat: e },
      { lon: t, lat: e },
      { lon: t, lat: r },
      { lon: o, lat: r },
      { lon: o, lat: e },
    ];
  },
  getFeaturesInExtent(e, t) {
    t = t.getGeometry().getExtent();
    return e.getLayers().getArray()[1].getSource().getFeaturesInExtent(t);
  },
  getLayersCount(e) {
    return e.getLayers().getLength();
  },
  rgb() {
    return `(${Math.floor(256 * Math.random())},${Math.floor(256 * Math.random())},${Math.floor(
      256 * Math.random(),
    )})`;
  },
  color16() {
    const e = Math.floor(256 * Math.random());
    const t = Math.floor(256 * Math.random());
    const r = Math.floor(256 * Math.random());
    return `#${e.toString(16)}${t.toString(16)}${r.toString(16)}`;
  },
  getLineColor(e) {
    return e >= 0 && e <= 9
      ? [
          'red',
          'green',
          'blue',
          'yellow',
          'gray',
          '#0000cc',
          '#99ffff',
          '#000000',
          '#003333',
          '#ff6600',
        ][e]
      : this.color16();
  },
  downLoadMap(e) {
    e.once('postcompose', function (e) {
      const t = e.context.canvas.toDataURL();
      const r = document.createElement('a');
      var e = new MouseEvent('click');
      (r.download = 'map'), (r.href = t), r.dispatchEvent(e);
    }),
      e.renderSync();
  },
};
// # sourceMappingURL=util.js.map
