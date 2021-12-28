import * as turf from '@turf/turf';
// @ts-ignore
import MathUtil from '@baifendian/adhere-util';

import { IStartData, IPoint, SelectType, IInteractionLayer } from '../types';
import ModifyAction from './ModifyAction';
import StartDrawAction from '../draw/StartDrawAction';
import defaultMoveGemStyle from '../DefaultMoveGemStyle';

/**
 * StartModifyAction
 * @class StartModifyAction
 * @classdesc - 五角星修改
 * @remark:
 */
class StartModifyAction extends ModifyAction {
  protected ResizeCursorMapping = new Map<number, string>([
    [0, 'ns-resize'],
    [1, 'ew-resize'],
    [2, 'ns-resize'],
    [3, 'ew-resize'],
  ]);

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

    const { center, outRadius } = StartDrawAction.transformOriginToReal(
      this.context,
      this?.data?.data?.data,
    );

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

    ctx.beginPath();
    this.setAnchorLineStyle();
    ctx.ellipse(center.x, center.y, outRadius, outRadius, (45 * Math.PI) / 180, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.stroke();
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

    const { center, outRadius } = StartDrawAction.transformOriginToReal(
      this.context as IInteractionLayer,
      this?.data?.data?.data,
    );

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
   * setResizeCursorByIndex
   * @param index
   */
  protected setResizeCursorByIndex(index: number): void {
    if (!this.context) return;

    const canvasEl = this.context.getCanvasEl();

    const assistCanvasEl = this.context.getAssistCanvasEl();

    if (!canvasEl || !assistCanvasEl) return;

    const cursor = this.ResizeCursorMapping.get(index) as string;

    canvasEl.style.cursor = assistCanvasEl.style.cursor = cursor;
  }

  /**
   * drawModify
   * @param targetPixel
   */
  protected drawModify(targetPixel: IPoint) {
    const { context } = this;

    const ctx = context?.getCtx();

    if (!context || !ctx || !this.data || !this.startPoint) return;

    // canvasHistory需要修改 需要修改半径
    const data = context.getHistoryDataById(this.data.data.id);

    if (!data) return;

    // 中心点和startPoint的距离就是半径
    const { center } = data.data;

    const centerPixel = context.pointToPixel(center);

    // 两点间距离(圆的中心点和targetPoint)之间的距离
    data.data.outRadius = context.distanceToActual(
      MathUtil.getDistanceByBetweenPoint({ p1: centerPixel, p2: targetPixel }),
    );
    data.data.innerRadius = data.data.outRadius / 2;

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
  protected getSelectType(): SelectType {
    return SelectType.Start;
  }

  /**
   * isCanMove
   * @param targetPoint
   */
  isCanMove(targetPoint: IPoint): boolean {
    if (!this.data) return false;

    const {
      // 圆的中心点
      center,
      // 外半径
      outRadius,
      // 内半径(外半径的一半)
      innerRadius,
    } = StartDrawAction.transformOriginToReal(
      this.context as IInteractionLayer,
      this?.data?.data?.data,
    );

    const pt = turf.point([targetPoint.x, targetPoint.y]);

    const startCount = 5;
    const spend = 360 / startCount;
    const min = 90 - spend;
    const max = spend - min;

    const points: IPoint[] = [];

    for (let i = 0; i < startCount; i++) {
      points.push({
        x: Math.cos(((min + i * spend) / 180) * Math.PI) * outRadius + center.x,
        y: -Math.sin(((min + i * spend) / 180) * Math.PI) * outRadius + center.y,
      });

      points.push({
        x: Math.cos(((max + i * spend) / 180) * Math.PI) * innerRadius + center.x,
        y: -Math.sin(((max + i * spend) / 180) * Math.PI) * innerRadius + center.y,
      });
    }

    const polygon = points.map((point) => [point.x, point.y]);
    polygon.push(polygon[0]);
    const poly = turf.polygon([polygon]);

    return turf.booleanPointInPolygon(pt, poly) && !this.getPointInAnchor(targetPoint);
  }

  /**
   * drawMoveGeometry
   * @description 绘制移动时的几何图形
   */
  // @ts-ignore
  drawMoveGeometry(): void {
    if (!this.context || !this.data) return;

    StartDrawAction.draw(
      this.context,
      this.context.getAssistCtx() as CanvasRenderingContext2D,
      this.data as IStartData,
    );
  }

  /**
   * drawMoveGeometry
   * @description 绘制移动时的几何图形
   * @param startPixel
   * @param targetPixel
   */
  // @ts-ignore
  drawMoveGeometry(startPixel?: IPoint, targetPixel?: IPoint): void {
    if (!this.context || !this.data || !startPixel || !targetPixel) return;

    const srcData = { ...(this.data.data as IStartData) };
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

      StartDrawAction.draw(
        this.context,
        this.context.getAssistCtx() as CanvasRenderingContext2D,
        srcData,
      );
    }
  }
}

export default StartModifyAction;
