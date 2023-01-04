!(function (t, e) {
  'undefined' != typeof module && module.exports
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define(e)
    : (t.h337 = e());
})(this, function () {
  var l,
    n = {
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
    },
    s =
      ((l = n.defaultRadius),
      (t.prototype = {
        _organiseData: function (t, e) {
          var a = t[this._xField],
            i = t[this._yField],
            n = this._radi,
            s = this._data,
            r = this._max,
            o = this._min,
            h = t[this._valueField] || 1,
            t = t.radius || this._cfgRadius || l;
          return (
            s[a] || ((s[a] = []), (n[a] = [])),
            s[a][i] ? (s[a][i] += h) : ((s[a][i] = h), (n[a][i] = t)),
            s[a][i] > r
              ? (e ? this.setDataMax(s[a][i]) : (this._max = s[a][i]), !1)
              : { x: a, y: i, value: h, radius: t, min: o, max: r }
          );
        },
        _unOrganizeData: function () {
          var t,
            e = [],
            a = this._data,
            i = this._radi;
          for (t in a) for (var n in a[t]) e.push({ x: t, y: n, radius: i[t][n], value: a[t][n] });
          return { min: this._min, max: this._max, data: e };
        },
        _onExtremaChange: function () {
          this._coordinator.emit('extremachange', { min: this._min, max: this._max });
        },
        addData: function () {
          if (0 < arguments[0].length)
            for (var t = arguments[0], e = t.length; e--; ) this.addData.call(this, t[e]);
          else {
            var a = this._organiseData(arguments[0], !0);
            a &&
              this._coordinator.emit('renderpartial', {
                min: this._min,
                max: this._max,
                data: [a],
              });
          }
          return this;
        },
        setData: function (t) {
          var e = t.data,
            a = e.length;
          (this._data = []), (this._radi = []);
          for (var i = 0; i < a; i++) this._organiseData(e[i], !1);
          return (
            (this._max = t.max),
            (this._min = t.min || 0),
            this._onExtremaChange(),
            this._coordinator.emit('renderall', this._getInternalData()),
            this
          );
        },
        removeData: function () {},
        setDataMax: function (t) {
          return (
            (this._max = t),
            this._onExtremaChange(),
            this._coordinator.emit('renderall', this._getInternalData()),
            this
          );
        },
        setDataMin: function (t) {
          return (
            (this._min = t),
            this._onExtremaChange(),
            this._coordinator.emit('renderall', this._getInternalData()),
            this
          );
        },
        setCoordinator: function (t) {
          this._coordinator = t;
        },
        _getInternalData: function () {
          return { max: this._max, min: this._min, data: this._data, radi: this._radi };
        },
        getData: function () {
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
  function r(t) {
    var e,
      a = t.gradient || t.defaultGradient,
      i = (t = document.createElement('canvas')).getContext('2d'),
      n = ((t.width = 256), (t.height = 1), i.createLinearGradient(0, 0, 256, 1));
    for (e in a) n.addColorStop(e, a[e]);
    return (i.fillStyle = n), i.fillRect(0, 0, 256, 1), i.getImageData(0, 0, 256, 1).data;
  }
  function e(t) {
    var e = t.element,
      a = (this.shadowCanvas = document.createElement('canvas')),
      i = (this.canvas = t.canvas || document.createElement('canvas')),
      n = ((this._renderBoundaries = [1e4, 1e4, 0, 0]), getComputedStyle(t.element) || {});
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
  a = !(e.prototype = {
    renderPartial: function (t) {
      this._drawAlpha(t), this._colorize();
    },
    renderAll: function (t) {
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
              for (var o = s[r], h = Object.keys(t[o]), l = h.length; l--; ) {
                var d = h[l],
                  u = t[o][d],
                  c = n[o][d];
                e.push({ x: o, y: d, value: u, radius: c });
              }
            return { min: a, max: i, data: e };
          })(t),
        ),
        this._colorize();
    },
    _updateGradient: function (t) {
      this._palette = r(t);
    },
    updateConfig: function (t) {
      t.gradient && this._updateGradient(t), this._setStyles(t);
    },
    setDimensions: function (t, e) {
      (this._width = t),
        (this._height = e),
        (this.canvas.width = this.shadowCanvas.width = t),
        (this.canvas.height = this.shadowCanvas.height = e);
    },
    _clear: function () {
      this.shadowCtx.clearRect(0, 0, this._width, this._height),
        this.ctx.clearRect(0, 0, this._width, this._height);
    },
    _setStyles: function (t) {
      (this._blur = 0 == t.blur ? 0 : t.blur || t.defaultBlur),
        t.backgroundColor && (this.canvas.style.backgroundColor = t.backgroundColor),
        (this._opacity = 255 * (t.opacity || 0)),
        (this._maxOpacity = 255 * (t.maxOpacity || t.defaultMaxOpacity)),
        (this._minOpacity = 255 * (t.minOpacity || t.defaultMinOpacity)),
        (this._useGradientOpacity = !!t.useGradientOpacity);
    },
    _drawAlpha: function (t) {
      for (
        var e,
          a,
          i,
          n,
          s,
          r,
          o = (this._min = t.min),
          h = (this._max = t.max),
          l = (t = t.data || []).length,
          d = 1 - this._blur;
        l--;

      ) {
        var u,
          c = t[l],
          _ = c.x,
          p = c.y,
          f = c.radius,
          c = Math.min(c.value, h),
          _ = _ - f,
          p = p - f,
          m = this.shadowCtx;
        this._templates[f]
          ? (u = this._templates[f])
          : (this._templates[f] =
              ((e = f),
              (a = d),
              (r = s = n = i = void 0),
              (i = document.createElement('canvas')),
              (n = i.getContext('2d')),
              (r = s = e),
              (i.width = i.height = 2 * e),
              1 == a
                ? (n.beginPath(),
                  n.arc(s, r, e, 0, 2 * Math.PI, !1),
                  (n.fillStyle = 'rgba(0,0,0,1)'),
                  n.fill())
                : ((a = n.createRadialGradient(s, r, e * a, s, r, e)).addColorStop(
                    0,
                    'rgba(0,0,0,1)',
                  ),
                  a.addColorStop(1, 'rgba(0,0,0,0)'),
                  (n.fillStyle = a),
                  n.fillRect(0, 0, 2 * e, 2 * e)),
              (u = i))),
          (m.globalAlpha = (c - o) / (h - o)),
          m.drawImage(u, _, p),
          _ < this._renderBoundaries[0] && (this._renderBoundaries[0] = _),
          p < this._renderBoundaries[1] && (this._renderBoundaries[1] = p),
          _ + 2 * f > this._renderBoundaries[2] && (this._renderBoundaries[2] = _ + 2 * f),
          p + 2 * f > this._renderBoundaries[3] && (this._renderBoundaries[3] = p + 2 * f);
      }
    },
    _colorize: function () {
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
          n = this.shadowCtx.getImageData(
            (t = t < 0 ? 0 : t),
            (e = e < 0 ? 0 : e),
            (a = n < t + a ? n - t : a),
            (i = s < e + i ? s - e : i),
          ),
          d = n.data,
          u = d.length,
          c = this._palette,
          _ = 3;
        _ < u;
        _ += 4
      ) {
        var p = d[_],
          f = 4 * p;
        f &&
          ((p = 0 < r ? r : p < o ? (p < h ? h : p) : o),
          (d[_ - 3] = c[f]),
          (d[_ - 2] = c[1 + f]),
          (d[_ - 1] = c[2 + f]),
          (d[_] = l ? c[3 + f] : p));
      }
      (n.data = d), this.ctx.putImageData(n, t, e), (this._renderBoundaries = [1e3, 1e3, 0, 0]);
    },
    getValueAt: function (t) {
      var t = this.shadowCtx.getImageData(t.x, t.y, 1, 1).data[3],
        e = this._max,
        a = this._min;
      return (Math.abs(e - a) * (t / 255)) >> 0;
    },
    getDataURL: function () {
      return this.canvas.toDataURL();
    },
  });
  var a,
    o,
    h = (a = 'canvas2d' === n.defaultRenderer ? e : a),
    d = function () {
      for (var t = {}, e = arguments.length, a = 0; a < e; a++) {
        var i,
          n = arguments[a];
        for (i in n) t[i] = n[i];
      }
      return t;
    },
    i =
      ((u.prototype = {
        on: function (t, e, a) {
          var i = this.cStore;
          i[t] || (i[t] = []),
            i[t].push(function (t) {
              return e.call(a, t);
            });
        },
        emit: function (t, e) {
          var a = this.cStore;
          if (a[t]) for (var i = a[t].length, n = 0; n < i; n++) (0, a[t][n])(e);
        },
      }),
      (o = u),
      (c.prototype = {
        addData: function () {
          return this._store.addData.apply(this._store, arguments), this;
        },
        removeData: function () {
          return (
            this._store.removeData && this._store.removeData.apply(this._store, arguments), this
          );
        },
        setData: function () {
          return this._store.setData.apply(this._store, arguments), this;
        },
        setDataMax: function () {
          return this._store.setDataMax.apply(this._store, arguments), this;
        },
        setDataMin: function () {
          return this._store.setDataMin.apply(this._store, arguments), this;
        },
        configure: function (t) {
          return (
            (this._config = d(this._config, t)),
            this._renderer.updateConfig(this._config),
            this._coordinator.emit('renderall', this._store._getInternalData()),
            this
          );
        },
        repaint: function () {
          return this._coordinator.emit('renderall', this._store._getInternalData()), this;
        },
        getData: function () {
          return this._store.getData();
        },
        getDataURL: function () {
          return this._renderer.getDataURL();
        },
        getValueAt: function (t) {
          return this._store.getValueAt
            ? this._store.getValueAt(t)
            : this._renderer.getValueAt
            ? this._renderer.getValueAt(t)
            : null;
        },
      }),
      c);
  function u() {
    this.cStore = {};
  }
  function c() {
    var e,
      t,
      a = (this._config = d(n, arguments[0] || {}));
    if (((this._coordinator = new o()), a.plugin)) {
      var i = a.plugin;
      if (!n.plugins[i])
        throw new Error("Plugin '" + i + "' not found. Maybe it was not registered.");
      var i = n.plugins[i];
      (this._renderer = new i.renderer(a)), (this._store = new i.store(a));
    } else (this._renderer = new h(a)), (this._store = new s(a));
    (i = (e = this)._renderer),
      (a = e._coordinator),
      (t = e._store),
      a.on('renderpartial', i.renderPartial, i),
      a.on('renderall', i.renderAll, i),
      a.on('extremachange', function (t) {
        e._config.onExtremaChange &&
          e._config.onExtremaChange({
            min: t.min,
            max: t.max,
            gradient: e._config.gradient || e._config.defaultGradient,
          });
      }),
      t.setCoordinator(a);
  }
  return {
    create: function (t) {
      return new i(t);
    },
    register: function (t, e) {
      n.plugins[t] = e;
    },
  };
});
var BMapLib = (window.BMapLib = BMapLib || {});
!(function () {
  var t = (BMapLib.HeatmapOverlay = function (t) {
    (this.conf = t),
      (this.conf.visible = void 0 === t.visible || t.visible),
      (this.heatmap = null),
      (this.latlngs = []),
      (this.bounds = null);
  });
  function h() {
    var t = document.createElement('canvas');
    return t.getContext && t.getContext('2d');
  }
  ((t.prototype = new BMap.Overlay()).initialize = function (t) {
    this._map = t;
    var e,
      a = document.createElement('div');
    return (
      (a.style.position = 'absolute'),
      (a.style.top = 0),
      (a.style.left = 0),
      (a.style.border = 0),
      (a.style.width = this._map.getSize().width + 'px'),
      (a.style.height = this._map.getSize().height + 'px'),
      (this.conf.element = a),
      h() &&
        (t.getPanes().mapPane.appendChild(a),
        (this.conf.valueField = this.conf.valueField || 'count'),
        'undefined' != typeof module && module.exports
          ? (this.heatmap = module.exports.create(this.conf))
          : (this.heatmap = h337.create(this.conf)),
        (e = this),
        t.addEventListener('resize', function (t) {
          t = t.size;
          (a.style.width = t.width + 'px'),
            (a.style.height = t.height + 'px'),
            e.heatmap._renderer.setDimensions(t.width, t.height),
            e.draw();
        }),
        (this._div = a)),
      a
    );
  }),
    (t.prototype.draw = function () {
      if (h()) {
        var t = this._map.getBounds();
        if (!t.equals(this.bounds)) {
          this.bounds = t;
          var e = this._map.pointToOverlayPixel(t.getNorthEast()),
            a = this._map.pointToOverlayPixel(t.getSouthWest()),
            i = e.y,
            n = a.x,
            s = a.y - e.y,
            e = e.x - a.x;
          if (
            ((this.conf.element.style.left = n + 'px'),
            (this.conf.element.style.top = i + 'px'),
            (this.conf.element.style.width = e + 'px'),
            (this.conf.element.style.height = s + 'px'),
            0 < this.latlngs.length)
          ) {
            this.heatmap.removeData();
            var r = this.latlngs.length;
            for (d = { max: this.heatmap._store.getData().max, data: [] }; r--; ) {
              var o = this.latlngs[r].latlng;
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
      return (t.x = t.x >> 0), (t.y = t.y >> 0), t;
    }),
    (t.prototype.setDataSet = function (t) {
      if (((this.data = t), h())) {
        var e = this._map.getBounds(),
          a = { max: t.max, data: [] },
          i = t.data,
          n = i.length;
        for (
          this.latlngs = [],
            this.heatmap.removeData(),
            this.conf.radiusChangeByZoom &&
              (this.heatmap._store._cfgRadius = this.conf.radiusChangeByZoom(this._map.getZoom()));
          n--;

        ) {
          var s,
            r,
            o = new BMap.Point(i[n].lng, i[n].lat);
          this.latlngs.push({ latlng: o, c: i[n].count }),
            e.containsPoint(o) &&
              ((o = this._map.pointToOverlayPixel(o)),
              (r = this._map.pointToOverlayPixel(e.getSouthWest()).x),
              (s = this._map.pointToOverlayPixel(e.getNorthEast()).y),
              (r = new BMap.Pixel(o.x - r, o.y - s)),
              (o = this.pixelTransform(r)),
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
        for (var e in t)
          'radius' == e && (this.heatmap._store._cfgRadius = t[e]),
            'opacity' == e && (t[e] = t[e] / 100);
        this.heatmap.configure(t), this.data && this.setDataSet(this.data);
      }
    });
})();
//# sourceMappingURL=heatmap.js.map
