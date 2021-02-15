var __assign =
  (this && this.__assign) ||
  function () {
    return (__assign =
      Object.assign ||
      function (t) {
        for (var e, n = 1, i = arguments.length; n < i; n++)
          for (const o in (e = arguments[n]))
            Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
        return t;
      }).apply(this, arguments);
  };
const __importDefault =
  (this && this.__importDefault) ||
  function (t) {
    return t && t.__esModule ? t : { default: t };
  };
Object.defineProperty(exports, '__esModule', { value: !0 });
const uuid_1 = require('uuid');
const algebra_js_1 = __importDefault(require('algebra.js'));
const proj_js_1 = require('ol/proj.js');
const util_1 = __importDefault(require('./util'));

const AnimationManager = (function () {
  function AnimationManager(t, e) {
    (this.runing = !1),
      (this.vectorSource = t),
      (this.animationMap = []),
      (this.preAnimations = []),
      (this.config = e);
  }
  return (
    (AnimationManager.prototype.isRun = function () {
      return this.runing;
    }),
    (AnimationManager.prototype.getPoints = function (locations) {
      console.log('locations', locations);
      let distance = 0;
      const addPoints = [];
      this.animationMap = [];
      for (var i = locations.length - 1; i >= 1; i--) {
        var startPoint = proj_js_1.fromLonLat(locations[i]);
        var endPoint = proj_js_1.fromLonLat(locations[i - 1]);
        var xDistance = Math.abs(startPoint[0] - endPoint[0]);
        distance += xDistance;
      }
      var speed = Math.floor(distance / (80 * locations.length));
      speed === 0 && (speed = 0.01), (this.animationMap[0] = locations.length - 1);
      for (var i = locations.length - 1; i >= 1; i--) {
        var startPoint = proj_js_1.fromLonLat(locations[i]);
        var endPoint = proj_js_1.fromLonLat(locations[i - 1]);
        const xDirection = startPoint[0] < endPoint[0] ? '->' : '<-';
        const yDirection = startPoint[1] < endPoint[1] ? '->' : '<-';
        if (startPoint[0] !== endPoint[0] || startPoint[1] !== endPoint[1]) {
          if (startPoint[0] === endPoint[0] && startPoint[1] !== endPoint[1]) {
            const xdistance = Math.abs(startPoint[1] - endPoint[1]);
            var interval = Math.floor(xdistance / speed);
            xdistance % speed > 0 && (interval += 1);
            for (var j = 1; j <= interval; j++) {
              var x = startPoint[0];
              var y = void 0;
              yDirection === '->'
                ? (y =
                    xdistance < j * speed
                      ? ((x = endPoint[0]), endPoint[1])
                      : startPoint[1] + j * speed)
                : yDirection === '<-' &&
                  (y =
                    xdistance < j * speed
                      ? ((x = endPoint[0]), endPoint[1])
                      : startPoint[1] - j * speed),
                addPoints.push([x, y]);
            }
          } else if (startPoint[0] !== endPoint[0] && startPoint[1] === endPoint[1]) {
            var xDistance = Math.abs(startPoint[0] - endPoint[0]);
            var interval = Math.floor(xDistance / speed);
            xDistance % speed > 0 && (interval += 1);
            for (var j = 1; j <= interval; j++) {
              var x = void 0;
              var y = startPoint[1];
              xDirection === '->'
                ? xDistance < j * speed
                  ? ((x = endPoint[0]), (y = endPoint[1]))
                  : (x = startPoint[0] + j * speed)
                : xDirection === '<-' &&
                  (xDistance < j * speed
                    ? ((x = endPoint[0]), (y = endPoint[1]))
                    : (x = startPoint[0] - j * speed)),
                addPoints.push([x, y]);
            }
          } else {
            const time = 150;
            var xDistance = Math.abs(startPoint[0] - endPoint[0]);
            var speed = xDistance / time;
            var interval = Math.floor(xDistance / speed);
            xDistance % speed > 0 && (interval += 1);
            for (
              var { Equation } = algebra_js_1.default,
                x1 = algebra_js_1.default.parse(`${startPoint[1]}=${startPoint[0]}k+b`),
                answer1 = x1.solveFor('k'),
                x2 = algebra_js_1.default.parse(`${endPoint[1]}=${endPoint[0]}k+b`),
                answer2 = x2.solveFor('k'),
                eq = new Equation(answer1, answer2),
                answerX = eq.solveFor('b'),
                eq = x1.eval({ b: answerX }),
                answerY = eq.solveFor('k'),
                b = eval(answerX.toString()),
                k = eval(answerY.toString()),
                j = 1;
              j <= interval;
              j++
            ) {
              var x = void 0;
              var y = void 0;
              xDirection === '->'
                ? (y =
                    xDistance < j * speed
                      ? ((x = endPoint[0]), endPoint[1])
                      : ((x = startPoint[0] + j * speed), k * x + b))
                : xDirection === '<-' &&
                  (y =
                    xDistance < j * speed
                      ? ((x = endPoint[0]), endPoint[1])
                      : ((x = startPoint[0] - j * speed), k * x + b)),
                addPoints.push([x, y]);
            }
          }
          this.animationMap[addPoints.length - 1] = i - 1;
        }
      }
      return addPoints;
    }),
    (AnimationManager.prototype.run = function (t, e) {
      const n = this;
      if (!t || this.runing) return !1;
      (this.runing = !0), (this.pointsMapIndex = e);
      t = t.values();
      this.loopTask(t).then(function () {
        (n.runing = !1), console.log('finish');
      });
    }),
    (AnimationManager.prototype.loopTask = function (i) {
      const o = this;
      return new Promise(function (t, e) {
        let n = i.next();
        n.done
          ? t()
          : ((n = n.value),
            (n = o.getPoints(n)),
            o
              .runTask(n)
              .then(function () {
                o.loopTask(i).then(function () {
                  t();
                });
              })
              .catch(function (t) {
                e(t);
              }));
      });
    }),
    (AnimationManager.prototype.runTask = function (c) {
      const t = this;
      return (
        (this.preActiveId = ''),
        new Promise(function (r) {
          const s = t;
          if (!c.length) return r(), !1;
          let d = 0;
          (t.pref = null),
            (t.lines = []),
            (t.handler = null),
            (s.handler = requestAnimationFrame(function t() {
              if (d === c.length)
                return (
                  s.stopTask(),
                  s.preAnimations &&
                    (s.preAnimations.forEach(function (t) {
                      s.vectorSource.removeFeature(t);
                    }),
                    (s.preAnimations = [])),
                  r(),
                  !1
                );
              s.pref && s.vectorSource.removeFeature(s.pref);
              let e;
              let n;
              let i;
              const o = c[d];
              let a = 0;
              d !== 0 &&
                ((i = util_1.default.drawLine({
                  points: [c[d - 1], c[d]],
                  width: s.config.lineWidth,
                  color: s.config.lineColor,
                })),
                s.vectorSource.addFeature(i),
                s.lines.push(i),
                (e = c[d - 1]),
                (i = o[0] - e[0]),
                (e = o[1] - e[1]),
                (a = Math.atan2(e, i))),
                (!s.animationMap[d] && s.animationMap[d] !== 0) ||
                  (s.preActiveId &&
                    ((n = s.vectorSource.getFeatureById(s.preActiveId)),
                    s.vectorSource.removeFeature(n),
                    (s.preActiveId = '')),
                  (i = s.pointsMapIndex[s.animationMap[d]]) &&
                    ((n = `active_${i.id}`),
                    (i = util_1.default.drawImagePoint({
                      ...i,
                      id: n,
                      src: s.config.pointImg,
                      zIndex: i.zIndex + 10,
                    })),
                    s.vectorSource.addFeature(i),
                    (s.preActiveId = n)));
              a = util_1.default.drawImagePoint({
                id: uuid_1.v1(),
                pos: o,
                src: s.config.arrowImg,
                scale: 1,
                zIndex: 1e3,
                rotation: -a,
              });
              s.vectorSource.addFeature(a),
                (s.pref = a),
                ++d,
                (s.handler = requestAnimationFrame(t));
            }));
        })
      );
    }),
    (AnimationManager.prototype.stopTask = function () {
      if (!this.runing) return !1;
      if (
        (this.handler && cancelAnimationFrame(this.handler),
        this.pref && this.vectorSource.removeFeature(this.pref),
        this.lines)
      )
        for (let t = 0; t < this.lines.length; t++) this.vectorSource.removeFeature(this.lines[t]);
      let e;
      this.preActiveId &&
        ((e = this.vectorSource.getFeatureById(this.preActiveId)),
        this.vectorSource.removeFeature(e),
        (this.preActiveId = ''));
    }),
    (AnimationManager.prototype.stop = function () {
      this.stopTask(), (this.runing = !1);
    }),
    AnimationManager
  );
})();

exports.default = AnimationManager;
// # sourceMappingURL=animationmanager.js.map
