/*
 * heatmap.js v2.0.0 | JavaScript Heatmap Library
 *
 * Copyright 2008-2014 Patrick Wied <heatmapjs@patrick-wied.at> - All rights reserved.
 * Dual licensed under MIT and Beerware license
 *
 * :: 2014-10-31 21:16
 */
(function (name, context, factory) {
  // Supports UMD. AMD, CommonJS/Node.js and browser context
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  } else {
    context[name] = factory();
  }
  // context[name] = factory();
})('h337', this, function () {
  // Heatmap Config stores default values and will be merged with instance config
  var HeatmapConfig = {
    defaultRadius: 40,
    defaultRenderer: 'canvas2d',
    defaultGradient: {
      0.45: 'rgb(0,0,255)',
      0.55: 'rgb(0,255,255)',
      0.65: 'rgb(0,255,0)',
      0.95: 'yellow',
      1.0: 'rgb(255,0,0)',
    },
    defaultMaxOpacity: 1,
    defaultMinOpacity: 0,
    defaultBlur: 0.85,
    defaultXField: 'x',
    defaultYField: 'y',
    defaultValueField: 'value',
    plugins: {},
  };
  var Store = (function StoreClosure() {
    var Store = function Store(config) {
      this._coordinator = {};
      this._data = [];
      this._radi = [];
      this._min = 0;
      this._max = 1;
      this._xField = config['xField'] || config.defaultXField;
      this._yField = config['yField'] || config.defaultYField;
      this._valueField = config['valueField'] || config.defaultValueField;

      if (config['radius']) {
        this._cfgRadius = config['radius'];
      }
    };

    var defaultRadius = HeatmapConfig.defaultRadius;

    Store.prototype = {
      // when forceRender = false -> called from setData, omits renderall event
      _organiseData: function (dataPoint, forceRender) {
        var x = dataPoint[this._xField];
        var y = dataPoint[this._yField];
        var radi = this._radi;
        var store = this._data;
        var max = this._max;
        var min = this._min;
        var value = dataPoint[this._valueField] || 1;
        var radius = dataPoint.radius || this._cfgRadius || defaultRadius;

        if (!store[x]) {
          store[x] = [];
          radi[x] = [];
        }

        if (!store[x][y]) {
          store[x][y] = value;
          radi[x][y] = radius;
        } else {
          store[x][y] += value;
        }

        if (store[x][y] > max) {
          if (!forceRender) {
            this._max = store[x][y];
          } else {
            this.setDataMax(store[x][y]);
          }
          return false;
        } else {
          return {
            x: x,
            y: y,
            value: value,
            radius: radius,
            min: min,
            max: max,
          };
        }
      },
      _unOrganizeData: function () {
        var unorganizedData = [];
        var data = this._data;
        var radi = this._radi;

        for (var x in data) {
          for (var y in data[x]) {
            unorganizedData.push({
              x: x,
              y: y,
              radius: radi[x][y],
              value: data[x][y],
            });
          }
        }
        return {
          min: this._min,
          max: this._max,
          data: unorganizedData,
        };
      },
      _onExtremaChange: function () {
        this._coordinator.emit('extremachange', {
          min: this._min,
          max: this._max,
        });
      },
      addData: function () {
        if (arguments[0].length > 0) {
          var dataArr = arguments[0];
          var dataLen = dataArr.length;
          while (dataLen--) {
            this.addData.call(this, dataArr[dataLen]);
          }
        } else {
          // add to store
          var organisedEntry = this._organiseData(arguments[0], true);
          if (organisedEntry) {
            this._coordinator.emit('renderpartial', {
              min: this._min,
              max: this._max,
              data: [organisedEntry],
            });
          }
        }
        return this;
      },
      setData: function (data) {
        var dataPoints = data.data;
        var pointsLen = dataPoints.length;

        // reset data arrays
        this._data = [];
        this._radi = [];

        for (var i = 0; i < pointsLen; i++) {
          this._organiseData(dataPoints[i], false);
        }
        this._max = data.max;
        this._min = data.min || 0;

        this._onExtremaChange();
        this._coordinator.emit('renderall', this._getInternalData());
        return this;
      },
      removeData: function () {
        // TODO: implement
      },
      setDataMax: function (max) {
        this._max = max;
        this._onExtremaChange();
        this._coordinator.emit('renderall', this._getInternalData());
        return this;
      },
      setDataMin: function (min) {
        this._min = min;
        this._onExtremaChange();
        this._coordinator.emit('renderall', this._getInternalData());
        return this;
      },
      setCoordinator: function (coordinator) {
        this._coordinator = coordinator;
      },
      _getInternalData: function () {
        return {
          max: this._max,
          min: this._min,
          data: this._data,
          radi: this._radi,
        };
      },
      getData: function () {
        return this._unOrganizeData();
      } /*,

      TODO: rethink.

    getValueAt: function(point) {
      var value;
      var radius = 100;
      var x = point.x;
      var y = point.y;
      var data = this._data;

      if (data[x] && data[x][y]) {
        return data[x][y];
      } else {
        var values = [];
        // radial search for datapoints based on default radius
        for(var distance = 1; distance < radius; distance++) {
          var neighbors = distance * 2 +1;
          var startX = x - distance;
          var startY = y - distance;

          for(var i = 0; i < neighbors; i++) {
            for (var o = 0; o < neighbors; o++) {
              if ((i == 0 || i == neighbors-1) || (o == 0 || o == neighbors-1)) {
                if (data[startY+i] && data[startY+i][startX+o]) {
                  values.push(data[startY+i][startX+o]);
                }
              } else {
                continue;
              }
            }
          }
        }
        if (values.length > 0) {
          return Math.max.apply(Math, values);
        }
      }
      return false;
    }*/,
    };

    return Store;
  })();

  var Canvas2dRenderer = (function Canvas2dRendererClosure() {
    var _getColorPalette = function (config) {
      var gradientConfig = config.gradient || config.defaultGradient;
      var paletteCanvas = document.createElement('canvas');
      var paletteCtx = paletteCanvas.getContext('2d');

      paletteCanvas.width = 256;
      paletteCanvas.height = 1;

      var gradient = paletteCtx.createLinearGradient(0, 0, 256, 1);
      for (var key in gradientConfig) {
        gradient.addColorStop(key, gradientConfig[key]);
      }

      paletteCtx.fillStyle = gradient;
      paletteCtx.fillRect(0, 0, 256, 1);

      return paletteCtx.getImageData(0, 0, 256, 1).data;
    };

    var _getPointTemplate = function (radius, blurFactor) {
      var tplCanvas = document.createElement('canvas');
      var tplCtx = tplCanvas.getContext('2d');
      var x = radius;
      var y = radius;
      tplCanvas.width = tplCanvas.height = radius * 2;

      if (blurFactor == 1) {
        tplCtx.beginPath();
        tplCtx.arc(x, y, radius, 0, 2 * Math.PI, false);
        tplCtx.fillStyle = 'rgba(0,0,0,1)';
        tplCtx.fill();
      } else {
        var gradient = tplCtx.createRadialGradient(x, y, radius * blurFactor, x, y, radius);
        gradient.addColorStop(0, 'rgba(0,0,0,1)');
        gradient.addColorStop(1, 'rgba(0,0,0,0)');
        tplCtx.fillStyle = gradient;
        tplCtx.fillRect(0, 0, 2 * radius, 2 * radius);
      }

      return tplCanvas;
    };

    var _prepareData = function (data) {
      var renderData = [];
      var min = data.min;
      var max = data.max;
      var radi = data.radi;
      var data = data.data;

      var xValues = Object.keys(data);
      var xValuesLen = xValues.length;

      while (xValuesLen--) {
        var xValue = xValues[xValuesLen];
        var yValues = Object.keys(data[xValue]);
        var yValuesLen = yValues.length;
        while (yValuesLen--) {
          var yValue = yValues[yValuesLen];
          var value = data[xValue][yValue];
          var radius = radi[xValue][yValue];
          renderData.push({
            x: xValue,
            y: yValue,
            value: value,
            radius: radius,
          });
        }
      }

      return {
        min: min,
        max: max,
        data: renderData,
      };
    };

    function Canvas2dRenderer(config) {
      var container = config.element;
      var shadowCanvas = (this.shadowCanvas = document.createElement('canvas'));
      var canvas = (this.canvas = config.canvas || document.createElement('canvas'));
      var renderBoundaries = (this._renderBoundaries = [10000, 10000, 0, 0]);

      var computed = getComputedStyle(config.element) || {};

      canvas.className = 'heatmap-canvas';

      this._width = canvas.width = shadowCanvas.width = +computed.width.replace(/px/, '');
      this._height = canvas.height = shadowCanvas.height = +computed.height.replace(/px/, '');

      this.shadowCtx = shadowCanvas.getContext('2d');
      this.ctx = canvas.getContext('2d');

      // @TODO:
      // conditional wrapper

      canvas.style.cssText = shadowCanvas.style.cssText = 'position:absolute;left:0;top:0;';

      container.style.position = 'relative';
      container.appendChild(canvas);

      this._palette = _getColorPalette(config);
      this._templates = {};

      this._setStyles(config);
    }

    Canvas2dRenderer.prototype = {
      renderPartial: function (data) {
        this._drawAlpha(data);
        this._colorize();
      },
      renderAll: function (data) {
        // reset render boundaries
        this._clear();
        this._drawAlpha(_prepareData(data));
        this._colorize();
      },
      _updateGradient: function (config) {
        this._palette = _getColorPalette(config);
      },
      updateConfig: function (config) {
        if (config['gradient']) {
          this._updateGradient(config);
        }
        this._setStyles(config);
      },
      setDimensions: function (width, height) {
        this._width = width;
        this._height = height;
        this.canvas.width = this.shadowCanvas.width = width;
        this.canvas.height = this.shadowCanvas.height = height;
      },
      _clear: function () {
        this.shadowCtx.clearRect(0, 0, this._width, this._height);
        this.ctx.clearRect(0, 0, this._width, this._height);
      },
      _setStyles: function (config) {
        this._blur = config.blur == 0 ? 0 : config.blur || config.defaultBlur;

        if (config.backgroundColor) {
          this.canvas.style.backgroundColor = config.backgroundColor;
        }

        this._opacity = (config.opacity || 0) * 255;
        this._maxOpacity = (config.maxOpacity || config.defaultMaxOpacity) * 255;
        this._minOpacity = (config.minOpacity || config.defaultMinOpacity) * 255;
        this._useGradientOpacity = !!config.useGradientOpacity;
      },
      _drawAlpha: function (data) {
        var min = (this._min = data.min);
        var max = (this._max = data.max);
        var data = data.data || [];
        var dataLen = data.length;
        // on a point basis?
        var blur = 1 - this._blur;

        while (dataLen--) {
          var point = data[dataLen];

          var x = point.x;
          var y = point.y;
          var radius = point.radius;
          // if value is bigger than max
          // use max as value
          var value = Math.min(point.value, max);
          var rectX = x - radius;
          var rectY = y - radius;
          var shadowCtx = this.shadowCtx;

          var tpl;
          if (!this._templates[radius]) {
            this._templates[radius] = tpl = _getPointTemplate(radius, blur);
          } else {
            tpl = this._templates[radius];
          }
          // value from minimum / value range
          // => [0, 1]
          shadowCtx.globalAlpha = (value - min) / (max - min);

          shadowCtx.drawImage(tpl, rectX, rectY);

          // update renderBoundaries
          if (rectX < this._renderBoundaries[0]) {
            this._renderBoundaries[0] = rectX;
          }
          if (rectY < this._renderBoundaries[1]) {
            this._renderBoundaries[1] = rectY;
          }
          if (rectX + 2 * radius > this._renderBoundaries[2]) {
            this._renderBoundaries[2] = rectX + 2 * radius;
          }
          if (rectY + 2 * radius > this._renderBoundaries[3]) {
            this._renderBoundaries[3] = rectY + 2 * radius;
          }
        }
      },
      _colorize: function () {
        var x = this._renderBoundaries[0];
        var y = this._renderBoundaries[1];
        var width = this._renderBoundaries[2] - x;
        var height = this._renderBoundaries[3] - y;
        var maxWidth = this._width;
        var maxHeight = this._height;
        var opacity = this._opacity;
        var maxOpacity = this._maxOpacity;
        var minOpacity = this._minOpacity;
        var useGradientOpacity = this._useGradientOpacity;

        if (x < 0) {
          x = 0;
        }
        if (y < 0) {
          y = 0;
        }
        if (x + width > maxWidth) {
          width = maxWidth - x;
        }
        if (y + height > maxHeight) {
          height = maxHeight - y;
        }

        var img = this.shadowCtx.getImageData(x, y, width, height);
        var imgData = img.data;
        var len = imgData.length;
        var palette = this._palette;

        for (var i = 3; i < len; i += 4) {
          var alpha = imgData[i];
          var offset = alpha * 4;

          if (!offset) {
            continue;
          }

          var finalAlpha;
          if (opacity > 0) {
            finalAlpha = opacity;
          } else {
            if (alpha < maxOpacity) {
              if (alpha < minOpacity) {
                finalAlpha = minOpacity;
              } else {
                finalAlpha = alpha;
              }
            } else {
              finalAlpha = maxOpacity;
            }
          }

          imgData[i - 3] = palette[offset];
          imgData[i - 2] = palette[offset + 1];
          imgData[i - 1] = palette[offset + 2];
          imgData[i] = useGradientOpacity ? palette[offset + 3] : finalAlpha;
        }

        img.data = imgData;
        this.ctx.putImageData(img, x, y);

        this._renderBoundaries = [1000, 1000, 0, 0];
      },
      getValueAt: function (point) {
        var value;
        var shadowCtx = this.shadowCtx;
        var img = shadowCtx.getImageData(point.x, point.y, 1, 1);
        var data = img.data[3];
        var max = this._max;
        var min = this._min;

        value = (Math.abs(max - min) * (data / 255)) >> 0;

        return value;
      },
      getDataURL: function () {
        return this.canvas.toDataURL();
      },
    };

    return Canvas2dRenderer;
  })();

  var Renderer = (function RendererClosure() {
    var rendererFn = false;

    if (HeatmapConfig['defaultRenderer'] === 'canvas2d') {
      rendererFn = Canvas2dRenderer;
    }

    return rendererFn;
  })();

  var Util = {
    merge: function () {
      var merged = {};
      var argsLen = arguments.length;
      for (var i = 0; i < argsLen; i++) {
        var obj = arguments[i];
        for (var key in obj) {
          merged[key] = obj[key];
        }
      }
      return merged;
    },
  };
  // Heatmap Constructor
  var Heatmap = (function HeatmapClosure() {
    var Coordinator = (function CoordinatorClosure() {
      function Coordinator() {
        this.cStore = {};
      }

      Coordinator.prototype = {
        on: function (evtName, callback, scope) {
          var cStore = this.cStore;

          if (!cStore[evtName]) {
            cStore[evtName] = [];
          }
          cStore[evtName].push(function (data) {
            return callback.call(scope, data);
          });
        },
        emit: function (evtName, data) {
          var cStore = this.cStore;
          if (cStore[evtName]) {
            var len = cStore[evtName].length;
            for (var i = 0; i < len; i++) {
              var callback = cStore[evtName][i];
              callback(data);
            }
          }
        },
      };

      return Coordinator;
    })();

    var _connect = function (scope) {
      var renderer = scope._renderer;
      var coordinator = scope._coordinator;
      var store = scope._store;

      coordinator.on('renderpartial', renderer.renderPartial, renderer);
      coordinator.on('renderall', renderer.renderAll, renderer);
      coordinator.on('extremachange', function (data) {
        scope._config.onExtremaChange &&
          scope._config.onExtremaChange({
            min: data.min,
            max: data.max,
            gradient: scope._config['gradient'] || scope._config['defaultGradient'],
          });
      });
      store.setCoordinator(coordinator);
    };

    function Heatmap() {
      var config = (this._config = Util.merge(HeatmapConfig, arguments[0] || {}));
      this._coordinator = new Coordinator();
      if (config['plugin']) {
        var pluginToLoad = config['plugin'];
        if (!HeatmapConfig.plugins[pluginToLoad]) {
          throw new Error("Plugin '" + pluginToLoad + "' not found. Maybe it was not registered.");
        } else {
          var plugin = HeatmapConfig.plugins[pluginToLoad];
          // set plugin renderer and store
          this._renderer = new plugin.renderer(config);
          this._store = new plugin.store(config);
        }
      } else {
        this._renderer = new Renderer(config);
        this._store = new Store(config);
      }
      _connect(this);
    }

    // @TODO:
    // add API documentation
    Heatmap.prototype = {
      addData: function () {
        this._store.addData.apply(this._store, arguments);
        return this;
      },
      removeData: function () {
        this._store.removeData && this._store.removeData.apply(this._store, arguments);
        return this;
      },
      setData: function () {
        this._store.setData.apply(this._store, arguments);
        return this;
      },
      setDataMax: function () {
        this._store.setDataMax.apply(this._store, arguments);
        return this;
      },
      setDataMin: function () {
        this._store.setDataMin.apply(this._store, arguments);
        return this;
      },
      configure: function (config) {
        this._config = Util.merge(this._config, config);
        this._renderer.updateConfig(this._config);
        this._coordinator.emit('renderall', this._store._getInternalData());
        return this;
      },
      repaint: function () {
        this._coordinator.emit('renderall', this._store._getInternalData());
        return this;
      },
      getData: function () {
        return this._store.getData();
      },
      getDataURL: function () {
        return this._renderer.getDataURL();
      },
      getValueAt: function (point) {
        if (this._store.getValueAt) {
          return this._store.getValueAt(point);
        } else if (this._renderer.getValueAt) {
          return this._renderer.getValueAt(point);
        } else {
          return null;
        }
      },
    };

    return Heatmap;
  })();

  // core
  var heatmapFactory = {
    create: function (config) {
      return new Heatmap(config);
    },
    register: function (pluginKey, plugin) {
      HeatmapConfig.plugins[pluginKey] = plugin;
    },
  };

  return heatmapFactory;
});

/*==============================以上部分为heatmap.js的核心代码,只负责热力图的展现====================================*/

/*==============================以下部分为专为百度地图打造的覆盖物===================================================*/
/**
 * @fileoverview 百度地图的热力图功能,对外开放。
 * 主要基于http://www.patrick-wied.at/static/heatmapjs/index.html 修改而得

 * 主入口类是<a href="symbols/BMapLib.Heatmap.html">Heatmap</a>，
 * 基于Baidu Map API 2.0。
 *
 * @author Baidu Map Api Group
 * @version 1.0
 */

/**
 * @namespace BMap的所有library类均放在BMapLib命名空间下
 */
var BMapLib = (window.BMapLib = BMapLib || {});

(function () {
  /**
   * @exports HeatmapOverlay as BMapLib.HeatmapOverlay
   */
  var HeatmapOverlay =
    /**
     * 热力图的覆盖物
     * @class 热力图的覆盖物
     * 实例化该类后，使用map.addOverlay即可以添加热力图
     *
     * @constructor
     * @param {Json Object} opts 可选的输入参数，非必填项。可输入选项包括：<br />
     * {"<b>radius</b>" : {String} 热力图的半径,
     * <br />"<b>visible</b>" : {Number} 热力图是否显示,
     * <br />"<b>gradient</b>" : {JSON} 热力图的渐变区间,
     * <br />"<b>opacity</b>" : {Number} 热力的透明度,
     *
     * @example <b>参考示例：</b><br />
     * var map = new BMap.Map("container");<br />map.centerAndZoom(new BMap.Point(116.404, 39.915), 15);<br />var heatmapOverlay = new BMapLib.HeatmapOverlay({"radius":10, "visible":true, "opacity":70});<br />heatmapOverlay.setDataSet(data);//data是热力图的详细数据
     */

    (BMapLib.HeatmapOverlay = function (opts) {
      this.conf = opts;
      this.conf.visible = opts.visible === undefined ? true : opts.visible;
      this.heatmap = null;
      this.latlngs = [];
      this.bounds = null;
    });

  HeatmapOverlay.prototype = new BMap.Overlay();

  HeatmapOverlay.prototype.initialize = function (map) {
    this._map = map;
    var el = document.createElement('div');
    el.style.position = 'absolute';
    el.style.top = 0;
    el.style.left = 0;
    el.style.border = 0;
    el.style.width = this._map.getSize().width + 'px';
    el.style.height = this._map.getSize().height + 'px';
    this.conf.element = el;

    if (!isSupportCanvas()) {
      // 判断是否支持Canvas.
      return el;
    }
    map.getPanes().mapPane.appendChild(el);
    this.conf.valueField = this.conf.valueField || 'count';

    if (typeof module !== 'undefined' && module.exports) {
      this.heatmap = module.exports.create(this.conf);
    } else {
      this.heatmap = h337.create(this.conf);
    }

    var that = this;
    map.addEventListener('resize', function (e) {
      var size = e.size;
      el.style.width = size.width + 'px';
      el.style.height = size.height + 'px';
      that.heatmap._renderer.setDimensions(size.width, size.height);
      that.draw();
    });

    this._div = el;
    return el;
  };

  HeatmapOverlay.prototype.draw = function () {
    if (!isSupportCanvas()) {
      //判断是否支持Canvas.
      return;
    }
    var currentBounds = this._map.getBounds();

    if (currentBounds.equals(this.bounds)) {
      return;
    }
    this.bounds = currentBounds;

    var ne = this._map.pointToOverlayPixel(currentBounds.getNorthEast()),
      sw = this._map.pointToOverlayPixel(currentBounds.getSouthWest()),
      topY = ne.y,
      leftX = sw.x,
      h = sw.y - ne.y,
      w = ne.x - sw.x;

    this.conf.element.style.left = leftX + 'px';
    this.conf.element.style.top = topY + 'px';
    this.conf.element.style.width = w + 'px';
    this.conf.element.style.height = h + 'px';
    //this.heatmap.store.get("heatmap").resize();

    if (this.latlngs.length > 0) {
      this.heatmap.removeData();

      var len = this.latlngs.length;
      d = {
        max: this.heatmap._store.getData().max,
        data: [],
      };

      while (len--) {
        var latlng = this.latlngs[len].latlng;

        if (!currentBounds.containsPoint(latlng)) {
          continue;
        }

        var divPixel = this._map.pointToOverlayPixel(latlng),
          leftX = this._map.pointToOverlayPixel(currentBounds.getSouthWest()).x,
          topY = this._map.pointToOverlayPixel(currentBounds.getNorthEast()).y,
          screenPixel = new BMap.Pixel(divPixel.x - leftX, divPixel.y - topY);
        var roundedPoint = this.pixelTransform(screenPixel);
        d.data.push({
          x: roundedPoint.x,
          y: roundedPoint.y,
          count: this.latlngs[len].c,
        });
      }

      if (this.conf.radiusChangeByZoom) {
        this.heatmap._store._cfgRadius = this.conf.radiusChangeByZoom(this._map.getZoom());
      }
      this.heatmap.setData(d);
    }
  };

  //内部使用的坐标转化
  HeatmapOverlay.prototype.pixelTransform = function (p) {
    var w = this.heatmap.width,
      h = this.heatmap.height;

    while (p.x < 0) {
      p.x += w;
    }

    while (p.x > w) {
      p.x -= w;
    }

    while (p.y < 0) {
      p.y += h;
    }

    while (p.y > h) {
      p.y -= h;
    }

    p.x = p.x >> 0;
    p.y = p.y >> 0;

    return p;
  };

  /**
   * 设置热力图展现的详细数据, 实现之后,即可以立刻展现
   * @param {Json Object } data
   * {"<b>max</b>" : {Number} 权重的最大值,
   * <br />"<b>data</b>" : {Array} 坐标详细数据,格式如下 <br/>
   * {"lng":116.421969,"lat":39.913527,"count":3}, 其中<br/>
   * lng lat分别为经纬度, count权重值
   */
  HeatmapOverlay.prototype.setDataSet = function (data) {
    this.data = data;
    if (!isSupportCanvas()) {
      //判断是否支持Canvas.
      return;
    }
    var currentBounds = this._map.getBounds();
    var mapdata = {
      max: data.max,
      data: [],
    };
    var d = data.data,
      dlen = d.length;

    this.latlngs = [];
    this.heatmap.removeData();

    if (this.conf.radiusChangeByZoom) {
      this.heatmap._store._cfgRadius = this.conf.radiusChangeByZoom(this._map.getZoom());
    }

    while (dlen--) {
      var latlng = new BMap.Point(d[dlen].lng, d[dlen].lat);
      this.latlngs.push({
        latlng: latlng,
        c: d[dlen].count,
      });

      if (!currentBounds.containsPoint(latlng)) {
        continue;
      }

      var divPixel = this._map.pointToOverlayPixel(latlng),
        leftX = this._map.pointToOverlayPixel(currentBounds.getSouthWest()).x,
        topY = this._map.pointToOverlayPixel(currentBounds.getNorthEast()).y,
        screenPixel = new BMap.Pixel(divPixel.x - leftX, divPixel.y - topY);
      var point = this.pixelTransform(screenPixel);

      mapdata.data.push({
        x: point.x,
        y: point.y,
        count: d[dlen].count,
      });
    }
    this.heatmap.setData(mapdata);
  };

  /**
   * 添加热力图的详细坐标点
   * @param {Number} lng 经度坐标
   * @param {Number} lat 纬度坐标
   * @param {Number} count 权重
   */
  HeatmapOverlay.prototype.addDataPoint = function (lng, lat, count) {
    if (!isSupportCanvas()) {
      return;
    }
    if (this.data && this.data.data) {
      this.data.data.push({
        lng: lng,
        lat: lat,
        count: count,
      });
    }

    var latlng = new BMap.Point(lng, lat),
      point = this.pixelTransform(this._map.pointToOverlayPixel(latlng));

    this.heatmap.store.addDataPoint(point.x, point.y, count);
    this.latlngs.push({
      latlng: latlng,
      c: count,
    });
  };

  /**
   * 更改热力图的展现或者关闭
   */

  HeatmapOverlay.prototype.toggle = function () {
    if (!isSupportCanvas()) {
      //判断是否支持Canvas.
      return;
    }
    if (this.conf.visible === true) {
      this.conf.visible = false;
    } else {
      this.conf.visible = true;
    }
    if (this.conf.visible) {
      this.conf.element.style.display = 'block';
    } else {
      this.conf.element.style.display = 'none';
    }
  };
  /**
   * 设置热力图展现的配置
   * @param {Json Object} options 可选的输入参数，非必填项。可输入选项包括：<br />
   * {"<b>radius</b>" : {String} 热力图的半径,
   * <br />"<b>visible</b>" : {Number} 热力图是否显示,
   * <br />"<b>gradient</b>" : {JSON} 热力图的渐变区间,
   * <br />"<b>opacity</b>" : {Number} 热力的透明度,}
   */
  HeatmapOverlay.prototype.setOptions = function (options) {
    if (!isSupportCanvas()) {
      // 判断是否支持Canvas.
      return;
    }
    for (var key in options) {
      if (key == 'radius') {
        this.heatmap._store._cfgRadius = options[key];
      }
      if (key == 'opacity') {
        options[key] = options[key] / 100;
      }
    }
    this.heatmap.configure(options);
    if (this.data) {
      this.setDataSet(this.data); // 重新渲染
    }
  };

  function isSupportCanvas() {
    var elem = document.createElement('canvas');
    return !!(elem.getContext && elem.getContext('2d'));
  }
})();
