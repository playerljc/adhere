import MathUtil from '@baifendian/adhere-util';

import { ICircleData, IPoint, SelectType } from '../types';
import ModifyAction from './ModifyAction';
import CircleDrawAction from '../draw/CircleDrawAction';
import defaultMoveGemStyle from '../defaultMoveGemStyle';

/**
 * CircleModifyAction
 * @class CircleModifyAction
 * @classdesc - 圆形修改
 * @remark:
 */
class CircleModifyAction extends ModifyAction {
  protected ResizeCursorMapping = new Map<number, string>([
    [0, 'ns-resize'],
    [1, 'ew-resize'],
    [2, 'ns-resize'],
    [3, 'ew-resize'],
  ]);

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

    const { center, radius } = this?.data?.data?.data;

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
      const point = circleAnchorPoints[i];

      ctx.beginPath();

      this.setAnchorCircleStyle();

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

    const { center, radius } = this?.data?.data?.data;

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
   * setResizeCursorByIndex
   * @param index
   */
  protected setResizeCursorByIndex(index: number): void {
    if (!this.context) return;

    const canvasEl = this.context.getCanvasEl();

    const assistCanvasEl = this.context.getAssistCanvasEl();

    if (!canvasEl || !assistCanvasEl) return;

    canvasEl.style.cursor = assistCanvasEl.style.cursor = this.ResizeCursorMapping.get(
      index,
    ) as string;
  }

  /**
   * drawModify
   * @param targetPoint
   */
  protected drawModify(targetPoint: IPoint) {
    const { context } = this;

    const ctx = context?.getCtx();

    if (!context || !ctx || !this.data || !this.startPoint) return;

    // canvasHistory需要修改 需要修改半径
    const data = context.getHistoryDataById(this.data.data.id);

    if (!data) return;

    // 中心点和startPoint的距离就是半径
    const { center } = data.data;

    // 两点间距离(圆的中心点和targetPoint)之间的距离
    data.data.radius = MathUtil.getDistanceByBetweenPoint({ p1: center, p2: targetPoint });

    this.data.data = data;

    context.clearDraw();

    context.drawHistoryData();

    this.drawAnchors();
  }

  /**
   * drawMove
   * @param startPoint
   * @param targetPoint
   */
  protected drawMove(startPoint: IPoint, targetPoint: IPoint): void {
    const { context } = this;

    const ctx = context?.getCtx();

    if (!context || !ctx || !this.data) return;

    const data = context.getHistoryDataById(this.data.data.id);

    if (!data) return;

    const offsetX = targetPoint.x - startPoint.x;
    const offsetY = targetPoint.y - startPoint.y;

    data.data.center.x += offsetX;
    data.data.center.y += offsetY;

    this.data.data = data;

    context.clearDraw();

    context.drawHistoryData();

    this.drawAnchors();
  }

  /**
   * getSelectType
   */
  protected getSelectType(): SelectType {
    return SelectType.Circle;
  }

  /**
   * isCanMove
   * @param targetPoint
   */
  isCanMove(targetPoint: IPoint): boolean {
    if (!this.data) return false;

    const { center, radius } = this?.data?.data?.data;

    return (
      MathUtil.isPointInCircle(targetPoint, { center, radius }) &&
      !this.getPointInAnchor(targetPoint)
    );
  }

  /**
   * drawMoveGeometry
   * @description 绘制移动时的几何图形
   */
  // @ts-ignore
  drawMoveGeometry(): void {
    if (!this.context || !this.data) return;

    CircleDrawAction.draw(
      this.context.getAssistCtx() as CanvasRenderingContext2D,
      this.data as ICircleData,
    );
  }

  /**
   * drawMoveGeometry
   * @description 绘制移动时的几何图形
   * @param startPoint
   * @param targetPoint
   */
  // @ts-ignore
  drawMoveGeometry(startPoint: IPoint, targetPoint: IPoint): void {
    if (!this.context || !this.data || !startPoint || !targetPoint) return;

    const srcData = { ...(this.data.data as ICircleData) };
    srcData.data = {
      ...srcData.data,
      center: {
        ...srcData.data.center,
      },
    };

    const offsetX = targetPoint.x - startPoint.x;
    const offsetY = targetPoint.y - startPoint.y;

    if (srcData.data && srcData.data.center) {
      srcData.data.center.x += offsetX;
      srcData.data.center.y += offsetY;

      if (srcData.style) {
        srcData.style.globalAlpha = defaultMoveGemStyle.globalAlpha;
        srcData.style.strokeStyle = defaultMoveGemStyle.strokeStyle;
        srcData.style.lineWidth = defaultMoveGemStyle.lineWidth;
        srcData.style.lineDash = defaultMoveGemStyle.lineDash;
        srcData.style.lineDashOffset = defaultMoveGemStyle.lineDashOffset;
      }

      CircleDrawAction.draw(this.context.getAssistCtx() as CanvasRenderingContext2D, srcData);
    }
  }
}

export default CircleModifyAction;
