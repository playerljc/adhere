import { Util } from '@baifendian/adhere';

const radius = 6;

/**
 * VectoryLayer
 * @param map
 * @constructor
 */
class VectoryLayer extends BMap.CanvasLayer {
  constructor(map, data) {
    super({
      update: () => {
        this.update();
      },
      paneName: 'floatShadow',
      zIndex: 9999,
    });

    this.map = map;
    this.isLoad = false;
    this.isStart = false;
    this.isMove = false;
    this.data = data;
  }

  /**
   * drawSite
   * @description - 绘制站点
   * @param point
   */
  drawSite(point) {
    const ctx = this.canvas.getContext('2d');

    if (!ctx) {
      return;
    }

    ctx.beginPath();

    const color = Util.color16();

    ctx.lineWidth = 1;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;

    const pixel = this.map.pointToPixel(point);

    ctx.ellipse(pixel.x, pixel.y, radius, radius, (45 * Math.PI) / 180, 0, 2 * Math.PI);

    ctx.stroke();
    ctx.fill();
  }

  /**
   * openInfoWindow
   */
  openInfoWindow(point) {
    const content = `<div>info</div>`;

    const infoWindow = new BMap.InfoWindow(content, {
      enableAutoPan: false,
      enableCloseOnClick: false,
    });

    this.map.openInfoWindow(infoWindow, point);
  }

  /**
   * findPixelToItems
   */
  findPixelToItems(curPixel) {
    const findIndexes = [];

    for (let i = 0; i < this.data.length; i++) {
      const point = this.data[i];

      const itemPixel = this.map.pointToPixel(point);

      const _x = curPixel.x - itemPixel.x;
      const _y = curPixel.y - itemPixel.y;
      if (!(_x * _x + _y * _y > radius * 2.5 * (radius * 2.5))) {
        findIndexes.push(i);
      }
    }

    return findIndexes.map((index) => this.data[index]);
  }

  /**
   * initEvents
   */
  initEvents() {
    this.canvas.addEventListener('touchstart', () => {
      this.isStart = true;
      this.startTime = new Date().getTime();
    });

    this.canvas.addEventListener('touchmove', () => {
      this.isMove = true;
    });

    this.canvas.addEventListener('touchend', (e) => {
      this.endTime = new Date().getTime();

      const step = this.endTime - this.startTime;

      if (
        (this.isStart && !this.isMove) ||
        (this.isStart && this.isMove && step <= 200) /*事件少于200ms*/
      ) {
        const x = e.changedTouches[0].clientX;
        const y = e.changedTouches[0].clientY;

        const curPixel = { x, y };

        const items = this.findPixelToItems(curPixel);

        if (items && items.length) {
          const item = items[items.length - 1];
          this.openInfoWindow(item);
          this.map.panTo(item);
        } else {
          this.map.closeInfoWindow();
        }
      } else {
        this.map.closeInfoWindow();
      }

      this.isStart = this.isMove = false;
      this.endTime = this.startTime = null;
    });
  }

  /**
   * update
   * @description - 绘制的回调函数h
   */
  update() {
    const ctx = this.canvas.getContext('2d');

    if (!ctx) {
      return;
    }

    if (!this.isLoad) {
      this.initEvents();
    }

    this.isLoad = true;

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    this.data.forEach((point) => {
      this.drawSite(point);
    });
  }
}

export default VectoryLayer;
