import GeometryStyle from './style/GeometryStyle';
import { VectorActions, } from './types';
/**
 * Feature
 * @class Feature
 * @classdesc 要素
 */
class Feature {
    // 要素的名称
    name = '';
    // 要素的id
    id = '';
    // 要素的样式
    style = GeometryStyle;
    // 要素的层级
    zIndex = 1;
    // 要素的业务属性
    properties = {};
    // 要素的几何形状
    geometry;
    // 上下文
    // @ts-ignore
    context;
    constructor(params) {
        this.name = params?.name;
        this.id = params?.id;
        this.properties = params?.properties;
        this.style = params?.style;
        this.geometry = params?.geometry;
        this.setGeometryContext();
    }
    setGeometryContext() {
        this.geometry && this.geometry.setContext(this);
    }
    draw(ctx) {
        // 绘制geometry(几何形状)
        this.geometry.draw(ctx, this.style);
    }
    getGeometry() {
        return this.geometry;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getStyle() {
        return this.style;
    }
    getZIndex() {
        return this.zIndex;
    }
    getProperties() {
        return this.properties;
    }
    setGeometry(geom) {
        this.geometry = geom;
        this.setGeometryContext();
        this.getLayer()?.getEmitter()?.trigger(VectorActions.UPDATE);
    }
    setStyle(style) {
        this.style = style;
        this.getLayer()?.getEmitter()?.trigger(VectorActions.UPDATE);
    }
    setId(id) {
        this.id = id;
    }
    setName(name) {
        this.name = name;
    }
    setZIndex(zIndex) {
        this.zIndex = zIndex;
        this?.getLayer()?.getEmitter()?.trigger(VectorActions.UPDATE);
    }
    setProperties(properties) {
        this.properties = properties;
    }
    getContext() {
        return this.context;
    }
    setContext(context) {
        this.context = context;
    }
    getLayer() {
        // @ts-ignore
        return this?.getContext()?.getContext();
    }
    getMap() {
        return this?.getLayer()?.getMap();
    }
    isPointInFeature(pixel, style) {
        return this.geometry.isPixelInGeometry(pixel, style);
    }
}
export default Feature;
