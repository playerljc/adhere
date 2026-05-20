import { IPoint } from './types';
declare const _default: {
    /**
     * getRectLeftTopPoint - 获取矩形左上角坐标
     * @param startPoint
     * @param targetPoint
     * @return IPoint
     */
    getRectLeftTopPoint({ startPoint, targetPoint }: {
        startPoint: any;
        targetPoint: any;
    }): IPoint | null;
    /**
     * triangle - 获取三角形三个点坐标
     * @param startPoint
     * @param targetPoint
     * @return IPoint[]
     */
    triangle({ startPoint, targetPoint }: {
        startPoint: any;
        targetPoint: any;
    }): IPoint[];
};
export default _default;
