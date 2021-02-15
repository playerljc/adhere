import GeoLayer from './geolayer';
declare const _default: {
    SHOWBASESTATION_MINZOOM: number;
    /**
     * createMap - 创建地图
     * @param Config
     */
    createMap(Config: any): any;
    /**
     * setOverlayState - 给overlay赋予状态
     * @param overlay
     * @param point
     */
    setOverlayState: (overlay: any, point: any) => void;
    /**
     * addClickListener
     * 给地图实例添加 click 监听者
     * 此方法仅监听了单击
     * @param {Object} mapInstance map实例对象
     * @param {Object} listeningLayer 监听的layer
     * @param {Function=} hitCallback 可选 选中的回调
     * @param {Function=} unHitCallback 可选 未选中的回调
     * @param {Function} setCursor 设置鼠标滑过当前图层的鼠标样式
     */
    addClickListener: (mapInstance: any, listeningLayer: any, hitCallback: ((feature: any) => void) | undefined, unHitCallback: ((feature: any) => void) | undefined, setCursor: any) => void;
    /**
     * addHoverListener - 给地图实例上的指定layer添加hover监听者
     * @param {Object} mapInstance map实例对象
     * @param {Object} listeningLayer 监听的layer
     * @param {Function=} hitCallback 可选 选中的回调
     * @param {Function=} unHitCallback 可选 未选中的回调
     */
    addHoverListener: (mapInstance: any, listeningLayer: any, hitCallback: any, unHitCallback: any) => void;
    /**
     * addGeoLayer - 给地图实例添加一个geojson格式的 VectorLayer
     * @param {Object} mapInstance map实例对象
     * @param geojsonData
     * @param {Function=} getStyleConfig 获取该geoJSON的样式
     * @param {number=} zIndex 该 Layer 的层级 可选, 默认为0
     * @returns geoLayer 此次生成的layer
     */
    addGeoLayer: (mapInstance: any, geojsonData: any, getStyleConfig?: () => void, zIndex?: number) => GeoLayer;
    /**
     * addVectorLayer - 添加一个向量层
     * @param map
     * @param zIndex
     */
    addVectorLayer(map: any, zIndex: any): {
        vectorLayer: any;
        vectorSource: any;
    };
    /**
     * addHeatmapLayer - 添加一个热力层
     * @param map
     * @param layoutConfig
     */
    addHeatmapLayer(map: any, layoutConfig: any): any;
    /**
     * drawCircle - 创建一个圆形
     * @param center
     * @param radius
     * @param color
     * @param strokeColor
     * @param strokeWidth
     * @param zIndex
     * @param id
     * @param propertys
     */
    drawCircle({ center, radius, color, strokeColor, strokeWidth, zIndex, id, propertys, }: {
        center: any;
        radius: any;
        color?: string | undefined;
        strokeColor?: string | undefined;
        strokeWidth?: number | undefined;
        zIndex?: any;
        id?: string | undefined;
        propertys?: {} | undefined;
    }): any;
    /**
     * drawPolygon - 创建一个多边形
     * @param points
     * @param color
     * @param strokeColor
     * @param strokeWidth
     * @param zIndex
     * @param id
     * @param propertys
     */
    drawPolygon({ points, color, strokeColor, strokeWidth, zIndex, id, propertys, }: {
        points: any;
        color?: string | undefined;
        strokeColor?: string | undefined;
        strokeWidth?: number | undefined;
        zIndex?: any;
        id?: string | undefined;
        propertys?: {} | undefined;
    }): any;
    /**
     * drawCirclePoint - 创建一个圆的点
     * @param id
     * @param pos
     * @param fillOpt
     * @param strokeOpt
     * @param radius
     * @param textOpt
     * @param zIndex
     * @param text
     * @param propertys
     */
    drawCirclePoint({ id, pos, fillOpt, strokeOpt, radius, textOpt, zIndex, text, propertys, }: {
        id: any;
        pos: any;
        fillOpt?: {
            color: string;
        } | undefined;
        strokeOpt?: {
            width: number;
            color: string;
        } | undefined;
        radius?: number | undefined;
        textOpt?: {} | undefined;
        zIndex?: number | undefined;
        text?: string | undefined;
        propertys?: {} | undefined;
    }): any;
    /**
     * drawRegularShapePoint - 创建一个多边形的点
     * @param id
     * @param pos
     * @param fillOpt
     * @param strokeOpt
     * @param text
     * @param textOpt
     * @param zIndex
     * @param propertys
     * @param others
     */
    drawRegularShapePoint({ id, pos, fillOpt, strokeOpt, text, textOpt, zIndex, propertys, ...others }: {
        [x: string]: any;
        id: any;
        pos: any;
        fillOpt?: {
            color: string;
        } | undefined;
        strokeOpt?: {
            width: number;
            color: string;
        } | undefined;
        text?: string | undefined;
        textOpt?: {} | undefined;
        zIndex?: number | undefined;
        propertys?: {} | undefined;
    }): any;
    /**
     * drawImagePoint - 创建一个图片的点
     * @param id
     * @param pos
     * @param zIndex
     * @param color
     * @param src
     * @param opacity
     * @param scale
     * @param anchor
     * @param rotation
     * @param offset
     * @param offsetOrigin
     * @param size
     * @param text
     * @param textOpt
     * @param propertys
     */
    drawImagePoint({ id, pos, zIndex, src, color, opacity, scale, anchor, rotation, offset, offsetOrigin, size, text, textOpt, propertys, }: {
        id: any;
        pos: any;
        zIndex?: number | undefined;
        src: any;
        color: any;
        opacity: any;
        scale: any;
        anchor: any;
        rotation?: number | undefined;
        offset?: number[] | undefined;
        offsetOrigin: any;
        size: any;
        text?: string | undefined;
        textOpt?: {} | undefined;
        propertys?: {} | undefined;
    }): any;
    /**
     * createRegularPolygonCurve - 扇形
     * @param origin 圆心
     * @param radius 半径
     * @param sides 边数
     * @param r 弧度
     * @param angel 方向角(以y周围0)(可以自定义自己的x周一样)
     * @return {Polygon}
     */
    createRegularPolygonCurve(origin: any, radius: any, sides: any, r: any, angel: any): any;
    /**
     * removeFeature - 删除一个feature
     * @param vectorSource
     * @param feature
     */
    removeFeature(vectorSource: any, feature: any): void;
    /**
     * removeAllFeature - 删除所有feature
     * @param vectorSource
     */
    removeAllFeature(vectorSource: any): void;
    /**
     * removeAllOverlay - 删除所有覆盖物
     * @param map
     */
    removeAllOverlay(map: any): void;
    /**
     * setMapCenterAnimate - 移动地图到指定位置(动画)
     * @param map
     * @param point
     * @param duration
     */
    setMapCenterAnimate({ map, point, duration }: {
        map: any;
        point: any;
        duration?: number | undefined;
    }): void;
    /**
     * drawLine - 创建线
     * @param points
     * @param width
     * @param color
     * @param lineCap
     * @param lineJoin
     */
    drawLine({ points, width, color, lineCap, lineJoin }: {
        points: any;
        width: any;
        color: any;
        lineCap?: string | undefined;
        lineJoin?: string | undefined;
    }): any;
    /**
     * createInteraction
     * @param map
     * @param config
     */
    createInteraction(map: any, config: any): any;
    /**
     * polygonInteraction - 框多边形
     * @param map
     * @param vectorSource
     * @param onDrawStart
     * @param onDrawEnd
     */
    polygonInteraction({ map, freehand, vectorSource, onDrawEnd, ...other }: {
        [x: string]: any;
        map: any;
        freehand?: boolean | undefined;
        vectorSource: any;
        onDrawEnd: any;
    }): any;
    /**
     * circleInteraction - 框圆形
     * @param map
     * @param vectorSource
     * @param onDrawStart
     * @param onDrawEnd
     */
    circleInteraction({ map, vectorSource, onDrawEnd, ...other }: {
        [x: string]: any;
        map: any;
        vectorSource: any;
        onDrawEnd: any;
    }): any;
    /**
     * boxInteraction - 框线框
     * @param map
     * @param vectorSource
     * @param onDrawEnd
     * @param other
     */
    boxInteraction({ map, vectorSource, onDrawEnd, ...other }: {
        [x: string]: any;
        map: any;
        vectorSource: any;
        onDrawEnd: any;
    }): any;
    /**
     * linStringInteraction - 线路
     * @param map
     * @param vectorSource
     * @param onDrawStart
     * @param onDrawEnd
     */
    linStringInteraction({ map, freehand, vectorSource, onDrawEnd, ...other }: {
        [x: string]: any;
        map: any;
        freehand?: boolean | undefined;
        vectorSource: any;
        onDrawEnd: any;
    }): any;
    /**
     * createModifyInteraction
     * @param map
     * @param vectorSource
     * @param onModifyEnd
     * @return {Modify|Modify}
     */
    createModifyInteraction({ map, vectorSource, onModifyEnd }: {
        map: any;
        vectorSource: any;
        onModifyEnd: any;
    }): any;
    /**
     * removeInteraction - 移除interaction
     * @param map
     * @param interaction
     */
    removeInteraction(map: any, interaction: any): void;
    /**
     * removeInteractionAll - 移除所有的Interaction
     * @param map
     */
    removeInteractionAll(map: any): void;
    /**
     * mapFit - 地图自适应
     * @param extent
     * @param option
     * @param map
     */
    mapFit(extent: never[] | undefined, option: {} | undefined, map: any): void;
    /**
     * addArrowsSource - 为一系列点创建箭头
     * @param points
     * @param color
     * @param icon
     * @return {Array}
     */
    addArrowsSource({ points, color, icon }: {
        points: any;
        color: any;
        icon: any;
    }): never[];
    /**
     * addArrowsOverlay
     * @param map
     * @param parentDom
     * @param color
     * @param points
     */
    addArrowsOverlay(map: any, parentDom: any, color: any, points: any): void;
    /**
     * addOverlay - 添加覆盖物
     * @param map
     * @param config
     * @param div
     */
    addOverlay: (map: any, config: any, div: HTMLDivElement | null) => any;
    /**
     * getRad
     * @param d
     */
    getRad(d: any): number;
    /**
     * getExtentByCoordinates - 获取coordinates中的矩形数据
     * @param coordinates
     * @return {*}
     */
    getExtentByCoordinates(coordinates: any): never[];
    /**
     * getExtentByVectorSource - 获取vectorSource中的矩形数据
     * @param vectorSource
     * @param type
     * @return {*}
     */
    getExtentByVectorSource(vectorSource: any, type?: string): never[];
    /**
     * getCectorSourceCoordinates - 获取向量层中的所有点
     * @param vectorSource
     * @param type
     */
    getCectorSourceCoordinates(vectorSource: any, type?: string): never[];
    /**
     * getCenterByCoordinates - 获取source中所有Point的中心点
     * @param vectorSource
     * @param type
     * @return {{centerLon: number, centerLat: number}}
     */
    getCenterByCoordinates(vectorSource: any, type?: string): {
        centerLon: number;
        centerLat: number;
    };
    /**
     * getCenterByPoints - 获取一系列点中的中心点
     * @param points
     * @return {{centerLon: number, centerLat: number}}
     */
    getCenterByPoints(points: any): {
        centerLon: number;
        centerLat: number;
    };
    /**
     * getPointsExtent - 获取一些列点的矩形范围(左上角[x,y]，右下角[x,y])
     * @param points
     * @return {{centerLon: number, centerLat: number}}
     */
    getPointsExtent(points: any): {
        leftTop: number[];
        rightBottom: number[];
    };
    /**
     * getFlatternDistance - 计算连个经纬度之间的距离(m)
     * approx distance between two points on earth ellipsoid
     * @param {Object} lat1
     * @param {Object} lng1
     * @param {Object} lat2
     * @param {Object} lng2
     */
    getFlatternDistance(lat1: any, lng1: any, lat2: any, lng2: any): number;
    /**
     * wrapLon
     * @param value
     */
    wrapLon(value: any): number;
    /**
     * getMapExtent - 获取地图的矩形范围
     * @param map
     */
    getMapExtent(map: any): false | {
        lon: number;
        lat: any;
    }[];
    /**
     * getFeaturesInExtent
     * @param map
     * @param feature
     */
    getFeaturesInExtent(map: any, feature: any): any;
    /**
     * getLayersCount - 获取地图的Layers数量
     * @param map
     * @return {number}
     */
    getLayersCount(map: any): any;
    rgb(): string;
    color16(): string;
    getLineColor(index: any): string;
    downLoadMap(map: any): void;
};
export default _default;
