!(function (t, e) {
  typeof module !== 'undefined' && module.exports
    ? (module.exports = e())
    : typeof define === 'function' && define.amd
    ? define(e)
    : (t.h337 = e());
})(this, function () {
  let l;
  const n = {
    defaultRadius: 40,
    defaultRenderer: 'canvas2d',
    defaultGradient: {
      0.45: 'rgb(0,0,255)',
      0.55: 'rgb(0,255,255)',
      0.65: 'rgb(0,255,0)',
      0.95: 'yellow',
      1: 'rgb(255,0,0)',
    },
    defaultMaxOpacity: 1,
    defaultMinOpacity: 0,
    defaultBlur: 0.85,
    defaultXField: 'x',
    defaultYField: 'y',
    defaultValueField: 'value',
    plugins: {},
  };
  const s =
    ((l = n.defaultRadius),
    (t.prototype = {
      _organiseData(t, e) {
        const a = t[this._xField];
        const i = t[this._yField];
        const n = this._radi;
        const s = this._data;
        const r = this._max;
        const o = this._min;
        const h = t[this._valueField] || 1;
        var t = t.radius || this._cfgRadius || l;
        return (
          s[a] || ((s[a] = []), (n[a] = [])),
          s[a][i] ? (s[a][i] += h) : ((s[a][i] = h), (n[a][i] = t)),
          s[a][i] > r
            ? (e ? this.setDataMax(s[a][i]) : (this._max = s[a][i]), !1)
            : { x: a, y: i, value: h, radius: t, min: o, max: r }
        );
      },
      _unOrganizeData() {
        let t;
        const e = [];
        const a = this._data;
        const i = this._radi;
        for (t in a) for (const n in a[t]) e.push({ x: t, y: n, radius: i[t][n], value: a[t][n] });
        return { min: this._min, max: this._max, data: e };
      },
      _onExtremaChange() {
        this._coordinator.emit('extremachange', { min: this._min, max: this._max });
      },
      addData() {
        if (arguments[0].length > 0)
          for (let t = arguments[0], e = t.length; e--; ) this.addData.call(this, t[e]);
        else {
          const a = this._organiseData(arguments[0], !0);
          a &&
            this._coordinator.emit('renderpartial', { min: this._min, max: this._max, data: [a] });
        }
        return this;
      },
      setData(t) {
        const e = t.data;
        const a = e.length;
        (this._data = []), (this._radi = []);
        for (let i = 0; i < a; i++) this._organiseData(e[i], !1);
        return (
          (this._max = t.max),
          (this._min = t.min || 0),
          this._onExtremaChange(),
          this._coordinator.emit('renderall', this._getInternalData()),
          this
        );
      },
      removeData() {},
      setDataMax(t) {
        return (
          (this._max = t),
          this._onExtremaChange(),
          this._coordinator.emit('renderall', this._getInternalData()),
          this
        );
      },
      setDataMin(t) {
        return (
          (this._min = t),
          this._onExtremaChange(),
          this._coordinator.emit('renderall', this._getInternalData()),
          this
        );
      },
      setCoordinator(t) {
        this._coordinator = t;
      },
      _getInternalData() {
        return { max: this._max, min: this._min, data: this._data, radi: this._radi };
      },
      getData() {
        return this._unOrganizeData();
      },
    }),
    t);
  function t(t) {
    (this._coordinator = {}),
      (this._data = []),
      (this._radi = []),
      (this._min = 0),
      (this._max = 1),
      (this._xField = t.xField || t.defaultXField),
      (this._yField = t.yField || t.defaultYField),
      (this._valueField = t.valueField || t.defaultValueField),
      t.radius && (this._cfgRadius = t.radius);
  }
  const e =
    ((a.prototype = {
      renderPartial(t) {
        this._drawAlpha(t), this._colorize();
      },
      renderAll(t) {
        this._clear(),
          this._drawAlpha(
            (function (t) {
              for (
                var e = [],
                  a = t.min,
                  i = t.max,
                  n = t.radi,
                  t = t.data,
                  s = Object.keys(t),
                  r = s.length;
                r--;

              )
                for (let o = s[r], h = Object.keys(t[o]), l = h.length; l--; ) {
                  const d = h[l];
                  const u = t[o][d];
                  const c = n[o][d];
                  e.push({ x: o, y: d, value: u, radius: c });
                }
              return { min: a, max: i, data: e };
            })(t),
          ),
          this._colorize();
      },
      _updateGradient(t) {
        this._palette = r(t);
      },
      updateConfig(t) {
        t.gradient && this._updateGradient(t), this._setStyles(t);
      },
      setDimensions(t, e) {
        (this._width = t),
          (this._height = e),
          (this.canvas.width = this.shadowCanvas.width = t),
          (this.canvas.height = this.shadowCanvas.height = e);
      },
      _clear() {
        this.shadowCtx.clearRect(0, 0, this._width, this._height),
          this.ctx.clearRect(0, 0, this._width, this._height);
      },
      _setStyles(t) {
        (this._blur = t.blur == 0 ? 0 : t.blur || t.defaultBlur),
          t.backgroundColor && (this.canvas.style.backgroundColor = t.backgroundColor),
          (this._opacity = 255 * (t.opacity || 0)),
          (this._maxOpacity = 255 * (t.maxOpacity || t.defaultMaxOpacity)),
          (this._minOpacity = 255 * (t.minOpacity || t.defaultMinOpacity)),
          (this._useGradientOpacity = !!t.useGradientOpacity);
      },
      _drawAlpha(t) {
        for (
          var e,
            a,
            i,
            n = (this._min = t.min),
            s = (this._max = t.max),
            r = (t = t.data || []).length,
            o = 1 - this._blur;
          r--;

        ) {
          var h;
          let l = t[r];
          let d = l.x;
          let u = l.y;
          const c = l.radius;
          const _ = Math.min(l.value, s);
          const p = d - c;
          const f = u - c;
          const m = this.shadowCtx;
          this._templates[c]
            ? (h = this._templates[c])
            : (this._templates[c] =
                ((e = c),
                (a = o),
                (u = d = l = i = void 0),
                (i = document.createElement('canvas')),
                (l = i.getContext('2d')),
                (u = d = e),
                (i.width = i.height = 2 * e),
                a == 1
                  ? (l.beginPath(),
                    l.arc(d, u, e, 0, 2 * Math.PI, !1),
                    (l.fillStyle = 'rgba(0,0,0,1)'),
                    l.fill())
                  : ((u = l.createRadialGradient(d, u, e * a, d, u, e)).addColorStop(
                      0,
                      'rgba(0,0,0,1)',
                    ),
                    u.addColorStop(1, 'rgba(0,0,0,0)'),
                    (l.fillStyle = u),
                    l.fillRect(0, 0, 2 * e, 2 * e)),
                (h = i))),
            (m.globalAlpha = (_ - n) / (s - n)),
            m.drawImage(h, p, f),
            p < this._renderBoundaries[0] && (this._renderBoundaries[0] = p),
            f < this._renderBoundaries[1] && (this._renderBoundaries[1] = f),
            p + 2 * c > this._renderBoundaries[2] && (this._renderBoundaries[2] = p + 2 * c),
            f + 2 * c > this._renderBoundaries[3] && (this._renderBoundaries[3] = f + 2 * c);
        }
      },
      _colorize() {
        for (
          var t = this._renderBoundaries[0],
            e = this._renderBoundaries[1],
            a = this._renderBoundaries[2] - t,
            i = this._renderBoundaries[3] - e,
            n = this._width,
            s = this._height,
            r = this._opacity,
            o = this._maxOpacity,
            h = this._minOpacity,
            l = this._useGradientOpacity,
            i = this.shadowCtx.getImageData(
              (t = t < 0 ? 0 : t),
              (e = e < 0 ? 0 : e),
              (a = n < t + a ? n - t : a),
              (i = s < e + i ? s - e : i),
            ),
            d = i.data,
            u = d.length,
            c = this._palette,
            _ = 3;
          _ < u;
          _ += 4
        ) {
          let p = d[_];
          const f = 4 * p;
          f &&
            ((p = r > 0 ? r : p < o ? (p < h ? h : p) : o),
            (d[_ - 3] = c[f]),
            (d[_ - 2] = c[1 + f]),
            (d[_ - 1] = c[2 + f]),
            (d[_] = l ? c[3 + f] : p));
        }
        (i.data = d), this.ctx.putImageData(i, t, e), (this._renderBoundaries = [1e3, 1e3, 0, 0]);
      },
      getValueAt(t) {
        const e = this.shadowCtx.getImageData(t.x, t.y, 1, 1).data[3];
        const a = this._max;
        var t = this._min;
        return (Math.abs(a - t) * (e / 255)) >> 0;
      },
      getDataURL() {
        return this.canvas.toDataURL();
      },
    }),
    a);
  function r(t) {
    const e = t.gradient || t.defaultGradient;
    const a = document.createElement('canvas');
    var t = a.getContext('2d');
    (a.width = 256), (a.height = 1);
    let i;
    const n = t.createLinearGradient(0, 0, 256, 1);
    for (i in e) n.addColorStop(i, e[i]);
    return (t.fillStyle = n), t.fillRect(0, 0, 256, 1), t.getImageData(0, 0, 256, 1).data;
  }
  function a(t) {
    const e = t.element;
    const a = (this.shadowCanvas = document.createElement('canvas'));
    const i = (this.canvas = t.canvas || document.createElement('canvas'));
    const n = ((this._renderBoundaries = [1e4, 1e4, 0, 0]), getComputedStyle(t.element) || {});
    (i.className = 'heatmap-canvas'),
      (this._width = i.width = a.width = +n.width.replace(/px/, '')),
      (this._height = i.height = a.height = +n.height.replace(/px/, '')),
      (this.shadowCtx = a.getContext('2d')),
      (this.ctx = i.getContext('2d')),
      (i.style.cssText = a.style.cssText = 'position:absolute;left:0;top:0;'),
      (e.style.position = 'relative'),
      e.appendChild(i),
      (this._palette = r(t)),
      (this._templates = {}),
      this._setStyles(t);
  }
  let i;
  let o;
  const h = ((i = !1), (i = n.defaultRenderer === 'canvas2d' ? e : i));
  const d = function () {
    for (var t = {}, e = arguments.length, a = 0; a < e; a++) {
      var i;
      const n = arguments[a];
      for (i in n) t[i] = n[i];
    }
    return t;
  };
  const u =
    ((c.prototype = {
      on(t, e, a) {
        const i = this.cStore;
        i[t] || (i[t] = []),
          i[t].push(function (t) {
            return e.call(a, t);
          });
      },
      emit(t, e) {
        const a = this.cStore;
        if (a[t]) for (let i = a[t].length, n = 0; n < i; n++) (0, a[t][n])(e);
      },
    }),
    (o = c),
    (_.prototype = {
      addData() {
        return this._store.addData.apply(this._store, arguments), this;
      },
      removeData() {
        return this._store.removeData && this._store.removeData.apply(this._store, arguments), this;
      },
      setData() {
        return this._store.setData.apply(this._store, arguments), this;
      },
      setDataMax() {
        return this._store.setDataMax.apply(this._store, arguments), this;
      },
      setDataMin() {
        return this._store.setDataMin.apply(this._store, arguments), this;
      },
      configure(t) {
        return (
          (this._config = d(this._config, t)),
          this._renderer.updateConfig(this._config),
          this._coordinator.emit('renderall', this._store._getInternalData()),
          this
        );
      },
      repaint() {
        return this._coordinator.emit('renderall', this._store._getInternalData()), this;
      },
      getData() {
        return this._store.getData();
      },
      getDataURL() {
        return this._renderer.getDataURL();
      },
      getValueAt(t) {
        return this._store.getValueAt
          ? this._store.getValueAt(t)
          : this._renderer.getValueAt
          ? this._renderer.getValueAt(t)
          : null;
      },
    }),
    _);
  function c() {
    this.cStore = {};
  }
  function _() {
    let e;
    let t = (this._config = d(n, arguments[0] || {}));
    if (((this._coordinator = new o()), t.plugin)) {
      var a = t.plugin;
      if (!n.plugins[a]) throw new Error(`Plugin '${a}' not found. Maybe it was not registered.`);
      var i = n.plugins[a];
      (this._renderer = new i.renderer(t)), (this._store = new i.store(t));
    } else (this._renderer = new h(t)), (this._store = new s(t));
    (a = (e = this)._renderer),
      (i = e._coordinator),
      (t = e._store),
      i.on('renderpartial', a.renderPartial, a),
      i.on('renderall', a.renderAll, a),
      i.on('extremachange', function (t) {
        e._config.onExtremaChange &&
          e._config.onExtremaChange({
            min: t.min,
            max: t.max,
            gradient: e._config.gradient || e._config.defaultGradient,
          });
      }),
      t.setCoordinator(i);
  }
  return {
    create(t) {
      return new u(t);
    },
    register(t, e) {
      n.plugins[t] = e;
    },
  };
});
var BMapLib = (window.BMapLib = BMapLib || {});
!(function () {
  const t = (BMapLib.HeatmapOverlay = function (t) {
    (this.conf = t),
      (this.conf.visible = void 0 === t.visible || t.visible),
      (this.heatmap = null),
      (this.latlngs = []),
      (this.bounds = null);
  });
  function h() {
    const t = document.createElement('canvas');
    return t.getContext && t.getContext('2d');
  }
  ((t.prototype = new BMap.Overlay()).initialize = function (t) {
    this._map = t;
    const e = document.createElement('div');
    if (
      ((e.style.position = 'absolute'),
      (e.style.top = 0),
      (e.style.left = 0),
      (e.style.border = 0),
      (e.style.width = `${this._map.getSize().width}px`),
      (e.style.height = `${this._map.getSize().height}px`),
      (this.conf.element = e),
      !h())
    )
      return e;
    t.getPanes().mapPane.appendChild(e),
      (this.conf.valueField = this.conf.valueField || 'count'),
      typeof module !== 'undefined' && module.exports
        ? (this.heatmap = module.exports.create(this.conf))
        : (this.heatmap = h337.create(this.conf));
    const a = this;
    return (
      t.addEventListener('resize', function (t) {
        t = t.size;
        (e.style.width = `${t.width}px`),
          (e.style.height = `${t.height}px`),
          a.heatmap._renderer.setDimensions(t.width, t.height),
          a.draw();
      }),
      (this._div = e)
    );
  }),
    (t.prototype.draw = function () {
      if (h()) {
        const t = this._map.getBounds();
        if (!t.equals(this.bounds)) {
          this.bounds = t;
          const e = this._map.pointToOverlayPixel(t.getNorthEast());
          var a = this._map.pointToOverlayPixel(t.getSouthWest());
          let i = e.y;
          let n = a.x;
          const s = a.y - e.y;
          var a = e.x - a.x;
          if (
            ((this.conf.element.style.left = `${n}px`),
            (this.conf.element.style.top = `${i}px`),
            (this.conf.element.style.width = `${a}px`),
            (this.conf.element.style.height = `${s}px`),
            this.latlngs.length > 0)
          ) {
            this.heatmap.removeData();
            let r = this.latlngs.length;
            for (d = { max: this.heatmap._store.getData().max, data: [] }; r--; ) {
              let o = this.latlngs[r].latlng;
              t.containsPoint(o) &&
                ((o = this._map.pointToOverlayPixel(o)),
                (n = this._map.pointToOverlayPixel(t.getSouthWest()).x),
                (i = this._map.pointToOverlayPixel(t.getNorthEast()).y),
                (o = new BMap.Pixel(o.x - n, o.y - i)),
                (o = this.pixelTransform(o)),
                d.data.push({ x: o.x, y: o.y, count: this.latlngs[r].c }));
            }
            this.conf.radiusChangeByZoom &&
              (this.heatmap._store._cfgRadius = this.conf.radiusChangeByZoom(this._map.getZoom())),
              this.heatmap.setData(d);
          }
        }
      }
    }),
    (t.prototype.pixelTransform = function (t) {
      for (var e = this.heatmap.width, a = this.heatmap.height; t.x < 0; ) t.x += e;
      for (; t.x > e; ) t.x -= e;
      for (; t.y < 0; ) t.y += a;
      for (; t.y > a; ) t.y -= a;
      return (t.x >>= 0), (t.y >>= 0), t;
    }),
    (t.prototype.setDataSet = function (t) {
      if (((this.data = t), h())) {
        const e = this._map.getBounds();
        const a = { max: t.max, data: [] };
        const i = t.data;
        let n = i.length;
        for (
          this.latlngs = [],
            this.heatmap.removeData(),
            this.conf.radiusChangeByZoom &&
              (this.heatmap._store._cfgRadius = this.conf.radiusChangeByZoom(this._map.getZoom()));
          n--;

        ) {
          var s;
          var r;
          let o = new BMap.Point(i[n].lng, i[n].lat);
          this.latlngs.push({ latlng: o, c: i[n].count }),
            e.containsPoint(o) &&
              ((s = this._map.pointToOverlayPixel(o)),
              (r = this._map.pointToOverlayPixel(e.getSouthWest()).x),
              (o = this._map.pointToOverlayPixel(e.getNorthEast()).y),
              (o = new BMap.Pixel(s.x - r, s.y - o)),
              (o = this.pixelTransform(o)),
              a.data.push({ x: o.x, y: o.y, count: i[n].count }));
        }
        this.heatmap.setData(a);
      }
    }),
    (t.prototype.addDataPoint = function (t, e, a) {
      h() &&
        (this.data && this.data.data && this.data.data.push({ lng: t, lat: e, count: a }),
        (t = new BMap.Point(t, e)),
        (e = this.pixelTransform(this._map.pointToOverlayPixel(t))),
        this.heatmap.store.addDataPoint(e.x, e.y, a),
        this.latlngs.push({ latlng: t, c: a }));
    }),
    (t.prototype.toggle = function () {
      h() &&
        (!0 === this.conf.visible ? (this.conf.visible = !1) : (this.conf.visible = !0),
        this.conf.visible
          ? (this.conf.element.style.display = 'block')
          : (this.conf.element.style.display = 'none'));
    }),
    (t.prototype.setOptions = function (t) {
      if (h()) {
        for (const e in t)
          e == 'radius' && (this.heatmap._store._cfgRadius = t[e]),
            e == 'opacity' && (t[e] = t[e] / 100);
        this.heatmap.configure(t), this.data && this.setDataSet(this.data);
      }
    });
})();
// # sourceMappingURL=heatmap.js.map
