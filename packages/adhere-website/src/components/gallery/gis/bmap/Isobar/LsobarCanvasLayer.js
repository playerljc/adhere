/**
 * LsobarCanvasLayer
 * @param map
 * @param data
 */
class LsobarCanvasLayer extends BMap.CanvasLayer {
  constructor(map, data) {
    super({
      update: () => {
        this.update();
      },
      paneName: 'floatShadow',
      zIndex: 9998,
    });

    this.map = map;
    this.data = data;
  }

  /**
   * update
   */
  update() {
    const ctx = this.canvas.getContext('2d');

    if (!ctx) {
      return;
    }

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    this.drawIsobar();

    this.drawIsobarLabels();
  }

  /**
   * drawIsobar
   * @description - 绘制等压线
   */
  drawIsobar() {
    const ctx = this.canvas.getContext('2d');

    if (!ctx) {
      return;
    }

    // 绘制等压线
    for (let i = 0; i < this.data.isoline.length; i++) {
      const { points } = this.data.isoline[i];

      const bPoints = [];

      // eslint-disable-next-line @typescript-eslint/no-loop-func
      points.forEach((p, index) => {
        if (index % 2 === 1) {
          bPoints.push(new BMap.Point(points[index - 1], p));
        }
      });

      // 绘制一组闭合的线开始
      ctx.beginPath();

      ctx.strokeStyle = '#CCCC99';
      ctx.lineJoin = 'round';
      ctx.lineWidth = 2;

      bPoints.forEach((bPoint, index) => {
        const pixel = this.map.pointToPixel(bPoint);

        if (index === 0) {
          ctx.moveTo(pixel.x, pixel.y);
        } else {
          ctx.lineTo(pixel.x, pixel.y);
        }
      });

      ctx.stroke();
      // 绘制一组闭合的线结束
    }
  }

  /**
   * drawIsobarLabels
   * @description - 绘制等压线的labels
   */
  drawIsobarLabels() {
    const ctx = this.canvas.getContext('2d');

    if (!ctx) {
      return;
    }

    for (let i = 0; i < this.data.labels.length; i++) {
      const label = this.data.labels[i];

      ctx.save();

      ctx.beginPath();

      ctx.strokeStyle = '#CCCC99';
      ctx.lineWidth = 0.5;
      ctx.font = '6px';

      const pixel = this.map.pointToPixel(new BMap.Point(label.x, label.y));

      ctx.translate(pixel.x, pixel.y); // 将画布的原点移动到正中央

      ctx.rotate((Math.PI / 180) * label.rotation); // 弧度 = (Math.PI/180)*角度

      ctx.strokeText(parseInt(label.v), 0, 0, 300);

      ctx.restore();
    }
  }
}

export default LsobarCanvasLayer;
