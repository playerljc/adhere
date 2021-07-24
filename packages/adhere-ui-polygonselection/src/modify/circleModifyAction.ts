// @ts-ignore
import MathUtil from '@baifendian/adhere-util/lib/math';

import { ICircleData, IPoint, SelectType } from '../types';
import ModifyAction from './modifyAction';

/**
 * CircleModifyAction
 * @class CircleModifyAction
 * @classdesc - 圆形修改
 * @remark:
 */
class CircleModifyAction extends ModifyAction {
  constructor(data: ICircleData) {
    super(data);
  }

  /**
   * drawAnchors
   * circle有4个anchor，上，下，左，右
   */
  protected drawAnchors(): void {
    if (!this.context) return;

    const ctx = this.context.getCtx();

    if (!ctx) return;

    const { center, radius } = this?.data?.data;

    // 顺时针，上，右，下，左
    const circleAnchorPoints: IPoint[] = [
      {
        x: center.x,
        y: center.y - radius,
      },
      {
        x: center.x + radius,
        y: center.y,
      },
      {
        x: center.x,
        y: center.y + radius,
      },
      {
        x: center.x - radius,
        y: center.y,
      },
    ];

    ctx.beginPath();

    this.setAnchorStyle();

    for (let i = 0; i < circleAnchorPoints.length; i++) {
      const point = circleAnchorPoints[i];

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

    const { center, radius } = this?.data?.data;

    // 顺时针，上，右，下，左
    const circleAnchorPoints: IPoint[] = [
      {
        x: center.x,
        y: center.y - radius,
      },
      {
        x: center.x + radius,
        y: center.y,
      },
      {
        x: center.x,
        y: center.y + radius,
      },
      {
        x: center.x - radius,
        y: center.y,
      },
    ];

    for (let i = 0; i < circleAnchorPoints.length; i++) {
      const center = circleAnchorPoints[i];

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

    // canvasHistory需要修改 需要修改半径
    const data = context.getHistoryDataById(this.data.id);

    if (data) {
      // 中心点和startPoint的距离就是半径
      const { center } = data.data;

      data.data.radius = MathUtil.getDistanceByBetweenPoint({ p1: center, p2: this.startPoint });
    }

    context.clear();

    context.drawHistoryData();

    this.drawAnchors();
  }

  /**
   * getSelectType
   */
  protected getSelectType(): SelectType {
    return SelectType.Circle;
  }
}

export default CircleModifyAction;
