import { BMapAirPressureLayerConfig } from './types';

/**
 * BMapAirPressureLayer
 * @class BMapAirPressureLayer
 * @classdesc 气压层(绘制多边形)
 */
/* @ts-ignore */
class BMapAirPressureLayer extends BMap.CanvasLayer {
  map: any = null;
  data: any = null;
  config: BMapAirPressureLayerConfig;

  /* @ts-ignore */
  private canvas: HTMLCanvasElement;

  // @ts-ignore
  constructor(config: BMapAirPressureLayerConfig) {
    // @ts-ignore
    this.update = this.update.bind(this);

    super({
      // @ts-ignore
      update: this.update,
      paneName: config.paneName,
      zIndex: config.zIndex,
    });

    this.config = config;
    const { map, data } = config;

    this.map = map;
    this.data = data;
  }

  /**
   * update
   */
  protected update() {
    if (!this.canvas) return;

    const ctx = (this?.canvas as HTMLCanvasElement).getContext('2d');

    if (!ctx) {
      return;
    }

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    const { data, style } = this.config;

    for (let i = 0; i < data.length; i++) {
      const points = data[i];

      const bPoints = [];

      points.forEach((p) => {
        /* @ts-ignore */
        bPoints.push(new BMap.Point(p.lng, p.lat));
      });

      ctx.beginPath();

      ctx.strokeStyle = style.strokeStyle;
      ctx.lineJoin = style.lineJoin;
      ctx.lineWidth = style.lineWidth;

      bPoints.forEach((bPoint, index) => {
        const pixel = this.map.pointToPixel(bPoint);

        if (index === 0) {
          ctx.moveTo(pixel.x, pixel.y);
        } else {
          ctx.lineTo(pixel.x, pixel.y);
        }
      });

      ctx.stroke();
    }
  }
}

export default BMapAirPressureLayer;
