import MathUtil from '@baifendian/adhere-util';
import * as turf from '@turf/turf';

import PolygonDrawAction from '../draw/PolygonDrawAction';
import { IPoint, IPolygonData, SelectType } from '../types';
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

    const data: IPoint[] = this?.data?.data?.data || [];

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

      ctx.closePath();
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
   * @param targetPoint
   */
  protected drawModify(targetPoint: IPoint) {
    const { context } = this;

    const ctx = context?.getCtx();

    if (!context || !ctx || !this.data || !this.startPoint || this.startIndex === -1) return;

    // canvasHistory需要修改.this.startPoint那个点去找到，替换成targetPoint的值
    const data = context.getHistoryDataById(this.data.data.id);

    if (!data) return;

    data.data[this.startIndex] = targetPoint;

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

    data.data.forEach((point: IPoint) => {
      point.x += offsetX;
      point.y += offsetY;
    });

    this.data.data = data;

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

  isCanMove(targetPoint: IPoint): boolean {
    if (!this.data) return false;

    const points = [...this?.data?.data?.data];
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
      this.context.getAssistCtx() as CanvasRenderingContext2D,
      this.data as IPolygonData,
    );
  }

  /**
   * drawMoveGeometry
   * @description 绘制移动时的几何图形
   * @param startPoint
   * @param targetPoint
   */
  // @ts-ignore
  drawMoveGeometry(startPoint?: IPoint, targetPoint?: IPoint): IPolygonData | null {
    if (!this.context || !this.data || !startPoint || !targetPoint) return null;

    const srcData = JSON.parse(JSON.stringify(this.data.data as IPolygonData));
    srcData.data = srcData.data.map((point) => ({ ...point }));

    const offsetX = targetPoint.x - startPoint.x;
    const offsetY = targetPoint.y - startPoint.y;

    if (srcData.data && srcData.data.length) {
      srcData.data.forEach((point: IPoint) => {
        point.x += offsetX;
        point.y += offsetY;
      });

      const style = { ...this.moveGemStyle, ...(srcData.style || {}) };
      srcData.style.lineWidth = style.lineWidth;
      srcData.style.lineJoin = style.lineJoin;
      srcData.style.lineCap = style.lineCap;
      srcData.lineDash = style.lineDash;
      srcData.style.lineDashOffset = style.lineDashOffset;
      srcData.style.strokeStyle = style.strokeStyle;
      srcData.style.fillStyle = style.fillStyle;
      srcData.style.globalAlpha = style.globalAlpha ?? 1;

      PolygonDrawAction.draw(this.context.getAssistCtx() as CanvasRenderingContext2D, srcData);
    }

    return srcData;
  }
}

export default PolygonModifyAction;
