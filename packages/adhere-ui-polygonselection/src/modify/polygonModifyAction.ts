import MathUtil from '@baifendian/adhere-util/lib/math';

import { IPoint, IPolygonData, SelectType } from '../types';
import ModifyAction from './modifyAction';

/**
 * PolygonModifyAction
 * @class PolygonModifyAction
 * @classdesc - 多边形修改
 * @remark:
 */
class PolygonModifyAction extends ModifyAction {
  constructor(data: IPolygonData) {
    super(data);
  }

  /**
   * drawAnchors
   */
  protected drawAnchors(): void {
    if (!this.context) return;

    const ctx = this.context.getCtx();

    if (!ctx) return;

    const data: IPoint[] = this?.data?.data || [];

    ctx.beginPath();

    this.setAnchorStyle();

    for (let i = 0; i < data.length; i++) {
      const point = data[i];

      ctx.ellipse(
        point.x,
        point.y,
        this.anchorRadius,
        this.anchorRadius,
        (45 * Math.PI) / 180,
        0,
        2 * Math.PI,
      );
    }

    ctx.stroke();

    ctx.fill();
  }

  /**
   * getPointInAnchor
   * @param targetPoint
   * @return IPoint | null
   */
  protected getPointInAnchor(targetPoint: IPoint): IPoint | null {
    if (!this.data) return null;

    let result: IPoint | null = null;

    for (let i = 0; i < this.data.data.length; i++) {
      const center = this.data.data[i];

      const radius = this.anchorRadius + this.anchorLineWidth;

      if (MathUtil.isPointInCircle(targetPoint, { center, radius })) {
        result = center;
        break;
      }
    }

    return result;
  }

  /**
   * draw
   * @param targetPoint
   */
  protected draw(targetPoint: IPoint) {
    const { context } = this;

    const ctx = context?.getCtx();

    if (!context || !ctx || !this.data || !this.startPoint) return;

    // canvasHistory需要修改.this.startPoint那个点去找到，替换成targetPoint的值
    const data = context.getHistoryDataById(this.data.id);

    if (data) {
      const index = data.data.findIndex(
        (t) => t.x === this?.startPoint?.x && t.y === this?.startPoint?.y,
      );

      index !== -1 && (data.data[index] = targetPoint);
    }

    context.clear();

    context.drawHistoryData();

    this.drawAnchors();
  }

  /**
   * getSelectType
   */
  protected getSelectType(): SelectType {
    return SelectType.Polygon;
  }
}

export default PolygonModifyAction;
