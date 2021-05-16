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
};
export default _default;
