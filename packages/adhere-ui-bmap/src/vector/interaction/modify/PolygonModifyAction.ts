import MathUtil from '@baifendian/adhere-util';
import * as turf from '@turf/turf';

import defaultMoveGemStyle from '../DefaultMoveGemStyle';
import PolygonDrawAction from '../draw/PolygonDrawAction';
import { IInteractionLayer, IPoint, IPolygonData, SelectType } from '../types';
import ModifyAction from './ModifyAction';

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

    const data: IPoint[] = PolygonDrawAction.transformOriginToReal(
      this.context,
      this?.data?.data?.data || [],
    );

    for (let i = 0; i < data.length; i++) {
      const point = data[i];

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

    const data = PolygonDrawAction.transformOriginToReal(
      this.context as IInteractionLayer,
      this.data.data.data,
    );

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
   * setResizeCursorByIndex
   * @param index
   */
  protected setResizeCursorByIndex(index: number): void {
    if (!this.context) return;

    const canvasEl = this.context.getCanvasEl();

    const assistCanvasEl = this.context.getAssistCanvasEl();

    if (!canvasEl || !assistCanvasEl) return;

    canvasEl.style.cursor = assistCanvasEl.style.cursor = 'nesw-resize';
  }

  /**
   * drawModify
   * @param targetPixel
   */
  protected drawModify(targetPixel: IPoint) {
    const { context } = this;

    const ctx = context?.getCtx();

    if (!context || !ctx || !this.data || !this.startPoint || this.startIndex === -1) return;

    // canvasHistory需要修改.this.startPoint那个点去找到，替换成targetPoint的值
    const data = context.getHistoryDataById(this.data.data.id);

    if (!data) return;

    data.data[this.startIndex] = context.pixelToPoint(targetPixel);

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

    data.data.forEach((point: IPoint) => {
      point.x += offsetX;
      point.y += offsetY;
    });

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
    return SelectType.Polygon;
  }

  isCanMove(targetPoint: IPoint): boolean {
    if (!this.data) return false;

    const points = PolygonDrawAction.transformOriginToReal(this.context as IInteractionLayer, [
      ...this?.data?.data?.data,
    ]);
    points.push(points[0]);

    const pt = turf.point([targetPoint.x, targetPoint.y]);
    const poly = turf.polygon([points.map((point) => [point.x, point.y])]);

    return turf.booleanPointInPolygon(pt, poly) && !this.getPointInAnchor(targetPoint);
  }

  /**
   * drawMoveGeometry
   * @description 绘制移动时的几何图形
   */
  // @ts-ignore
  drawMoveGeometry(): void {
    if (!this.context || !this.data) return;

    PolygonDrawAction.draw(
      this.context,
      this.context.getAssistCtx() as CanvasRenderingContext2D,
      this.data as IPolygonData,
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

    const srcData = { ...(this.data.data as IPolygonData) };
    srcData.data = srcData.data.map((point) => ({ ...point }));

    const startPoint = this.context.pixelToPoint(startPixel);
    const targetPoint = this.context.pixelToPoint(targetPixel);

    const offsetX = targetPoint.x - startPoint.x;
    const offsetY = targetPoint.y - startPoint.y;

    if (srcData.data && srcData.data.length) {
      srcData.data.forEach((point: IPoint) => {
        point.x += offsetX;
        point.y += offsetY;
      });

      if (srcData.style) {
        srcData.style.globalAlpha = defaultMoveGemStyle.globalAlpha;
        srcData.style.strokeStyle = defaultMoveGemStyle.strokeStyle;
        srcData.style.lineWidth = defaultMoveGemStyle.lineWidth;
        srcData.style.lineDash = defaultMoveGemStyle.lineDash;
        srcData.style.lineDashOffset = defaultMoveGemStyle.lineDashOffset;
      }

      PolygonDrawAction.draw(
        this.context,
        this.context.getAssistCtx() as CanvasRenderingContext2D,
        srcData,
      );
    }
  }

  setCursor(): void {}
}

export default PolygonModifyAction;
