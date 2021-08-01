// @ts-ignore
import MathUtil from '@baifendian/adhere-util/lib/math';

import { IStartData, IPoint, SelectType } from '../types';
import ModifyAction from './modifyAction';

/**
 * StartModifyAction
 * @class StartModifyAction
 * @classdesc - 五角星修改
 * @remark:
 */
class StartModifyAction extends ModifyAction {
  constructor(data: IStartData) {
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

    const { center, outRadius } = this?.data?.data?.data;

    // 顺时针，上，右，下，左
    const circleAnchorPoints: IPoint[] = [
      {
        x: center.x,
        y: center.y - outRadius,
      },
      {
        x: center.x + outRadius,
        y: center.y,
      },
      {
        x: center.x,
        y: center.y + outRadius,
      },
      {
        x: center.x - outRadius,
        y: center.y,
      },
    ];

    for (let i = 0; i < circleAnchorPoints.length; i++) {
      const point = circleAnchorPoints[i];

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

    ctx.beginPath();
    this.setAnchorStyle();
    ctx.ellipse(center.x, center.y, outRadius, outRadius, (45 * Math.PI) / 180, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
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

    const { center, outRadius } = this?.data?.data?.data;

    // 顺时针，上，右，下，左
    const circleAnchorPoints: IPoint[] = [
      {
        x: center.x,
        y: center.y - outRadius,
      },
      {
        x: center.x + outRadius,
        y: center.y,
      },
      {
        x: center.x,
        y: center.y + outRadius,
      },
      {
        x: center.x - outRadius,
        y: center.y,
      },
    ];

    for (let i = 0; i < circleAnchorPoints.length; i++) {
      const center = circleAnchorPoints[i];

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

    if (!context || !ctx || !this.data || !this.startPoint) return;

    // canvasHistory需要修改 需要修改半径
    const data = context.getHistoryDataById(this.data.data.id);

    if (!data) return;

    // 中心点和startPoint的距离就是半径
    const { center } = data.data;

    // 两点间距离(圆的中心点和targetPoint)之间的距离
    data.data.outRadius = MathUtil.getDistanceByBetweenPoint({ p1: center, p2: targetPoint });
    data.data.innerRadius = data.data.outRadius / 2;

    context.clearDraw();

    context.drawHistoryData();

    this.drawAnchors();
  }

  /**
   * getSelectType
   */
  protected getSelectType(): SelectType {
    return SelectType.Start;
  }
}

export default StartModifyAction;
