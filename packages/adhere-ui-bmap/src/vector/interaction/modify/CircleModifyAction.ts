import MathUtil from '@baifendian/adhere-util';

import defaultMoveGemStyle from '../DefaultMoveGemStyle';
import CircleDrawAction from '../draw/CircleDrawAction';
import { ICircleData, IInteractionLayer, IPoint, SelectType } from '../types';
import ModifyAction from './ModifyAction';

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
    // TODO: 修改1
    if (!this.context) return;

    const ctx = this.context.getCtx();

    if (!ctx) return;

    const { center, radius } = CircleDrawAction.transformOriginToReal(
      this.context,
      this?.data?.data?.data,
    );

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
    // TODO: 修改2
    if (!this.data) return null;

    let point: IPoint | null = null;
    let index: number = -1;

    const { center, radius } = CircleDrawAction.transformOriginToReal(
      this.context as IInteractionLayer,
      this?.data?.data?.data,
    );

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
   * @param targetPixel
   */
  protected drawModify(targetPixel: IPoint) {
    // TODO: 修改3

    const { context } = this;

    const ctx = context?.getCtx();

    if (!context || !ctx || !this.data || !this.startPoint) return;

    // canvasHistory需要修改 需要修改半径
    const data = context.getHistoryDataById(this.data.data.id);

    if (!data) return;

    // 中心点和startPoint的距离就是半径
    const { center } = data.data;

    // 原始值
    // 坐标
    // 实际距离

    // @ts-ignore
    const centerPixel = context.pointToPixel(center);

    // 两点间距离(圆的中心点和targetPoint)之间的距离
    data.data.radius = context.distanceToActual(
      MathUtil.getDistanceByBetweenPoint({ p1: centerPixel, p2: targetPixel }),
    );

    this.data.data = {
      ...data,
    };

    context.clearDraw();

    context.drawHistoryData();

    this.drawAnchors();
  }

  /**
   * drawMove
   * @param startPixel
   * @param targetPixel
   */
  protected drawMove(startPixel: IPoint, targetPixel: IPoint): void {
    // TODO: 修改4
    const { context } = this;

    const ctx = context?.getCtx();

    if (!context || !ctx || !this.data) return;

    const data = context.getHistoryDataById(this.data.data.id);

    if (!data) return;

    const startPoint = context.pixelToPoint(startPixel);
    const targetPoint = context.pixelToPoint(targetPixel);

    const offsetX = targetPoint.x - startPoint.x;
    const offsetY = targetPoint.y - startPoint.y;

    data.data.center.x += offsetX;
    data.data.center.y += offsetY;

    this.data.data = {
      ...data,
    };

    context.clearDraw();

    context.drawHistoryData();

    this.drawAnchors();
  }

  /**
   * getSelectType
   */
  getSelectType(): SelectType {
    return SelectType.Circle;
  }

  /**
   * isCanMove
   * @param targetPixel
   */
  isCanMove(targetPixel: IPoint): boolean {
    // TODO: 修改5
    if (!this.data) return false;

    const { center, radius } = this?.data?.data?.data;

    const inCircle = MathUtil.isPointInCircle(
      targetPixel,
      CircleDrawAction.transformOriginToReal(this.context as IInteractionLayer, {
        center,
        radius,
      }),
    );

    return inCircle && !this.getPointInAnchor(targetPixel);
  }

  /**
   * drawMoveGeometry
   * @description 绘制移动时的几何图形
   */
  // @ts-ignore
  drawMoveGeometry(): void {
    if (!this.context || !this.data) return;

    CircleDrawAction.draw(
      this.context,
      this.context.getAssistCtx() as CanvasRenderingContext2D,
      this.data as ICircleData,
    );
  }

  /**
   * drawMoveGeometry
   * @description 绘制移动时的几何图形
   * @param startPixel
   * @param targetPixel
   */
  // @ts-ignore
  drawMoveGeometry(startPixel: IPoint, targetPixel: IPoint): void {
    // TODO: 修改6
    if (!this.context || !this.data || !startPixel || !targetPixel) return;

    const srcData = { ...(this.data.data as ICircleData) };

    srcData.data = {
      ...srcData.data,
      center: {
        ...srcData.data.center,
      },
    };

    const startPoint = this.context.pixelToPoint(startPixel);
    const targetPoint = this.context.pixelToPoint(targetPixel);

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

      CircleDrawAction.draw(
        this.context,
        this.context.getAssistCtx() as CanvasRenderingContext2D,
        srcData,
      );
    }
  }

  setCursor(): void {}
}

export default CircleModifyAction;
