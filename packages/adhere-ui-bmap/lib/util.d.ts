declare const _default: {
    /**
     * flyToChina - 设置地图的zoom为全中国
     * @param map
     */
    flyToChina(map: any): void;
    /**
     * fillCityBoundary - 根据city名字填充城市轮廓
     * @param cityName
     * @param style
     * @param map
     * @return
     */
    fillCityBoundary(cityName: any, style: {
        fillColor: 'rgba(0,0,0,.1)';
        fillOpacity: 0.7;
        strokeWeight: 1;
        strokeOpacity: 0.2;
        strokeColor: '#ddd';
    }, map: any): Promise<BMap.Polygon>;
    /**
     * fit - 根据数据fit适应的zoom上
     * @param map
     * @param points
     * @param config
     */
    fit(map: any, points: BMap.Point[], config: any): Promise<any>;
    /**
     * pixelToPoint - 像素坐标转换为经纬度坐标
     * @param map
     * @param pixel
     */
    pixelToPoint(map: any, pixel: {
        x: number;
        y: number;
    }): any;
    /**
     * pointToPixel - 经纬度坐标转换为像素坐标
     * @param map
     * @param point
     */
    pointToPixel(map: any, point: {
        lng: number;
        lat: number;
    }): any;
    /**
     * getViewBound 获取当前视图的矩形范围坐标(坐上 | 右下)
     * @param map
     * @return {
     *   leftTopLon
     *   leftTopLat
     *   rightBottomLon
     *   rightBottomLat
     * }
     */
    getBound(map: any): {
        leftTopLon: number;
        leftTopLat: number;
        rightBottomLon: number;
        rightBottomLat: number;
    };
    /**
     * getScale - 根据zoom获取比例尺
     * @param map
     * @return number
     */
    getScale(map: any): number;
    /**
     * getUnitPixelToM - 1px等于多少米(m)
     * @param zoom
     * @return number
     */
    getUnitPixelToM(zoom: any): number;
    /**
     * getArrowPoints - 获取三角形三个顶点值
     * @param from
     * @param to
     * @param scale
     * @param width
     * @param theta
     * @return {{A: {x: number, y: number}, B: {x: number, y: number}, C: {x: number, y: number}}}
     */
    getArrowPoints({ from, to, scale, width, theta }: {
        from: any;
        to: any;
        scale?: number | undefined;
        width?: number | undefined;
        theta?: number | undefined;
    }): {
        A: {
            x: number;
            y: number;
        };
        B: {
            x: number;
            y: number;
        };
        C: {
            x: number;
            y: number;
        };
    };
};
export default _default;
