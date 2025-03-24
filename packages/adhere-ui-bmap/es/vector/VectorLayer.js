import Util from '@baifendian/adhere-util';
import Emitter from '@baifendian/adhere-util-emitter';
import { VectorActions, VectorEventActions, } from './types';
/**
 * VectorLayer
 * @class VectorLayer
 * @classdesc 向量层，使用canvas进行绘制
 */
// @ts-ignore
class VectorLayer extends BMap.CanvasLayer {
    map;
    config;
    source;
    isLoad = false;
    emitter = new Emitter.Events();
    // @ts-ignore
    constructor(map, config) {
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
    getSource() {
        return this.source;
    }
    getZIndex() {
        return this.config.zIndex;
    }
    setSource(source) {
        this.source = source;
        this.source && this.source.setContext(this);
        this.update();
    }
    /**
     * drawSource
     */
    drawSource() {
        // 绘制source中的数据
        const { source } = this;
        const features = source.getFeatures();
        // 绘制的时候按照feature的zIndex从小到大进行排序
        features.sort((f1, f2) => {
            if (f1.getZIndex() > f2.getZIndex())
                return 1;
            else if (f1.getZIndex() < f2.getZIndex())
                return -1;
            else
                return 0;
        });
        // @ts-ignore
        const ctx = this.canvas.getContext('2d');
        if (!ctx)
            return;
        (features || []).forEach((feature) => {
            feature.draw(ctx);
        });
    }
    firstLoad() {
        this.initCanvasEvents();
    }
    update() {
        // console.log('update');
        // @ts-ignore
        const ctx = this.canvas.getContext('2d');
        if (!ctx) {
            return;
        }
        if (!this.isLoad) {
            this.firstLoad();
        }
        this.isLoad = true;
        // console.log('clear');
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        this.drawSource();
    }
    getMap() {
        return this.map;
    }
    getEmitter() {
        return this.emitter;
    }
    addEventListener(type, handler) {
        this.emitter.on(type, handler);
    }
    removeEventListener(type, handler) {
        this.emitter.remove(type, handler);
    }
    initCanvasEvents() {
        // @ts-ignore
        this.canvas.addEventListener('click', (e) => {
            const pixel = Util.clientToCtxPoint({
                event: e,
                // @ts-ignore
                rect: this.canvas.getBoundingClientRect(),
            });
            const features = this.source.getFeatures();
            const hitFeatures = features.filter((f) => f.isPointInFeature(pixel, f.getStyle()));
            if (hitFeatures.length) {
                this.emitter.trigger(VectorEventActions.FEATURE_CLICK, {
                    features: [...hitFeatures],
                    pixel,
                });
            }
            else {
                this.emitter.trigger(VectorEventActions.VECTOR_CLICK);
            }
        });
    }
    initEvents() {
        this.emitter.on(VectorActions.UPDATE, this.onUpdate);
    }
    onUpdate() {
        this.update();
    }
}
export default VectorLayer;
