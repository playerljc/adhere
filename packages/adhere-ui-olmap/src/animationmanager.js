import { v1 } from 'uuid';
import algebra from 'algebra.js';
import { fromLonLat } from 'ol/proj.js';

import Util from './util';

/**
 * AnimationManager
 * @class AnimationManager
 * @classdesc 地图轨迹播放动画
 */
class AnimationManager {
  // runing: boolean;
  // vectorSource: any;
  // animationMap: {};
  // preAnimations: any[];
  // pointsMapIndex: any;
  // preActiveId: string | undefined;
  // handler: any;
  // lines: any;
  // pref: any;
  // config: {
  //   arrowImg: '';
  //   pointImg: '';
  //   lineWidth: 8,
  //   lineColor: '#FF5D00',
  // };

  constructor(vectorSource, config) {
    this.runing = false;
    this.vectorSource = vectorSource;
    this.animationMap = [];
    this.preAnimations = [];

    this.config = config;
  }

  isRun() {
    return this.runing;
  }

  getPoints(locations) {
    console.log('locations', locations);

    let distance = 0;
    // let speed = 0;
    const addPoints = [];
    this.animationMap = [];

    for (let i = locations.length - 1; i >= 1; i--) {
      const startPoint = fromLonLat(locations[i]);
      const endPoint = fromLonLat(locations[i - 1]);

      // 距离
      const xDistance = Math.abs(startPoint[0] - endPoint[0]);
      distance += xDistance;
    }

    let speed = Math.floor(distance / (locations.length * 80));

    if (speed === 0) {
      speed = 0.01;
    }

    this.animationMap[0] = locations.length - 1;

    for (let i = locations.length - 1; i >= 1; i--) {
      const startPoint = fromLonLat(locations[i]);
      const endPoint = fromLonLat(locations[i - 1]);

      const xDirection = startPoint[0] < endPoint[0] ? '->' : '<-';
      const yDirection = startPoint[1] < endPoint[1] ? '->' : '<-';

      // 同一个点没有轨迹
      // eslint-disable-next-line no-continue
      if (startPoint[0] === endPoint[0] && startPoint[1] === endPoint[1]) continue;

      // 垂直的
      if (startPoint[0] === endPoint[0] && startPoint[1] !== endPoint[1]) {
        // 距离
        const xdistance = Math.abs(startPoint[1] - endPoint[1]);
        // 段数
        let interval = Math.floor(xdistance / speed);
        if (xdistance % speed > 0) {
          interval += 1;
        }

        for (let j = 1; j <= interval; j++) {
          let x = startPoint[0];
          let y;
          if (yDirection === '->') {
            if (j * speed > xdistance) {
              // eslint-disable-next-line prefer-destructuring
              x = endPoint[0];
              // eslint-disable-next-line prefer-destructuring
              y = endPoint[1];
            } else {
              y = startPoint[1] + j * speed;
            }
          } else if (yDirection === '<-') {
            if (j * speed > xdistance) {
              // eslint-disable-next-line prefer-destructuring
              x = endPoint[0];
              // eslint-disable-next-line prefer-destructuring
              y = endPoint[1];
            } else {
              y = startPoint[1] - j * speed;
            }
          }
          // @ts-ignore
          addPoints.push([x, y]);
        }
      } else if (startPoint[0] !== endPoint[0] && startPoint[1] === endPoint[1]) {
        // 水平的
        // 距离
        const xDistance = Math.abs(startPoint[0] - endPoint[0]);
        // 段数
        let interval = Math.floor(xDistance / speed);
        if (xDistance % speed > 0) {
          interval += 1;
        }

        for (let j = 1; j <= interval; j++) {
          let x;
          let y = startPoint[1];
          if (xDirection === '->') {
            if (j * speed > xDistance) {
              // eslint-disable-next-line prefer-destructuring
              x = endPoint[0];
              // eslint-disable-next-line prefer-destructuring
              y = endPoint[1];
            } else {
              x = startPoint[0] + j * speed;
            }
          } else if (xDirection === '<-') {
            if (j * speed > xDistance) {
              // eslint-disable-next-line prefer-destructuring
              x = endPoint[0];
              // eslint-disable-next-line prefer-destructuring
              y = endPoint[1];
            } else {
              x = startPoint[0] - j * speed;
            }
          }
          // @ts-ignore
          addPoints.push([x, y]);
        }
      } else {
        // 有角度的
        // 距离

        const time = 5 * 30;
        const xDistance = Math.abs(startPoint[0] - endPoint[0]);
        speed = xDistance / time;
        // 段数
        let interval = Math.floor(xDistance / speed);
        if (xDistance % speed > 0) {
          interval += 1;
        }

        const { Equation } = algebra;
        //= ======================================
        const x1 = algebra.parse(`${startPoint[1]}=${startPoint[0]}k+b`);
        const answer1 = x1.solveFor('k');
        // console.log(`k = ${answer1.toString()}`);

        const x2 = algebra.parse(`${endPoint[1]}=${endPoint[0]}k+b`);
        const answer2 = x2.solveFor('k');
        // console.log(`k = ${answer2.toString()}`);
        //= ================================================

        // 解出b值
        let eq = new Equation(answer1, answer2);
        // console.log(`b表达式：${eq.toString()}`);
        const answerX = eq.solveFor('b');
        // console.log(`解出B的值为：${answerX.toString()}`);
        //= ================================================
        // 解出Y值（把x的值代入x1或x2）
        eq = x1.eval({
          b: answerX,
        });
        // console.log(`k表达式：${eq.toString()}`);
        const answerY = eq.solveFor('k');
        // console.log(`解出k的值为：${answerY.toString()}`);

        // eslint-disable-next-line no-eval
        const b = eval(answerX.toString());
        // eslint-disable-next-line no-eval
        const k = eval(answerY.toString());

        for (let j = 1; j <= interval; j++) {
          let x;
          let y;
          if (xDirection === '->') {
            if (j * speed > xDistance) {
              // eslint-disable-next-line prefer-destructuring
              x = endPoint[0];
              // eslint-disable-next-line prefer-destructuring
              y = endPoint[1];
            } else {
              x = startPoint[0] + j * speed;
              y = k * x + b;
            }
          } else if (xDirection === '<-') {
            if (j * speed > xDistance) {
              // eslint-disable-next-line prefer-destructuring
              x = endPoint[0];
              // eslint-disable-next-line prefer-destructuring
              y = endPoint[1];
            } else {
              x = startPoint[0] - j * speed;
              y = k * x + b;
            }
          }

          // @ts-ignore
          addPoints.push([x, y]);
        }
      }
      this.animationMap[addPoints.length - 1] = i - 1;
    }

    return addPoints;
  }

  // eslint-disable-next-line consistent-return
  run(lineData, pointsMapIndex) {
    if (!lineData || this.runing) return false;

    this.runing = true;
    this.pointsMapIndex = pointsMapIndex;
    const it = lineData.values();
    this.loopTask(it).then(() => {
      // 所有动画完成
      this.runing = false;
      console.log('finish');
    });
  }

  loopTask(it) {
    return new Promise((resolve, reject) => {
      const entry = it.next();
      if (entry.done) {
        resolve();
      } else {
        const lines = entry.value;
        const points = this.getPoints(lines);
        this.runTask(points)
          .then(() => {
            this.loopTask(it).then(() => {
              resolve();
            });
          })
          .catch((error) => {
            reject(error);
          });
      }
    });
  }

  runTask(points) {
    this.preActiveId = '';
    // eslint-disable-next-line no-unused-vars,consistent-return
    return new Promise((resolve) => {
      const self = this;

      if (!points.length) {
        resolve();
        return false;
      }

      let topIndex = 0;

      this.pref = null;
      this.lines = [];
      this.handler = null;

      // eslint-disable-next-line consistent-return
      function loop() {
        if (topIndex === points.length) {
          self.stopTask();
          if (self.preAnimations) {
            self.preAnimations.forEach((p) => {
              self.vectorSource.removeFeature(p);
            });
            self.preAnimations = [];
          }
          resolve();
          return false;
        }

        if (self.pref) {
          self.vectorSource.removeFeature(self.pref);
        }

        const point = points[topIndex];

        let rotation = 0;

        if (topIndex !== 0) {
          const line = Util.drawLine({
            points: [points[topIndex - 1], points[topIndex]],
            width: self.config.lineWidth,
            color: self.config.lineColor,
          });
          self.vectorSource.addFeature(line);
          self.lines.push(line);

          const prePoint = points[topIndex - 1];
          const dx = point[0] - prePoint[0];
          const dy = point[1] - prePoint[1];
          rotation = Math.atan2(dy, dx);
        }

        if (self.animationMap[topIndex] || self.animationMap[topIndex] === 0) {
          if (self.preActiveId) {
            const preFeature = self.vectorSource.getFeatureById(self.preActiveId);
            self.vectorSource.removeFeature(preFeature);
            self.preActiveId = '';
          }

          const pointConfig = self.pointsMapIndex[self.animationMap[topIndex]];
          if (pointConfig) {
            const id = `active_${pointConfig.id}`;
            const node = Util.drawImagePoint({
              ...pointConfig,
              id,
              src: self.config.pointImg,
              zIndex: pointConfig.zIndex + 10,
            });
            self.vectorSource.addFeature(node);
            self.preActiveId = id;
          }
        }

        // @ts-ignore
        const f = Util.drawImagePoint({
          id: v1(),
          pos: point,
          src: self.config.arrowImg,
          scale: 1,
          zIndex: 1000,
          rotation: -rotation,
        });
        self.vectorSource.addFeature(f);
        self.pref = f;
        // eslint-disable-next-line no-plusplus
        ++topIndex;
        self.handler = requestAnimationFrame(loop);
      }

      self.handler = requestAnimationFrame(loop);
    });
  }

  // eslint-disable-next-line consistent-return
  stopTask() {
    if (!this.runing) return false;

    if (this.handler) {
      cancelAnimationFrame(this.handler);
    }
    if (this.pref) {
      this.vectorSource.removeFeature(this.pref);
    }

    if (this.lines) {
      for (let i = 0; i < this.lines.length; i++) {
        this.vectorSource.removeFeature(this.lines[i]);
      }
    }

    if (this.preActiveId) {
      const preFeature = this.vectorSource.getFeatureById(this.preActiveId);
      this.vectorSource.removeFeature(preFeature);
      this.preActiveId = '';
    }
  }

  stop() {
    this.stopTask();
    this.runing = false;
  }
}

export default AnimationManager;
