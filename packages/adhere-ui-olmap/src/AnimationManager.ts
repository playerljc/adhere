import algebra from 'algebra.js';
import { fromLonLat } from 'ol/proj.js';
import { v1 } from 'uuid';

import Util from './Util';
import type { AnimationConfig } from './types';

/**
 * 位置点接口
 */
interface Location {
  id: string;
  zIndex: number;
  [key: string]: any;
}

/**
 * 动画管理器类
 * @class AnimationManager
 * @classdesc 地图轨迹播放动画管理器
 */
class AnimationManager {
  private running: boolean = false;
  private vectorSource: any;
  private animationMap: number[] = [];
  private preAnimations: any[] = [];
  private pointsMapIndex: Record<string, Location> = {};
  private preActiveId: string | undefined;
  private handler: number | null = null;
  private lines: any[] = [];
  private pref: any = null;
  private config: Required<AnimationConfig>;

  /**
   * 构造函数
   * @param vectorSource - 向量源
   * @param config - 动画配置
   */
  constructor(vectorSource: any, config: AnimationConfig) {
    this.vectorSource = vectorSource;
    this.config = {
      arrowImg: config.arrowImg || '',
      pointImg: config.pointImg || '',
      lineWidth: config.lineWidth || 8,
      lineColor: config.lineColor || '#FF5D00',
    };
  }

  /**
   * 检查动画是否正在运行
   * @returns 是否正在运行
   */
  isRun(): boolean {
    return this.running;
  }

  /**
   * 获取轨迹点数组
   * @param locations - 位置数组
   * @returns 轨迹点数组
   */
  getPoints(locations: number[][]): number[][] {
    console.log('locations', locations);

    let distance = 0;
    const addPoints: number[][] = [];
    this.animationMap = [];

    // 计算总距离
    for (let i = locations.length - 1; i >= 1; i--) {
      const startPoint = fromLonLat(locations[i]);
      const endPoint = fromLonLat(locations[i - 1]);

      const xDistance = Math.abs(startPoint[0] - endPoint[0]);
      distance += xDistance;
    }

    let speed = Math.floor(distance / (locations.length * 80));

    if (speed === 0) {
      speed = 0.01;
    }

    this.animationMap[0] = locations.length - 1;

    // 生成轨迹点
    for (let i = locations.length - 1; i >= 1; i--) {
      const startPoint = fromLonLat(locations[i]);
      const endPoint = fromLonLat(locations[i - 1]);

      const xDirection = startPoint[0] < endPoint[0] ? '->' : '<-';
      const yDirection = startPoint[1] < endPoint[1] ? '->' : '<-';

      // 同一个点没有轨迹
      if (startPoint[0] === endPoint[0] && startPoint[1] === endPoint[1]) continue;

      // 垂直的
      if (startPoint[0] === endPoint[0] && startPoint[1] !== endPoint[1]) {
        const xdistance = Math.abs(startPoint[1] - endPoint[1]);
        let interval = Math.floor(xdistance / speed);
        if (xdistance % speed > 0) {
          interval += 1;
        }

        for (let j = 1; j <= interval; j++) {
          let x = startPoint[0];
          let y: number;
          if (yDirection === '->') {
            if (j * speed > xdistance) {
              x = endPoint[0];
              y = endPoint[1];
            } else {
              y = startPoint[1] + j * speed;
            }
          } else {
            if (j * speed > xdistance) {
              x = endPoint[0];
              y = endPoint[1];
            } else {
              y = startPoint[1] - j * speed;
            }
          }
          addPoints.push([x, y]);
        }
      } else if (startPoint[0] !== endPoint[0] && startPoint[1] === endPoint[1]) {
        // 水平的
        const xDistance = Math.abs(startPoint[0] - endPoint[0]);
        let interval = Math.floor(xDistance / speed);
        if (xDistance % speed > 0) {
          interval += 1;
        }

        for (let j = 1; j <= interval; j++) {
          let x: number;
          let y = startPoint[1];
          if (xDirection === '->') {
            if (j * speed > xDistance) {
              x = endPoint[0];
              y = endPoint[1];
            } else {
              x = startPoint[0] + j * speed;
            }
          } else {
            if (j * speed > xDistance) {
              x = endPoint[0];
              y = endPoint[1];
            } else {
              x = startPoint[0] - j * speed;
            }
          }
          addPoints.push([x, y]);
        }
      } else {
        // 有角度的
        const time = 5 * 30;
        const xDistance = Math.abs(startPoint[0] - endPoint[0]);
        speed = xDistance / time;
        let interval = Math.floor(xDistance / speed);
        if (xDistance % speed > 0) {
          interval += 1;
        }

        const { Equation } = algebra;
        const x1 = algebra.parse(`${startPoint[1]}=${startPoint[0]}k+b`);
        const answer1 = x1.solveFor('k');

        const x2 = algebra.parse(`${endPoint[1]}=${endPoint[0]}k+b`);
        const answer2 = x2.solveFor('k');

        // 解出b值
        let eq = new Equation(answer1, answer2);
        const answerX = eq.solveFor('b');

        // 解出Y值（把x的值代入x1或x2）
        eq = x1.eval({
          b: answerX,
        });
        const answerY = eq.solveFor('k');

        const b = eval(answerX.toString());
        const k = eval(answerY.toString());

        for (let j = 1; j <= interval; j++) {
          let x: number;
          let y: number;
          if (xDirection === '->') {
            if (j * speed > xDistance) {
              x = endPoint[0];
              y = endPoint[1];
            } else {
              x = startPoint[0] + j * speed;
              y = k * x + b;
            }
          } else {
            if (j * speed > xDistance) {
              x = endPoint[0];
              y = endPoint[1];
            } else {
              x = startPoint[0] - j * speed;
              y = k * x + b;
            }
          }

          addPoints.push([x, y]);
        }
      }
      this.animationMap[addPoints.length - 1] = i - 1;
    }

    return addPoints;
  }

  /**
   * 运行动画
   * @param lineData - 线条数据
   * @param pointsMapIndex - 点映射索引
   * @returns 是否成功启动
   */
  run(lineData: any, pointsMapIndex: Record<string, Location>): boolean {
    if (!lineData || this.running) return false;

    this.running = true;
    this.pointsMapIndex = pointsMapIndex;
    const it = lineData.values();
    this.loopTask(it).then(() => {
      // 所有动画完成
      this.running = false;
      console.log('finish');
    });

    return true;
  }

  /**
   * 循环任务
   * @param it - 迭代器
   * @returns Promise
   */
  private loopTask(it: Iterator<any>): Promise<void> {
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

  /**
   * 运行任务
   * @param points - 点数组
   * @returns Promise
   */
  private runTask(points: number[][]): Promise<void> {
    this.preActiveId = '';
    return new Promise((resolve) => {
      const self = this;

      if (!points.length) {
        resolve();
        return;
      }

      let topIndex = 0;

      this.pref = null;
      this.lines = [];
      this.handler = null;

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
          return;
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
               pos: point,
               src: self.config.pointImg,
               zIndex: pointConfig.zIndex + 10,
             });
             self.vectorSource.addFeature(node);
             self.preActiveId = id;
           }
         }

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
        ++topIndex;
        self.handler = requestAnimationFrame(loop);
      }

      self.handler = requestAnimationFrame(loop);
    });
  }

  /**
   * 停止任务
   * @returns 是否成功停止
   */
  stopTask(): boolean {
    if (!this.running) return false;

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

    return true;
  }

  /**
   * 停止动画
   */
  stop(): void {
    this.stopTask();
    this.running = false;
  }
}

export default AnimationManager; 