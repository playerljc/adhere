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
  protected startIndex: number = -1;

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

    const data: IPoint[] = this?.data?.data?.data || [];

    for (let i = 0; i < data.length; i++) {
      const point = data[i];

      ctx.beginPath();

      this.setAnchorStyle();

      ctx.ellipse(
        point.x,
        point.y,
        this.anchorRadius,
        this.anchorRadius,
        (45 * Math.PI) / 180,
        0,
        2 * Math.PI,
      );

      ctx.stroke();

      ctx.fill();
    }
  }

  /**
   * getPointInAnchor
   * @param targetPoint
   * @return IPoint | null
   */
  protected getPointInAnchor(targetPoint: IPoint): { point: IPoint; index: number } | null {
    if (!this.data) return null;

    let point: IPoint | null = null;
    let index: number = -1;

    const {
      data: { data },
    } = this.data;

    for (let i = 0; i < data.length; i++) {
      const center = data[i];

      const radius = this.anchorRadius + this.anchorLineWidth;

      if (MathUtil.isPointInCircle(targetPoint, { center, radius })) {
        point = center;
        index = i;
        break;
      }
    }

    if (point && index !== -1) {
      return {
        point,
        index,
      };
    }

    return null;
  }

  /**
   * draw
   * @param targetPoint
   */
  protected draw(targetPoint: IPoint) {
    const { context } = this;

    const ctx = context?.getCtx();

    if (!context || !ctx || !this.data || !this.startPoint || this.startIndex === -1) return;

    // canvasHistory需要修改.this.startPoint那个点去找到，替换成targetPoint的值
    const data = context.getHistoryDataById(this.data.data.id);

    if (!data) return;

    data.data[this.startIndex] = targetPoint;

    context.clearDraw();

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
