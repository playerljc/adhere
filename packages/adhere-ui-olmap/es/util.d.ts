import Feature from 'ol/Feature.js';
import Map from 'ol/Map';
import Overlay from 'ol/Overlay.js';
import Polygon from 'ol/geom/Polygon';
import Draw from 'ol/interaction/Draw.js';
import Modify from 'ol/interaction/Modify';
import { Heatmap as HeatMapLayer, Vector as VectorLayer } from 'ol/layer.js';
import { Vector as VectorSource } from 'ol/source.js';
import GeoLayer from './GeoLayer';
import WindLayer from './WindLayer';
import type { AddArrowsSourceParams, BoxInteractionParams, CircleInteractionParams, CreateInteractionParams, CreateModifyInteractionParams, DrawCircleParams, DrawCirclePointParams, DrawImagePointParams, DrawLineParams, DrawPolygonParams, DrawRegularShapePointParams, LinStringInteractionParams, PolygonInteractionParams, SetMapCenterAnimateParams } from './types';
/**
 * 获取最小缩放级别
 * 根据地图容器宽度计算合适的最小缩放级别
 *
 * @param target - 地图容器 HTMLElement
 * @returns 计算得到的最小缩放级别
 * @example
 * ```ts
 * const minZoom = getMinZoom(document.getElementById('map'));
 * ```
 */
declare function getMinZoom(target: HTMLElement): number;
/**
 * 坐标转换：EPSG:3857 转换为 EPSG:4326（墨卡托投影转经纬度）
 *
 * @param point - 待转换的坐标点 [x, y]
 * @returns 转换后的经纬度坐标 [lon, lat]
 * @example
 * ```ts
 * const lonLat = transformLonLat([12345678, 3456789]);
 * ```
 */
declare function transformLonLat(point: number[]): number[];
/**
 * 创建地图配置接口
 */
export interface CreateMapConfig {
    /** 地图配置对象，必须包含 target 属性 */
    config: Record<string, any> & {
        target: HTMLElement;
    };
    /** 自适应缩放级别 */
    fitZoom?: number;
    /** 初始缩放级别 */
    zoom?: number;
    /** 最小缩放级别 */
    minZoom?: number;
    /** 最大缩放级别 */
    maxZoom?: number;
    /** 地图中心点坐标 [lon, lat] */
    center?: number[];
    /** 地图范围 [[minLon, minLat], [maxLon, maxLat]] */
    extent?: number[][];
    /** 图层数组 */
    layers?: any[];
}
/**
 * 创建 OpenLayers 地图实例
 * 使用提供的配置创建一个完整的地图对象，包含控件、视图和图层
 *
 * @param Config - 地图配置对象
 * @returns 创建的 Map 实例
 * @example
 * ```ts
 * const map = createMap({
 *   config: { target: document.getElementById('map') },
 *   zoom: 10,
 *   center: [116.4, 39.9]
 * });
 * ```
 */
declare function createMap(Config: CreateMapConfig): Map;
declare const _default: {
    /** 显示基站的最小缩放级别 */
    SHOW_BASE_STATION_MIN_ZOOM: number;
    getMinZoom: typeof getMinZoom;
    transformLonLat: typeof transformLonLat;
    createMap: typeof createMap;
    /**
     * 设置覆盖物的位置状态
     *
     * @param overlay - 覆盖物实例
     * @param point - 位置坐标 [x, y]
     */
    setOverlayState: (overlay: Overlay, point: number[]) => void;
    /**
     * 添加点击监听器
     * 监听地图点击事件，判断是否点击了指定图层上的要素
     *
     * @param mapInstance - 地图实例
     * @param listeningLayer - 需要监听的矢量图层
     * @param hitCallback - 点击到要素时的回调函数
     * @param unHitCallback - 未点击到要素时的回调函数
     * @param setCursor - 设置鼠标样式的函数
     */
    addClickListener: (mapInstance: Map, listeningLayer: VectorLayer<any>, hitCallback: ((feature: Feature | any) => void) | undefined, unHitCallback: ((feature: Feature | any) => void) | undefined, clickUnFeature: () => void, setCursor: (cursor: string) => void) => void;
    /**
     * 添加悬停监听器
     * 监听鼠标悬停事件，判断鼠标是否悬停在指定图层的要素上
     *
     * @param mapInstance - 地图实例
     * @param listeningLayer - 需要监听的矢量图层
     * @param hitCallback - 悬停到要素时的回调函数
     * @param unHitCallback - 未悬停到要素时的回调函数
     */
    addHoverListener: (mapInstance: Map, listeningLayer: VectorLayer<any>, hitCallback: (feature: Feature | any) => void, unHitCallback: (feature: Feature | any) => void) => void;
    /**
     * 添加 GeoJSON 图层
     * 将 GeoJSON 数据添加到地图上，可自定义样式配置
     *
     * @param mapInstance - 地图实例
     * @param geoJsonData - GeoJSON 格式的数据
     * @param getStyleConfig - 获取样式配置的函数
     * @param zIndex - 图层层级，默认为 0
     * @returns 创建的 GeoLayer 实例
     */
    addGeoLayer: (mapInstance: Map, geoJsonData: any, getStyleConfig?: any, zIndex?: number) => GeoLayer;
    /**
     * 添加风场图层
     * 将风场数据可视化添加到地图上
     *
     * @param mapInstance - 地图实例
     * @param data - 风场数据
     * @param config - 风场配置
     * @param zIndex - 图层层级，默认为 0
     * @returns 创建的 WindLayer 实例
     */
    addWindLayer: (mapInstance: Map, data: any, config: any, zIndex?: number) => WindLayer;
    /**
     * 添加矢量图层
     * 创建一个新的矢量图层和矢量数据源，并添加到地图中
     *
     * @param map - 地图实例
     * @param zIndex - 图层层级
     * @returns 包含矢量图层和矢量数据源的对象
     */
    addVectorLayer(map: Map, zIndex: number): {
        vectorLayer: VectorLayer<any>;
        vectorSource: VectorSource;
    };
    /**
     * 创建热力图层
     * 创建热力图图层用于展示密度分布数据
     *
     * @param layoutConfig - 热力图配置对象
     * @returns 包含热力图图层和矢量数据源的对象
     */
    createHeatMapLayer(layoutConfig: any): {
        layer: HeatMapLayer;
        vectorSource: VectorSource;
    };
    /**
     * 创建一个圆形要素
     * 在地图上绘制一个圆形要素，可自定义颜色、边框等样式
     *
     * @param params - 绘制圆形参数对象
     * @param params.center - 圆心坐标
     * @param params.radius - 半径（单位：米）
     * @param params.color - 填充颜色，默认为半透明蓝色
     * @param params.strokeColor - 边框颜色，默认为 #1788F3
     * @param params.strokeWidth - 边框宽度，默认为 2
     * @param params.zIndex - 层级，默认为 1
     * @param params.id - 要素 ID，默认自动生成
     * @param params.properties - 附加属性对象
     * @returns 创建的圆形 Feature
     */
    drawCircle({ center, radius, color, strokeColor, strokeWidth, zIndex, id, properties, }: DrawCircleParams): Feature;
    /**
     * 创建一个多边形要素
     * 在地图上绘制一个多边形要素，可自定义颜色、边框等样式
     *
     * @param params - 绘制多边形参数对象
     * @param params.points - 多边形顶点坐标数组
     * @param params.color - 填充颜色，默认为半透明蓝色
     * @param params.strokeColor - 边框颜色，默认为 #1788F3
     * @param params.strokeWidth - 边框宽度，默认为 2
     * @param params.zIndex - 层级，默认为 1
     * @param params.id - 要素 ID，默认自动生成
     * @param params.properties - 附加属性对象
     * @returns 创建的多边形 Feature
     */
    drawPolygon({ points, color, strokeColor, strokeWidth, zIndex, id, properties, }: DrawPolygonParams): Feature;
    /**
     * 创建一条线要素
     * 在地图上绘制一条线要素，可自定义线宽、颜色、线帽、线段连接等样式
     *
     * @param params - 绘制线参数对象
     * @param params.points - 线段顶点坐标数组
     * @param params.width - 线宽
     * @param params.color - 线颜色
     * @param params.lineCap - 线帽样式，默认为 'round'
     * @param params.lineJoin - 线段连接样式，默认为 'round'
     * @param params.lineDash - 虚线样式数组
     * @returns 创建的线 Feature
     */
    drawLine({ points, width, color, lineCap, lineJoin, lineDash, }: DrawLineParams): Feature;
    /**
     * 创建一个圆形点要素
     * 在地图上绘制一个圆形点标记，可包含文字标签
     *
     * @param params - 绘制圆形点参数对象
     * @param params.id - 要素 ID
     * @param params.pos - 点位坐标
     * @param params.fillOpt - 填充样式，默认为半透明蓝色
     * @param params.strokeOpt - 边框样式，默认宽度 2，颜色 #1788F3
     * @param params.radius - 圆形半径（像素），默认为 10
     * @param params.textOpt - 文字样式配置
     * @param params.zIndex - 层级，默认为 1
     * @param params.text - 显示的文字内容，默认为空
     * @param params.properties - 附加属性对象
     * @returns 创建的圆形点 Feature
     */
    drawCirclePoint({ id, pos, fillOpt, strokeOpt, radius, textOpt, zIndex, text, properties, }: DrawCirclePointParams): Feature;
    /**
     * 创建一个规则形状点要素
     * 在地图上绘制一个规则多边形点标记（如三角形、五角星等），可包含文字标签
     *
     * @param params - 绘制规则形状点参数对象
     * @param params.id - 要素 ID
     * @param params.pos - 点位坐标
     * @param params.points - 形状的顶点数
     * @param params.fillOpt - 填充样式，默认为半透明蓝色
     * @param params.strokeOpt - 边框样式，默认宽度 2，颜色 #1788F3
     * @param params.text - 显示的文字内容，默认为空
     * @param params.textOpt - 文字样式配置
     * @param params.zIndex - 层级，默认为 1
     * @param params.properties - 附加属性对象
     * @param params.rest - 其他 RegularShape 支持的配置项
     * @returns 创建的规则形状点 Feature
     */
    drawRegularShapePoint({ id, pos, points, fillOpt, strokeOpt, text, textOpt, zIndex, properties, ...rest }: DrawRegularShapePointParams): Feature;
    /**
     * 创建一个图片点要素
     * 在地图上绘制一个图片点标记，可设置图片的缩放、旋转等属性，可包含文字标签
     *
     * @param params - 绘制图片点参数对象
     * @param params.id - 要素 ID
     * @param params.pos - 点位坐标
     * @param params.zIndex - 层级，默认为 1
     * @param params.src - 图片 URL
     * @param params.color - 图片着色
     * @param params.opacity - 透明度
     * @param params.scale - 缩放比例
     * @param params.anchor - 锚点位置
     * @param params.rotation - 旋转角度（弧度），默认为 0
     * @param params.offset - 偏移量 [x, y]，默认为 [0, 0]
     * @param params.offsetOrigin - 偏移原点
     * @param params.size - 图片尺寸
     * @param params.text - 显示的文字内容，默认为空
     * @param params.textOpt - 文字样式配置
     * @param params.properties - 附加属性对象
     * @returns 创建的图片点 Feature
     */
    drawImagePoint({ id, pos, zIndex, src, color, opacity, scale, anchor, rotation, offset, offsetOrigin, size, text, textOpt, properties, }: DrawImagePointParams): Feature;
    /**
     * 创建扇形多边形
     * 根据圆心、半径、边数、角度等参数创建扇形多边形几何体
     *
     * @param origin - 圆心坐标
     * @param radius - 半径
     * @param sides - 边数（用于近似圆弧）
     * @param r - 扇形角度范围（度）
     * @param angel - 扇形起始角度（度）
     * @returns 创建的扇形多边形几何体
     */
    createRegularPolygonCurve(origin: number[], radius: number, sides: number, r: number, angel: number): Polygon;
    /**
     * 移动地图到指定位置（动画）
     * 使用动画效果将地图视图中心移动到指定坐标
     *
     * @param params - 动画参数对象
     * @param params.map - 地图实例
     * @param params.point - 目标中心点坐标
     * @param params.duration - 动画持续时间（毫秒），默认为 600
     */
    setMapCenterAnimate({ map, point, duration, ...rest }: SetMapCenterAnimateParams): void;
    /**
     * 创建绘制交互
     * 创建一个绘制交互对象，用于在地图上绘制几何图形
     *
     * @param params - 交互参数对象
     * @param params.map - 地图实例
     * @param params.config - 绘制配置，包含绘制类型、数据源等
     * @returns 创建的 Draw 交互对象
     */
    createInteraction({ map, config }: CreateInteractionParams): Draw;
    /**
     * 多边形绘制交互
     * 创建一个用于绘制多边形的交互工具，支持手绘和点击绘制
     *
     * @param params - 多边形交互参数对象
     * @param params.map - 地图实例
     * @param params.freehand - 是否启用手绘模式，默认为 true
     * @param params.vectorSource - 矢量数据源，绘制的要素将添加到此数据源
     * @param params.onDrawEnd - 绘制结束回调函数
     * @param params.rest - 其他配置参数
     * @returns 创建的 Draw 交互对象
     */
    polygonInteraction({ map, freehand, vectorSource, onDrawEnd, ...rest }: PolygonInteractionParams): Draw;
    /**
     * 圆形绘制交互
     * 创建一个用于绘制圆形的交互工具
     *
     * @param params - 圆形交互参数对象
     * @param params.map - 地图实例
     * @param params.vectorSource - 矢量数据源，绘制的要素将添加到此数据源
     * @param params.onDrawEnd - 绘制结束回调函数，包含圆心、半径等信息
     * @param params.rest - 其他配置参数
     * @returns 创建的 Draw 交互对象
     */
    circleInteraction({ map, vectorSource, onDrawEnd, ...rest }: CircleInteractionParams): Draw;
    /**
     * 矩形框绘制交互
     * 创建一个用于绘制矩形框的交互工具
     *
     * @param params - 矩形框交互参数对象
     * @param params.map - 地图实例
     * @param params.vectorSource - 矢量数据源，绘制的要素将添加到此数据源
     * @param params.onDrawEnd - 绘制结束回调函数，包含矩形框的坐标等信息
     * @param params.rest - 其他配置参数
     * @returns 创建的 Draw 交互对象
     */
    boxInteraction({ map, vectorSource, onDrawEnd, ...rest }: BoxInteractionParams): Draw;
    /**
     * 线段绘制交互
     * 创建一个用于绘制线段的交互工具，支持手绘和点击绘制
     *
     * @param params - 线段交互参数对象
     * @param params.map - 地图实例
     * @param params.freehand - 是否启用手绘模式，默认为 true
     * @param params.vectorSource - 矢量数据源，绘制的要素将添加到此数据源
     * @param params.onDrawEnd - 绘制结束回调函数，包含线段坐标、里程等信息
     * @param params.rest - 其他配置参数
     * @returns 创建的 Draw 交互对象
     */
    linStringInteraction({ map, freehand, vectorSource, onDrawEnd, ...rest }: LinStringInteractionParams): Draw;
    /**
     * 创建修改交互
     * 创建一个用于修改已绘制要素的交互工具
     *
     * @param params - 修改交互参数对象
     * @param params.map - 地图实例
     * @param params.vectorSource - 矢量数据源
     * @param params.onModifyEnd - 修改结束回调函数
     * @returns 创建的 Modify 交互对象
     */
    createModifyInteraction({ map, vectorSource, onModifyEnd, }: CreateModifyInteractionParams): Modify;
    /**
     * 删除单个要素
     * 从矢量数据源中删除指定的要素
     *
     * @param vectorSource - 矢量数据源
     * @param feature - 要删除的要素
     */
    removeFeature(vectorSource: VectorSource, feature: Feature): void;
    /**
     * 删除所有要素
     * 清空矢量数据源中的所有要素
     *
     * @param vectorSource - 矢量数据源
     */
    removeAllFeature(vectorSource: VectorSource): void;
    /**
     * removeFeaturesByType
     * @description 删除指定类型的feature
     * @param {VectorSource} vectorSource
     * @param {string} type
     */
    removeFeaturesByType(vectorSource: VectorSource, type: string): void;
    /**
     * 删除所有覆盖物
     * 清空地图上的所有覆盖物（Overlay）
     *
     * @param map - 地图实例
     */
    removeAllOverlay(map: Map): void;
    /**
     * 移除指定交互
     * 从地图中移除指定的交互对象
     *
     * @param map - 地图实例
     * @param interaction - 要移除的交互对象
     */
    removeInteraction(map: Map, interaction: any): void;
    /**
     * 移除所有交互
     * 清空地图上的所有交互对象
     *
     * @param map - 地图实例
     */
    removeInteractionAll(map: Map): void;
    /**
     * 地图视图自适应
     * 将地图视图调整到指定范围，支持动画和边距配置
     *
     * @param extent - 目标范围坐标数组 [minX, minY, maxX, maxY]
     * @param option - 自适应选项，如 padding、duration 等
     * @param map - 地图实例
     */
    mapFit(extent: number[] | undefined, option: any | undefined, map: Map): void;
    /**
     * 为一系列点创建箭头要素数组
     * 根据点序列的方向创建带方向的箭头标记，用于表示路径方向
     *
     * @param params - 箭头参数对象
     * @param params.points - 点坐标数组
     * @param params.color - 箭头颜色
     * @param params.icon - 箭头图标 URL
     * @param params.anchor - 锚点位置
     * @param params.offset - 偏移量
     * @returns 箭头要素数组
     */
    addArrowsSource({ points, color, icon, anchor, offset }: AddArrowsSourceParams): Feature[];
    /**
     * 为一系列点创建箭头覆盖物
     * 使用 DOM 元素在地图上创建箭头覆盖物，用于表示路径方向
     *
     * @param map - 地图实例
     * @param parentDom - 父 DOM 元素，用于承载箭头元素
     * @param color - 箭头颜色
     * @param points - 点坐标数组
     */
    addArrowsOverlay(map: Map, parentDom: HTMLElement, color: string, points: number[][]): void;
    /**
     * 添加覆盖物
     * 在地图上添加一个覆盖物（Overlay），用于在地图特定位置显示 DOM 元素
     *
     * @param map - 地图实例
     * @param config - 覆盖物配置
     * @param div - 覆盖物的 DOM 元素
     * @returns 创建的 Overlay 实例
     */
    addOverlay: (map: Map, config: any, div: HTMLDivElement | null) => Overlay;
    /**
     * 生成随机 RGB 颜色字符串
     * 返回格式为 "(r,g,b)" 的颜色字符串
     *
     * @returns RGB 颜色字符串，如 "(123,45,67)"
     */
    rgb(): string;
    /**
     * 生成随机十六进制颜色字符串
     * 返回格式为 "#rrggbb" 的颜色字符串
     *
     * @returns 十六进制颜色字符串，如 "#1a2b3c"
     */
    color16(): string;
    /**
     * 角度转弧度
     * 将角度值转换为弧度值
     *
     * @param d - 角度值
     * @returns 对应的弧度值
     */
    getRad(d: number): number;
    /**
     * 经度归一化
     * 将经度值归一化到 -180 到 180 度范围内
     *
     * @param value - 经度值
     * @returns 归一化后的经度值
     */
    wrapLon(value: number): number;
    /**
     * 获取地图当前视图的矩形范围
     * 返回地图可视区域的四个角点坐标（经纬度）
     *
     * @param map - 地图实例
     * @returns 矩形范围的五个点（首尾相连），或 false（如果地图无效）
     */
    getMapExtent(map: Map): Array<{
        lon: number;
        lat: number;
    }> | false;
    /**
     * 获取指定要素范围内的所有要素
     * 查找与指定要素范围相交的所有要素
     *
     * @param map - 地图实例
     * @param feature - 参考要素，用于确定查询范围
     * @returns 范围内的要素数组
     */
    getFeaturesInExtent(map: Map, feature: Feature): any[];
    /**
     * 获取地图的图层数量
     * 返回地图中当前包含的图层总数
     *
     * @param map - 地图实例
     * @returns 图层数量
     */
    getLayersCount(map: Map): number;
    /**
     * 根据索引获取线条颜色
     * 从预定义的颜色调色板中获取颜色，超出范围则生成随机颜色
     *
     * @param index - 颜色索引（0-9 有预定义颜色）
     * @returns 颜色字符串
     */
    getLineColor(index: number): string;
    /**
     * 下载地图为图片
     * 将当前地图视图导出为图片并触发下载
     *
     * @param map - 地图实例
     */
    downLoadMap(map: Map): void;
    /**
     * 根据经纬度和半径获取投影平面半径
     * 将地理半径（米）转换为墨卡托投影平面上的半径（像素）
     *
     * @param center - 圆心经纬度坐标 [lon, lat]
     * @param radius - 地理半径（单位：米）
     * @returns 投影平面半径（像素）
     */
    getRadius(center: number[], radius: number): number;
    /**
     * 获取坐标数组的最小外接矩形范围
     * 根据一组坐标计算包含所有点的最小矩形范围
     *
     * @param coordinates - 坐标数组 [[x1, y1], [x2, y2], ...]
     * @returns 范围数组 [minX, minY, maxX, maxY]，空数组表示无坐标
     */
    getExtentByCoordinates(coordinates: number[][]): number[];
    /**
     * 获取矢量数据源中指定类型要素的最小外接矩形范围
     * 提取矢量源中所有指定类型要素的坐标，并计算其范围
     *
     * @param vectorSource - 矢量数据源
     * @param type - 要素类型，默认为 'Point'
     * @returns 范围数组 [minX, minY, maxX, maxY]
     */
    getExtentByVectorSource(vectorSource: VectorSource, type?: string): number[];
    /**
     * 获取矢量数据源中指定类型要素的所有坐标
     * 提取矢量源中所有指定类型要素的坐标点
     *
     * @param vectorSource - 矢量数据源
     * @param type - 要素类型，默认为 'Point'，支持 'Point'、'Circle'、'LineString'、'Polygon' 等
     * @returns 坐标数组 [[x1, y1], [x2, y2], ...]
     */
    getVectorSourceCoordinates(vectorSource: VectorSource, type?: string): number[][];
    /**
     * 获取矢量数据源中指定类型要素的几何中心点
     * 计算所有指定类型要素的几何中心（经纬度）
     *
     * @param vectorSource - 矢量数据源
     * @param type - 要素类型，默认为 'Point'
     * @returns 中心点对象 { centerLon, centerLat }
     */
    getCenterByCoordinates(vectorSource: VectorSource, type?: string): {
        centerLon: number;
        centerLat: number;
    };
    /**
     * 计算一组点的几何中心点
     * 根据一组投影坐标计算其经纬度中心点
     *
     * @param points - 投影坐标数组 [[x1, y1], [x2, y2], ...]
     * @returns 中心点对象 { centerLon, centerLat }（经纬度）
     */
    getCenterByPoints(points: number[][]): {
        centerLon: number;
        centerLat: number;
    };
    /**
     * 获取一组经纬度点的矩形范围
     * 计算包含所有点的最小矩形范围的左上角和右下角坐标（投影坐标）
     *
     * @param points - 经纬度坐标数组 [[lon1, lat1], [lon2, lat2], ...]
     * @returns 矩形范围对象 { leftTop: [x, y], rightBottom: [x, y] }（投影坐标）
     */
    getPointsExtent(points: number[][]): {
        leftTop: number[];
        rightBottom: number[];
    };
    /**
     * 计算两个经纬度点之间的地理距离
     * 使用椭球体模型计算两点之间的实际距离（考虑地球椭球体）
     *
     * @param lat1 - 起点纬度
     * @param lng1 - 起点经度
     * @param lat2 - 终点纬度
     * @param lng2 - 终点经度
     * @returns 两点之间的距离（单位：米）
     */
    getFlattenDistance(lat1: number, lng1: number, lat2: number, lng2: number): number;
};
export default _default;
