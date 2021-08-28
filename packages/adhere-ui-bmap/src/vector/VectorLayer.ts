// @ts-ignore
import Emitter from '@baifendian/adhere-util-emitter/lib/events';

import { IVectorLayer, IVectorLayerConfig, IVectorSource, VectorActions } from './types';

/**
 * VectorLayer
 * @class VectorLayer
 * @classdesc 向量层，使用canvas进行绘制
 */
// @ts-ignore
class VectorLayer extends BMap.CanvasLayer implements IVectorLayer {
  map: any;
  config: IVectorLayerConfig;
  source: IVectorSource;
  isLoad: boolean = false;
  emitter: Emitter = new Emitter();

  // @ts-ignore
  constructor(map, config: IVectorLayerConfig) {
    // @ts-ignore
    this.update = this.update.bind(this);

    super({
      // @ts-ignore
      update: this.update,
      paneName: config.paneName,
      zIndex: config.zIndex,
    });

    this.map = map;
    this.config = { ...config };
    this.source = config.source;
    this.source && this.source.setContext(this);

    this.onUpdate = this.onUpdate.bind(this);

    this.initEvents();
  }

  getSource(): IVectorSource {
    return this.source;
  }

  getZIndex(): number {
    return this.config.zIndex;
  }

  setSource(source: IVectorSource): void {
    this.source = source;
    this.source && this.source.setContext(this);
    this.update();
  }

  update() {
    // @ts-ignore
    const ctx = this.canvas.getContext('2d');

    if (!ctx) {
      return;
    }

    if (!this.isLoad) {
      this.initCanvasEvents();
    }

    this.isLoad = true;

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // 绘制source中的数据
    const { source } = this;

    const features = source.getFeatures();

    // 绘制的时候按照feature的zIndex从小到大进行排序
    features.sort((f1, f2) => {
      if (f1.getZIndex() > f2.getZIndex()) return 1;
      else if (f1.getZIndex() < f2.getZIndex()) return -1;
      else return 0;
    });

    (features || []).forEach((feature) => {
      feature.draw(ctx);
    });
  }

  getMap() {
    return this.map;
  }

  getEmitter(): Emitter {
    return this.emitter;
  }

  protected initCanvasEvents() {}

  protected initEvents() {
    this.emitter.on(VectorActions.UPDATE, this.onUpdate);
  }

  protected onUpdate() {
    this.update();
  }
}

export default VectorLayer;
