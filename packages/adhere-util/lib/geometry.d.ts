import { IPoint } from './types';
declare const _default: {
    /**
     * 绘制星
     * @param config
     * @return IPoint []
     */
    getDrawStartPath(config: {
        startCount: number;
        center: IPoint;
        outRadius: number;
        innerRadius: number;
    }): IPoint[];
};
/**
 * 集合图形绘制
 */
export default _default;
