declare const _default: {
    /**--------------------------math-start----------------------**/
    /**
     * toPoint - 百分数转化为小数
     * @param percent
     */
    toPoint(percent: string): number;
    /**
     * point - 小数转化为百分数
     * @param point
     */
    toPercent(point: any): string;
    /**
     * straightLineIntersection - 计算两个直线的交点
     * @param p1
     * @param p2
     * @param p3
     * @param p4
     */
    straightLineIntersection(p1: {
        x: number;
        y: number;
    }, p2: {
        x: number;
        y: number;
    }, p3: {
        x: number;
        y: number;
    }, p4: {
        x: number;
        y: number;
    }): {
        x: number;
        y: number;
    };
    /**
     * getA3Piint - 计算两点p1,p2 距离p1点distance距离的点p3的坐标
     * @param {Point} - p1
     * @param {Point} - p2
     * @param {Number} - distance 与p1的距离
     * @return {{x: *, y: *}}
     */
    getA3Point({ p1, p2, distance }: {
        p1: any;
        p2: any;
        distance: any;
    }): {
        x: number;
        y: number;
    };
    /**
     * getDistanceByBetweenPoint - 获取p1,p2两点间的距离
     * @param {Point} - p1
     * @param {Point} - p2
     * @return {number}
     */
    getDistanceByBetweenPoint({ p1, p2 }: {
        p1: any;
        p2: any;
    }): number;
    /**
     * clientToCtxPoint - 屏幕坐标转换成画布坐标
     * @param {Event} - event
     * @param {HTMLCanvasElement} - el
     * @return {x:number,y:number}
     */
    clientToCtxPoint({ event, el }: {
        event: any;
        el: any;
    }): {
        x: number;
        y: number;
    };
};
export default _default;
