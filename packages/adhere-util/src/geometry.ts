import { IPoint } from './types';

/**
 * 集合图形绘制
 */
export default {
  /**
   * 绘制星
   * @param config
   * @return IPoint []
   */
  getDrawStartPath(config: { startCount: number, center: IPoint; outRadius: number; innerRadius: number }): IPoint[] {
    const startCount = config.startCount;
    const spend = 360 / startCount;
    const min = 90 - spend;
    const max = spend - min;

    const { center, outRadius, innerRadius } = config;

    const path: IPoint[] = [];

    for (let i = 0; i < startCount; i++) {
      path.push({
        x: Math.cos(((min + i * spend) / 180) * Math.PI) * outRadius + center.x,
        y: -Math.sin(((min + i * spend) / 180) * Math.PI) * outRadius + center.y,
      });

      path.push({
        x: Math.cos(((max + i * spend) / 180) * Math.PI) * innerRadius + center.x,
        y: -Math.sin(((max + i * spend) / 180) * Math.PI) * innerRadius + center.y,
      });
    }

    return path;
  },
};
